import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "AI & Innovation Programs",
  description:
    "Elite AI, invention, and entrepreneurship programs for advanced K-8 students in Newton, MA and the Greater Boston area.",
};

const programs = [
  {
    name: "ICW: Global Inventor Annual Program",
    requirement: "EP3 completed or G7+ (Selected, Required)",
    image: "/images/ai-programs-boston/ICW.jpg",
    description:
      "An elite invention journey for young innovators. From real-world problem discovery to global competition presentation, this program develops ideas into inventions with true impact.",
  },
  {
    name: "AI Chatbot: The Chief AI Entrepreneur Program",
    requirement: "EP5 completed or G6+ (Selected, Required)",
    image: "/images/ai-programs-boston/AI-Chatbot.jpg",
    description:
      "An elite founder-track program for future CEOs and CTOs. From AI product development to international competitions like CP and YTC, students are trained to build, lead, and compete at the highest level.",
  },
  {
    name: "3D Creation: The 3D Invention & Toy Design Program",
    requirement: "EP3 completed or G4+ (Selected, Required)",
    image: "/images/ai-programs-boston/width_1536.webp",
    description:
      "An elite maker program where original ideas are transformed into real products for competition and global display. Through rigorous design, 3D prototyping, and presentation training, students prepare for high-level invention showcases such as the Chicago Toy Show.",
  },
  {
    name: "NeuroMaker STEM: AI Future Lab",
    requirement: "Age Group: G6+",
    image: "/images/ai-programs-boston/AI.png",
    description:
      "Introduces students to AI, coding, and brain-computer interface concepts through hands-on projects such as gesture tracking, object detection, and EMG-based control.",
  },
];

export default function AiProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · AI Programs"
        title="Youth Innovation & STEM Programs in the Greater Boston Area"
        description="MGA Boston offers youth innovation and STEM programs in Newton, MA for students across the Greater Boston Area. Through hands-on AI, invention, engineering, and competition-based projects, students build creativity, problem-solving skills, and real-world innovation experience."
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Elite Tracks for Advanced Students
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              These are selective, application-based programs for students
              who have completed the prerequisite engineering levels or meet
              the grade requirement below — designed to push advanced
              learners toward real invention, entrepreneurship, and global
              competition.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.name} className="h-full gap-4 overflow-hidden py-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-6 pb-6">
                  <Badge variant="secondary" className="w-fit">
                    {program.requirement}
                  </Badge>
                  <h3 className="text-lg font-semibold">{program.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready for the Next Level?"
        description="Book a free trial class and talk to our team about which innovation track fits your child."
      />
    </>
  );
}
