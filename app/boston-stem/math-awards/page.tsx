import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MedalIcon, StarIcon, TrophyIcon } from "lucide-react";
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
  title: "Math Competition Awards",
  description:
    "MGA students' results in Math Kangaroo USA and the Noetic Learning Math Contest — national and Massachusetts state awards year after year.",
};

const overallStats = [
  { value: "50+", label: "2026 Math Awards" },
  { value: "20", label: "Math Kangaroo Awards" },
  { value: "23", label: "Noetic Spring Awards" },
  { value: "2025–2026", label: "Award Years" },
];

type Row = { name: string; grade: string; score: string; rank: string; tier: "gold" | "star" };

const kangaroo2026: Row[] = [
  { name: "Edward X", grade: "2", score: "96", rank: "1", tier: "gold" },
  { name: "Olivia S", grade: "3", score: "96", rank: "1", tier: "gold" },
  { name: "Iris T", grade: "3", score: "96", rank: "1", tier: "gold" },
  { name: "Alex C", grade: "3", score: "92", rank: "3", tier: "star" },
  { name: "Elliot G", grade: "2", score: "88", rank: "7", tier: "star" },
  { name: "Ethan W", grade: "3", score: "87", rank: "8", tier: "star" },
  { name: "Henry S", grade: "5", score: "107", rank: "12", tier: "star" },
  { name: "Lawrence S", grade: "3", score: "83", rank: "12", tier: "star" },
  { name: "Madelyn S", grade: "3", score: "81", rank: "14", tier: "star" },
  { name: "Lilia Wu-S", grade: "4", score: "80", rank: "15", tier: "star" },
  { name: "Wenhao X", grade: "3", score: "80", rank: "15", tier: "star" },
  { name: "Jingfan W", grade: "4", score: "78", rank: "17", tier: "star" },
  { name: "Robin Diego W", grade: "4", score: "78", rank: "17", tier: "star" },
  { name: "Ryder Z", grade: "4", score: "78", rank: "17", tier: "star" },
  { name: "Ella Kyoseva G", grade: "3", score: "76", rank: "19", tier: "star" },
  { name: "Reina Z", grade: "4", score: "75", rank: "20", tier: "star" },
];

const kangaroo2026State: Row[] = [
  { name: "Edward X", grade: "2", score: "96", rank: "1", tier: "gold" },
  { name: "Olivia S", grade: "3", score: "96", rank: "1", tier: "gold" },
  { name: "Iris T", grade: "3", score: "96", rank: "1", tier: "gold" },
  { name: "Alex C", grade: "3", score: "92", rank: "3", tier: "star" },
];

type NoeticRow = { team: string; name: string; score: string; award: string };

const noetic2026: NoeticRow[] = [
  { team: "Grade 2", name: "Logan X", score: "100", award: "Team Winner · National Honor Roll" },
  { team: "Grade 2", name: "Logan L", score: "—", award: "National Honor Roll" },
  { team: "Grade 2", name: "Maddy S", score: "—", award: "National Honor Roll" },
  { team: "Grade 2", name: "Qilin Frank Y", score: "—", award: "National Honor Roll" },
  { team: "Grade 2", name: "Jason X", score: "—", award: "National Honor Roll" },
  { team: "Grade 2", name: "Audrey (Linxi) Y", score: "—", award: "Honorable Mention" },
  { team: "Grade 2", name: "Constance Lei C", score: "—", award: "Honorable Mention" },
  { team: "Grade 2", name: "Aiden S", score: "—", award: "Honorable Mention" },
  { team: "Grade 2", name: "Victor C", score: "—", award: "Honorable Mention" },
  { team: "Grade 3", name: "Alex C", score: "100", award: "Team Winner · National Honor Roll" },
  { team: "Grade 3", name: "Charlotte W", score: "—", award: "National Honor Roll" },
  { team: "Grade 3", name: "Wenhao X", score: "—", award: "National Honor Roll" },
  { team: "Grade 3", name: "Ella Kyoseva G", score: "—", award: "National Honor Roll" },
  { team: "Grade 3", name: "Iris T", score: "—", award: "National Honor Roll" },
  { team: "Grade 3", name: "Yueheng T", score: "—", award: "Honorable Mention" },
  { team: "Grade 4", name: "William Z", score: "95", award: "Team Winner · National Honor Roll" },
  { team: "Grade 4", name: "Yaocheng K", score: "—", award: "National Honor Roll" },
  { team: "Grade 4", name: "Ryder Z", score: "—", award: "National Honor Roll" },
  { team: "Grade 4", name: "Brandon W", score: "—", award: "Honorable Mention" },
  { team: "Grade 4", name: "Joan G", score: "—", award: "Honorable Mention" },
];

