"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, StarIcon } from "lucide-react";
import { Container } from "@/components/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/home/reveal";
import { sectionTitle } from "@/components/home/styles";

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
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
    };
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

  const navButton =
    "flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0F172A] transition-colors duration-200 hover:border-[#1A43BF] hover:text-[#1A43BF] active:translate-y-px";

  return (
    <section className="border-y border-slate-200/80 bg-white py-16 lg:py-24">
      <Container
        className="grid gap-10 lg:grid-cols-12 lg:gap-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <h2 className={sectionTitle}>Why Parents Love MGA</h2>
            <p className="mt-4 max-w-[42ch] leading-relaxed text-slate-600">
              Parents in Boston trust MGA for high-quality STEM and math
              education that prepares students for future success.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                className={navButton}
                aria-label="Previous review"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                type="button"
                className={navButton}
                aria-label="Next review"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRightIcon className="size-4" />
              </button>
              <span className="ml-2 text-sm font-semibold text-slate-500 tabular-nums">
                {selectedIndex + 1} / {scrollSnaps.length || reviews.length}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0 lg:col-span-8">
          <Carousel opts={{ loop: true, align: "start" }} setApi={setApi}>
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.name} className="sm:basis-1/2">
                  <ReviewCard name={review.name} quote={review.quote} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-6 hidden items-center gap-1 sm:flex">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to review ${index + 1}`}
                aria-current={index === selectedIndex}
                onClick={() => api?.scrollTo(index)}
                className="flex h-6 items-center px-0.5"
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "w-6 bg-[#1A43BF]" : "w-3 bg-[#0F172A]/15"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ReviewCard({ name, quote }: { name: string; quote: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > 280;

  return (
    <figure className="flex h-full flex-col rounded-[16px] border border-slate-200/80 bg-[#F8FAFC] p-6 lg:p-7">
      <div className="flex items-center justify-between">
        <QuoteIcon aria-hidden="true" className="size-7 fill-[#1A43BF] text-[#1A43BF]" />
        <div className="flex gap-0.5 text-[#E86A3E]" role="img" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} className="size-3.5 fill-current" aria-hidden="true" />
          ))}
        </div>
      </div>
      <blockquote
        className={`mt-5 text-[15px] leading-relaxed text-[#0F172A]/80 ${expanded ? "" : "line-clamp-6"}`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-3 w-fit text-sm font-semibold text-[#1A43BF] hover:underline"
        >
          {expanded ? "Show less" : "Read full review"}
        </button>
      ) : null}
      <div aria-hidden="true" className="min-h-6 flex-1" />
      <figcaption className="flex items-center gap-3 border-t border-slate-200/80 pt-5">
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-full bg-[#1A43BF] text-sm font-bold text-white"
        >
          {name.charAt(0)}
        </span>
        <span className="text-sm font-bold text-[#0F172A]">{name}</span>
      </figcaption>
    </figure>
  );
}
