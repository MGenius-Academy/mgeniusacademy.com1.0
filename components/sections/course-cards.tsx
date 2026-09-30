"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/home/reveal";
import { sectionTitle } from "@/components/home/styles";

type Layout = "feature" | "stacked" | "row";

const courses: {
  title: string;
  href: string;
  image: string;
  alt: string;
  overlayTitle: string;
  description: string;
  layout: Layout;
  span: string;
}[] = [
  {
    title: "AI-Powered Tech Entrepreneurship Program",
    href: "/ai-programs-boston",
    image: "/images/home/curriculum_ceo.png",
    alt: "Young CEO & CTO: AI-Powered Tech Entrepreneurship Program",
    overlayTitle: "Young CEO & CTO",
    description:
      "AI-Powered Tech Entrepreneurship Program: Combines cutting-edge AI tools with entrepreneurial thinking, guiding students to hand-craft AI-driven products, build prototypes, and pitch business concepts—fostering future leaders with technical depth and vision.",
    layout: "feature",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Engineering Course",
    href: "/curriculum/engineering-2",
    image: "/images/home/curriculum_engineering.png",
    alt: "Engineering Course",
    overlayTitle: "Engineering Courses",
    description:
      "Focuses on mechanical design, electronics, robotics, and 3D printing. Students merge hardware and software to build functional prototypes and solve complex real-world engineering challenges.",
    layout: "stacked",
    span: "lg:col-span-5",
  },
  {
    title: "Advancement & Competition Math Course",
    href: "/curriculum/singapore-math",
    image: "/images/home/curriculum_math.png",
    alt: "Math Advancement & Competition Math Course",
    overlayTitle: "Math Courses",
    description:
      "Advancement & Competition Math Course: Builds rigorous mathematical logic and problem-solving skills, with specialized coaching for top competitions including Math Kangaroo and Noetic.",
    layout: "stacked",
    span: "lg:col-span-5",
  },
  {
    title: "Advanced Tech Competitions & Applied Innovation",
    href: "/curriculum/advanced-tech-competitions",
    image: "/images/home/Bostoncourse4.png",
    alt: "Advanced Tech Competitions & Applied Innovation",
    overlayTitle: "Competitions",
    description:
      "Advanced Tech Competitions & Applied Innovation: Offers end-to-end project mentoring for prestigious competitions such as Invention Convention Worldwide (ICW), NeuroMaker Challenge, and Science Olympiad.",
    layout: "row",
    span: "lg:col-span-6",
  },
  {
    title: "Hands-on Camps & Workshops",
    href: "/mga-camp/stem-summer-camps-boston",
    image: "/images/home/curriculum_camp.png",
    alt: "Hands-on Camps & Workshops",
    overlayTitle: "Camps & Workshops",
    description:
      "Hands-on Camps & Workshops: Year-round seasonal STEM camps and immersive weekend workshops, offering intensive project-based learning in robotics, AI, 3D design, and maker challenges.",
    layout: "row",
    span: "lg:col-span-6",
  },
];

const imageBox: Record<Layout, string> = {
  feature: "aspect-16/10 lg:aspect-auto lg:min-h-0 lg:flex-1",
  stacked: "aspect-16/9 lg:aspect-[16/7]",
  row: "aspect-16/10 sm:aspect-auto sm:w-[44%] sm:shrink-0",
};

export function CourseCards() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-slate-200/80 bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <h2 className={`max-w-xl ${sectionTitle}`}>Explore Courses in Boston</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-12">
          {courses.map((course, index) => (
            <Reveal key={course.title} delay={index * 0.05} className={`flex ${course.span}`}>
              <motion.div
                className="flex w-full"
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                <Link
                  href={course.href}
                  className={`group flex w-full overflow-hidden rounded-[16px] border border-slate-200/80 bg-[#F8FAFC] transition-[border-color,box-shadow] duration-300 hover:border-[#1A43BF]/40 hover:shadow-[0_20px_40px_-24px_rgba(26,67,191,0.35)] ${
                    course.layout === "row" ? "flex-col sm:flex-row" : "flex-col"
                  }`}
                >
                  <div className={`relative overflow-hidden bg-slate-100 ${imageBox[course.layout]}`}>
                    <Image
                      src={course.image}
                      alt={course.alt}
                      fill
                      sizes={course.layout === "feature" ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 480px, 100vw"}
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div
                    className={`flex flex-1 flex-col ${
                      course.layout === "feature" ? "gap-3 p-6 lg:flex-none lg:p-8" : "gap-2.5 p-5 lg:p-6"
                    }`}
                  >
                    <span className="w-fit rounded-full bg-[#1A43BF]/[0.08] px-3 py-1 text-xs font-semibold text-[#1A43BF]">
                      {course.overlayTitle}
                    </span>
                    <h3
                      className={`font-bold tracking-tight text-[#0F172A] text-balance ${
                        course.layout === "feature" ? "text-2xl lg:text-[1.75rem] lg:leading-tight" : "text-lg"
                      }`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed text-slate-600 ${
                        course.layout === "feature" ? "max-w-[60ch] lg:text-base" : "line-clamp-3"
                      }`}
                    >
                      {course.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#1A43BF]">
                      Learn more
                      <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
