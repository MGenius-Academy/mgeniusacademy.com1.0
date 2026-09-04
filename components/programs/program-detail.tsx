import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, CheckIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import type { AiProgram } from "@/lib/ai-programs";
import { InstructorCard } from "@/components/programs/instructor-card";
import { PhaseCard } from "@/components/programs/phase-card";
import { CompetitionInfoCard } from "@/components/programs/competition-info";
import { Achievements } from "@/components/programs/achievements";
import { JourneySteps } from "@/components/programs/journey-steps";

export function ProgramDetail({
  program,
  eyebrow,
  backHref,
  backLabel,
  ctaTitle = "Ready for the Next Level?",
  ctaDescription = "Book a free trial class and talk to our team about which track fits your child.",
}: {
  program: AiProgram;
  eyebrow: string;
  backHref: string;
  backLabel: string;
  ctaTitle?: string;
  ctaDescription?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={program.name} description={program.requirement} />

      <section className="py-16">
        <Container className="max-w-3xl">
          <Card className="gap-0 overflow-hidden py-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={program.image}
                alt={program.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:p-8">
              <Badge variant="secondary" className="w-fit">
                {program.requirement}
              </Badge>

              <div className="flex flex-col gap-4">
                {program.detailDescription.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Program Overview
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                {program.overview.map((fact) => (
                  <div key={fact.label} className="rounded-xl border border-border p-4">
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
              {program.instructors && program.instructors.length === 1 && (
                <InstructorCard instructor={program.instructors[0]} />
              )}
            </div>
          </div>

          {program.mgaPromise && (
            <div className="mt-14 rounded-xl bg-primary/5 p-6">
              <p className="text-sm text-foreground text-pretty">{program.mgaPromise}</p>
            </div>
          )}

          {program.journey && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                The Invention Journey
              </h2>
              <div className="mt-6">
                <JourneySteps stages={program.journey} />
              </div>
            </div>
          )}

          {program.phases && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Program Phases
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {program.phases.map((phase) => (
                  <PhaseCard key={phase.title} phase={phase} />
                ))}
              </div>
            </div>
          )}

          {program.instructors && program.instructors.length > 1 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Core Teaching Team
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.instructors.map((instructor) => (
                  <InstructorCard key={instructor.name} instructor={instructor} />
                ))}
              </div>
            </div>
          )}

          {program.competitions && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                About The Competition{program.competitions.length > 1 ? "s" : ""}
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {program.competitions.map((competition) => (
                  <CompetitionInfoCard key={competition.name} competition={competition} />
                ))}
              </div>
            </div>
          )}

          {program.achievements && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                MGA Track Record
              </h2>
              <div className="mt-6">
                <Achievements
                  intro={program.achievements.intro}
                  seasons={program.achievements.seasons}
                  image={program.achievements.image}
                />
              </div>
            </div>
          )}

          {program.whoShouldApply && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Who Should Apply
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {program.whoShouldApply.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {program.gallery && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Classroom Highlights
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-4/3 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={src}
                      alt={`${program.name} classroom highlight`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={
                <a
                  href={siteConfig.trialFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Book a Trial Class
            </Button>
            <Link
              href={backHref}
              className="flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              <ArrowLeftIcon className="size-3.5" />
              {backLabel}
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner title={ctaTitle} description={ctaDescription} />
    </>
  );
}
