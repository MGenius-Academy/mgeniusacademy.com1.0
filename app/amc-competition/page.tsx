import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircleIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  ListChecksIcon,
  MailIcon,
  MapPinIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "AMC 8 Competition at MGA",
  description:
    "Take the AMC 8 (American Mathematics Competition 8) at MGenius Academy in Newton, MA on Saturday, January 23, 2027. Open to students in grade 8 and below. Early bird registration by October 27, 2026.",
};

const overallStats = [
  { value: "≤ 8", label: "Grade Level" },
  { value: "25", label: "Multiple-Choice Questions" },
  { value: "40", label: "Minutes" },
  { value: "Jan 23", label: "Contest Date, 2027" },
];

const contestDetails = [
  {
    icon: UsersIcon,
    title: "Eligibility",
    lines: ["Students in grade 8 and below", "(age 15.5 years or younger)"],
  },
  {
    icon: ListChecksIcon,
    title: "Format",
    lines: ["25 multiple-choice questions", "40 minutes"],
  },
  {
    icon: CalendarIcon,
    title: "Date & Time",
    lines: ["Saturday, January 23, 2027", "2:00 PM – 2:40 PM"],
  },
  {
    icon: MapPinIcon,
    title: "Location",
    lines: ["MGenius Academy", "288 Walnut Street, Suite 300", "Newton, MA 02460"],
  },
];

export default function AmcCompetitionPage() {
  return (
    <>
      <PageHero
        eyebrow="MGA Competitions · MAA AMC"
        title="AMC 8 — American Mathematics Competition 8"
        description="MGenius Academy is hosting the AMC 8 in Newton, MA on Saturday, January 23, 2027. The AMC 8 is a 25-question, 40-minute mathematics competition from the Mathematical Association of America for students in grade 8 and below."
      >
        <a
          href="https://maa.org/student-programs/amc/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-4 flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Visit Official MAA AMC Site
          <ArrowUpRightIcon className="size-3.5" aria-hidden />
        </a>
      </PageHero>

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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Contest</h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to know about taking the AMC 8 at MGA.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {contestDetails.map((item) => (
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
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Registration Fees</h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold">Early Bird Fee</h3>
              <p className="text-sm text-muted-foreground">Register by October 27, 2026</p>
              <div className="mt-6 grid grid-cols-2 divide-x divide-border text-center">
                <div>
                  <p className="text-sm text-muted-foreground">MGA Students</p>
                  <p className="mt-1 text-3xl font-bold text-primary">$10</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Non-MGA Students</p>
                  <p className="mt-1 text-3xl font-bold text-primary">$30</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold">Regular Fee</h3>
              <p className="text-sm text-muted-foreground">Register by January 3, 2027</p>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">All Students</p>
                <p className="mt-1 text-3xl font-bold text-primary">$40</p>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 flex max-w-4xl items-center justify-center gap-2 text-sm font-medium">
            <AlertCircleIcon className="size-4 text-primary" aria-hidden />
            No late registrations will be accepted.
          </p>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Scan to Register</h2>
              <p className="mt-3 text-muted-foreground">
                Scan the QR code on the flyer to complete your AMC 8 registration. Early bird
                pricing ends October 27, 2026.
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-background p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <TrophyIcon className="size-4 text-primary" aria-hidden />
                  Pre-Contest Training — Coming Soon
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are planning AMC 8 pre-contest training at MGA. Please stay tuned for
                  more details!
                </p>
              </div>

              <a
                href="mailto:info@mgeniusacademy.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <MailIcon className="size-4" aria-hidden />
                Questions? info@mgeniusacademy.com
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/awards_AMC/amc8-2027-flyer.jpg"
                alt="AMC 8 at MGenius Academy flyer with registration QR code"
                width={1280}
                height={1657}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-background p-8 text-center sm:p-12">
          <TrophyIcon className="size-10 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Prepare for Math Competitions with MGA
          </h2>
          <p className="max-w-xl text-muted-foreground">
            MGA&apos;s math programs help students build confidence in mathematical reasoning,
            competition preparation, and long-term problem-solving growth through structured
            practice and small-group instruction.
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
