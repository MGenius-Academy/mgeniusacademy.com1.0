import type { Metadata } from "next";
import Image from "next/image";
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
  { value: "23", label: "Spring 2026 Awards" },
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
        description="In the Spring 2026 Noetic Learning Math Contest, 20 MGA students on the Grade 2, 3, and 4 teams earned 23 awards. Thirteen were named to the National Honor Roll, which recognizes the top 10% of participants in each grade, and the top scorer on each team received the Team Winner award."
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

          <div className="mt-12 relative aspect-21/9 overflow-hidden rounded-3xl">
            <Image
              src="/images/curriculum_singapore-math/noetic-hero.jpg"
              alt="MGA students working through a Noetic Learning Math Contest–style problem"
              fill
              className="object-cover"
            />
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
              Twenty MGA students on the Grade 2, 3, and 4 teams earned 23
              awards: 3 Team Winner awards, 13 National Honor Roll awards,
              and 7 Honorable Mentions. Logan X and Alex C each scored 100.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/boston-stem/math-awards"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeftIcon className="size-4" />
                Back to all Math Competition Awards
              </Link>
              <Link
                href="/boston-stem/math-awards/math-kangaroo"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                See Math Kangaroo Results
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-background p-6">
            <NoeticTable rows={noetic2026} />
            <p className="mt-3 text-xs text-muted-foreground">
              Team Winner goes to the top scorer on each team. National
              Honor Roll recognizes the top 10% of participants in each
              grade; Honorable Mention recognizes the top 50%.
            </p>
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
            MGA&apos;s Competition Program (CP) trains students in Grades 1–6
            for Math Kangaroo, the Noetic Learning Math Contest, and early
            AMC 8, using MGA&apos;s curriculum plus supplementary content
            designed for competitions. The Advanced Program (AP) builds the
            school-math foundation that competition work depends on. Both
            run in groups of 1–5 students, with structured practice that
            builds confidence and long-term problem-solving growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/curriculum/singapore-math/competition-math-program-boston"
              className="flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Explore the Competition Program
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/curriculum/singapore-math"
              className="flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Explore MGA Math Programs
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
