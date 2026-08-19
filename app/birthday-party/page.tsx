import type { Metadata } from "next";
import { CakeIcon, CheckIcon, ClockIcon, UsersIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Birthday Party",
  description:
    "Celebrate your child's birthday at MGA with a STEM-powered party in Newton, MA — robotics builds, laser-cut keepsakes, private party rooms, and pizza.",
};

const packages = [
  {
    name: "Maker VP",
    duration: "2 Hours",
    guests: "10 Guests",
    perks: [
      "1 fantastic project",
      "60 minutes of Robotic Build Up",
      "45 minutes in a Private Party Room",
      "2 Large Pizzas",
      "Unlimited Honest Juice Boxes",
      "Awesome MGA Party Host",
      "Party Paperware, Cups and Utensils",
    ],
    extraGuest: "$29 per additional guest",
    featured: false,
  },
  {
    name: "Ultimate Creator",
    duration: "2 Hours",
    guests: "12 Guests",
    perks: [
      "2 projects to choose from",
      "60 minutes of Robotic Build Up",
      "45 minutes in a Private Party Room",
      "3 Large Pizzas",
      "Unlimited Honest Juice Boxes",
      "Awesome MGA Party Host",
      "Party Paperware, Cups and Utensils",
      "Customized laser-cut name tag (birthday kid)",
    ],
    extraGuest: "$33 per additional guest",
    featured: true,
  },
  {
    name: "Platinum Solver",
    duration: "2 Hours",
    guests: "14 Guests",
    perks: [
      "3 projects to choose from",
      "60 minutes of Robotic Build Up",
      "15 minutes Laser Cutting",
      "45 minutes in a Private Party Room",
      "5 Large Pizzas",
      "Unlimited Honest Juice Boxes",
      "Awesome MGA Party Host",
      "Party Paperware, Cups and Utensils",
      "Customized laser-cut name tag (all guests)",
    ],
    extraGuest: "$38 per additional guest",
    featured: false,
  },
];

export default function BirthdayPartyPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="STEM Birthday Parties"
        description="Give your maker a birthday to remember — a hands-on robotic build, a private party room, and pizza, all hosted by an awesome MGA party host."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <PlaceholderImage
              label="MGA birthday party celebration"
              aspect="square"
              icon={CakeIcon}
              className="w-full"
            />
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Three Ways to Celebrate
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Every MGA birthday package includes a real robotic build, a private
                party room, pizza, and an MGA host who keeps the whole celebration
                running smoothly. Choose the package that fits your guest list and
                budget below.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Additional pizza add-on available at $22 per large pie. A $299 deposit
                is required at the time of booking.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={
                  pkg.featured
                    ? "relative gap-4 border-2 border-primary p-6 shadow-lg"
                    : "gap-4 p-6"
                }
              >
                {pkg.featured ? (
                  <Badge className="absolute -top-3 left-6 w-fit">Most Popular</Badge>
                ) : null}
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="size-4 text-primary" aria-hidden />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon className="size-4 text-primary" aria-hidden />
                    {pkg.guests}
                  </span>
                </div>
                <ul className="flex flex-1 flex-col gap-2 text-sm">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckIcon
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground">{pkg.extraGuest}</p>
                <Button
                  className={
                    pkg.featured
                      ? "mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      : "mt-2 w-full"
                  }
                  variant={pkg.featured ? undefined : "outline"}
                  render={
                    <a
                      href={siteConfig.trialFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Contact Us Now
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Party Slots
            </h2>
            <p className="mt-3 text-muted-foreground">
              Book one of the available weekend slots below.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:max-w-xl sm:mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold">Saturday</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>11:00 AM – 1:00 PM</li>
                <li>1:30 PM – 3:30 PM</li>
                <li>5:00 PM – 7:00 PM</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold">Sunday</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>11:00 AM – 1:00 PM</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Book Your MGA Party?"
        description="A $299 deposit reserves your date and time slot. Contact us to check availability."
        buttonLabel="Contact Us Now"
      />
    </>
  );
}
