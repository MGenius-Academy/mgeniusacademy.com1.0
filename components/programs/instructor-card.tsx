import Image from "next/image";
import type { Instructor } from "@/lib/ai-programs";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border p-5">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-secondary/40">
        <Image
          src={instructor.image}
          alt={`${instructor.name} — ${instructor.title}`}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <p className="font-semibold text-foreground">{instructor.name}</p>
        <p className="text-sm text-muted-foreground">{instructor.title}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {instructor.bullets.map((bullet) => (
          <li key={bullet} className="text-sm text-muted-foreground">
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
