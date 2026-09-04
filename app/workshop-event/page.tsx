import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Event & Workshop",
  description:
    "MGA's community workshops and special events in Newton, MA — award celebrations, open houses, and hands-on mini workshops for families.",
};

const events = [
  {
    title: "Newtonville Village Day",
    date: "September 20, 2026",
    image: "/images/workshop-event/workshop09022026.png",
    learnMoreUrl: "https://www.newtonvilleareacouncil.com/village-day",
  },
  {
    title: "Cambridge Science Carnival",
    date: "October 4, 2026",
    image: "/images/workshop-event/workshop20261004.png",
    learnMoreUrl: "https://cambridgesciencecarnival.org/",
    address: "292 Main St, Cambridge, MA 02142",
  },
];

export default function WorkshopEventPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        <Image
          src="/images/workshop-event/workshophero01.png"
          alt="MGA students building hands-on projects together"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <Container className="relative max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/85">
            Events
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            Event &amp; Workshop
          </h1>
          <p className="mt-4 text-lg text-white/85 text-pretty">
            Join us for hands-on workshops, seasonal open houses, and
            community celebrations — an exciting journey of innovation,
            engineering, and creativity for the whole family.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <Card key={event.title} className="h-full gap-3 overflow-hidden py-0">
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 pb-5">
                  <h3 className="font-semibold leading-snug">{event.title}</h3>
                  <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
                    <CalendarIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                    {event.date}
                  </p>
                  {event.address ? (
                    <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
                      <MapPinIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                      {event.address}
                    </p>
                  ) : null}
                  <Link
                    href={event.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Want to be notified about future workshops and open houses? Reach out and
            we’ll add you to the list.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
