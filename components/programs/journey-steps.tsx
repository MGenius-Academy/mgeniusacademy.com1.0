import type { JourneyStage } from "@/lib/ai-programs";

export function JourneySteps({ stages }: { stages: JourneyStage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stages.map((stage, index) => (
        <div key={stage.title} className="flex gap-3 rounded-xl border border-border p-4">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {index + 1}
          </span>
          <div>
            <p className="font-semibold text-foreground">{stage.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
