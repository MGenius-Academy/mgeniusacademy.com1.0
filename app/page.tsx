import { Plus_Jakarta_Sans } from "next/font/google";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeImpact } from "@/components/home/home-impact";
import { CourseCards } from "@/components/sections/course-cards";
import { Differentiators } from "@/components/sections/differentiators";
import { Testimonials } from "@/components/sections/testimonials";
import { AlumniSchools } from "@/components/sections/alumni-schools";
import { PartnersSection } from "@/components/sections/partners-section";
import { HomeCta } from "@/components/home/home-cta";

// Scoped to the home page; the rest of the site keeps Geist from the root layout.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${jakarta.className} bg-[#F8FAFC] text-[#0F172A]`}>
      <HomeHero />
      <HomeImpact />
      <CourseCards />
      <Differentiators />
      <Testimonials />
      <AlumniSchools />
      <PartnersSection />
      <HomeCta />
    </div>
  );
}
