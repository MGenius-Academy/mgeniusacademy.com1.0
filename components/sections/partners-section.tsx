import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/home/reveal";
import { sectionTitle } from "@/components/home/styles";

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
    <section className="border-t border-slate-200/80 bg-white py-16 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <h2 className={sectionTitle}>Partnerships</h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          <ul className="divide-y divide-slate-200/80 border-y border-slate-200/80">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[4rem_1fr] items-start gap-5 py-7 sm:grid-cols-[5rem_1fr_auto] sm:gap-7"
                >
                  <span className="relative size-16 overflow-hidden rounded-[16px] border border-slate-200/80 bg-white sm:size-20">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-bold tracking-tight text-[#0F172A] transition-colors group-hover:text-[#1A43BF]">
                      {partner.name}
                    </span>
                    <span className="mt-2 block max-w-[60ch] text-[15px] leading-relaxed text-slate-600">
                      {partner.description}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1A43BF] sm:hidden">
                      Learn More &raquo;
                    </span>
                  </span>
                  <span className="hidden items-center gap-1.5 self-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0F172A] transition-colors duration-200 group-hover:border-[#1A43BF] group-hover:text-[#1A43BF] sm:inline-flex">
                    Learn More
                    <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
