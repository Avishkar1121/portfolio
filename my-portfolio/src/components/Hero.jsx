import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "../data/portfolio";
import { useTyping } from "./shared";

const blobs = [
  "top-10 -left-20 h-96 w-96 bg-orange-500/30",
  "bottom-0 right-0 h-[28rem] w-[28rem] bg-pink-600/25",
  "top-1/3 left-1/2 h-72 w-72 bg-indigo-500/25",
];

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-background"
    >
      {blobs.map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${cls}`}
          animate={{ x: [0, 40, -30, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 14 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_75%)]" />

      <div className="relative z-10">
        

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-muted-foreground h-10 mb-10 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {typed}
          <span className="animate-pulse text-primary">|</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/30">
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 text-muted-foreground text-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        ↓ Scroll
      </motion.a>
    </section>
  );
}