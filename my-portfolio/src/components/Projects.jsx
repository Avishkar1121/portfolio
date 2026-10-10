import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "../data/portfolio";
import { Reveal, SectionHeading } from "./shared";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.15} className="h-full">
      <motion.div
        className="group h-full rounded-xl p-[1px] bg-gradient-to-br from-primary/60 via-border to-purple-500/60"
        whileHover={{ y: -8 }}
      >
        <Card className="flex h-full flex-col border-0 shadow-none">
          <CardHeader>
            <FaGithub className="text-3xl text-muted-foreground group-hover:text-primary transition-colors mb-2" />
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="leading-relaxed pt-1">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardContent>

          <CardFooter>
            <Button asChild variant="link" className="px-0">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="What I've built" title="Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}