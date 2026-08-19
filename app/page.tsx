import { HomeHero } from "@/components/sections/home-hero";
import { CourseCards } from "@/components/sections/course-cards";
import { Achievements } from "@/components/sections/achievements";
import { Differentiators } from "@/components/sections/differentiators";
import { Testimonials } from "@/components/sections/testimonials";
import { AlumniSchools } from "@/components/sections/alumni-schools";
import { PartnersSection } from "@/components/sections/partners-section";
import { CtaBanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CourseCards />
      <Achievements />
      <Differentiators />
      <Testimonials />
      <AlumniSchools />
      <PartnersSection />
      <CtaBanner />
    </>
  );
}
