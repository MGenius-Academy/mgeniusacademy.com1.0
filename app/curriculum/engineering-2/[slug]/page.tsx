import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, UsersIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { engineeringLevels, getEngineeringLevelBySlug } from "@/lib/engineering-levels";

export function generateStaticParams() {
  return engineeringLevels.map((level) => ({ slug: level.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/curriculum/engineering-2/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const level = getEngineeringLevelBySlug(slug);
  if (!level) return {};

  return {
    title: `${level.level}: ${level.tagline}`,
    description: `${level.level} (${level.ageGroup}) — ${level.description[0]}`,
  };
}

export default async function EngineeringLevelDetailPage(
  props: PageProps<"/curriculum/engineering-2/[slug]">,
) {
  const { slug } = await props.params;
  const level = getEngineeringLevelBySlug(slug);
  if (!level) notFound();

  return (
    <>
      <PageHero
        eyebrow="Curriculum · Engineering"
        title={level.level}
        description={level.tagline}
      />

      <section className="py-16">
        <Container className="max-w-3xl">
          <Card className="gap-0 overflow-hidden py-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={level.image}
                alt={`${level.level} engineering class for kids in Boston`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:p-8">
              <Badge variant="secondary" className="w-fit">
                <UsersIcon className="size-3" aria-hidden />
                {level.ageGroup}
              </Badge>

              <div className="flex flex-col gap-4">
                {level.description.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Classroom Highlights
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {level.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-4/3 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`${level.level} classroom highlight`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

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
            <Button
              size="lg"
              variant="outline"
              render={
                <a href={siteConfig.enrollUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              Enroll Now
            </Button>
            <Link
              href="/curriculum/engineering-2"
              className="flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              <ArrowLeftIcon className="size-3.5" />
              Back to Engineering Levels
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Start Your Child's Engineering Journey?"
        description="Book a free trial class and see MGA's hands-on engineering curriculum in action."
      />
    </>
  );
}
