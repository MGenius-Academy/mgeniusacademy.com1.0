import { Card } from "@/components/ui/card";
import { keyFeatures } from "@/lib/singapore-math";

export function KeyFeatures() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {keyFeatures.map((feature) => (
        <Card key={feature.title} className="gap-2 p-5">
          <h3 className="font-semibold text-foreground">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
