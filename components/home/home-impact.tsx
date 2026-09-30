import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/home/reveal";

// Every figure links to the published news post (or section) it comes from.
const results = [
  {
    value: "16",
    label: "National & State Honors at Math Kangaroo 2026",
    href: "/steam-events/mga-students-shine-at-math-kangaroo-2026-16-national-state-honors",
  },
  {
    value: "4 of 6",
    label: "Special awards at the 2026 Massachusetts Invention Convention",
    href: "/steam-events/mga-wins-4-of-6-special-awards-at-the-massachusetts-invention-convention-and-advances-to-u-s-nationals",
  },
  {
    value: "13",
    label: "National Honor Roll placements, Noetic Spring 2026",
    href: "/steam-events/noetic-learning-math-contest-2026-spring-results",
  },
  {
    value: "33",
    label: "Public and private schools where MGA alumni study",
    href: "#alumni",
  },
];

const corePrograms = [
  "Young CEO & CTO: AI-Powered Tech Entrepreneurship Program",
  "Engineering Course",
  "Math Advancement & Competition Course",
  "Hands-on Camps & Workshops",
  "Advanced Tech Competitions & Applied Innovation",
  "Competition Hosting",
];

export function HomeImpact() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <h2 className="sr-only">MGA results and programs</h2>

        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-slate-200/80 bg-slate-200/80 lg:grid-cols-4">
            {results.map((item) => (
              <div key={item.label} className="bg-white">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col gap-3 p-5 transition-colors duration-200 hover:bg-[#1A43BF]/[0.04] sm:p-6 lg:p-7"
                >
                  <span className="order-2 text-sm leading-snug text-slate-600">{item.label}</span>
                  <span className="order-1 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl text-[#1A43BF] tabular-nums lg:text-5xl">
                    {item.value}
                  </span>
                  <span className="order-3 mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-[#0F172A]/70 transition-colors group-hover:text-[#1A43BF]">
                    {item.href.startsWith("#") ? "See the schools" : "Read the story"}
                    <ArrowRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold tracking-tight text-[#0F172A]">
              Core Programs &amp; Tracks
            </h3>
            <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-slate-600">
              Serving families in the Greater Boston area, including Newton, Wellesley, Needham,
              Belmont, Waltham, Lexington, and surrounding communities.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2.5 lg:col-span-8">
            {corePrograms.map((program) => (
              <li
                key={program}
                className="rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-[#0F172A]"
              >
                {program}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
