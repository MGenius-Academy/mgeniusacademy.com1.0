"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Container } from "@/components/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { btnOutline, btnPrimary, dotGrid } from "@/components/home/styles";
import { siteConfig } from "@/lib/site-config";

const heroImages = [
  {
    src: "/images/home/banner-trial-class-2026.jpg",
    alt: "MGA Special Trial Class — one 90-minute class for just $19",
    href: "/steam-events/mga-special-trial-class-19",
  },
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
    href: "/curriculum/engineering-2",
  },
  {
    src: "/images/home/banner-2-2.jpg",
    alt: "MGA students in the Boston classroom",
    href: "/about",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block ${dotGrid} [mask-image:linear-gradient(to_left,black,transparent)]`}
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="min-w-0 lg:col-span-6">
          <motion.p
            {...enter(0)}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#1A43BF]"
          >
            <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-[#E86A3E]" />
            STEM · Math · AI · Engineering — Boston
          </motion.p>

          <motion.h1
            {...enter(0.08)}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-balance text-[#0F172A] sm:text-5xl lg:text-[3.6rem]"
          >
            Hands-on learning for K&ndash;G12 students{" "}
            <span className="text-[#1A43BF]">in Boston</span>
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mt-6 max-w-[56ch] text-lg leading-relaxed text-slate-600 text-pretty"
          >
            <strong className="font-semibold text-[#0F172A]">MGA (MGenius Academy)</strong> is a
            leading STEM and Innovation academy in the Boston area. Empowering K&ndash;G12
            students with hands-on STEM education, cutting-edge technology, and small-group
            project-based learning to build the next generation of innovators.
          </motion.p>

          <motion.div {...enter(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.trialFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              Book a Trial Class in Boston Today
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href={siteConfig.enrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
            >
              Enroll Now
            </a>
            <Link
              href="/curriculum"
              className="group inline-flex h-12 items-center gap-1.5 text-[15px] font-semibold text-[#1A43BF]"
            >
              Explore STEM Courses
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="min-w-0 lg:col-span-6"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, x: 32 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.9, delay: 0.2, ease },
              })}
        >
          <HeroCarousel />
        </motion.div>
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

  const current = heroImages[selectedIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative">
        {/* Offset blueprint plate behind the photo frame */}
        <div
          aria-hidden="true"
          className="absolute -right-3 -bottom-3 left-6 top-6 rounded-[20px] bg-[#1A43BF] sm:-right-5 sm:-bottom-5"
        />

        <div className="relative rounded-[20px] border border-slate-200/80 bg-white p-2 shadow-[0_24px_60px_-28px_rgba(26,67,191,0.45)]">
          <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={image.src}>
                  <div className="relative aspect-4/3 overflow-hidden rounded-[14px] bg-slate-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    {image.href ? (
                      <Link
                        href={image.href}
                        className="group absolute bottom-4 left-4 inline-flex h-10 items-center gap-1.5 rounded-full bg-white/95 px-4 text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-px"
                      >
                        Click to Explore
                        <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    ) : null}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex items-center gap-4 px-2 pt-3 pb-1">
            <p className="min-w-0 flex-1 truncate text-sm text-slate-600" aria-live="polite">
              {current?.alt}
            </p>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => api?.scrollPrev()}
                className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-[#0F172A] transition-colors hover:border-[#1A43BF] hover:text-[#1A43BF] active:translate-y-px"
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => api?.scrollNext()}
                className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-[#0F172A] transition-colors hover:border-[#1A43BF] hover:text-[#1A43BF] active:translate-y-px"
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-1">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex}
            onClick={() => api?.scrollTo(index)}
            className="flex h-8 items-center px-1"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-8 bg-[#0F172A]" : "w-4 bg-[#0F172A]/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
