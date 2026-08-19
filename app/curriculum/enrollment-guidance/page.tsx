import type { Metadata } from "next";
import Image from "next/image";
import { CalendarIcon, ClipboardCheckIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Enrollment Guidance",
  description:
    "How to enroll at MGenius Academy: schedule a free trial lesson, view term calendars and class schedules, and register for the current term or semester.",
};

const TERM2_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfuVCEq49ClXReqrk1osVbdAVtJt7JYElX-UyBY0H3RjWSFYw/viewform";
const SEMESTER_FORM_URL = "https://forms.gle/jHSuR8mdYJ5h6Xia6";

export default function EnrollmentGuidancePage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum"
        title="Enrollment Guidance"
        description="Everything you need to schedule a trial lesson, check term calendars, and register your child for MGA's STEM programs."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="items-start gap-4 p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ClipboardCheckIcon className="size-5" />
              </div>
              <h2 className="text-xl font-semibold">
                Schedule a Trial Lesson
              </h2>
              <p className="text-sm text-muted-foreground">
                Interested in scheduling a visit or a trial lesson? Book a
                free trial and experience an MGA class firsthand.
              </p>
              <Button
                size="lg"
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
                render={
                  <a
                    href={siteConfig.trialFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Schedule Now
              </Button>
            </Card>

            <Card className="items-start gap-4 p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CalendarIcon className="size-5" />
              </div>
              <h2 className="text-xl font-semibold">
                Join MGA STEM Learning
              </h2>
              <p className="text-sm text-muted-foreground">
                Register today to begin your child&rsquo;s learning journey
                at MGA.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Button
                  render={
                    <a
                      href={TERM2_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  25-26 Term 2
                </Button>
                <Button
                  variant="outline"
                  render={
                    <a
                      href={SEMESTER_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  26-27 Semester
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              2025–2026 Term 2 Calendar &amp; Schedule
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
              <Image
                src="/images/curriculum_enrollment-guidance/26-calendar.png"
                alt="2025-2026 Term 2 calendar"
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
              <Image
                src="/images/curriculum_enrollment-guidance/26-scheduel.png"
                alt="2025-2026 Term 2 class schedule"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={
                <a
                  href={TERM2_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              25-26 Term 2 — Sign Up Now
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              2026–2027 Full Semester Calendar &amp; Schedule
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
              <Image
                src="/images/curriculum_enrollment-guidance/26-27-Calendar.png"
                alt="2026-2027 full semester calendar"
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white ring-1 ring-border">
              <Image
                src="/images/curriculum_enrollment-guidance/05282026MGA-Calendar.png"
                alt="2026-2027 full semester schedule"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={
                <a
                  href={SEMESTER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              26-27 Full Semester — Sign Up Now
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
