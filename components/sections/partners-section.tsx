import Image from "next/image";
import { Container } from "@/components/container";

const partners = [
  {
    name: "NeuroMaker",
    logo: "/images/home/neuromaker-150x150.webp",
    href: "https://www.neuromakerstem.com/",
    description:
      "As a pioneering unicorn company in the Body-computer interface (BCI) arena, NeuroMaker is at the forefront of advancing the core technologies behind BCIs.",
  },
  {
    name: "Boston Makers & Innovators Challenge",
    logo: "/images/home/BMIC-logo-150x150.webp",
    href: "https://www.bostonmic.org/",
    description:
      "BMIC is a youth STEM competition that empowers students to become problem-solvers and creators by turning their ideas into real-world solutions.",
  },
  {
    name: "STEM Together",
    logo: "/images/home/Stem-Together-150x150.webp",
    href: "https://stemtogetherus.org/",
    description:
      "At STEM Together, we believe that curiosity is the foundation of innovation. Our mission is to inspire young minds to explore STEM.",
  },
];

export function PartnersSection() {
  return (
    <section className="bg-secondary/40 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Partnerships</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-background p-6 text-center"
            >
              <div className="relative size-16">
                <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
              </div>
              <h3 className="font-semibold">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm font-medium text-primary hover:underline"
              >
                Learn More &raquo;
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
