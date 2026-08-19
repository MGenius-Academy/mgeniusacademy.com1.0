import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCapIcon, HeartIcon, LightbulbIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Singapore Math Program",
  description:
    "MGA's K-G6 Singapore Math program in Newton, MA combines structured problem-solving, U.S. CCSS-aligned learning, and competition math preparation.",
};

const values = [
  {
    icon: GraduationCapIcon,
    title: "Academic Growth",
    description:
      "We help kids achieve their academic goals and build problem-solving skills.",
  },
  {
    icon: HeartIcon,
    title: "Self-Confidence",
    description:
      "Each class helps students build confidence with problem-solving skills, empowering them to tackle challenges with ease.",
  },
  {
    icon: LightbulbIcon,
    title: "Curiosity",
    description:
      "Our student-centric program cultivates our students' curiosity and critical-thinking skills, preparing them for lifelong learning.",
  },
];

const programs = [
  {
    name: "Advanced Program (AP)",
    image: "/images/curriculum_singapore-math/AP.png",
    description:
      "The AP Program is based on the Singapore Math system and aligned with U.S. CCSS standards, providing a comprehensive curriculum from early math through sixth grade and helping students build strong foundations while progressing ahead of grade level.",
  },
  {
    name: "Competition Program (CP)",
    image: "/images/curriculum_singapore-math/CP.png",
    description:
      "The CP Competition Program prepares students for international math competitions by strengthening mathematical analysis, problem-solving strategies, and competition thinking, helping them build confidence and achieve strong results in gifted programs and competitive academic pathways.",
  },
];

const awardImages = [
  "/images/curriculum_singapore-math/1-2.jpg",
  "/images/curriculum_singapore-math/2.jpg",
  "/images/curriculum_singapore-math/3.jpg",
  "/images/curriculum_singapore-math/4.jpg",
  "/images/curriculum_singapore-math/5.jpg",
  "/images/curriculum_singapore-math/6.jpg",
];

export default function SingaporeMathPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Singapore Math"
        title="Singapore Math Program for Kids in Boston"
        description="MGA Boston offers a Singapore Math-based program for K–G6 students in Newton, MA, combining structured problem-solving, U.S. CCSS-aligned learning, advanced math pathways, and competition math preparation."
      />

      <section className="py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                What is Singapore Math?
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Age Group: K–G6
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Singapore Math emphasizes deep conceptual understanding over
                rote memorization. At MGA, students move step by step from
                concrete, hands-on problem-solving to abstract mastery,
                building a foundation that carries them ahead of grade level
                and prepares them for competitive math pathways.
              </p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src="/images/curriculum_singapore-math/Frame-16.jpg"
                alt="Singapore Math class for kids in Boston"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="items-start gap-3 p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
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
              Math Program Introduction
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.name} className="h-full gap-4 overflow-hidden py-0">
                <div className="relative aspect-video overflow-hidden bg-white">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-6 pb-6">
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

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mx-auto">
              Competition Results
            </Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Competition Award Highlights
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              MGA students consistently place in international math
              competitions such as Math Kangaroo and Noetic Learning Math
              Contest.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {awardImages.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="MGA student math competition award"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Give Your Child a Head Start in Math"
        description="Book a free trial class and see MGA's Singapore Math program in action."
      />
    </>
  );
}
