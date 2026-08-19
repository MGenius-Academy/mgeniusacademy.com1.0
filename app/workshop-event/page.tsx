import type { Metadata } from "next";
import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Event & Workshop",
  description:
    "MGA's community workshops and special events in Newton, MA — award celebrations, open houses, and hands-on mini workshops for families.",
};

const events = [
  {
    title: "Noetic Learning Math Contest Award Celebration",
    date: "May 9, 2026, 2:30 PM – 3:00 PM",
    image: "/images/workshop-event/Noetic0509-1-731x1024.jpg",
    ended: true,
  },
  {
    title: "Mother's Day Special Open House",
    date: "May 9, 2026, 1:30 PM – 4:30 PM",
    image: "/images/workshop-event/WechatIMG13908-745x1024.jpg",
    ended: true,
  },
  {
    title: "Shadow Puppetry & Light Science Mini Workshop",
    date: "April 11, 2026, 1:30 PM – 3:00 PM",
    image: "/images/workshop-event/0411-Workshop-0323-791x1024.jpg",
    ended: true,
  },
  {
    title: "Easter Fun: MGA Special Event for Pre-K",
    date: "April 4, 2026, 1:30 PM – 4:15 PM",
    image: "/images/workshop-event/0404Easter-791x1024.jpg",
    ended: true,
  },
];

export default function WorkshopEventPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Event &amp; Workshop"
        description="Join us for hands-on workshops, seasonal open houses, and community celebrations — an exciting journey of innovation, engineering, and creativity for the whole family."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <Card key={event.title} className="h-full gap-3 overflow-hidden py-0">
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 pb-5">
                  {event.ended ? (
                    <Badge variant="outline" className="w-fit">
                      Past Event
                    </Badge>
                  ) : null}
                  <h3 className="font-semibold leading-snug">{event.title}</h3>
                  <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
                    <CalendarIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                    {event.date}
                  </p>
                  <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
                    <MapPinIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                    {siteConfig.address.line1}, {siteConfig.address.line2}
                  </p>
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
