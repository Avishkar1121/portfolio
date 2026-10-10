import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { contacts, profile } from "../data/portfolio";
import { Reveal, SectionHeading } from "./shared";

export default function Contact() {
  return (
    <section id="contact" className="bg-card/40 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Let's talk" title="Contact Me" />

        <div className="grid sm:grid-cols-2 gap-5">
          {contacts.map(({ label, value, href, Icon, color, external }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <motion.a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="block"
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-card/60 hover:border-primary/50 hover:bg-accent/40 transition-colors">
                  <CardContent className="flex items-center gap-4 p-5">
                    <span className={`grid h-12 w-12 place-items-center rounded-lg bg-secondary text-2xl ${color}`}>
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate">{value}</span>
                    </span>
                  </CardContent>
                </Card>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-16">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, shadcn/ui & Framer Motion.
        </p>
      </div>
    </section>
  );
}