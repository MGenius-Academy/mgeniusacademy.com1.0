import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type CtaBannerProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
  showEnrollButton?: boolean;
};

export function CtaBanner({
  title = "Book a Free Trial Class in Boston Today",
  description = "Serving families across Newton, Waltham, Lexington, and the Greater Boston area.",
  buttonLabel = "Book a Free Trial",
  href = siteConfig.trialFormUrl,
  showEnrollButton = true,
}: CtaBannerProps) {
  return (
    <section className="bg-primary py-14 text-primary-foreground sm:py-16">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-primary-foreground/80">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={<a href={href} target="_blank" rel="noopener noreferrer" />}
          >
            {buttonLabel}
          </Button>
          {showEnrollButton ? (
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={
                <a href={siteConfig.enrollUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              Enroll Now
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
