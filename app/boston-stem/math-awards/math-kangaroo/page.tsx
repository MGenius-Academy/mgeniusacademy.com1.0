import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BarChart3Icon,
  CalendarIcon,
  ClockIcon,
  LightbulbIcon,
  ListChecksIcon,
  MailIcon,
  MapPinIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
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
  { value: "5", label: "National #1 finishes, 2025–2026" },
  { value: "42", label: "National Top 20 awards, 2025–2026" },
  { value: "9", label: "MA State Top 3 awards, 2025–2026" },
  { value: "9 of 16", label: "2026 Top 20 students who were also in the 2025 Top 20" },
];

const contest2027Details = [
  {
    icon: UsersIcon,
    title: "Eligibility",
    lines: ["Students in Kindergarten through grade 8"],
  },
  {
    icon: ListChecksIcon,
    title: "Format",
    lines: ["75 minutes"],
  },
  {
    icon: CalendarIcon,
    title: "Date & Time",
    lines: [
      "Thursday, March 18, 2027",
      "Session 1: 3:30 PM – 4:45 PM",
      "Session 2: 5:00 PM – 6:15 PM",
    ],
  },
  {
    icon: MapPinIcon,
    title: "Location",
    lines: ["MGenius Academy", "288 Walnut Street, Suite 300", "Newton, MA 02460"],
  },
];

const competitionLevels = [
  { level: "Level 1", grades: "Grades 1–2 (and Kindergarteners)" },
  { level: "Level 2", grades: "Grades 3–4" },
  { level: "Level 3", grades: "Grades 5–6" },
  { level: "Level 4", grades: "Grades 7–8" },
];

export default function MathKangarooAwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Boston STEM · Math Kangaroo"
        title="MGA Math Kangaroo National & State Results"
        description="MGA students placed among the top Math Kangaroo USA scorers in both 2025 and 2026. In 2026, three ranked #1 nationally in their grade, 16 placed in the National Top 20, and 4 earned Massachusetts State Top 3. In 2025, two ranked #1 nationally, 26 placed in the National Top 20, and 5 earned State Top 3. Math Kangaroo is an international competition; U.S. students are ranked nationally and by state within each grade."
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
              src="/images/curriculum_singapore-math/math-kangaroo-hero.jpg"
              alt="MGA students working through a Math Kangaroo–style competition problem"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Grades K–8 · Register by Dec 14
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Math Kangaroo 2027 at MGA
            </h2>
            <p className="mt-3 text-muted-foreground">
              MGenius Academy will host the Math Kangaroo Competition in Newton, MA on
              Thursday, March 18, 2027.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {contest2027Details.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6"
              >
                <item.icon className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 sm:col-span-2">
              <BarChart3Icon className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden />
              <div className="w-full">
                <h3 className="text-base font-semibold">Competition Levels</h3>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {competitionLevels.map((item) => (
                    <div
                      key={item.level}
                      className="flex items-center justify-between gap-3 rounded-xl bg-secondary/40 px-4 py-2 text-sm"
                    >
                      <span className="font-medium">{item.level}</span>
                      <span className="text-right text-muted-foreground">{item.grades}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Registration Fees
              </h2>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-6 py-4">
                  <span className="font-semibold">MGA Math Students</span>
                  <span className="text-3xl font-bold text-primary">$0</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-6 py-4">
                  <span className="font-semibold">Other Students</span>
                  <span className="text-3xl font-bold text-primary">$20</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-6 py-4">
                  <ClockIcon className="size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold">Registration Deadline</p>
                    <p className="text-sm text-muted-foreground">December 14, 2026</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-background p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <LightbulbIcon className="size-4 text-primary" aria-hidden />
                  Pre-Contest Training — Coming Soon
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are planning Math Kangaroo pre-contest training at MGA. Please stay
                  tuned for more details!
                </p>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Scan the QR code on the flyer to register.
              </p>
              <a
                href="mailto:info@mgeniusacademy.com"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <MailIcon className="size-4" aria-hidden />
                Questions? info@mgeniusacademy.com
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/curriculum_singapore-math/math-kangaroo-2027-flyer.jpg"
                alt="Math Kangaroo 2027 at MGenius Academy flyer with registration QR code"
                width={1280}
                height={1657}
                className="h-auto w-full"
              />
            </div>
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
                        Sixteen MGA students placed in the National Top 20 for
                        their grade, including three who ranked #1
                        nationally.
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
