import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UsersIcon, PuzzleIcon, UsersRoundIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Singapore Math Program | MGenius Academy",
  description:
    "Singapore Math and competition math for K–G6 in Newton, MA. Classes of 1–5 students, experienced teachers, and Math Kangaroo National #1 finishes in 2025 and 2026.",
};

const resultsStrip = [
  { value: "5", label: "Math Kangaroo National #1 finishes, 2025–2026" },
  { value: "42", label: "Math Kangaroo National Top 20 awards, 2025–2026" },
  { value: "9", label: "Massachusetts State Top 3 awards, 2025–2026" },
  { value: "23", label: "Noetic Learning Math Contest awards, Spring 2026" },
];

const whyChoose = [
  {
    icon: UsersIcon,
    title: "Small Classes, Experienced Teachers",
    description:
      "With 1–5 students in a class, the teacher knows how each child thinks: what comes easily, where they hesitate, and what to try next. Teachers explain, ask questions, and give feedback in real time, and every student is expected to take part.",
  },
  {
    icon: PuzzleIcon,
    title: "Challenging, and Still Fun",
    description:
      "Lessons keep a steady pace and include competition-style questions at every level. The difficulty sits just above what each student can already do, so they have to stretch. Math games and puzzles keep that effort enjoyable.",
  },
  {
    icon: UsersRoundIcon,
    title: "Thinking Together",
    description:
      "Students learn with and from their classmates. They share solutions, question each other's reasoning, and look for more than one way to reach an answer. Along the way they become more curious, creative, and confident, and they learn to think critically and explain their ideas clearly.",
  },
];

const programs = [
  {
    name: "Advanced Program (AP)",
    ageGroup: "K–G6",
    tagline: "School math, and well beyond it",
    image: "/images/curriculum_singapore-math/ap-card.jpg",
    description:
      "AP is built on the Singapore Math system and aligned with U.S. Common Core (CCSS) standards, so it covers what students learn in school. It then goes deeper, with higher-order and non-routine problems, and further, with topics taught ahead of grade level. Students learn at least six months ahead of grade-level expectations.",
    detailHref: "/curriculum/singapore-math/advanced-math-program-boston",
  },
  {
    name: "Competition Program (CP)",
    ageGroup: "G1–G6",
    tagline: "Training for international math competitions",
    image: "/images/curriculum_singapore-math/cp-card.jpg",
    description:
      "CP prepares students for Math Kangaroo, the Noetic Learning Math Contest, and early AMC 8. Beyond the core curriculum, teachers add problem sets and short units that MGA designs specifically for competitions. Students sharpen their analysis, strategy, and competition thinking, which also serves them in gifted programs and other competitive academic pathways.",
    detailHref: "/curriculum/singapore-math/competition-math-program-boston",
  },
];

const classroomGallery = [
  "/images/curriculum_singapore-math/gallery/hub-1.jpg",
  "/images/curriculum_singapore-math/gallery/hub-2.jpg",
  "/images/curriculum_singapore-math/gallery/hub-3.jpg",
  "/images/curriculum_singapore-math/gallery/hub-4.jpg",
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
        description="MGA offers a Singapore Math–based program for students in Grades K–6 in Newton, MA. The Advanced Program (AP) covers everything in school math and goes further, in depth and in range. The Competition Program (CP) trains students for contests such as Math Kangaroo and the Noetic Learning Math Contest. All classes are in person, with 1–5 students and an experienced teacher."
      />

      <section className="py-16">
        <Container>
          <div className="relative aspect-21/9 overflow-hidden rounded-3xl">
            <Image
              src="/images/curriculum_singapore-math/hub-hero.jpg"
              alt="MGA Singapore Math class for kids in Boston"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resultsStrip.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Math Kangaroo ranks students nationally and by state within
              each grade.
            </p>
            <Link
              href="/boston-stem/math-awards"
              className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
            >
              See all results →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose MGA&rsquo;s Math Program?
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Our math classes are intensive, and students enjoy them. Each
              90-minute lesson moves from a new idea to guided practice to
              problems that take real thought. Students explain their
              reasoning, compare methods, and get comfortable staying with a
              hard problem until it makes sense.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whyChoose.map((item) => (
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
              Math Programs for Grades K–6
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Two programs, each with its own goal. Students can take AP,
              CP, or both.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <Card
                key={program.name}
                className="h-full gap-4 overflow-hidden py-0"
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
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{program.name}</h3>
                    <Badge variant="secondary">{program.ageGroup}</Badge>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {program.tagline}
                  </p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Classroom Highlights
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              A look inside MGA math classes.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {classroomGallery.map((src) => (
              <div
                key={src}
                className="relative aspect-4/3 overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="MGA math classroom highlight"
                  fill
                  className="object-cover"
                />
              </div>
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
              In Math Kangaroo USA 2026, three MGA students ranked #1
              nationally in their grade, 16 placed in the National Top 20,
              and 4 earned Massachusetts State Top 3. That followed 2025,
              when two students ranked #1 nationally and 26 placed in the
              Top 20. In the Spring 2026 Noetic Learning Math Contest, MGA
              students earned 23 awards, including 13 National Honor Roll
              awards.
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
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              render={<Link href="/boston-stem/math-awards" />}
            >
              See All Results
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Give Your Child a Head Start in Math"
        description="Book a trial class to see how a lesson runs, meet the teacher, and find the right program for your child."
      />
    </>
  );
}
