import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Explore MGA's K-8 STEM curriculum in Newton/Boston: hands-on engineering, Singapore Math, AI & innovation programs, and advanced tech competitions.",
};

const tracks = [
  {
    title: "Engineering",
    href: "/curriculum/engineering-2",
    image: "/images/home/home-course-1.jpg",
    description:
      "Five progressive levels (EP1–EP5) of hands-on, project-based engineering for grades K–8, taught in small groups of up to 8 students.",
  },
  {
    title: "Singapore Math",
    href: "/curriculum/singapore-math",
    image: "/images/home/home-course-3.jpg",
    description:
      "A K–G6 mastery-based math program blending Singapore Math method, CCSS alignment, and competition math preparation.",
  },
  {
    title: "AI & Innovation Programs",
    href: "/ai-programs-boston",
    image: "/images/home/home-course-2.jpg",
    description:
      "Elite tracks in AI, invention, and entrepreneurship for advanced students — from AI chatbots to global invention competitions.",
  },
  {
    title: "Advanced Tech Competitions & Applied Innovation",
    href: "/curriculum/advanced-tech-competitions",
    image: "/images/home/Bostoncourse4.png",
    description:
      "End-to-end project mentoring for prestigious competitions such as Invention Convention Worldwide (ICW) and the NeuroMaker Creative Challenge.",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum"
        title="A K–8 STEM Curriculum Built to Grow With Your Child"
        description="MGA's curriculum spans hands-on engineering, mastery-based math, and advanced AI & innovation programs — all taught project-based, in small groups, with a spiral learning approach that deepens understanding year after year."
      />
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Four Tracks, One Learning Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Every MGA program is project-based and grouped by age and
              experience, so students build real skills through designing,
              building, testing, and improving their own work — not just
              following instructions. Explore each track below to find the
              right fit for your child.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tracks.map((track) => (
              <Link key={track.title} href={track.href} className="group">
                <Card className="h-full gap-3 overflow-hidden py-0">
                  {track.image ? (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-secondary" />
                  )}
                  <div className="flex flex-1 flex-col gap-2 px-6 pb-6 pt-1">
                    <h3 className="text-xl font-semibold">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {track.description}
                    </p>
                    <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                      Explore program
                      <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
