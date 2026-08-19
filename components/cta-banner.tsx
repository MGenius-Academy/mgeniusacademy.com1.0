import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type CtaBannerProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export function CtaBanner({
  title = "Book a Free Trial Class in Boston Today",
  description = "Serving families across Newton, Waltham, Lexington, and the Greater Boston area.",
  buttonLabel = "Book a Free Trial",
  href = siteConfig.trialFormUrl,
}: CtaBannerProps) {
  return (
    <section className="bg-primary py-14 text-primary-foreground sm:py-16">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-primary-foreground/80">{description}</p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          render={<a href={href} target="_blank" rel="noopener noreferrer" />}
        >
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
