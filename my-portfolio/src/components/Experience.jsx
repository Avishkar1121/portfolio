import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "../data/portfolio";
import { Reveal, SectionHeading } from "./shared";

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="relative border-l-2 border-primary/40 pl-8 space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 0.15}>
              <motion.div whileHover={{ y: -4 }}>
                <Card className="relative bg-card/60 hover:border-primary/50 transition-colors">
                  <span className="absolute -left-[41px] top-9 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

                  <CardHeader className="flex-row flex-wrap items-start justify-between gap-2 space-y-0">
                    <div className="space-y-1.5">
                      <CardTitle className="text-xl md:text-2xl">{job.role}</CardTitle>
                      <CardDescription className="text-sky-400 text-base">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge className="bg-primary/15 text-primary hover:bg-primary/15 shadow-none">
                      {job.period}
                    </Badge>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}