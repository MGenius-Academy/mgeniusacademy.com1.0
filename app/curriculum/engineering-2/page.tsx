import type { Metadata } from "next";
import Image from "next/image";
import { UsersIcon, WrenchIcon, RocketIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Engineering Classes for Kids",
  description:
    "Hands-on, project-based engineering classes for K-8 students in the Greater Boston area. Five progressive levels, small groups of up to 8 students.",
};

const whyMga = [
  {
    icon: UsersIcon,
    title: "Small-Group, Personalized Learning",
    description:
      "With classes limited to up to 8 students, each child receives more individualized attention, personalized guidance, and stronger support throughout the learning process.",
  },
  {
    icon: WrenchIcon,
    title: "Hands-On, Project-Based Exploration",
    description:
      "Students learn by actively designing, building, testing, and improving projects, allowing them to develop practical skills through meaningful hands-on experiences.",
  },
  {
    icon: RocketIcon,
    title: "A Progressive Pathway to Real Engineering Thinking",
    description:
      "Through a spiral learning approach, students build knowledge step by step over time, strengthening problem-solving skills and developing authentic engineering thinking at each level.",
  },
];

const levels = [
  {
    level: "EP Level 1",
    ageGroup: "K–G1",
    image: "/images/curriculum_engineering-2/EP1-1.jpg",
    description:
      "Introduces young learners in Kindergarten to Grade 1 to foundational engineering concepts through hands-on STEM projects, simple circuits, and beginner maker tools.",
  },
  {
    level: "EP Level 2",
    ageGroup: "G2–G3",
    image: "/images/curriculum_engineering-2/EP2.jpg",
    description:
      "Helps students in Grades 2–3 deepen their engineering and science understanding through more complex projects that build observation, hands-on ability, and problem-solving skills.",
  },
  {
    level: "EP Level 3",
    ageGroup: "G3–G4",
    image: "/images/curriculum_engineering-2/3-0.png",
    description:
      "Designed for students ready to take their hands-on engineering learning to the next level. Through increasingly challenging project-based STEM activities, students strengthen their understanding of engineering concepts while developing creativity, design thinking, and problem-solving skills.",
  },
  {
    level: "EP Level 4",
    ageGroup: "G4–G5",
    image: "/images/curriculum_engineering-2/EP4.jpg",
    description:
      "Designed for students ready for more advanced engineering projects and deeper technical exploration. Through hands-on, project-based learning, students apply engineering principles to increasingly sophisticated builds while strengthening logical thinking, creativity, and analytical skills.",
  },
  {
    level: "EP Level 5",
    ageGroup: "G6–G7",
    image:
      "/images/curriculum_engineering-2/Gemini_Generated_Image_9xjel49xjel49xje-1024x768.png",
    description:
      "The most advanced stage of MGA's engineering program, designed for students ready to develop stronger independent thinking and advanced project skills. Through challenging hands-on engineering projects, students deepen their understanding of design, structure, systems, and innovation.",
  },
];

export default function EngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum · Engineering"
        title="Ignite Creativity, Engineer the Future"
        description="MGA offers hands-on engineering classes for kids in the Greater Boston area, designed for students in grades K–8. In small groups of up to 8 students, children explore engineering through project-based learning, developing creativity, problem-solving skills, and real engineering thinking."
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose MGA&rsquo;s Engineering Program?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              By researching, designing, building, testing, and improving
              their projects, students develop real engineering thinking —
              deepening their understanding over time while building strong
              STEM skills, creativity, and problem-solving abilities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whyMga.map((item) => (
              <Card key={item.title} className="items-start gap-3 p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering Levels for Grades K–8
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Five progressive levels, grouped by age and experience, guide
              students from their first circuits to advanced, independent
              engineering projects.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level) => (
              <Card key={level.level} className="h-full gap-3 overflow-hidden py-0">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={level.image}
                    alt={`${level.level} engineering class for kids in Boston`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 pb-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold">{level.level}</h3>
                    <Badge variant="secondary">{level.ageGroup}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {level.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Start Your Child's Engineering Journey?"
        description="Book a free trial class and see MGA's hands-on engineering curriculum in action."
      />
    </>
  );
}
