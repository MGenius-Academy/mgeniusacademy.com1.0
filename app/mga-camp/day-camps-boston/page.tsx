import type { Metadata } from "next";
import Image from "next/image";
import { Lora } from "next/font/google";
import {
  CalendarDaysIcon,
  ClockIcon,
  SunIcon,
  DollarSignIcon,
  PiggyBankIcon,
  CheckIcon,
  UsersIcon,
  TriangleAlertIcon,
  PercentIcon,
  MapPinIcon,
  MailIcon,
  ArrowRightIcon,
  GraduationCapIcon,
  UtensilsIcon,
  SparklesIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { dayCamps } from "@/lib/day-camps";

const lora = Lora({ subsets: ["latin"], weight: ["600", "700"] });

const REGISTER_URL =
  "https://app.tryplayground.com/form/5KIochWriASAmshGsTag/fmWrZMJgpIYeCIW51Rrv";

const CAMP_DAY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbuORDV6T74iJaLnJtC-06oBo9__OB21GGtgX3GrNYwNbrKw/viewform";

export const metadata: Metadata = {
  title: "MGA STEM Day Camps (2026–2027)",
  description:
    "MGA STEM Day Camps for the 2026-2027 school year in Newton, MA — 15 no-school day camp dates, pricing, discounts, and registration.",
};

const DOT_COLORS = [
  "bg-[#F0554C]",
  "bg-[#4F8EF7]",
  "bg-[#33C57D]",
  "bg-[#8B5CF6]",
  "bg-[#F6B93B]",
  "bg-[#F472B6]",
];

const OVERVIEW_FACTS = [
  {
    icon: ClockIcon,
    chipBg: "bg-[#4F8EF7]/15",
    chipText: "text-[#3B4FD1]",
    label: "Camp Hours",
    value: "8:30 AM – 3:00 PM",
    note: "*Extended time available for select sessions",
  },
  {
    icon: GraduationCapIcon,
    chipBg: "bg-[#8B5CF6]/15",
    chipText: "text-[#8B5CF6]",
    label: "Grades",
    value: "PreK – G5",
  },
  {
    icon: DollarSignIcon,
    chipBg: "bg-[#F6B93B]/20",
    chipText: "text-[#B7791F]",
    label: "Pricing / Day",
    value: "$169 early bird · $189 standard",
  },
  {
    icon: PercentIcon,
    chipBg: "bg-[#33C57D]/15",
    chipText: "text-[#209163]",
    label: "Ways to Save",
    value: "$10 off/day multi-day · sibling discount",
  },
  {
    icon: SunIcon,
    chipBg: "bg-[#F0554C]/15",
    chipText: "text-[#E2483F]",
    label: "Extended Care",
    value: "Available for select sessions",
    note: "Contact us for details",
  },
  {
    icon: UtensilsIcon,
    chipBg: "bg-[#F472B6]/15",
    chipText: "text-[#DB4A8C]",
    label: "Lunch Option",
    value: "Pizza, pasta & juice — $15",
  },
  {
    icon: MapPinIcon,
    chipBg: "bg-[#4F8EF7]/15",
    chipText: "text-[#3B4FD1]",
    label: "Location",
    value: "288 Walnut St, Suite 300, Newton, MA",
  },
  {
    icon: MailIcon,
    chipBg: "bg-[#8B5CF6]/15",
    chipText: "text-[#8B5CF6]",
    label: "Register / Questions",
    value: "info@mgeniusacademy.com",
    href: "mailto:info@mgeniusacademy.com",
  },
] as const;

export default function DayCampsBostonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#5B7FFA] to-[#3B4FD1] py-10 sm:py-14">
        <Container className="relative max-w-3xl">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6B93B] px-4 py-1.5 text-xs font-bold tracking-wide text-[#1B2559] uppercase">
              Maker · Solver · Creator
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
              "mt-5 text-4xl leading-tight font-bold text-white sm:text-5xl",
            )}
          >
            MGA STEM Day Camps{" "}
            <span className="inline-flex items-center rounded-full bg-[#EF5A50] px-4 py-1 align-middle text-xl text-white sm:text-2xl">
              2026–2027
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/90 text-pretty">
            When school&rsquo;s out, the building begins! Full-day, hands-on
            camps packed with circuits, laser cutting, 3D design &amp;
            engineering — right here in Newton.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2DBE93] px-4 py-2 text-sm font-semibold text-white">
              <ClockIcon className="size-4" aria-hidden />
              8:30 AM – 3:00 PM
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Grades: Prek–G5
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <SunIcon className="size-4" aria-hidden />
              Extended time available *
            </span>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-gradient-to-b from-orange-50 via-rose-50/60 to-indigo-50/60 py-16">
        <Container className="max-w-3xl">
          {/* General Details & Overview */}
          <div className="flex items-center gap-3">
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
                General Details &amp; Overview
              </h2>
              <p className="text-sm text-muted-foreground">
                Everything you need to know before you pick a day
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-white p-5 sm:p-8">
            <p className="text-base text-muted-foreground text-pretty">
              When school&rsquo;s out, the building begins! Full-day,
              hands-on camps packed with circuits, laser cutting, 3D design
              &amp; engineering — right here in Newton.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {OVERVIEW_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-secondary/20 p-4"
                >
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
                  {"href" in fact && fact.href ? (
                    <a
                      href={fact.href}
                      className="cursor-pointer text-sm font-semibold text-[#1B2559] break-words hover:underline"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[#1B2559] text-pretty break-words">
                      {fact.value}
                    </p>
                  )}
                  {"note" in fact && fact.note ? (
                    <p className="text-xs text-muted-foreground text-pretty">
                      {fact.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
              <TriangleAlertIcon
                className="mt-0.5 size-3.5 shrink-0 text-[#B7791F]"
                aria-hidden
              />
              Multi-day &amp; sibling discounts can&rsquo;t be combined with
              Early Bird pricing — we&rsquo;ll pick whichever saves you more.
            </p>
          </div>

          {/* Pick Your Camp Days */}
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
                Pick Your Camp Days!
              </h2>
              <p className="text-sm text-muted-foreground">
                15 no-school days across the 2026–2027 year
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {dayCamps.map((camp, i) => {
              const isRecess = camp.occasion === "December Recess";
              return (
                <a
                  key={camp.date}
                  href={CAMP_DAY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative cursor-pointer rounded-2xl border bg-white p-4 transition-transform hover:scale-[1.02] hover:shadow-md",
                    isRecess
                      ? "border-[#F6B93B] bg-[#FFFBEB]"
                      : "border-border",
                  )}
                >
                  {isRecess ? (
                    <span className="mb-2 inline-block rounded-full bg-[#F6B93B] px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#1B2559] uppercase">
                      Dec Recess
                    </span>
                  ) : (
                    <span
                      className={cn(
                        "absolute top-4 right-4 size-2.5 rounded-full",
                        DOT_COLORS[i % DOT_COLORS.length],
                      )}
                      aria-hidden
                    />
                  )}
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {camp.weekday}
                  </p>
                  <p
                    className={cn(
                      lora.className,
                      "mt-0.5 text-xl font-bold text-[#1B2559]",
                    )}
                  >
                    {camp.date.replace(/, \d{4}$/, "")}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {camp.occasion}
                  </p>
                </a>
              );
            })}
          </div>

          <a
            href={CAMP_DAY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-[#F2685F] to-[#E2483F] px-6 py-5 transition-transform hover:scale-[1.01]"
          >
            <div>
              <p className="text-xs font-bold tracking-wide text-white/80 uppercase">
                Register Now
              </p>
              <p
                className={cn(
                  lora.className,
                  "text-2xl font-bold text-white",
                )}
              >
                15 Camp Days
              </p>
              <p className="text-sm text-white/85">Pick any you like!</p>
            </div>
            <ArrowRightIcon className="size-6 shrink-0 text-white" aria-hidden />
          </a>

          {/* Pricing + Ways to Save */}
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F6B93B]/20 text-[#B7791F]">
                  <DollarSignIcon className="size-5" aria-hidden />
                </span>
                <div>
                  <h2
                    className={cn(
                      lora.className,
                      "text-xl font-bold text-[#1B2559]",
                    )}
                  >
                    Pricing
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Per camp day
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5B7FFA] to-[#3B4FD1] px-5 py-4">
                  <span className="absolute top-0 right-0 rounded-bl-xl bg-[#F6B93B] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#1B2559] uppercase">
                    Save $20
                  </span>
                  <p className="text-xs font-bold tracking-wide text-white/80 uppercase">
                    Early Bird
                  </p>
                  <p
                    className={cn(
                      lora.className,
                      "mt-1 text-3xl font-bold text-white",
                    )}
                  >
                    $169
                    <span className="text-sm font-medium text-white/80">
                      {" "}
                      per day
                    </span>
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-[#2DBE93] px-5 py-4">
                  <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    Standard
                  </p>
                  <p
                    className={cn(
                      lora.className,
                      "mt-1 text-3xl font-bold text-[#1B2559]",
                    )}
                  >
                    $189
                    <span className="text-sm font-medium text-muted-foreground">
                      {" "}
                      per day
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <PercentIcon
                    className="mt-0.5 size-4 shrink-0 text-[#B7791F]"
                    aria-hidden
                  />
                  Early bird: sign up at least 1 month before your camp day to
                  grab the $169 rate!
                </p>
                <p className="flex items-start gap-2">
                  <SunIcon
                    className="mt-0.5 size-4 shrink-0 text-[#2DBE93]"
                    aria-hidden
                  />
                  * Extended hours after camp available for an additional
                  cost — just ask!
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2DBE93]/15 text-[#2DBE93]">
                  <PiggyBankIcon className="size-5" aria-hidden />
                </span>
                <div>
                  <h2
                    className={cn(
                      lora.className,
                      "text-xl font-bold text-[#1B2559]",
                    )}
                  >
                    Ways to Save
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Stack up the fun
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#33C57D]/15 text-[#209163]">
                    <CheckIcon className="size-3" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-foreground">
                      Multi-day:
                    </span>{" "}
                    $10 off each day when you sign up for more than one day
                    at a time.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/15 text-[#8B5CF6]">
                    <UsersIcon className="size-3" aria-hidden />
                  </span>
                  <span>Sibling discount for families enrolling more than one child.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F6B93B]/20 text-[#B7791F]">
                    <TriangleAlertIcon className="size-3" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-foreground">
                      Multi-day &amp; sibling discounts can&rsquo;t be
                      combined
                    </span>{" "}
                    with Early Bird pricing — we&rsquo;ll pick whichever
                    saves you more.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer flyer card */}
          <div className="mt-14 flex flex-col gap-8 rounded-3xl bg-gradient-to-br from-[#232E68] to-[#141B42] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex shrink-0 flex-col items-center gap-2">
                <div className="rounded-2xl bg-white p-2">
                  <Image
                    src="/images/mga-camp_day-camps-boston/qr-register.png"
                    alt="QR code to MGA day camp registration form"
                    width={112}
                    height={112}
                    className="size-24 sm:size-28"
                  />
                </div>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-xs font-bold tracking-wide text-[#F6B93B] uppercase hover:underline"
                >
                  Scan to Register!
                </a>
              </div>
              <div>
                <p
                  className={cn(
                    lora.className,
                    "text-xl font-bold text-white sm:text-2xl",
                  )}
                >
                  Save your spot — <span className="text-[#F6B93B]">days fill fast!</span>
                </p>
                <p className="mt-1 max-w-sm text-sm text-white/70">
                  Point your phone camera at the code to open the
                  registration form.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:items-end">
              <div className="sm:text-right">
                <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#F6B93B] uppercase sm:justify-end">
                  <MapPinIcon className="size-3.5" aria-hidden />
                  Location
                </p>
                <p className="mt-1 text-white/90">
                  288 Walnut Street, Suite 300, Newton, MA
                </p>
              </div>
              <div className="sm:text-right">
                <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#F6B93B] uppercase sm:justify-end">
                  <MailIcon className="size-3.5" aria-hidden />
                  Register / Questions
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
