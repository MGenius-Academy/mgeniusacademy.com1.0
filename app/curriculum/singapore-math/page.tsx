import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCapIcon, HeartIcon, LightbulbIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Singapore Math Program",
  description:
    "MGA's K-G6 Singapore Math program in Newton, MA combines structured problem-solving, U.S. CCSS-aligned learning, and competition math preparation.",
};

const benefits = [
  {
    title: "Small class size",
    description:
      "In small classes of 6 students or less, teachers provide personalized support to help each student achieve learning goals.",
  },
  {
    title: "Live instruction by experienced teachers",
    description:
      "Our teachers build a relationship with each student - teaching, guiding, and answering questions in real time.",
  },
  {
    title: "Customized progress reports",
    description:
      "Parents can see how their child is improving with personalized reports each month.",
  },
  {
    title: "Fun math practice kids will love",
    description:
      "Gamification-based courseware helps kids have fun and stay engaged.",
  },
  {
    title: "Social-emotional learning",
    description:
      "Kids learn best with peers, our student-centric curriculum builds confidence, communication skills, and creativity.",
  },
  {
    title: "Effective math curriculum",
    description:
      "With years of research, our program is based on best-in-class math learning methods and concepts such as Singapore Math, proven to help kids succeed.",
  },
];

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
    detailHref: "/curriculum/singapore-math/advanced-math-program-boston",
  },
  {
    name: "Competition Program (CP)",
    image: "/images/curriculum_singapore-math/CP.png",
    description:
      "The CP Competition Program prepares students for international math competitions by strengthening mathematical analysis, problem-solving strategies, and competition thinking, helping them build confidence and achieve strong results in gifted programs and competitive academic pathways.",
    detailHref: "/curriculum/singapore-math/competition-math-program-boston",
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

      <section className="bg-orange-50/60 py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Future of Math Learning has Arrived
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Spark your child&rsquo;s greatest potential with our
                award-winning math program. Interactive, fun, and effective — it
                is learning reimagined. Our research-based curriculum aligns to
                Common Core standards, taught by experienced teachers.
              </p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-white p-2 shadow-lg">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/curriculum_singapore-math/math_hero.png"
                  alt="MGA Singapore Math class for kids in Boston"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Singapore Math Program for Kids in Boston
            </h2>
          </div>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-3">
            <div className="flex flex-col gap-8">
              {benefits.slice(0, 3).map((benefit) => (
                <div
                  key={benefit.title}
                  className="border-b border-border pb-8 last:border-0 last:pb-0"
                >
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-xs">
              <Image
                src="/images/curriculum_singapore-math/why_spark_bg_2-904x1024.jpeg"
                alt="MGA Singapore Math students"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-8">
              {benefits.slice(3).map((benefit) => (
                <div
                  key={benefit.title}
                  className="border-b border-border pb-8 last:border-0 last:pb-0"
                >
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
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
              <Card
                key={program.name}
                className="h-full gap-4 overflow-hidden py-0"
              >
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
                  <Button
                    size="sm"
                    className="mt-auto w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                    render={<Link href={program.detailHref} />}
                  >
                    Program Details
                  </Button>
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
              MGA students consistently place in international math competitions
              such as Math Kangaroo and Noetic Learning Math Contest.
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
