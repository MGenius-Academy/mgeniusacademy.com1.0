import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { ProgramFacts } from "@/components/singapore-math/program-facts";
import { KeyFeatures } from "@/components/singapore-math/key-features";
import { CpTabs } from "@/components/singapore-math/cp-tabs";
import { classFormat } from "@/lib/singapore-math";

export const metadata: Metadata = {
  title: "Competition Program (CP) — Singapore Math",
  description:
    "MGA's Competition Program (CP) strengthens analytical thinking, logical reasoning, and advanced problem-solving skills, preparing G1-G6 students in Newton, MA for Math Kangaroo, Noetic, and AMC 8.",
};

export default function CompetitionMathProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Singapore Math"
        title="Competition Program (CP)"
        description="Build advanced math thinking through competition training — students are placed by math competition ability rather than grade alone, learning at the level that best supports growth."
      />

      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <ProgramFacts ageGroup="G1–G6" classFormat={classFormat} />
            <div className="flex flex-col gap-2 rounded-xl border border-border p-6">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Program Overview
              </p>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                The CP Program is a competition math program designed to help
                students strengthen analytical thinking, logical reasoning, and
                advanced problem-solving skills through challenging questions
                and structured training. The program is organized into Level 1
                (Grades 1–2), Level 2 (Grades 3–4), and Level 3 (Grades 5–6),
                with each level aligned to increasing challenge and deeper
                mathematical thinking.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Key Features
            </h2>
            <div className="mt-6">
              <KeyFeatures />
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
              Our math program combines proven problem-solving strategies with
              the development of essential thinking skills. Students learn how
              to analyze problems, choose effective methods, and build strong
              mathematical reasoning and confidence.
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
        description="Book a free trial class and see MGA's Competition Program in action."
      />
    </>
  );
}
