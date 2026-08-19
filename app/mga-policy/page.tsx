import type { Metadata } from "next";
import Image from "next/image";
import { CalendarXIcon, CloudRainIcon, DollarSignIcon, XCircleIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "MGA Policy",
  description:
    "MGA's attendance, make-up, absence, and refund policies for STEM classes in Newton, MA.",
};

const refundPolicy = [
  {
    icon: DollarSignIcon,
    title: "30+ Days Before First Lesson",
    body: "Full refund upon cancellation.",
  },
  {
    icon: CalendarXIcon,
    title: "Within 30 Days of First Lesson",
    body: "After deducting the $300 non-refundable deposit, the remaining balance will be refunded.",
  },
  {
    icon: XCircleIcon,
    title: "After Course Starts",
    body: "No refunds allowed; only make-up classes can be arranged.",
  },
  {
    icon: CloudRainIcon,
    title: "Weather or Force Majeure",
    body: "If a group must be canceled due to inclement weather or other external factors, make-up classes will be arranged. If not possible, the corresponding lesson fees will be refunded.",
  },
];

export default function MgaPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="MGA Policy"
        title="Attendance, Make-Up & Refund Policy"
        description="Everything families need to know about attendance expectations, make-up classes, absences, and refunds."
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Attendance, Make-Up, and Absence Policy
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-[725/1024] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/mga-policy/MGA-Make-up-Policy-2_Page_1-725x1024.jpeg"
                  alt="MGA attendance, make-up, and absence policy — page 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[725/1024] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/mga-policy/MGA-Make-up-Policy-2_Page_2-725x1024.jpeg"
                  alt="MGA attendance, make-up, and absence policy — page 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Refund Policy
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              In order to safeguard students&apos; rights and uphold teaching
              standards, the following policies regarding course refunds and
              adjustments have been established:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {refundPolicy.map((item) => (
                <Card key={item.title} className="flex-row items-start gap-4 p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Please note that MGA reserves the final right to interpret
              these terms. Thank you for your cooperation.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
