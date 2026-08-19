import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, CalendarIcon, TagIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { newsSlugs } from "@/content/news/posts";

export function generateStaticParams() {
  return newsSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/steam-events/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const { metadata } = await import(`@/content/news/${slug}.mdx`);

  return {
    title: metadata.title,
    description: metadata.excerpt,
  };
}

export default async function NewsPostPage(
  props: PageProps<"/steam-events/[slug]">,
) {
  const { slug } = await props.params;
  const { default: Post, metadata } = await import(`@/content/news/${slug}.mdx`);

  const formattedDate = new Date(metadata.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero eyebrow={metadata.category} title={metadata.title}>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="size-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <TagIcon className="size-4" />
            {metadata.category}
          </span>
        </div>
      </PageHero>

      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="prose prose-neutral max-w-none">
            <Post />
          </div>

          <Link
            href="/eventnews"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            <ArrowLeftIcon className="size-3.5" />
            Back to News
          </Link>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
