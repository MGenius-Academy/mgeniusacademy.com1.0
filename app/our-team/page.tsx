import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the MGA core team — instructors, engineers, and program leads who make MGA a place where curiosity, creativity, and learning come to life in Newton/Boston.",
};

const team = [
  {
    name: "Zhili W",
    title: "Chief Executive Officer",
    image: "/images/our-team/zhili-1-1024x1024.jpg",
  },
  {
    name: "Yuesen W",
    title: "CTO · MIT Research Scientist, Ph.D",
    image: "/images/our-team/yuesen-1024x1024.webp",
  },
  {
    name: "Megan S",
    title: "Director of Academic Programs",
    image: "/images/our-team/Megan-1024x1024.webp",
  },
  {
    name: "Ying W",
    title: "Director of Math Programs",
    image: "/images/our-team/wangying-1024x1024.webp",
  },
  {
    name: "Tianze L",
    title: "Lead Engineering Instructional Specialist",
    image: "/images/our-team/tianze-1024x1024.webp",
  },
  {
    name: "Grace H",
    title: "Instructional Specialist",
    image: "/images/our-team/grace-1-1024x1024.jpg",
  },
  {
    name: "Trevor L",
    title: "Instructional Specialist",
    image: "/images/our-team/trevor-1-1024x1024.jpg",
  },
  {
    name: "Jessica F",
    title: "Instructional Specialist",
    image: "/images/our-team/jessi-1-1024x1024.jpg",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Core Team"
        description="Get to know the people who make MGA a place where curiosity, creativity, and learning come to life."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <Avatar size="lg" className="size-32 sm:size-36">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
