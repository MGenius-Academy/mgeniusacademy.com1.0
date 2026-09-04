import type { Metadata } from "next";
import { icwProgram } from "@/lib/icw-program";
import { ProgramDetail } from "@/components/programs/program-detail";

export const metadata: Metadata = {
  title: icwProgram.name,
  description: icwProgram.description,
};

export default function IcwProgramDetailPage() {
  return (
    <ProgramDetail
      program={icwProgram}
      eyebrow="Curriculum · Advanced Tech Competitions"
      backHref="/curriculum/advanced-tech-competitions"
      backLabel="Back to Advanced Tech Competitions"
      ctaTitle="Ready to Compete?"
      ctaDescription="Book a free trial class and talk to our team about which competition track fits your child."
    />
  );
}
