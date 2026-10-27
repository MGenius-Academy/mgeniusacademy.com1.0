import { Plus_Jakarta_Sans } from "next/font/google";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeImpact } from "@/components/home/home-impact";
import { CourseCards } from "@/components/sections/course-cards";
import { Differentiators } from "@/components/sections/differentiators";
import { Testimonials } from "@/components/sections/testimonials";
import { AlumniSchools } from "@/components/sections/alumni-schools";
import { PartnersSection } from "@/components/sections/partners-section";
import { HomeCta } from "@/components/home/home-cta";
import { ScrollChrome, type HomeSection } from "@/components/home/scroll-chrome";

// Scoped to the home page; the rest of the site keeps Geist from the root layout.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const sections: (HomeSection & { Component: () => React.ReactNode })[] = [
  { id: "top", label: "Welcome", Component: HomeHero },
  { id: "results", label: "Results", Component: HomeImpact },
  { id: "courses", label: "Courses", Component: CourseCards },
  { id: "why-mga", label: "Why MGA", Component: Differentiators },
  { id: "testimonials", label: "Testimonials", Component: Testimonials },
  { id: "alumni", label: "Alumni Schools", Component: AlumniSchools },
  { id: "partners", label: "Partners", Component: PartnersSection },
  { id: "book-a-trial", label: "Book a Trial", Component: HomeCta },
];

export default function Home() {
  return (
    <div data-snap-sections className={`${jakarta.className} bg-[#F8FAFC] text-[#0F172A]`}>
      <ScrollChrome sections={sections.map(({ id, label }) => ({ id, label }))} />
      {/* Each wrapper is one screen tall (below the sticky header) and stretches
          its section to fill it, with the content centered vertically. */}
      {sections.map(({ id, Component }) => (
        <div
          key={id}
          id={id}
          className="flex min-h-[calc(100svh-var(--site-header-h,73px))] snap-start flex-col [&>section]:flex [&>section]:flex-1 [&>section]:flex-col [&>section]:justify-center"
        >
          <Component />
        </div>
      ))}
    </div>
  );
}
