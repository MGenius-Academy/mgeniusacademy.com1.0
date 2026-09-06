"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cpLevels } from "@/lib/singapore-math";

export function CpTabs() {
  return (
    <Tabs defaultValue={cpLevels[0].id} className="gap-8">
      <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 sm:flex-nowrap">
        {cpLevels.map((level) => (
          <TabsTrigger
            key={level.id}
            value={level.id}
            className="h-auto flex-1 rounded-lg border-none bg-secondary px-4 py-3 text-sm font-bold tracking-wide text-foreground uppercase data-active:bg-primary data-active:text-primary-foreground data-active:shadow-none"
          >
            {level.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {cpLevels.map((level) => (
        <TabsContent key={level.id} value={level.id}>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-secondary/40">
              <Image
                src={level.image}
                alt={`${level.label} learning app screenshot`}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold tracking-tight text-balance">
                {level.tagline}
              </h3>
              {level.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted-foreground text-pretty"
                >
                  {paragraph}
                </p>
              ))}
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Highlights
                </p>
                <div className="mt-3 flex flex-col gap-4">
                  {level.highlights.map((highlight, index) => (
                    <div key={highlight.title} className="flex gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">
                          {highlight.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                  render={
                    <a
                      href={siteConfig.trialFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Book a Trial Class
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-fit"
                  render={
                    <a href={siteConfig.enrollUrl} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
