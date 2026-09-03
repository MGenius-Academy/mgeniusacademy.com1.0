import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the MGA core team — instructors, engineers, and program leads who make MGA a place where curiosity, creativity, and learning come to life in Newton/Boston.",
};

const team = [
  {
    name: "Megan S",
    title: "Director of Academic Programs",
    image: "/images/our-team/Megan-1024x1024.webp",
  },
  {
    name: "Yuesen W",
    title: "CTO · MIT Research Scientist, Ph.D",
    image: "/images/our-team/yuesen-1024x1024.webp",
  },
  {
    name: "Zhili W",
    title: "Chief Executive Officer",
    image: "/images/our-team/zhili-1-1024x1024.jpg",
  },
  {
    name: "Tianze L",
    title: "Lead Engineering Instructional Specialist",
    image: "/images/our-team/tianze-1024x1024.webp",
  },
  {
    name: "Grace H",
    title: "Instructional Specialist",
    image: "/images/our-team/grace-1-1024x1024.jpg",
  },
  {
    name: "Ying W",
    title: "Director of Math Programs",
    image: "/images/our-team/wangying-1024x1024.webp",
  },
  {
    name: "Sharon C",
    title: "Growth & Innovation Specialist",
    image: "/images/our-team/Sharon-1.png",
  },
  {
    name: "Trevor L",
    title: "Instructional Specialist",
    image: "/images/our-team/trevor-1-1024x1024.jpg",
  },
  {
    name: "Jessica F",
    title: "Instructional Specialist",
    image: "/images/our-team/jessi-1-1024x1024.jpg",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Core Team"
        description="Get to know the people who make MGA a place where curiosity, creativity, and learning come to life."
      />

      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-y-12">
            {Array.from({ length: Math.ceil(team.length / 3) }, (_, rowIndex) =>
              team.slice(rowIndex * 3, rowIndex * 3 + 3),
            ).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col divide-y divide-border sm:flex-row sm:justify-center sm:divide-x sm:divide-y-0"
              >
                {row.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col items-center px-8 py-8 text-center first:pt-0 last:pb-0 sm:w-1/3 sm:py-0"
                  >
                    <div className="relative size-40 shrink-0 overflow-hidden rounded-full sm:size-44">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="176px"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-balance">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent text-balance">
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
