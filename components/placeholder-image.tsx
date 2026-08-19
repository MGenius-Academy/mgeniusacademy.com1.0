import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
} as const;

type PlaceholderImageProps = {
  label: string;
  aspect?: keyof typeof aspectClasses;
  icon?: LucideIcon;
  className?: string;
};

export function PlaceholderImage({
  label,
  aspect = "video",
  icon: Icon = ImageIcon,
  className,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-muted/60 p-4 text-center",
        aspectClasses[aspect],
        className,
      )}
    >
      <Icon className="size-8 text-muted-foreground/60" aria-hidden />
      <span className="text-xs text-muted-foreground/80">{label}</span>
    </div>
  );
}
