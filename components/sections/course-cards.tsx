import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";

const courses = [
  {
    title: "AI-Powered Tech Entrepreneurship Program",
    href: "/ai-programs-boston",
    image: "/images/home/curriculum_ceo.png",
    alt: "Young CEO & CTO: AI-Powered Tech Entrepreneurship Program",
    overlayTitle: "Young CEO & CTO",
    description:
      "AI-Powered Tech Entrepreneurship Program: Combines cutting-edge AI tools with entrepreneurial thinking, guiding students to hand-craft AI-driven products, build prototypes, and pitch business concepts—fostering future leaders with technical depth and vision.",
  },
  {
    title: "Engineering Course",
    href: "/curriculum/engineering-2",
    image: "/images/home/curriculum_engineering.png",
    alt: "Engineering Course",
    overlayTitle: "Engineering Course",
    description:
      "Focuses on mechanical design, electronics, robotics, and 3D printing. Students merge hardware and software to build functional prototypes and solve complex real-world engineering challenges.",
  },
  {
    title: "Advancement & Competition Math Course",
    href: "/curriculum/singapore-math",
    image: "/images/home/curriculum_math.png",
    alt: "Math Advancement & Competition Math Course",
    overlayTitle: "Math",
    description:
      "Advancement & Competition Math Course: Builds rigorous mathematical logic and problem-solving skills, with specialized coaching for top competitions including Math Kangaroo and Noetic.",
  },
  {
    title: "Advanced Tech Competitions & Applied Innovation",
    href: "/curriculum/advanced-tech-competitions",
    image: "/images/home/Bostoncourse4.png",
    alt: "Advanced Tech Competitions & Applied Innovation",
    // Source photo has no baked-in label like the others, so render one to match.
    overlayTitle: "Competitions",
    description:
      "Advanced Tech Competitions & Applied Innovation: Offers end-to-end project mentoring for prestigious competitions such as Invention Convention Worldwide (ICW), NeuroMaker Challenge, and Science Olympiad.",
  },
  {
    title: "Hands-on Camps & Workshops",
    href: "/mga-camp/stem-summer-camps-boston",
    image: "/images/home/curriculum_camp.png",
    alt: "Hands-on Camps & Workshops",
    overlayTitle: "Camps & Workshops",
    description:
      "Hands-on Camps & Workshops: Year-round seasonal STEM camps and immersive weekend workshops, offering intensive project-based learning in robotics, AI, 3D design, and maker challenges.",
  },
];

export function CourseCards() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Courses in Boston
          </h2>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link key={course.title} href={course.href} className="group block w-full">
              <Card className="h-full gap-3 overflow-hidden py-0 ring-1 ring-foreground/10 transition-shadow duration-200 hover:shadow-lg">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {course.overlayTitle ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                      <span className="px-4 text-center text-3xl font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] sm:text-4xl">
                        {course.overlayTitle}
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 pb-5">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="line-clamp-4 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
