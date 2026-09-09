import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, TrophyIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { NoeticTable } from "@/components/sections/math-awards-tables";
import { noetic2026 } from "@/lib/math-awards-data";

export const metadata: Metadata = {
  title: "Noetic Learning Math Contest Results",
  description:
    "MGA students' Team Winner, National Honor Roll, and Honorable Mention results in the Noetic Learning Math Contest.",
};

const overallStats = [
  { value: "23", label: "2026 Spring Awards" },
  { value: "3", label: "Team Winners" },
  { value: "13", label: "National Honor Roll" },
  { value: "7", label: "Honorable Mentions" },
];

export default function NoeticAwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Boston STEM · Noetic Learning Math Contest"
        title="MGA Noetic Learning Math Contest Results"
        description="MGA students continue to achieve outstanding results in the Noetic Learning Math Contest, earning Team Winner, National Honor Roll, and Honorable Mention recognition."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {overallStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Noetic Learning Math Contest — 2026 Spring Awards
            </h2>
            <p className="mt-3 text-muted-foreground">
              MGA students earned 3 Team Winners, 13 National Honor Roll
              awards, and 7 Honorable Mentions across Grade 2–4 Team MGA.
            </p>
            <div className="mt-6">
              <Link
                href="/boston-stem/math-awards"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeftIcon className="size-4" />
                Back to all Math Competition Awards
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-background p-6">
            <NoeticTable rows={noetic2026} />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-background p-8 text-center sm:p-12">
          <TrophyIcon className="size-10 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Prepare for Future Math Competitions with MGA
          </h2>
          <p className="max-w-xl text-muted-foreground">
            MGA&apos;s math programs help students build confidence in
            mathematical reasoning, competition preparation, and long-term
            problem-solving growth through structured practice and
            small-group instruction.
          </p>
          <Link
            href="/curriculum/singapore-math"
            className="flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Explore MGA Math Programs
            <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
