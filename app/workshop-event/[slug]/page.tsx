import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  pastWorkshopEvents,
  getPastWorkshopEventBySlug,
  type WorkshopEventBlock,
} from "@/lib/workshop-events";

export function generateStaticParams() {
  return pastWorkshopEvents.map((event) => ({ slug: event.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/workshop-event/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const event = getPastWorkshopEventBySlug(slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.summary,
  };
}

function WorkshopEventBlockContent({ block }: { block: WorkshopEventBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-muted-foreground text-pretty">{block.text}</p>;
    case "subheading":
      return (
        <h3 className="text-lg font-semibold text-foreground">{block.text}</h3>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <CheckIcon
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden
              />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "schedule":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item) => (
            <li
              key={item.time}
              className="flex flex-col gap-0.5 rounded-xl border border-border p-3 text-sm sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="shrink-0 font-medium text-foreground">
                {item.time}
              </span>
              <span className="text-muted-foreground">{item.activity}</span>
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            className="object-contain p-2"
          />
        </div>
      );
    case "imageGrid":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      );
  }
}

export default async function WorkshopEventDetailPage(
  props: PageProps<"/workshop-event/[slug]">,
) {
  const { slug } = await props.params;
  const event = getPastWorkshopEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      <PageHero eyebrow="Past Event" title={event.title} description={event.summary} />

      <section className="py-16">
        <Container className="max-w-3xl">
          <Card className="gap-0 overflow-hidden py-0">
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:p-8">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">
                  <CalendarDaysIcon className="size-3" aria-hidden />
                  {event.date}
                </Badge>
                <Badge variant="secondary">
                  <ClockIcon className="size-3" aria-hidden />
                  {event.time}
                </Badge>
                {event.gradeLevel ? (
                  <Badge variant="secondary">{event.gradeLevel}</Badge>
                ) : null}
                <Badge variant="outline">This event has ended</Badge>
              </div>

              <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {event.location}
              </p>
            </div>
          </Card>

          {event.sections.map((section) => (
            <div key={section.heading} className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {section.blocks.map((block, i) => (
                  <WorkshopEventBlockContent key={i} block={block} />
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/workshop-event"
            className="mt-10 flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            <ArrowLeftIcon className="size-3.5" />
            Back to Events
          </Link>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
