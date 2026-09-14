import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ClockIcon,
  DollarSignIcon,
  EarIcon,
  EyeIcon,
  HandshakeIcon,
  MailIcon,
  MapPinIcon,
  NotebookPenIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersRoundIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const lora = Lora({ subsets: ["latin"], weight: ["600", "700"] });

const REGISTER_URL = "https://forms.gle/Qgg3gc1YsgGdvfUy9";

export const metadata: Metadata = {
  title: "Introduction to Speaking in Interviews & Professional Settings",
  description:
    "New for Fall 2026: an 8-week, in-person small-group course for Grades 4-8 where students learn what interviewers look for and practice in live mock interviews every week.",
};

const COURSE_FACTS = [
  {
    icon: CalendarDaysIcon,
    chipBg: "bg-[#8B5CF6]/15",
    chipText: "text-[#8B5CF6]",
    label: "Schedule",
    value: "8 Thursdays",
    note: "Sep 17 – Nov 5, 2026",
  },
  {
    icon: ClockIcon,
    chipBg: "bg-[#2DBE93]/15",
    chipText: "text-[#209163]",
    label: "Time",
    value: "Grades 4–6: 4–5 PM",
    note: "Grades 7–8: 5–6 PM",
  },
  {
    icon: DollarSignIcon,
    chipBg: "bg-[#F0554C]/15",
    chipText: "text-[#E2483F]",
    label: "Tuition",
    value: "$360",
    note: "8 sessions",
  },
  {
    icon: UsersRoundIcon,
    chipBg: "bg-[#4F8EF7]/15",
    chipText: "text-[#3B4FD1]",
    label: "Class Size",
    value: "4–8 students",
    note: "",
  },
] as const;

const CLASS_DATES = [
  "9/17",
  "9/24",
  "10/1",
  "10/8",
  "10/15",
  "10/22",
  "10/29",
  "11/5",
];

const DATE_COLORS = [
  "bg-[#F6B93B]/20 text-[#8A6116]",
  "bg-[#4F8EF7]/15 text-[#3B4FD1]",
  "bg-[#2DBE93]/15 text-[#209163]",
  "bg-[#F0554C]/15 text-[#E2483F]",
];

const LEARNING_POINTS = [
  {
    icon: BookOpenIcon,
    accent: "bg-[#F0554C]/15 text-[#E2483F]",
    title: "What interviews are and why they matter",
    text: "School, club, program, and professional interviews — taught through mock-interview examples of what works and what doesn't.",
  },
  {
    icon: EyeIcon,
    accent: "bg-[#4F8EF7]/15 text-[#3B4FD1]",
    title: "What interviewers actually look for",
    text: "Students study a real recruiting guide, then interview each other and the instructor.",
  },
  {
    icon: EarIcon,
    accent: "bg-[#2DBE93]/15 text-[#209163]",
    title: "Active listening",
    text: "A practical framework and phrases, practiced in pairs and reflected on in writing.",
  },
  {
    icon: NotebookPenIcon,
    accent: "bg-[#F6B93B]/20 text-[#8A6116]",
    title: "Telling their own story",
    text: "Turning personal experiences into memorable anecdotes that match the traits interviewers want, and finding common ground with any interviewer.",
  },
  {
    icon: ShieldCheckIcon,
    accent: "bg-[#8B5CF6]/15 text-[#8B5CF6]",
    title: "Preparing like a pro",
    text: "Researching, building their own interview guide, and getting it reviewed one-on-one.",
  },
  {
    icon: UsersRoundIcon,
    accent: "bg-[#F472B6]/15 text-[#DB4A8C]",
    title: "Two full weeks of live practice",
    text: "School and club interview scenarios, with every student interviewed individually and coached in front of supportive peers.",
  },
] as const;

const INSTRUCTOR_ACHIEVEMENTS = [
  "Top female Public Forum debater in the U.S. and in California by NSDA merit points; NSDA All-American",
  "Top 7 at NSDA Nationals among ~1,000 of the nation's best speakers",
  "23 career bids to the Tournament of Champions · 24 top-20 speaker awards",
  "Coach, Harvard Debate Council Summer Workshops & Victory Briefs Institute",
];

const RELATED_COURSES = [
  { title: "Persuasive Writing & Speech", accent: "bg-[#2DBE93]" },
  { title: "Informative Writing & Speech", accent: "bg-[#F0554C]" },
  { title: "Personal Writing & Speech", accent: "bg-[#4F8EF7]" },
];

function CourseFactCard({ fact }: { fact: (typeof COURSE_FACTS)[number] }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-secondary/20 p-4">
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-lg",
          fact.chipBg,
          fact.chipText,
        )}
      >
        <fact.icon className="size-4" aria-hidden />
      </span>
      <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
        {fact.label}
      </p>
      <p className="text-sm font-semibold text-[#1B2559] text-pretty">
        {fact.value}
      </p>
      {fact.note ? (
        <p className="text-xs text-muted-foreground">{fact.note}</p>
      ) : null}
    </div>
  );
}

export default function SpeakingInterviewsWorkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3730A3] to-[#1B2559] py-10 sm:py-14">
        <Container className="relative max-w-3xl">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6B93B] px-4 py-1.5 text-xs font-bold tracking-wide text-[#1B2559] uppercase">
              Fall 2026 · New!
            </span>
            <div className="hidden shrink-0 rounded-2xl bg-white p-2 shadow-lg sm:block">
              <Image
                src="/mga-logo.png"
                alt="MGenius Academy | MGA"
                width={160}
                height={72}
                className="h-auto w-32"
              />
            </div>
          </div>

          <h1
            className={cn(
              lora.className,
              "mt-5 text-3xl leading-tight font-bold text-white sm:text-5xl",
            )}
          >
            Introduction to Speaking in Interviews &amp; Professional Settings
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/90 text-pretty">
            An 8-week, in-person small-group course where students learn what
            interviewers are really looking for — then practice it every week
            in live mock interviews with individual feedback.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2DBE93] px-4 py-2 text-sm font-semibold text-white">
              <CalendarDaysIcon className="size-4" aria-hidden />
              8 Thursdays
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Grades 4–8
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <UsersRoundIcon className="size-4" aria-hidden />
              4–8 students / class
            </span>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-gradient-to-b from-orange-50 via-rose-50/60 to-indigo-50/60 py-16">
        <Container className="max-w-3xl">
          <Link
            href="/workshop-event"
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <ArrowLeftIcon className="size-3.5" aria-hidden />
            Back to Events
          </Link>

          {/* Why now */}
          <div className="mt-8 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6]">
              <SparklesIcon className="size-5" aria-hidden />
            </span>
            <div>
              <h2
                className={cn(
                  lora.className,
                  "text-2xl font-bold text-[#1B2559] sm:text-3xl",
                )}
              >
                Why Interview Skills, and Why Now?
              </h2>
              <p className="text-sm text-muted-foreground">
                A skill kids use far earlier than their first job
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-border bg-white p-5 sm:p-8">
            <p className="text-base text-muted-foreground text-pretty">
              Long before their first job interview, our kids are already
              being interviewed: private and magnet school admissions, summer
              program applications, student club elections, leadership
              positions, competition panels. The students who can listen
              actively, tell their own story, and connect with an
              interviewer stand out everywhere — and these are learnable
              skills, best built early.
            </p>
            <p className="text-base text-muted-foreground text-pretty">
              Over 8 weeks, students will learn what interviewers actually
              look for, practice active listening, turn their own
              experiences into memorable stories, research and prepare like
              professionals, and complete multiple rounds of live mock
              interviews with individual feedback every single week.
            </p>
          </div>

          {/* Course details */}
          <div className="mt-14 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#4F8EF7]/15 text-[#3B4FD1]">
              <CalendarDaysIcon className="size-5" aria-hidden />
            </span>
            <div>
              <h2
                className={cn(
                  lora.className,
                  "text-2xl font-bold text-[#1B2559] sm:text-3xl",
                )}
              >
                Course Details
              </h2>
              <p className="text-sm text-muted-foreground">
                Everything you need to know before you enroll
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-white p-5 sm:p-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {COURSE_FACTS.map((fact) => (
                <CourseFactCard key={fact.label} fact={fact} />
              ))}
            </div>

            <p className="mt-6 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Class Dates
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CLASS_DATES.map((date, i) => (
                <span
                  key={date}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-semibold",
                    DATE_COLORS[i % DATE_COLORS.length],
                  )}
                >
                  {date}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#F6B93B]/40 bg-[#FFFBEB] p-4">
              <ShieldCheckIcon
                className="mt-0.5 size-5 shrink-0 text-[#B7791F]"
                aria-hidden
              />
              <p className="text-sm text-[#7C5A0F] text-pretty">
                <span className="font-semibold">Try the first class risk-free!</span>{" "}
                If it&rsquo;s not the right fit after session one, simply
                withdraw and pay for only that single class. Minimum 4
                students to run; capped at 8 so every student practices every
                week.
              </p>
            </div>
          </div>

          {/* What students will learn + instructor */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F0554C]/15 text-[#E2483F]">
                  <BookOpenIcon className="size-5" aria-hidden />
                </span>
                <h2
                  className={cn(
                    lora.className,
                    "text-2xl font-bold text-[#1B2559] sm:text-3xl",
                  )}
                >
                  What Students Will Learn
                </h2>
              </div>

              <ul className="mt-6 flex flex-col gap-4">
                {LEARNING_POINTS.map((point) => (
                  <li key={point.title} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full",
                        point.accent,
                      )}
                    >
                      <point.icon className="size-4" aria-hidden />
                    </span>
                    <p className="text-sm text-muted-foreground text-pretty">
                      <span className="font-semibold text-foreground">
                        {point.title} —
                      </span>{" "}
                      {point.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-5 sm:p-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary/40">
                <Image
                  src="/images/workshop-event/workshop_michi.jpg"
                  alt="Michi S., instructor for Introduction to Speaking in Interviews & Professional Settings"
                  fill
                  sizes="(min-width: 1024px) 300px, 100vw"
                  className="object-cover object-top"
                />
                <span className="absolute right-3 bottom-3 rounded-full bg-[#F0554C] px-3 py-1 text-xs font-bold text-white shadow-md">
                  #3 in the Nation
                </span>
              </div>
              <div>
                <p className={cn(lora.className, "text-lg font-bold text-[#1B2559]")}>
                  Michi S.
                </p>
                <p className="text-sm text-muted-foreground">
                  Harvard College · Co-President, Harvard Debate Council
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {INSTRUCTOR_ACHIEVEMENTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#8B5CF6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why in-person matters */}
          <div className="mt-14 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2DBE93]/15 text-[#209163]">
              <HandshakeIcon className="size-5" aria-hidden />
            </span>
            <div>
              <h2
                className={cn(
                  lora.className,
                  "text-2xl font-bold text-[#1B2559] sm:text-3xl",
                )}
              >
                Why In-Person Matters
              </h2>
              <p className="text-sm text-muted-foreground">
                Real practice, in front of a real audience
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-border bg-white p-5 sm:p-8">
            <p className="text-base text-muted-foreground text-pretty">
              Interviews happen face to face — so should the practice. In our
              classroom, students learn what no online class can teach: eye
              contact, posture, handshakes, reading the room, and managing
              real nerves in front of a real audience.
            </p>
            <p className="text-base text-muted-foreground text-pretty">
              With only 4–8 students per section, every child is individually
              interviewed and coached in front of supportive peers each week
              — the closest thing to a real interview panel, in a safe place
              to make mistakes and grow.
            </p>
          </div>

          {/* Also opening this year */}
          <div className="mt-14 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F6B93B]/20 text-[#B7791F]">
              <SparklesIcon className="size-5" aria-hidden />
            </span>
            <div>
              <h2
                className={cn(
                  lora.className,
                  "text-2xl font-bold text-[#1B2559] sm:text-3xl",
                )}
              >
                Also Opening This Year at MGA
              </h2>
              <p className="text-sm text-muted-foreground">
                Each course offered in two sections: Grades 4–6 and Grades
                7–8.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {RELATED_COURSES.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className={cn("h-1.5 w-full", course.accent)} />
                <div className="p-5">
                  <p className="font-semibold text-[#1B2559]">{course.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">8 hours</p>
                </div>
              </div>
            ))}
          </div>

          {/* Register footer */}
          <div className="mt-14 flex flex-col gap-8 rounded-3xl bg-gradient-to-br from-[#232E68] to-[#141B42] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex shrink-0 flex-col items-center gap-2">
                <div className="rounded-2xl bg-white p-2">
                  <Image
                    src="/images/workshop-event/workshop_michi_qr.png"
                    alt="QR code to register for Introduction to Speaking in Interviews & Professional Settings"
                    width={112}
                    height={112}
                    className="size-24 sm:size-28"
                  />
                </div>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded text-xs font-bold tracking-wide text-[#F6B93B] uppercase hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Scan to Register
                </a>
              </div>
              <div>
                <p
                  className={cn(
                    lora.className,
                    "text-xl font-bold text-white sm:text-2xl",
                  )}
                >
                  Reserve your spot —{" "}
                  <span className="text-[#F6B93B]">limited to 8 students!</span>
                </p>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#F6B93B] px-5 py-2.5 text-sm font-bold text-[#1B2559] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Register Now
                  <ArrowRightIcon className="size-4" aria-hidden />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:items-end">
              <div className="sm:text-right">
                <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#F6B93B] uppercase sm:justify-end">
                  <MapPinIcon className="size-3.5" aria-hidden />
                  MGenius Academy Co.
                </p>
                <p className="mt-1 text-white/90">
                  Suite 300, 288 Walnut St, Newton, MA 02460, USA
                </p>
              </div>
              <div className="sm:text-right">
                <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#F6B93B] uppercase sm:justify-end">
                  <PhoneIcon className="size-3.5" aria-hidden />
                  Call Us
                </p>
                <p className="mt-1 text-white/90">
                  (617) 388-5618 | (617) 821-1648
                </p>
              </div>
              <div className="sm:text-right">
                <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#F6B93B] uppercase sm:justify-end">
                  <MailIcon className="size-3.5" aria-hidden />
                  Email
                </p>
                <a
                  href="mailto:info@mgeniusacademy.com"
                  className="mt-1 block cursor-pointer text-white/90 hover:underline"
                >
                  info@mgeniusacademy.com
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
