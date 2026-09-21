import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, TrophyIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AwardTable, NoeticTable } from "@/components/sections/math-awards-tables";
import {
  kangaroo2025,
  kangaroo2025State,
  kangaroo2026,
  kangaroo2026State,
  noetic2026,
} from "@/lib/math-awards-data";

export const metadata: Metadata = {
  title: "Math Competition Awards",
  description:
    "MGA students' results in Math Kangaroo USA and the Noetic Learning Math Contest — national and Massachusetts state awards year after year.",
};

const overallStats = [
  { value: "43", label: "Math awards in 2026" },
  { value: "5", label: "Math Kangaroo National #1 finishes, 2025–2026" },
  { value: "42", label: "Math Kangaroo National Top 20 awards, 2025–2026" },
  { value: "9", label: "MA State Top 3 awards, 2025–2026" },
];

export default function MathAwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Boston STEM · Math Awards"
        title="MGA Math Competition Awards & Student Achievements"
        description="In 2026, MGA students earned 3 Math Kangaroo National #1 finishes, 16 National Top 20 awards, and 4 Massachusetts State Top 3 awards, plus 23 awards in the Noetic Learning Math Contest. In 2025, MGA students earned 2 National #1 finishes and 26 National Top 20 awards in Math Kangaroo. Students prepare through structured problem-solving training, competition-specific practice, and steady weekly work in small classes."
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

          <div className="mt-12 relative overflow-hidden rounded-3xl">
            <Image
              src="/images/home/Noetic-rngry7x643g2yvox591iqbq0tdx5zdj1zgevoo4cg0.jpg"
              alt="MGA students celebrating Noetic Learning Math Contest awards"
              width={1600}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Awards by Year
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore MGA students&apos; math competition results by year.
              Each section includes annual highlights, award counts, and
              student recognition lists.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/boston-stem/math-awards/math-kangaroo"
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-secondary/60"
              >
                Math Kangaroo Results
              </Link>
              <Link
                href="/boston-stem/math-awards/noetic"
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-secondary/60"
              >
                Noetic Contest Results
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-background p-6 text-center">
            <p className="text-muted-foreground text-pretty">
              Nine of the 16 MGA students in the 2026 Math Kangaroo National
              Top 20 were also in the 2025 National Top 20. Olivia S moved
              from #4 in Grade 2 to #1 in Grade 3, and Edward X moved from
              #18 in Grade 1 to #1 in Grade 2.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <Accordion multiple defaultValue={["2026"]}>
              <AccordionItem
                value="2026"
                className="mb-6 rounded-2xl border border-border bg-background px-6 py-2"
              >
                <AccordionTrigger className="py-4 text-lg font-semibold">
                  2026 Math Competition Awards
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-8 pb-2">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {[
                        { value: "3", label: "Math Kangaroo — National #1" },
                        { value: "16", label: "Math Kangaroo — National Top 20" },
                        { value: "4", label: "MA State Top 3" },
                        { value: "23", label: "Noetic Spring Awards" },
                      ].map((s) => (
                        <div key={s.label}>
                          <p className="text-xl font-bold text-primary">{s.value}</p>
                          <p className="text-xs text-muted-foreground">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo USA 2026 — National Top 20
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Sixteen MGA students placed in the National Top 20 for
                        their grade, including three who ranked #1
                        nationally. Four of them also earned Massachusetts
                        State Top 3.
                      </p>
                      <AwardTable rows={kangaroo2026} rankLabel="National Rank" context="national" />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Math Kangaroo ranks students within each grade. The 20
                        highest scores in the nation make the National Winner
                        List, and the 3 highest in each state make the State
                        Winner List. Grades 1–4 are scored out of 96 and
                        Grades 5–12 out of 120.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo 2026 — Massachusetts State Top 3
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Four MGA students earned Massachusetts State Top 3
                        recognition.
                      </p>
                      <AwardTable rows={kangaroo2026State} rankLabel="State Rank" context="state" />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Math Kangaroo ranks students within each grade. The 20
                        highest scores in the nation make the National Winner
                        List, and the 3 highest in each state make the State
                        Winner List. Grades 1–4 are scored out of 96 and
                        Grades 5–12 out of 120.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Noetic Learning Math Contest — 2026 Spring Awards
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Twenty MGA students on the Grade 2, 3, and 4 teams
                        earned 23 awards: 3 Team Winner awards, 13 National
                        Honor Roll awards, and 7 Honorable Mentions. Logan X
                        and Alex C each scored 100.
                      </p>
                      <NoeticTable rows={noetic2026} />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Team Winner goes to the top scorer on each team.
                        National Honor Roll recognizes the top 10% of
                        participants in each grade; Honorable Mention
                        recognizes the top 50%.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="2025"
                className="rounded-2xl border border-border bg-background px-6 py-2"
              >
                <AccordionTrigger className="py-4 text-lg font-semibold">
                  2025 Math Competition Awards
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-8 pb-2">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {[
                        { value: "26", label: "National Top 20 Awards" },
                        { value: "5", label: "MA State Top 3 Awards" },
                        { value: "2", label: "National #1 Finishes" },
                        { value: "G1–G5", label: "Grades Recognized" },
                      ].map((s) => (
                        <div key={s.label}>
                          <p className="text-xl font-bold text-primary">{s.value}</p>
                          <p className="text-xs text-muted-foreground">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo USA 2025 — National Top 20
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Twenty-six MGA students placed in the National Top 20
                        for their grade, including two who ranked #1
                        nationally.
                      </p>
                      <AwardTable rows={kangaroo2025} rankLabel="National Rank" context="national" />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Math Kangaroo ranks students within each grade. The 20
                        highest scores in the nation make the National Winner
                        List, and the 3 highest in each state make the State
                        Winner List. Grades 1–4 are scored out of 96 and
                        Grades 5–12 out of 120.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Math Kangaroo 2025 — Massachusetts State Top 3
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Five MGA students earned Massachusetts State Top 3
                        recognition.
                      </p>
                      <AwardTable rows={kangaroo2025State} rankLabel="State Rank" context="state" />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Math Kangaroo ranks students within each grade. The 20
                        highest scores in the nation make the National Winner
                        List, and the 3 highest in each state make the State
                        Winner List. Grades 1–4 are scored out of 96 and
                        Grades 5–12 out of 120.
                      </p>
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
