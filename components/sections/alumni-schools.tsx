"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const publicSchools = [
  "8.png",
  "7.png",
  "13.png",
  "3.png",
  "1-150x150.png",
  "5.png",
  "6.png",
  "2.png",
  "9.png",
  "11.png",
  "12.png",
  "10.png",
  "14-1.jpg",
];

const privateSchools = [
  "13-1.png",
  "1-1.png",
  "9-1.png",
  "11-1.png",
  "16.png",
  "15.jpg",
  "17.png",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "12-2.png",
  "7-1.png",
  "3-1.png",
  "4-1.png",
  "5-1.png",
  "6-1.png",
  "14-1.png",
  "10-1.png",
  "8-1.png",
  "2-1.png",
];

function LogoCarousel({ files, label }: { files: string[]; label: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;
    const id = setInterval(() => api.scrollNext(), 2500);
    return () => clearInterval(id);
  }, [api, isPaused]);

  return (
    <div>
      <p className="mb-4 text-center text-sm font-semibold text-muted-foreground">{label}</p>
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="px-11">
          <CarouselContent className="-ml-[5px]">
            {files.map((file) => (
              <CarouselItem
                key={file}
                className="basis-1/2 pl-[5px] sm:basis-1/3 lg:basis-1/6"
              >
                <div className="relative mx-auto flex size-32 items-center justify-center rounded-xl border border-border bg-background p-2 sm:size-40">
                  <Image
                    src={`/images/home/${file}`}
                    alt=""
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious size="icon" className="left-0" aria-label={`Previous ${label} logos`} />
          <CarouselNext size="icon" className="right-0" aria-label={`Next ${label} logos`} />
        </Carousel>
      </div>
    </div>
  );
}

export function AlumniSchools() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where MGA Alumni Are Studying
          </h2>
        </div>
        <div className="mt-10 flex flex-col gap-10">
          <LogoCarousel files={publicSchools} label="Public School" />
          <LogoCarousel files={privateSchools} label="Private School" />
        </div>
      </Container>
    </section>
  );
}
