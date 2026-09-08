import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { CompassIcon, LightbulbIcon, WrenchIcon, WarehouseIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose MGA",
  description:
    "MGenius Academy (MGA) is a STEM, AI, and engineering academy in Newton/Boston with a 4,000-square-foot learning space for hands-on K-12 education.",
};

const pillars = [
  {
    icon: CompassIcon,
    title: "Mission",
    body: "MGenius Academy (MGA) is a STEM, AI, and engineering academy based in the Boston area, dedicated to creating an open and creative learning environment for children. We provide hands-on STEM education for students in grades K–12, helping them develop independent thinking and real-world problem-solving skills — empowering them to explore, create, and innovate through engineering, mathematics, and technology. In 2024, MGA integrated the Spark Math program to further strengthen our math curriculum.",
    image: "/images/about/MGA-1-1024x768.jpg",
  },
  {
    icon: LightbulbIcon,
    title: "Philosophy",
    body: "At MGA, we focus on developing strong problem-solving abilities through an engineering mindset. Students learn to identify challenges, analyze problems, and build solutions using critical thinking, creativity, and structured reasoning. Through STEM education, math training, and AI learning, students gain the confidence to tackle real-world challenges and build lifelong learning skills.",
    image: "/images/about/MGA-3-1024x768.jpg",
  },
  {
    icon: WrenchIcon,
    title: "STEM Education Approach",
    body: "MGA develops comprehensive STEM programs that combine engineering, electronics, programming, and mathematics. Our curriculum reflects real-world product development, so students learn by building, testing, and improving projects — exploring robotics, coding, 3D printing, and AI as tools to solve problems and think creatively.",
    image: "/images/about/MGA-5-1024x768.jpg",
  },
];

const gallery = [
  "/images/about/MGA-12-1024x768.jpg",
  "/images/about/MGA-8-1024x768.jpg",
  "/images/about/MGA-7-1024x768.jpg",
  "/images/about/MGA-6-1024x768.jpg",
  "/images/about/MGA-2-1024x768.jpg",
  "/images/about/MGA-10-1024x768.jpg",
  "/images/about/MGA-11-1024x768.jpg",
  "/images/about/MGA-4-1024x768.jpg",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose MGA"
        title="A STEM, AI & Engineering Academy in Boston"
        description="Located in Newton, MGA gives K-8 students a real engineering lab — not a classroom of worksheets — to explore, build, and think like innovators."
      />

      <section className="py-16">
        <Container className="flex flex-col gap-16">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="size-5" aria-hidden />
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-muted-foreground text-pretty">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <WarehouseIcon className="size-5" aria-hidden />
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A 4,000-Square-Foot STEM Learning Space
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Our Newton facility is equipped with professional tools —
              3D printers, robotics systems, electronics workstations, and
              engineering labs — giving students access to real-world tools
              and a collaborative environment where they can explore,
              experiment, and build confidently.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Inside the MGA STEM learning space"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
