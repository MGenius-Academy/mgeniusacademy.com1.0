import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { ProgramFacts } from "@/components/singapore-math/program-facts";
import { KeyFeatures } from "@/components/singapore-math/key-features";
import { CpTabs } from "@/components/singapore-math/cp-tabs";
import { classFormat, cpKeyFeatures } from "@/lib/singapore-math";

export const metadata: Metadata = {
  title: "Competition Program (CP) — Singapore Math",
  description:
    "MGA's Competition Program (CP) strengthens analytical thinking, logical reasoning, and advanced problem-solving skills, preparing G1-G6 students in Newton, MA for Math Kangaroo, the Noetic Learning Math Contest, and AMC 8.",
};

const resultsStrip = [
  { value: "3", label: "Math Kangaroo National #1" },
  { value: "16", label: "Math Kangaroo National Top 20" },
  { value: "4", label: "Massachusetts State Top 3" },
  { value: "23", label: "Noetic Learning Math Contest awards" },
];

const cpGallery = [
  "/images/curriculum_singapore-math/gallery/cp-1.jpg",
  "/images/curriculum_singapore-math/gallery/cp-2.jpg",
  "/images/curriculum_singapore-math/gallery/cp-3.jpg",
  "/images/curriculum_singapore-math/gallery/cp-4.jpg",
];

export default function CompetitionMathProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Singapore Math"
        title="Competition Program (CP)"
        description="Competition math training that builds advanced mathematical thinking. Students are placed by competition math ability, not grade alone, so each child learns at the level that best supports their growth."
      />

      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="relative aspect-21/9 overflow-hidden rounded-3xl">
            <Image
              src="/images/curriculum_singapore-math/cp-hero.jpg"
              alt="MGA Competition Program (CP) math class in Boston"
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
            <Link
              href="/boston-stem/math-awards"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              See all results
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ProgramFacts ageGroup="G1–G6" classFormat={classFormat} />
            <div className="flex flex-col gap-2 rounded-xl border border-border p-6">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Program Overview
              </p>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                CP is a competition math program that builds analytical
                thinking, logical reasoning, and advanced problem-solving
                through challenging questions and structured training. It
                has three levels: Level 1 (Grades 1–2), Level 2 (Grades
                3–4), and Level 3 (Grades 5–6). Each level raises the
                challenge and asks for deeper mathematical thinking.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Beyond the Listed Curriculum
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              The level descriptions below show the core of each course, not
              all of it. MGA teachers add supplementary content designed
              specifically for competitions:
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">
                  Problem sets written in the style and at the difficulty of
                  each contest
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">
                  Short units on topics that school math rarely covers, such
                  as 3D views and cube nets, logic with several conditions,
                  strategy games, and symmetry and folding
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">
                  Timed practice that builds speed and accuracy
                </span>
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground text-pretty">
              Many of these topics are not taught in school, but they appear
              regularly in competitions such as Math Kangaroo.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What a CP Class Is Like
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              CP classes are intensive. Problems are hard on purpose, and
              students are expected to keep working on them rather than wait
              for the answer. Classes are also lively and fun: students work
              through puzzles together, debate whether a solution really
              holds, and share different ways to reach the same answer. Many
              of our strongest students stay with us across years: of the 16
              MGA students in the 2026 Math Kangaroo National Top 20, nine
              were also in the 2025 National Top 20.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Key Features
            </h2>
            <div className="mt-6">
              <KeyFeatures features={cpKeyFeatures} />
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Core Mathematical Concepts
            </h2>
            <div className="mt-6">
              <CpTabs />
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Teaching Approach
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Competition problems rarely look like textbook exercises.
              Students learn seven problem-solving methods and practice
              eight thinking skills, shown below, so when a question is
              unfamiliar they can analyze it, choose an effective method,
              and check their answer. The goal is strong mathematical
              reasoning and the confidence to use it under time pressure.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
                <Image
                  src="/images/curriculum_singapore-math/teaching-problem-solving.jpg"
                  alt="7 problem-solving methods taught in MGA's math program"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
                <Image
                  src="/images/curriculum_singapore-math/teaching-thinking-skills.jpg"
                  alt="8 thinking skills developed in MGA's math program"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Classroom Highlights
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {cpGallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-4/3 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt="Competition Program (CP) classroom highlight"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/curriculum/singapore-math"
              className="flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              <ArrowLeftIcon className="size-3.5" />
              Back to Singapore Math
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Give Your Child a Head Start in Math"
        description="Book a trial class and see MGA's Competition Program in action."
      />
    </>
  );
}