const kangaroo2025: Row[] = [
  { name: "Jamie V", grade: "1", score: "96", rank: "1", tier: "gold" },
  { name: "Alex C", grade: "2", score: "96", rank: "1", tier: "gold" },
  { name: "Isaac S", grade: "2", score: "92", rank: "3", tier: "star" },
  { name: "Ethan W", grade: "2", score: "91", rank: "4", tier: "star" },
  { name: "Olivia S", grade: "2", score: "91", rank: "4", tier: "star" },
  { name: "Adam D", grade: "4", score: "91", rank: "4", tier: "star" },
  { name: "Daniel X", grade: "4", score: "91", rank: "4", tier: "star" },
  { name: "Constantine K", grade: "3", score: "89", rank: "6", tier: "star" },
  { name: "Emily L", grade: "4", score: "87", rank: "8", tier: "star" },
  { name: "Henry S", grade: "3", score: "86", rank: "9", tier: "star" },
  { name: "Jason X", grade: "1", score: "83", rank: "11", tier: "star" },
  { name: "Madelyn S", grade: "1", score: "83", rank: "11", tier: "star" },
  { name: "Yuxi G", grade: "2", score: "84", rank: "11", tier: "star" },
  { name: "Max L", grade: "1", score: "82", rank: "12", tier: "star" },
  { name: "Jayden D", grade: "2", score: "83", rank: "12", tier: "star" },
  { name: "Wenhao X", grade: "2", score: "82", rank: "13", tier: "star" },
  { name: "Ethan L", grade: "4", score: "82", rank: "13", tier: "star" },
  { name: "Lawrence S", grade: "2", score: "81", rank: "14", tier: "star" },
  { name: "Andrew A", grade: "5", score: "103", rank: "15", tier: "star" },
  { name: "Jingfan W", grade: "3", score: "79", rank: "16", tier: "star" },
  { name: "Charlotte W", grade: "2", score: "78", rank: "17", tier: "star" },
  { name: "Stella J", grade: "2", score: "78", rank: "17", tier: "star" },
  { name: "Boya Y", grade: "3", score: "78", rank: "17", tier: "star" },
  { name: "Yuzhi X", grade: "3", score: "78", rank: "17", tier: "star" },
  { name: "Edward X", grade: "1", score: "76", rank: "18", tier: "star" },
  { name: "Cooper C", grade: "2", score: "77", rank: "18", tier: "star" },
  { name: "Victor C", grade: "1", score: "75", rank: "19", tier: "star" },
];

const kangaroo2025State: Row[] = [
  { name: "Jamie V", grade: "1", score: "96", rank: "1", tier: "gold" },
  { name: "Alex C", grade: "2", score: "96", rank: "1", tier: "gold" },
  { name: "Isaac S", grade: "2", score: "92", rank: "2", tier: "star" },
  { name: "Ethan W", grade: "2", score: "91", rank: "3", tier: "star" },
  { name: "Olivia S", grade: "2", score: "91", rank: "3", tier: "star" },
];

function TierBadge({ tier }: { tier: "gold" | "star" }) {
  return tier === "gold" ? (
    <Badge className="gap-1 bg-amber-500 text-white">
      <MedalIcon className="size-3" /> Top 1
    </Badge>
  ) : (
    <Badge variant="secondary" className="gap-1">
      <StarIcon className="size-3" /> Top 20
    </Badge>
  );
}

function AwardTable({ rows, rankLabel }: { rows: Row[]; rankLabel: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[480px] text-sm">
        <thead className="bg-secondary/50 text-left">
          <tr>
            <th className="px-4 py-3 font-semibold">Student</th>
            <th className="px-4 py-3 font-semibold">Grade</th>
            <th className="px-4 py-3 font-semibold">Score</th>
            <th className="px-4 py-3 font-semibold">{rankLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="px-4 py-2.5 font-medium">{row.name}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{row.grade}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{row.score}</td>
              <td className="px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">#{row.rank}</span>
                  <TierBadge tier={row.tier} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NoeticTable({ rows }: { rows: NoeticRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[480px] text-sm">
        <thead className="bg-secondary/50 text-left">
          <tr>
            <th className="px-4 py-3 font-semibold">Team</th>
            <th className="px-4 py-3 font-semibold">Student</th>
            <th className="px-4 py-3 font-semibold">Score</th>
            <th className="px-4 py-3 font-semibold">Award</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="px-4 py-2.5 text-muted-foreground">{row.team}</td>
              <td className="px-4 py-2.5 font-medium">{row.name}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{row.score}</td>
              <td className="px-4 py-2.5">
                <span className="text-xs font-medium text-primary">{row.award}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MathAwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Boston STEM · Math Awards"
        title="MGA Math Competition Awards & Student Achievements"
        description="MGA students continue to achieve outstanding results in national mathematics competitions. Through structured problem-solving training and consistent practice, our students have earned awards in Math Kangaroo USA, the Noetic Learning Math Contest, and other math competitions."
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
                        { value: "3", label: "Math Kangaroo — National Top 1" },
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
                        MGA students achieved outstanding results, including 3
                        National Top 1 awards, 16 National Top 20 awards, and
                        4 Massachusetts State Top 3 awards.
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

                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        Noetic Learning Math Contest — 2026 Spring Awards
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        MGA students earned 3 Team Winners, 13 National Honor
                        Roll awards, and 7 Honorable Mentions across Grade
                        2–4 Team MGA.
                      </p>
                      <NoeticTable rows={noetic2026} />
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
                        { value: "2", label: "National Top 1 Winners" },
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
