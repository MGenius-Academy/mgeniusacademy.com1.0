import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Advanced Tech Competitions & Applied Innovation",
  description:
    "End-to-end project mentoring for prestigious competitions including Invention Convention Worldwide (ICW) and the NeuroMaker Creative Challenge.",
};

const programs = [
  {
    name: "ICW: Global Inventor Annual Program",
    requirement: "EP3 completed or G7+ (Selected, Required)",
    image: "/images/ai-programs-boston/ICW.jpg",
    description:
      "An elite invention journey for young innovators. From real-world problem discovery to global competition presentation, this program develops ideas into inventions with true impact.",
    detailHref:
      "/curriculum/advanced-tech-competitions/icw-innovation-program-boston",
  },
  {
    name: "NeuroMaker Creative Challenge",
    image: "/images/curriculum_advanced_tech/NeuroMaker.png",
    description:
      "The NeuroMaker Creative Challenge is an open and free annual design competition in which students choose a socially conscious engineering problem to engage with.",
    href: "https://www.neuromakerstem.com/neuromaker-challenge",
  },
];

export default function AdvancedTechCompetitionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Advanced Tech Competitions"
        title="Advanced Tech Competitions & Applied Innovation"
        description="MGA offers end-to-end project mentoring for prestigious competitions, guiding students from original ideas to global invention and design showcases."
      />

      <section className="py-16">
        <Container>
          <div className="mt-0 grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <Card
                key={program.name}
                className="h-full gap-4 overflow-hidden py-0 transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-6 pb-6">
                  {program.requirement ? (
                    <Badge variant="secondary" className="w-fit">
                      {program.requirement}
                    </Badge>
                  ) : null}
                  <h3 className="text-lg font-semibold">{program.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {program.description}
                  </p>
                  {program.detailHref ? (
                    <Button
                      size="sm"
                      className="mt-auto w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                      render={<Link href={program.detailHref} />}
                    >
                      View Details
                    </Button>
                  ) : null}
                  {program.href ? (
                    <Button
                      size="sm"
                      className="mt-auto w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                      render={
                        <a
                          href={program.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      Learn More
                    </Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Compete?"
        description="Book a free trial class and talk to our team about which competition track fits your child."
      />
    </>
  );
}
