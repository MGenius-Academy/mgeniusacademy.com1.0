import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { ProgramFacts } from "@/components/singapore-math/program-facts";
import { KeyFeatures } from "@/components/singapore-math/key-features";
import { ApTabs } from "@/components/singapore-math/ap-tabs";
import { classFormat, apKeyFeatures } from "@/lib/singapore-math";

export const metadata: Metadata = {
  title: "Advanced Program (AP) — Singapore Math",
  description:
    "MGA's Advanced Program (AP) is based on the Singapore Mathematics System and aligned with U.S. CCSS, covering early childhood through sixth-grade math for PreK-G6 students in Newton, MA.",
};

const apGallery = [
  "/images/curriculum_singapore-math/gallery/ap-1.jpg",
  "/images/curriculum_singapore-math/gallery/ap-2.jpg",
  "/images/curriculum_singapore-math/gallery/ap-3.jpg",
  "/images/curriculum_singapore-math/gallery/ap-4.jpg",
];

export default function AdvancedMathProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Singapore Math"
        title="Advanced Program (AP)"
        description="A complete Singapore Math curriculum from early childhood through Grade 6. AP covers everything in school math, then goes beyond it in depth and in range, so students build strong foundations while working ahead of grade level."
      />

      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="relative aspect-21/9 overflow-hidden rounded-3xl">
            <Image
              src="/images/curriculum_singapore-math/ap-hero.jpg"
              alt="MGA Advanced Program (AP) math class in Boston"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-10">
            <ProgramFacts ageGroup="PreK–G6" classFormat={classFormat} />
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              School Math and Beyond
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-foreground">
                  Everything School Math Covers
                </h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  AP is based on the Singapore Mathematics system, a globally
                  recognized standard. In the 2023 TIMSS international
                  study, Singapore&rsquo;s students outperformed every other
                  participating education system in math. The curriculum is
                  aligned with U.S. Common Core (CCSS) standards and
                  mainstream math textbooks, so students master the school
                  syllabus for their grade.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Beyond School: Depth
                </h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  Lessons go further into each topic than a typical school
                  class. Students work on the higher-order thinking
                  questions that appear on tests, non-routine word
                  problems, and selected competition-style problems. They
                  learn specific problem-solving strategies and practice
                  critical thinking, so they can handle questions they have
                  not seen before.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Beyond School: Range
                </h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  AP also covers more ground, from early math through Grade
                  6, including number theory, geometry, algebra, and more.
                  Some topics come earlier than in school: AP K teaches
                  money, which the Common Core introduces in Grade 2, and AP
                  5 covers ratio, rate, and percentage, which the Common
                  Core introduces in Grade 6. Students learn at least six
                  months ahead of grade-level expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Key Features
            </h2>
            <div className="mt-6">
              <KeyFeatures features={apKeyFeatures} />
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Core Mathematical Concepts
            </h2>
            <div className="mt-6">
              <ApTabs />
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Teaching Approach
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Every lesson teaches both how to solve a problem and how to
              think about it. Students learn seven problem-solving methods
              and practice eight thinking skills, shown below. When they
              meet an unfamiliar question, they can analyze it, choose an
              effective method, and explain why it works. That is the basis
              for strong mathematical reasoning and real confidence.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
                <Image
                  src="/images/curriculum_singapore-math/teaching-problem-solving.jpg"
                  alt="7 problem-solving methods taught in MGA's math program"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
                <Image
                  src="/images/curriculum_singapore-math/teaching-thinking-skills.jpg"
                  alt="8 thinking skills developed in MGA's math program"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Classroom Highlights
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {apGallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-4/3 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt="Advanced Program (AP) classroom highlight"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/curriculum/singapore-math"
              className="flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              <ArrowLeftIcon className="size-3.5" />
              Back to Singapore Math
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Give Your Child a Head Start in Math"
        description="Book a trial class and see MGA's Advanced Program in action."
      />
    </>
  );
}
