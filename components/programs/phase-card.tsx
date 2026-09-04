import { Badge } from "@/components/ui/badge";
import type { ProgramPhase } from "@/lib/ai-programs";

export function PhaseCard({ phase }: { phase: ProgramPhase }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border p-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="secondary">{phase.meta}</Badge>
          {phase.eligibility && <Badge variant="outline">{phase.eligibility}</Badge>}
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-pretty">{phase.summary}</p>

      {phase.tracks && (
        <div className="grid gap-3 sm:grid-cols-3">
          {phase.tracks.map((track) => (
            <div key={track.title} className="rounded-lg bg-secondary/40 p-3">
              <p className="text-sm font-semibold text-foreground">{track.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{track.description}</p>
            </div>
          ))}
        </div>
      )}

      {phase.learn && (
        <ul className="flex flex-col gap-2">
          {phase.learn.map((item) => (
            <li key={item.description} className="text-sm text-muted-foreground">
              {item.title ? (
                <>
                  <span className="font-medium text-foreground">{item.title}: </span>
                  {item.description}
                </>
              ) : (
                <>• {item.description}</>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
