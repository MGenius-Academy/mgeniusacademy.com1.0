import { MedalIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { NoeticRow, Row } from "@/lib/math-awards-data";

export function TierBadge({ tier }: { tier: "gold" | "star" }) {
  return tier === "gold" ? (
    <Badge className="gap-1 bg-amber-500 text-white">
      <MedalIcon className="size-3" /> Top 1
    </Badge>
  ) : (
    <Badge variant="secondary" className="gap-1">
      <StarIcon className="size-3" /> Top 20
    </Badge>
  );
}

export function AwardTable({ rows, rankLabel }: { rows: Row[]; rankLabel: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[480px] text-sm">
        <thead className="bg-secondary/50 text-left">
          <tr>
            <th className="px-4 py-3 font-semibold">Student</th>
            <th className="px-4 py-3 font-semibold">Grade</th>
            <th className="px-4 py-3 font-semibold">Score</th>
            <th className="px-4 py-3 font-semibold">{rankLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="px-4 py-2.5 font-medium">{row.name}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{row.grade}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{row.score}</td>
              <td className="px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">#{row.rank}</span>
                  <TierBadge tier={row.tier} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NoeticTable({ rows }: { rows: NoeticRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[480px] text-sm">
        <thead className="bg-secondary/50 text-left">
          <tr>
            <th className="px-4 py-3 font-semibold">Team</th>
            <th className="px-4 py-3 font-semibold">Student</th>
            <th className="px-4 py-3 font-semibold">Score</th>
            <th className="px-4 py-3 font-semibold">Award</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="px-4 py-2.5 text-muted-foreground">{row.team}</td>
              <td className="px-4 py-2.5 font-medium">{row.name}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{row.score}</td>
              <td className="px-4 py-2.5">
                <span className="text-xs font-medium text-primary">{row.award}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
