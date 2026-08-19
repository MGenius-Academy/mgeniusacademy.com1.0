import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Student Projects",
  description:
    "Browse real projects designed and built by MGA students — 3D-printed designs, laser-cut builds, and AI chatbots — made in our Newton/Boston maker workshop.",
};

const projects = [
  {
    title: "3D-Printed Desk Lamp",
    category: "3D Design",
    student: "MGA Student",
    image: "/images/student-project/lamp-2-300x178.jpg",
  },
  {
    title: "Custom Desk Lamp, Take Two",
    category: "3D Design",
    student: "MGA Student",
    image: "/images/student-project/lamp-1-300x178.jpg",
  },
  {
    title: "Sculptural 3D Print",
    category: "3D Design",
    student: "Alex Cheng",
    image: "/images/student-project/3D-3-300x178.jpg",
  },
  {
    title: "AI Chatbot Build",
    category: "AI Chatbot",
    student: "Emma Geng",
    image: "/images/student-project/3D-1-300x178.jpg",
  },
  {
    title: "AI Chatbot Build",
    category: "AI Chatbot",
    student: "Ethan Lu",
    image: "/images/student-project/3D-2-300x178.jpg",
  },
  {
    title: "Working Analog Clock",
    category: "Engineering",
    student: "Linxi Yan",
    image: "/images/student-project/clock-300x178.jpg",
  },
];

export default function StudentProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Projects"
        title="What MGA Students Are Building"
        description="From 3D-printed designs to working AI chatbots, MGA students turn ideas into real, hands-on projects using our engineering, design, and fabrication tools."
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Student Project Gallery
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every project below was designed, built, and finished by an MGA
              student — using the same laser cutters, 3D printers, and AI
              tools available in our workshop.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Card key={i} className="overflow-hidden py-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} by ${project.student}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 px-6 pb-6 pt-4">
                  <Badge variant="secondary" className="w-fit">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Student: {project.student}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Want Your Own Design Fabricated?
          </h2>
          <p className="max-w-xl text-muted-foreground">
            MGA&apos;s workshop offers professional laser cutting and 3D
            printing services, so students and families can bring their own
            designs to life.
          </p>
          <Link
            href="/incubation/mga-service"
            className="flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Explore MGA Fabrication Services
            <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
