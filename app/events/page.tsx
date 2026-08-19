import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CakeIcon, PartyPopperIcon, SparklesIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Events",
  description:
    "MGA hosts workshops, community open houses, award celebrations, and STEM birthday parties in Newton, MA. See what's happening.",
};

const eventLinks = [
  {
    title: "Event & Workshop",
    href: "/workshop-event",
    icon: SparklesIcon,
    description:
      "Mini workshops, open houses, and seasonal special events for families and young makers.",
  },
  {
    title: "News",
    href: "/eventnews",
    icon: PartyPopperIcon,
    description:
      "The latest from MGA — award ceremonies, student milestones, and community happenings.",
  },
  {
    title: "Birthday Party",
    href: "/birthday-party",
    icon: CakeIcon,
    description:
      "Celebrate with a STEM birthday party — robotics builds, laser-cut keepsakes, and pizza.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="What's Happening at MGA"
        description="From hands-on workshops and community open houses to STEM birthday parties, MGA brings families and young makers together year-round in Newton, MA."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {eventLinks.map((item) => (
              <Link key={item.title} href={item.href} className="group">
                <Card className="h-full p-6">
                  <item.icon className="size-8 text-primary" aria-hidden />
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
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
