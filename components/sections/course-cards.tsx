import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";

const courses = [
  {
    title: "Engineering",
    href: "/curriculum/engineering-2",
    image: "/images/home/home-course-1.jpg",
    alt: "Engineering",
    description: "Robotics, electronics, and system-level engineering thinking.",
  },
  {
    title: "Singapore Math",
    href: "/curriculum/singapore-math",
    image: "/images/home/home-course-3.jpg",
    alt: "Singapore Math",
    description: "Mastery-based, inquiry-driven competitive math.",
  },
  {
    title: "AI Programs",
    href: "/ai-programs-boston",
    image: "/images/home/home-course-2.jpg",
    alt: "AI Programs",
    description: "AI + hard-tech tools for young makers and creators.",
  },
  {
    title: "STEM Camp",
    href: "/mga-camp/stem-summer-camps-boston",
    image: "/images/home/home-course-4.jpg",
    alt: "STEM Camp",
    description: "Week-long, hands-on STEM camps in Boston.",
  },
];

export function CourseCards() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore STEM Courses in Boston
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Link key={course.title} href={course.href} className="group">
              <Card className="h-full gap-3 overflow-hidden py-0">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 px-5 pb-5">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
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
