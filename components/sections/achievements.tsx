import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const groups = [
  {
    title: "2026 Math Kangaroo & Noetic Math Awards",
    backgroundImage: "/images/home/achievement-bg-math-kangaroo.jpg",
    logos: [
      {
        src: "/images/home/math-kangaroo-rngrqc1ws4nhkn596uc6tbctf0sbes848fe8r3t8n4.jpg",
        alt: "Math Kangaroo USA",
      },
      {
        src: "/images/home/Noetic-rngry7x643g2yvox591iqbq0tdx5zdj1zgevoo4cg0.jpg",
        alt: "Noetic Learning Math Contest",
      },
    ],
    href: "/boston-stem/math-awards",
    linkLabel: "View Math Awards",
    stats: [
      { value: "5x", label: "National — Top 1" },
      { value: "25x", label: "National — Top 20" },
      { value: "8x", label: "MA State — Top 3" },
      { value: "3x", label: "Team Winner" },
      { value: "13x", label: "National Honor Roll" },
      { value: "7x", label: "Honorable Mention" },
    ],
  },
  {
    title: "2026 Invention Convention Worldwide Awards",
    backgroundImage: "/images/home/achievement-bg-icw.jpg",
    logos: [
      {
        src: "/images/home/ICW-rnnlxo96vbw8aengikiev6ktn4im402ehvrjxs1udc.jpg",
        alt: "Invention Convention Worldwide",
      },
    ],
    href: "/icw-awards",
    linkLabel: "View Innovation Awards",
    stats: [
      { value: "1x", label: "RTX Dependable Power Award" },
      { value: "1x", label: "Avangrid Sustainability Award" },
      { value: "1x", label: "Emerson Green Innovations Award" },
      { value: "1x", label: "Belcan Passion to Innovate Award" },
    ],
  },
];

export function Achievements() {
  return (
    <section className="bg-secondary/40 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            MGA Competition Awards &amp; Student Achievements
          </h2>
          <p className="mt-3 text-muted-foreground">
            MGA students have earned recognition in national and international
            competitions, including Math Kangaroo, Noetic Learning Math
            Contest, and Invention Convention Worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="relative isolate flex flex-col gap-6 overflow-hidden rounded-3xl p-8 sm:p-10"
            >
              <Image
                src={group.backgroundImage}
                alt=""
                fill
                className="-z-20 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-black/75" />

              <div className="flex items-center gap-2 sm:gap-4">
                {group.logos.map((logo) => (
                  <div
                    key={logo.src}
                    className="relative h-12 min-w-0 flex-1 overflow-hidden rounded-xl bg-white p-2 sm:h-20 sm:flex-none sm:w-56 sm:p-3"
                  >
                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-balance text-white sm:text-2xl">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {group.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
                    <p className="mt-1 text-sm text-white/80 sm:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                variant="secondary"
                className="mt-auto w-fit"
                render={<Link href={group.href} />}
              >
                {group.linkLabel}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
