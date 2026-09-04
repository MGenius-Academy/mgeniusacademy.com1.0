import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { camps, getCampBySlug } from "@/lib/camps";

export function generateStaticParams() {
  return camps.map((camp) => ({ slug: camp.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/mga-camp/stem-summer-camps-boston/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const camp = getCampBySlug(slug);
  if (!camp) return {};

  return {
    title: camp.title,
    description: `${camp.title} — MGA's 2026 Spring & Summer STEM Camp for ${camp.ageGroup} in Newton, MA.`,
  };
}

export default async function CampDetailPage(
  props: PageProps<"/mga-camp/stem-summer-camps-boston/[slug]">,
) {
  const { slug } = await props.params;
  const camp = getCampBySlug(slug);
  if (!camp) notFound();

  return (
    <>
      <PageHero
        eyebrow="MGA Camp · Week Camp"
        title={camp.title}
        description="Join Our 2026 Spring & Summer Camp: A Journey of Creativity and Learning!"
      />

      <section className="py-16">
        <Container className="max-w-3xl">
          <Card className="gap-0 overflow-hidden py-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={camp.image}
                alt={camp.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:p-8">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">
                  <CalendarIcon className="size-3" aria-hidden />
                  {camp.ageGroup}
                </Badge>
                <Badge variant="secondary">
                  <ClockIcon className="size-3" aria-hidden />
                  8:30am–3:00pm daily
                </Badge>
              </div>

              <p className="text-muted-foreground text-pretty">
                Calling all kids in {camp.ageGroup}! Join us for an exciting
                day filled with engaging activities, interactive projects,
                and endless opportunities to unleash your imagination. Our
                day camp is perfect for all skill levels and designed to
                inspire creativity while celebrating a historic day with fun
                and innovation. Optional extended pick up is available until
                5pm.
              </p>

              <p className="text-sm text-muted-foreground">
                Click below to reserve your spot today — spaces are limited!
                We can&rsquo;t wait to see you there.
              </p>

              <div className="flex flex-wrap items-center gap-4">
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
                  Register Now
                </Button>
                <Link
                  href="/mga-camp/stem-summer-camps-boston"
                  className="flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  <ArrowLeftIcon className="size-3.5" />
                  Back to All Camps
                </Link>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <CtaBanner
        title="Reserve Your Child's Camp Spot"
        description="Spots fill quickly by grade and week — get in touch to check availability."
      />
    </>
  );
}
