import { StarIcon } from "lucide-react";
import { Container } from "@/components/container";

const reviews = [
  {
    name: "Jenny Yong Jiang",
    date: "Dec 2023",
    quote:
      "My two kids are enrolled in MGA and they LOVE it!!! My daughter is in the apprenticeship class and finished building three robots and had so much fun battling with her fellow classmates. My son is in the exploration class and he learned so much about the engineering designs and even built a few cool things on his own! The teachers and the staff are always supportive and encouraging.",
  },
  {
    name: "Summer & Wesley Chen",
    date: "Dec 2023",
    quote:
      "Great program to stimulate kids' passion for engineering, both my kids 8 year and 10 year learned a lot and had fun there! They also host birthday parties and holiday camps, highly recommended!",
  },
  {
    name: "Erxin Zhou",
    date: "Dec 2023",
    quote:
      "My son is in Kindergarten Enlightenment class. He really enjoyed! Every week they have different projects and he is always very excited to share with me what he did and what he learned. The environment is bright, the staff are friendly, and the teachers are professional.",
  },
  {
    name: "Xiaoya Liang",
    date: "Dec 2023",
    quote:
      "We love MGA! My daughter has so much fun, learning and creating at MGA. She loved visiting the Lego area before class, and she even didn't want to leave after class. After each class, she would bring home a piece of artwork (or science-work) with a big smile on her face.",
  },
  {
    name: "Anita He",
    date: "Dec 2023",
    quote:
      "A great engineering after-school program for kids, with a team of teachers who care about educating kids and have the expertise, a well-designed STEM curriculum for different ages that embraces creativity and problem solving, and well-prepared project materials & machines.",
  },
  {
    name: "Andrew Zhang",
    date: "Aug 2024",
    quote:
      "The curriculum is exactly what I am looking for my son, who is extremely interested in hands-on experience in building and creating. The place is founded by parents, so the set up is tailored to the needs of parents. They offered a progress report for the parents to review, which is rare for after-school programs.",
  },
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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-background p-6 shadow-sm"
            >
              <div
                className="flex gap-0.5 text-accent"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-2 text-sm font-semibold">
                {review.name}
                <span className="ml-2 font-normal text-muted-foreground">
                  &middot; {review.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
