"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Jenny Yong",
    quote:
      "My two kids are enrolled in MGA and they LOVE it!!! My daughter is in the apprenticeship class and finished building three robots and had so much fun battling with her fellow classmates. My son is in the exploration class and he learned so much about the engineering designs and even built a few cool things on his own! The teachers and the staff are always supportive and encouraging.",
  },
  {
    name: "Summer & Wesley",
    quote:
      "Great program to stimulate kids' passion for engineering, both my kids 8 year and 10 year learned a lot and had fun there! They also host birthday parties and holiday camps, highly recommended!",
  },
  {
    name: "Erxin",
    quote:
      "My son is in Kindergarten Enlightenment class. He really enjoyed! Every week they have different projects and he is always very excited to share with me what he did and what he learned. The environment is bright, the staff are friendly, and the teachers are professional.",
  },
  {
    name: "Xiaoya",
    quote:
      "We love MGA! My daughter has so much fun, learning and creating at MGA. She loved visiting the Lego area before class, and she even didn't want to leave after class. After each class, she would bring home a piece of artwork (or science-work) with a big smile on her face.",
  },
  {
    name: "Anita",
    quote:
      "A great engineering after-school program for kids, with a team of teachers who care about educating kids and have the expertise, a well-designed STEM curriculum for different ages that embraces creativity and problem solving, and well-prepared project materials & machines.",
  },
  {
    name: "Andrew",
    quote:
      "The curriculum is exactly what I am looking for my son, who is extremely interested in hands-on experience in building and creating. The place is founded by parents, so the set up is tailored to the needs of parents. They offered a progress report for the parents to review, which is rare for after-school programs.",
  },
  {
    name: "Aryan",
    quote:
      "My kid recently participated in the Boston Makers and Innovators Challenge and it was such a great experience for our family. The entire event felt incredibly well organized. I loved seeing how excited and engaged the kids were throughout the challenge, especially being surrounded by so much creativity, innovation, and teamwork. Definitely a memorable experience and something I would highly recommend to other families with kids interested in STEM.",
  },
  {
    name: "Hong",
    quote:
      "My 7-year-old daughter loves the engineering classes at MGenius Academy. Their program is very hands-on and interactive, which keeps her engaged throughout the class. What impresses me most is how they introduce STEM concepts in a creative and fun way that young child like her can easily understand and enjoy them. The projects she learns there help to build a strong foundation in STEM subjects, which I believe will be beneficial to her academic growth and confidence in the future. Their teachers are fantastic. Her teacher Ashley is wonderful at guiding and supporting her as well as encouraging her to think independently and complete projects on her own. My daughter always feels so proud of herself when she completes a project using her own effort. At the end of each class, every child gets to present their project and explain what they learned. It's really a great way to not only reinforce learning but also improve their presentation skills. Overall, this is an amazing place. Highly recommended!!",
  },
  {
    name: "Jean",
    quote:
      "My two children have been with MGenius Academy (MGA) since the very beginning, and watching the academy grow alongside my kids has been an amazing journey. What I appreciate most about MGA is the genuine dedication of the teachers and staff. They truly care about each student's growth and take the time to encourage, inspire, and support them. My children are always excited to share what they have built or learned, and as a parent, there is nothing more rewarding than seeing that enthusiasm for learning. I have watched both of my kids grow into more confident, creative, and independent thinkers because of their experiences at MGA. The academy has consistently provided a nurturing environment that challenges students while making learning fun and meaningful. We are incredibly grateful to have been part of MGA's journey since its founding. I highly recommend MGenius Academy to any family looking for a STEM program that not only teaches valuable skills but also inspires a lifelong love of learning.",
  },
  {
    name: "Y",
    quote:
      "We've had a wonderful experience with MGA. What stands out most is their commitment to continuously improving and innovating their curriculum. The classes are engaging, hands-on, and filled with meaningful content that keeps students interested and excited to learn. The teachers communicate closely with parents and truly care about each child's growth. They don't just teach students how to complete projects—they help them build a strong foundation of knowledge, critical thinking, and problem-solving skills. It's clear that they are invested in the students' long-term development, not just their short-term results. All of the projects are fun, creative, and challenging in the best way. Beyond regular classes and project based programs, MGA also provides excellent support for students participating in competitions, from innovation challenges to math contests. They guide families through every step, including competition selection, registration, preparation, learning materials, and even emotional support throughout the process. They did a great job helping students manage stress, stay motivated, and learn from both successes and setbacks. My older kid has gone through two full competition cycles with MGA, and the experience has helped her grow tremendously in both skills and confidence. We're grateful for the positive impact MGA has had on our children and would highly recommend it to any family looking for a STEM program that combines strong academics with genuine care and mentorship.",
  },
  {
    name: "Shuang",
    quote:
      "My son has been attending MGA since its founding, and now he's in 8th grade, still just as enthusiastic and eager to go to class as ever. That says it all! He loves the hands-on activities, enjoys learning science theory from Teacher Yuesen, and really values the opportunities to participate in various STEM competitions. The founders are among the most passionate and dedicated educators I've ever met, people who truly care about what they do. I have the utmost respect and admiration for MGA and their entire team. Highly recommend!",
  },
  {
    name: "Yinglei",
    quote:
      "Our kids have been attending Mgenius Academy for past few years and absolutely love it. The engineering classes and STEM activities are creative, hands-on, and fun. The teachers do a fantastic job keeping kids engaged while helping them learn real problem-solving and critical-thinking skills. Over the years, our children have learned so much and always look forward to coming back. We are very grateful for the positive learning environment and highly recommend Mgenius Academy to other families interested in STEM education.",
  },
  {
    name: "Fei",
    quote:
      "My child has been with MGA since first grade, and it's now been three years. This is definitely her favorite class—she's always excited to go, never late, and so proud to show off what she's built. She even spends time at home playing and testing on her own. The curriculum is age-appropriate. Each class doesn't just involve repeating what the teacher builds—every child's project turns out differently. Through comparing, testing, and debugging, she has learned so much.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Parents Love MGA
          </h2>
          <p className="mt-3 text-muted-foreground">
            Parents in Boston trust MGA for high-quality STEM and math
            education that prepares students for future success.
          </p>
        </div>

        <TestimonialsCarousel />
      </Container>
    </section>
  );
}

function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api, isPaused]);

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="px-1">
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.name} className="sm:basis-1/2 lg:basis-1/3">
              <figure className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-background p-6 shadow-sm">
                <div
                  className="flex gap-0.5 text-accent"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="line-clamp-6 text-sm text-muted-foreground">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-2 text-sm font-semibold">
                  {review.name}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="rounded-full"
          aria-label="Previous review"
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeftIcon />
        </Button>

        <div className="hidden items-center gap-2 sm:flex">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              aria-current={index === selectedIndex}
              onClick={() => api?.scrollTo(index)}
              className="flex size-6 items-center justify-center"
            >
              <span
                className={`block size-2 rounded-full transition-all ${
                  index === selectedIndex ? "w-5 bg-primary" : "bg-primary/30"
                }`}
              />
            </button>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="rounded-full"
          aria-label="Next review"
          onClick={() => api?.scrollNext()}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
