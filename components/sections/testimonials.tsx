import Image from "next/image";
import { Container } from "@/components/container";

const reviews = [
  "/images/home/Review1.webp",
  "/images/home/Review2.webp",
  "/images/home/Review3.webp",
  "/images/home/Review4.jpg",
  "/images/home/Review5.jpg",
  "/images/home/Review6.jpg",
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Parents Love MGA
          </h2>
          <p className="mt-3 text-muted-foreground">
            Parents in Boston trust MGA for high-quality STEM and math
            education that prepares students for future success.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {reviews.map((src, index) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
              <Image
                src={src}
                alt={`Parent review ${index + 1} for MGenius Academy`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
