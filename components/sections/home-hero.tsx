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
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { siteConfig } from "@/lib/site-config";

const heroImages = [
  {
    src: "/images/home/banner-12.jpg",
    alt: "MGA students building a project together",
    href: "/student-project",
  },
  {
    src: "/images/home/banner-11.jpg",
    alt: "MGA Noetic Learning Contest awards in Boston",
    href: "/boston-stem/math-awards",
  },
  {
    src: "/images/home/banner-8-1.jpg",
    alt: "MGA students working on a STEM activity",
    href: "/eventnews",
  },
  {
    src: "/images/home/banner0-1-scaled.jpeg",
    alt: "MGA students in a hands-on class",
    href: "/curriculum",
  },
  {
    src: "/images/home/banner-7-1.jpg",
    alt: "MGA students presenting their work",
    href: "/icw-awards",
  },
  {
    src: "/images/home/banner-2-2.jpg",
    alt: "MGA students in the Boston classroom",
    href: "/about",
  },
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;
    const id = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [api, isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={image.src}>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {image.href ? (
                  <Button
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/60 text-white backdrop-blur-sm hover:bg-black/75"
                    render={<Link href={image.href} />}
                  >
                    Click to Explore
                  </Button>
                ) : null}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious size="icon" className="left-3" />
        <CarouselNext size="icon" className="right-3" />
      </Carousel>

      <div className="mt-2 flex items-center justify-center">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex}
            onClick={() => api?.scrollTo(index)}
            className="flex size-9 items-center justify-center"
          >
            <span
              className={`block h-2.5 rounded-full transition-all ${
                index === selectedIndex ? "w-6 bg-primary" : "w-2.5 bg-primary/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
