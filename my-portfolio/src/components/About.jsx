import { motion } from "framer-motion";
import profilePic from "../assets/Avishkar.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { profile, skills, stats } from "../data/portfolio";
import { Reveal, SectionHeading } from "./shared";

export default function About() {
  return (
    <section id="about" className="bg-card/40 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Who I am" title="About Me" />

        <Card className="bg-card/60 backdrop-blur shadow-2xl">
          <CardContent className="grid md:grid-cols-[auto,1fr] gap-12 items-center p-8 md:p-12">
            <Reveal className="mx-auto">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 blur-md opacity-70" />
                <motion.img
                  src={profilePic}
                  alt={profile.name}
                  className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-background"
                  whileHover={{ scale: 1.04, rotate: 2 }}
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {profile.about}
                </p>
              </Reveal>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.1}>
                    <Card className="bg-background/60 text-center">
                      <CardContent className="p-4">
                        <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ y: -3, scale: 1.06 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}