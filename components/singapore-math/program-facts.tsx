import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProgramFacts({
  ageGroup,
  classFormat,
}: {
  ageGroup: string;
  classFormat: string[];
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border p-6">
      <Badge variant="secondary" className="w-fit">
        Age Group: {ageGroup}
      </Badge>
      <div>
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Class Format
        </p>
        <ul className="mt-2 flex flex-col gap-2">
          {classFormat.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckIcon
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden
              />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
