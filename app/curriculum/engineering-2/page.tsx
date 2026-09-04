import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UsersIcon, WrenchIcon, RocketIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { engineeringLevels } from "@/lib/engineering-levels";

export const metadata: Metadata = {
  title: "Engineering Classes for Kids",
  description:
    "Hands-on, project-based engineering classes for K-8 students in the Greater Boston area. Five progressive levels, small groups of up to 8 students.",
};

const whyMga = [
  {
    icon: UsersIcon,
    title: "Small-Group, Personalized Learning",
    description:
      "With classes limited to up to 8 students, each child receives more individualized attention, personalized guidance, and stronger support throughout the learning process.",
  },
  {
    icon: WrenchIcon,
    title: "Hands-On, Project-Based Exploration",
    description:
      "Students learn by actively designing, building, testing, and improving projects, allowing them to develop practical skills through meaningful hands-on experiences.",
  },
  {
    icon: RocketIcon,
    title: "A Progressive Pathway to Real Engineering Thinking",
    description:
      "Through a spiral learning approach, students build knowledge step by step over time, strengthening problem-solving skills and developing authentic engineering thinking at each level.",
  },
];

export default function EngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Engineering"
        title="Ignite Creativity, Engineer the Future"
        description="MGA offers hands-on engineering classes for kids in the Greater Boston area, designed for students in grades K–8. In small groups of up to 8 students, children explore engineering through project-based learning, developing creativity, problem-solving skills, and real engineering thinking."
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose MGA&rsquo;s Engineering Program?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              By researching, designing, building, testing, and improving
              their projects, students develop real engineering thinking —
              deepening their understanding over time while building strong
              STEM skills, creativity, and problem-solving abilities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whyMga.map((item) => (
              <Card key={item.title} className="items-start gap-3 p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering Levels for Grades K–8
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Five progressive levels, grouped by age and experience, guide
              students from their first circuits to advanced, independent
              engineering projects.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringLevels.map((level) => (
              <Card key={level.slug} className="h-full gap-3 overflow-hidden py-0">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={level.image}
                    alt={`${level.level} engineering class for kids in Boston`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 pb-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold">{level.level}</h3>
                    <Badge variant="secondary">{level.ageGroup}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {level.tagline}
                  </p>
                  <Button
                    size="sm"
                    className="mt-auto w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                    render={
                      <Link href={`/curriculum/engineering-2/${level.slug}`} />
                    }
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Start Your Child's Engineering Journey?"
        description="Book a free trial class and see MGA's hands-on engineering curriculum in action."
      />
    </>
  );
}
