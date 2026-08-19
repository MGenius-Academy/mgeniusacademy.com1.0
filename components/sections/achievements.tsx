import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const groups = [
  {
    title: "2026 Math Kangaroo & Noetic Math Awards",
    image: "/images/home/Noetic-rngry7x643g2yvox591iqbq0tdx5zdj1zgevoo4cg0.jpg",
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
    image: "/images/home/ICW-rnnlxo96vbw8aengikiev6ktn4im402ehvrjxs1udc.jpg",
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
              className="flex flex-col gap-5 rounded-3xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                  <Image src={group.image} alt="" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-balance">{group.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-auto w-fit" render={<Link href={group.href} />}>
                {group.linkLabel}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
