import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-border bg-secondary/50 py-14 sm:py-20", className)}>
      <Container className="max-w-3xl text-center">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
