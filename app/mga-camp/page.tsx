import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CpuIcon, TentIcon, WrenchIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "MGA Camp",
  description:
    "STEM summer and week camps for K-8 students in Newton and Greater Boston — hands-on robotics, AI, coding, and engineering programs.",
};

const highlights = [
  {
    icon: CpuIcon,
    title: "Robotics & AI",
    description:
      "Kids build and program real robots, from humanoid AI bots to battle-bot arenas.",
  },
  {
    icon: WrenchIcon,
    title: "Hands-On Engineering",
    description:
      "Every camper leaves with a project they designed, built, and can explain — not a worksheet.",
  },
  {
    icon: TentIcon,
    title: "Small Group Camps",
    description:
      "Low student-to-instructor ratios so every camper gets real coaching, not just supervision.",
  },
];

export default function MgaCampPage() {
  return (
    <>
      <PageHero
        eyebrow="Camp & Workshop"
        title="STEM Camps for K-8 Makers"
        description="Hands-on summer and school-break camps in Newton, MA, where kids build robots, code, and invent — not just watch."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Camp That Feels Like a Maker Lab
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                MGA’s camps bring together robotics, AI, coding, engineering, chemistry,
                and invention-based projects for K-8 students across Newton, Waltham,
                Lexington, and the Greater Boston area. Instead of passive activities,
                campers spend their week designing, building, and iterating on real
                projects — developing creativity, problem-solving skills, and confidence
                along the way.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                Whether your child is a first-time camper or a returning MGA maker,
                there’s a themed week built around what excites them most: AI humanoid
                robots, drones, battle bots, chemistry labs, and more.
              </p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src="/images/home/home-course-4.jpg"
                alt="STEM summer camp students building robotics projects at MGA"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="p-6">
                <item.icon className="size-8 text-primary" aria-hidden />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <Card className="grid gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Week Camps
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Explore MGA’s STEM Summer Camps in Boston
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty">
                Browse the full lineup of week-long camp programs — from AI humanoid
                robots and battle bots to chemistry mini labs and drone academies —
                and find the right fit for your child’s grade and interests.
              </p>
              <Button
                size="lg"
                className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                render={<Link href="/mga-camp/stem-summer-camps-boston" />}
              >
                View STEM Summer Camps
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/home/home-course-4.jpg"
                alt="MGA STEM summer camp"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
