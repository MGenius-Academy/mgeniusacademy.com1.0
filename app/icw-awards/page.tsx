import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, AwardIcon, RocketIcon, TrophyIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Invention Convention Worldwide Awards",
  description:
    "MGA students' achievements at Invention Convention Worldwide (ICW) — global semifinalist recognition, U.S. state awards, and national finalist honors.",
};

const overallStats = [
  { value: "2", label: "Award Seasons" },
  { value: "1", label: "Global Semifinalist" },
  { value: "4", label: "State-level Special Awards" },
  { value: "3", label: "National Finalists" },
];

const specialAwards2026 = [
  { award: "Belcan Passion to Innovate Award", winner: "Adela" },
  { award: "Emerson Green Innovations Award", winner: "Adela" },
  { award: "RTX Dependable Power Award", winner: "Sun" },
  { award: "Avangrid Sustainability Award", winner: "Sun" },
];

const finalists2026 = ["Adela", "Sun", "Sun"];

export default function IcwAwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="MGA Innovation Awards"
        title="Invention Convention Worldwide Awards"
        description="MGA students continue to achieve outstanding results in invention and innovation competitions, including Invention Convention Worldwide. Through hands-on engineering projects, creative problem-solving, and guided mentorship, our students turn original ideas into real-world solutions."
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
              src="/images/home/ICW-rnnlxo96vbw8aengikiev6ktn4im402ehvrjxs1udc.jpg"
              alt="MGA students at Invention Convention Worldwide"
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
              Awards by Season
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore MGA students&apos; invention and innovation achievements
              by season, including global semifinalist recognition, state
              awards, and national finalist honors.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <Accordion multiple defaultValue={["2026"]}>
              <AccordionItem
                value="2026"
                className="mb-6 rounded-2xl border border-border bg-background px-6 py-2"
              >
                <AccordionTrigger className="py-4 text-lg font-semibold">
                  2026 Season — State-Level Special Awards & National Finalists
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-8 pb-2">
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                        <AwardIcon className="size-4 text-primary" />
                        Honored with Four State-Level Special Awards
                      </h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {specialAwards2026.map((item) => (
                          <div
                            key={item.award}
                            className="flex items-center justify-between rounded-xl border border-border bg-secondary/30 px-4 py-3"
                          >
                            <span className="text-sm font-medium">{item.award}</span>
                            <Badge variant="secondary">{item.winner}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                        <RocketIcon className="size-4 text-primary" />
                        National Innovator Challenge Finalists
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        MGA students earned finalist recognition in the
                        National Innovator Challenge, reflecting their
                        creativity, engineering thinking, and real-world
                        problem-solving skills.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {finalists2026.map((name, i) => (
                          <Badge key={i} className="gap-1 px-3 py-1 text-sm">
                            <TrophyIcon className="size-3.5" />
                            {name} — National Finalist
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="2025"
                className="rounded-2xl border border-border bg-background px-6 py-2"
              >
                <AccordionTrigger className="py-4 text-lg font-semibold">
                  2025 Season — Global Semifinalist & U.S. State Awards
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-8 pb-2">
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                        <TrophyIcon className="size-4 text-primary" />
                        Global Semifinalist Award — Raymond
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Raymond advanced from the Massachusetts state
                        competition to the global stage, earning recognition
                        at U.S. Nationals and reaching the global semifinals —
                        a milestone achievement for MGA&apos;s invention
                        program.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                        <AwardIcon className="size-4 text-primary" />
                        U.S. State Awards
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Ethan, Jayden, and Allan all advanced through the
                        state competition and earned spots at ICW U.S.
                        Nationals, competing alongside top young inventors
                        from across the country.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {["Ethan", "Jayden", "Allan"].map((name) => (
                          <Badge key={name} variant="secondary" className="px-3 py-1 text-sm">
                            {name} — U.S. State Award
                          </Badge>
                        ))}
                      </div>
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
          <RocketIcon className="size-10 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Build Real-World Innovation Skills with MGA
          </h2>
          <p className="max-w-xl text-muted-foreground">
            MGA&apos;s invention and engineering programs guide students from
            creative ideas to real prototypes, presentations, and
            competition-ready innovation projects.
          </p>
          <Link
            href="/curriculum/advanced-tech-competitions/icw-innovation-program-boston"
            className="flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Explore MGA&apos;s ICW Program
            <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
