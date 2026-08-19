import type { Metadata } from "next";
import { CheckIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "MGA Service — Laser Cutting & 3D Printing",
  description:
    "Professional laser cutting and 3D printing services from MGA's Newton/Boston workshop — rapid prototyping, custom fabrication, and hands-on maker support.",
};

const services = [
  {
    title: "Laser Cutting",
    description:
      "Perfect for creating precise and intricate designs from materials like wood, acrylic, cardboard, and more. Ideal for architectural models, custom gears, decorative art, and functional parts.",
    features: [
      "Wood, acrylic, cardboard, and more",
      "Architectural & engineering models",
      "Custom gears and functional parts",
      "Decorative and display art",
    ],
  },
  {
    title: "3D Printing",
    description:
      "Transform your digital models into tangible objects. We support a variety of filaments for your prototyping, product design, and creative projects.",
    features: [
      "PLA, ABS, and PETG filaments",
      "Rapid prototyping",
      "Product design iteration",
      "Custom creative projects",
    ],
  },
];

export default function MgaServicePage() {
  return (
    <>
      <PageHero
        eyebrow="MGA Incubation · Services"
        title="Laser Cutting & 3D Printing Services"
        description="Unlock your creativity and bring your ideas to life. Our workshop is equipped with state-of-the-art technology to support your projects, from rapid prototyping to custom fabrication."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="gap-5 p-6 sm:p-8">
                <PlaceholderImage label={`${service.title} Service`} aspect="video" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-border bg-secondary/40 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to Bring Your Idea to Life?
            </h2>
            <p className="max-w-xl text-muted-foreground">
              From rapid prototypes to finished projects, MGA&apos;s workshop
              team can help you plan and fabricate your design.
            </p>
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
              Book Your Service
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
