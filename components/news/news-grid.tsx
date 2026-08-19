"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceholderImage } from "@/components/placeholder-image";

export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image?: string;
  date: string;
};

const categories = ["All", "Camp", "Competitions", "Learning"] as const;

type Category = (typeof categories)[number];

export function NewsGrid({ posts }: { posts: NewsPost[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:bg-muted"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/steam-events/${post.slug}`} className="group">
            <Card className="h-full gap-3 overflow-hidden py-0">
              <div className="relative aspect-4/3 overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderImage label={post.title} className="h-full rounded-none border-0" />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 px-5 pb-5">
                <Badge variant="secondary" className="w-fit">
                  {post.category}
                </Badge>
                <h3 className="font-semibold text-balance">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                  Read more
                  <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          No posts in this category yet — check back soon.
        </p>
      ) : null}
    </div>
  );
}
