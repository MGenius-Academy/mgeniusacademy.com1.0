import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aiPrograms, getAiProgramBySlug } from "@/lib/ai-programs";
import { ProgramDetail } from "@/components/programs/program-detail";

export function generateStaticParams() {
  return aiPrograms.map((program) => ({ slug: program.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/ai-programs-boston/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const program = getAiProgramBySlug(slug);
  if (!program) return {};

  return {
    title: program.name,
    description: program.description,
  };
}

export default async function AiProgramDetailPage(
  props: PageProps<"/ai-programs-boston/[slug]">,
) {
  const { slug } = await props.params;
  const program = getAiProgramBySlug(slug);
  if (!program) notFound();

  return (
    <ProgramDetail
      program={program}
      eyebrow="Curriculum · AI Programs"
      backHref="/ai-programs-boston"
      backLabel="Back to AI Programs"
      ctaTitle="Ready for the Next Level?"
      ctaDescription="Book a free trial class and talk to our team about which innovation track fits your child."
    />
  );
}
