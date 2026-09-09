import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, TrophyIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AwardTable } from "@/components/sections/math-awards-tables";
import {
  kangaroo2025,
  kangaroo2025State,
  kangaroo2026,
  kangaroo2026State,
} from "@/lib/math-awards-data";

export const metadata: Metadata = {
  title: "Math Kangaroo Results",
  description:
    "MGA students' national and Massachusetts state results in Math Kangaroo USA, year after year.",
};

const overallStats = [
  { value: "3", label: "2026 National Top 1" },
  { value: "16", label: "2026 National Top 20" },
  { value: "4", label: "2026 MA State Top 3" },
  { value: "2025–2026", label: "Award Years" },
];

export default function MathKangarooAwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Boston STEM · Math Kangaroo"
        title="MGA Math Kangaroo National & State Results"
        description="MGA students continue to achieve outstanding results in Math Kangaroo USA, earning National Top 1, National Top 20, and Massachusetts State Top 3 recognition year after year."
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
              Math Kangaroo Results by Year
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore MGA students&apos; Math Kangaroo USA results by year,
              including national rankings and Massachusetts state honors.
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

          <div className="mx-auto mt-10 max-w-4xl">
            <Accordion multiple defaultValue={["2026"]}>
              <AccordionItem
                value="2026"
                className="mb-6 rounded-2xl border border-border bg-background px-6 py-2"
              >
                <AccordionTrigger className="py-4 text-lg font-semibold">
                  2026 Math Kangaroo Results
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-8 pb-2">
                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo USA 2026 — National Top 20
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        MGA students achieved outstanding results, including 3
                        National Top 1 awards and 16 National Top 20 awards.
                      </p>
                      <AwardTable rows={kangaroo2026} rankLabel="National Rank" />
                    </div>

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo 2026 — Massachusetts State Top 3
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Four MGA students earned Massachusetts State Top 3
                        recognition.
                      </p>
                      <AwardTable rows={kangaroo2026State} rankLabel="State Rank" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="2025"
                className="rounded-2xl border border-border bg-background px-6 py-2"
              >
                <AccordionTrigger className="py-4 text-lg font-semibold">
                  2025 Math Kangaroo Results
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-8 pb-2">
                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo USA 2025 — National Top 20
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        MGA students earned 26 National Top 20 awards,
                        including two National Rank 1 winners.
                      </p>
                      <AwardTable rows={kangaroo2025} rankLabel="National Rank" />
                    </div>

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo 2025 — Massachusetts State Top 3
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Five MGA students earned Massachusetts State Top 3
                        recognition.
                      </p>
                      <AwardTable rows={kangaroo2025State} rankLabel="State Rank" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
