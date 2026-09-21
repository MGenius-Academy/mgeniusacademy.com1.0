import Link from "next/link";
import { Card } from "@/components/ui/card";

type KeyFeature = {
  title: string;
  description: string;
  cta?: { text: string; href: string };
};

export function KeyFeatures({ features }: { features: KeyFeature[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <Card key={feature.title} className="gap-2 p-5">
          <h3 className="font-semibold text-foreground">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
          {feature.cta ? (
            <Link
              href={feature.cta.href}
              className="text-sm font-medium text-primary hover:underline"
            >
              {feature.cta.text} →
            </Link>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
