"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { siteConfig } from "@/lib/site-config";

const heroImages = [
  { src: "/images/home/banner-12.jpg", alt: "MGA students building a project together" },
  { src: "/images/home/banner-11.jpg", alt: "MGA Noetic Learning Contest awards in Boston" },
  { src: "/images/home/banner-8-1.jpg", alt: "MGA students working on a STEM activity" },
  { src: "/images/home/banner0-1-scaled.jpeg", alt: "MGA students in a hands-on class" },
  { src: "/images/home/banner-7-1.jpg", alt: "MGA students presenting their work" },
  { src: "/images/home/banner-2-2.jpg", alt: "MGA students in the Boston classroom" },
];

export function HomeHero() {
  return (
    <section className="overflow-hidden bg-secondary/40">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            STEM · Math · AI · Engineering — Boston
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Hands-on learning for K&ndash;G8 students in Boston
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            MGenius Academy (MGA) is a leading STEM academy in the Boston area
            offering math, AI, and engineering programs for K&ndash;G8 students.
            Our programs focus on hands-on learning, problem-solving, and
            real-world applications through robotics, coding, mathematics, and
            engineering in small-group, project-based classes.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Serving families in the Greater Boston area, including Newton,
            Waltham, Lexington, and surrounding communities.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={
                <a href={siteConfig.trialFormUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              Book a Free Trial Class in Boston Today
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/curriculum" />}>
              Explore STEM Courses
            </Button>
          </div>
        </div>

        <HeroCarousel />
      </Container>
    </section>
  );
}

function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
      <CarouselContent>
        {heroImages.map((image) => (
          <CarouselItem key={image.src}>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg">
              <Image src={image.src} alt={image.alt} fill className="object-cover" priority />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
