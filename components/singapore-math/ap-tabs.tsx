"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { apLevels } from "@/lib/singapore-math";

export function ApTabs() {
  return (
    <Tabs defaultValue={apLevels[0].id} className="gap-8">
      <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 sm:flex-nowrap">
        {apLevels.map((level) => (
          <TabsTrigger
            key={level.id}
            value={level.id}
            className="h-auto flex-1 rounded-lg border-none bg-secondary px-4 py-3 text-sm font-bold tracking-wide text-foreground uppercase data-active:bg-primary data-active:text-primary-foreground data-active:shadow-none"
          >
            {level.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {apLevels.map((level) => (
        <TabsContent key={level.id} value={level.id}>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-secondary/40">
              <Image
                src={level.image}
                alt={`${level.label} learning app screenshot`}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold tracking-tight">
                {level.label} Learning Focus
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
                Age Group: {level.ageGroup}
              </p>
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Objectives
                </p>
                <p className="mt-2 text-muted-foreground text-pretty">
                  {level.objectives}
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {level.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">{topic}</span>
                  </li>
                ))}
              </ul>
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
