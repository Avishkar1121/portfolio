import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "./shared";

const ids = navLinks.map((l) => l.toLowerCase());

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-background/60 border-b">
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-primary to-pink-500"
      />
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="text-xl font-bold">
          A<span className="text-primary">.</span>G
        </a>

        <ul className="hidden md:flex gap-1">
          {ids.map((id, i) => (
            <li key={id}>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className={active === id ? "text-primary bg-primary/10" : "text-muted-foreground"}
              >
                <a href={`#${id}`}>{navLinks[i]}</a>
              </Button>
            </li>
          ))}
        </ul>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </Button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-1 pb-4">
          {ids.map((id, i) => (
            <li key={id}>
              <Button asChild variant="ghost" onClick={() => setOpen(false)}>
                <a href={`#${id}`}>{navLinks[i]}</a>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}