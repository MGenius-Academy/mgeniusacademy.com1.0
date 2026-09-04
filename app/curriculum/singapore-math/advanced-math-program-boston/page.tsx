import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { ProgramFacts } from "@/components/singapore-math/program-facts";
import { KeyFeatures } from "@/components/singapore-math/key-features";
import { ApTabs } from "@/components/singapore-math/ap-tabs";
import { classFormat } from "@/lib/singapore-math";

export const metadata: Metadata = {
  title: "Advanced Program (AP) — Singapore Math",
  description:
    "MGA's Advanced Program (AP) is based on the Singapore Mathematics System and aligned with U.S. CCSS, covering early childhood through sixth-grade math for K-G6 students in Newton, MA.",
};

export default function AdvancedMathProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Singapore Math"
        title="Advanced Program (AP)"
        description="A comprehensive Singapore Math curriculum from early childhood through sixth grade, helping students build strong foundations while progressing ahead of grade level."
      />

      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <ProgramFacts ageGroup="K–G6" classFormat={classFormat} />
            <div className="flex flex-col gap-4 rounded-xl border border-border p-6">
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Origin and Foundation
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <li>
                    Based on the Singapore Mathematics System, a globally
                    recognized standard.
                  </li>
                  <li>
                    Aligned with American CCSS and mainstream mathematics
                    textbook content.
                  </li>
                  <li>
                    School syllabus math, higher-order thinking problems found
                    on tests, critical-thinking skills, and problem-solving
                    strategies.
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Curriculum Scope
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Covers early childhood to sixth-grade mathematics, including
                  number theory, geometry, algebra, and more.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Key Benefits
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A complete syllabus from foundational to advanced topics,
                  enabling students to learn at least six months ahead of
                  grade-level expectations.
                </p>
              </div>
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
              <ApTabs />
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
        description="Book a free trial class and see MGA's Advanced Program in action."
      />
    </>
  );
}
