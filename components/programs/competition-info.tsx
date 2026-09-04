import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CompetitionInfo } from "@/lib/ai-programs";

export function CompetitionInfoCard({ competition }: { competition: CompetitionInfo }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground">{competition.name}</h3>

      {competition.facts && (
        <div className="flex flex-wrap gap-2">
          {competition.facts.map((fact) => (
            <Badge key={fact} variant="secondary">
              {fact}
            </Badge>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3">
        {competition.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm text-muted-foreground text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      {(competition.submissionRequirements || competition.judgingCriteria) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {competition.submissionRequirements && (
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                What Students Submit
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {competition.submissionRequirements.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {competition.judgingCriteria && (
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                What Judges Look For
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {competition.judgingCriteria.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <a
        href={competition.learnMoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        {competition.learnMoreLabel}
        <ArrowUpRightIcon className="size-3.5" aria-hidden />
      </a>
    </div>
  );
}
