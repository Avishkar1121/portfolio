import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "../data/portfolio";
import { Reveal, SectionHeading } from "./shared";

export default function Education() {
  return (
    <section id="education" className="bg-card/40 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="My journey" title="Education" />

        <div className="relative border-l-2 border-primary/40 pl-8 space-y-10">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.15}>
              <Card className="relative bg-card/60 hover:border-primary/50 transition-colors">
                <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <CardHeader>
                  <Badge variant="outline" className="w-fit border-primary/40 text-primary">
                    {item.period}
                  </Badge>
                  <CardTitle className="text-xl pt-2">{item.title}</CardTitle>
                  <CardDescription className="text-sky-400">{item.school}</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  {item.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}