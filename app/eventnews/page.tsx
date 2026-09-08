import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { NewsGrid, type NewsPost } from "@/components/news/news-grid";
import { newsSlugs } from "@/content/news/posts";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "The latest news, camps, competitions, and classroom stories from MGenius Academy in Newton/Boston, MA.",
};

async function getPosts(): Promise<NewsPost[]> {
  const posts = await Promise.all(
    newsSlugs.map(async (slug) => {
      const { metadata } = await import(`@/content/news/${slug}.mdx`);
      return { slug, ...metadata } as NewsPost;
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export default async function EventNewsPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="Latest from MGA"
        description="Camp recaps, competition wins, and stories from the classroom — see what MGA students have been building, learning, and celebrating."
      />

      <section className="py-16">
        <Container>
          <Suspense fallback={null}>
            <NewsGrid posts={posts} />
          </Suspense>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
