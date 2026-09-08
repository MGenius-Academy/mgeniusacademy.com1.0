import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { camps } from "@/lib/camps";

export const metadata: Metadata = {
  title: "STEM Summer Camps in Boston",
  description:
    "Explore MGA's 2026 lineup of week-long STEM summer camps in Newton, MA — AI robots, battle bots, drones, chemistry, and invention-based programs for K-8 students.",
};

export default function StemSummerCampsBostonPage() {
  return (
    <>
      <PageHero
        eyebrow="Week Camps"
        title="STEM Summer Camps in Boston"
        description="MGA's 2026 camp lineup for K-8 students in Newton, MA and the Greater Boston area — hands-on AI, robotics, engineering, coding, chemistry, and invention-based projects. Students build real projects while developing creativity, problem-solving skills, and confidence."
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              2026 Spring &amp; Summer Camp Lineup
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Twelve themed week-long programs, each led by an MGA instructor in small
              groups. Reach out to find the best fit for your child’s grade and
              interests.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {camps.map((camp) => (
              <Card key={camp.slug} className="h-full gap-3 overflow-hidden py-0">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={camp.image}
                    alt={camp.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 pb-5">
                  <h3 className="font-semibold">{camp.title}</h3>
                  <Badge variant="secondary" className="w-fit">
                    <CalendarIcon className="size-3" aria-hidden />
                    {camp.ageGroup}
                  </Badge>
                  <Button
                    size="sm"
                    className="mt-auto w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                    render={
                      <Link
                        href={`/mga-camp/stem-summer-camps-boston/${camp.slug}`}
                      />
                    }
                  >
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Reserve Your Child's Camp Spot"
        description="Spots fill quickly by grade and week — get in touch to check availability."
      />
    </>
  );
}
