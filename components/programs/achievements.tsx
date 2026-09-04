import Image from "next/image";
import { TrophyIcon } from "lucide-react";
import type { Achievement } from "@/lib/ai-programs";

export function Achievements({
  intro,
  seasons,
  image,
}: {
  intro: string;
  seasons: Achievement[];
  image?: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground text-pretty">{intro}</p>
        <div className="flex flex-col gap-4">
          {seasons.map((achievement, index) => (
            <div
              key={`${achievement.season}-${achievement.headline}-${index}`}
              className="rounded-xl border border-border p-4"
            >
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {achievement.season}
              </p>
              {achievement.headline && (
                <p className="mt-1 flex items-center gap-1.5 font-semibold text-foreground">
                  <TrophyIcon className="size-4 text-primary" aria-hidden />
                  {achievement.headline}
                </p>
              )}
              <ul className="mt-2 flex flex-col gap-1">
                {achievement.winners.map((winner, winnerIndex) => (
                  <li
                    key={`${winner.name}-${winnerIndex}`}
                    className="text-sm text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">{winner.name}</span>
                    {winner.note ? ` — ${winner.note}` : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {image && (
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image src={image} alt="MGA students' ICW competition medals" fill className="object-cover" />
        </div>
      )}
    </div>
  );
}
