import type { Metadata } from "next";
import {
  AwardIcon,
  CameraIcon,
  ClipboardListIcon,
  GraduationCapIcon,
  MegaphoneIcon,
  UsersIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Volunteer Opportunities",
  description:
    "Volunteer with MGA in Newton, MA — support STEM classes, events, and mentorship for K-8 students, and earn community service hours.",
};

const opportunities = [
  {
    icon: ClipboardListIcon,
    title: "Classroom Support",
    body: "Assist instructors during classes by helping students with hands-on projects, organizing materials, and ensuring a smooth learning experience.",
  },
  {
    icon: AwardIcon,
    title: "Event & Competition Support",
    body: "Support MGA events such as STEM workshops, exhibitions, and competitions by helping with check-in, guiding participants, and assisting with logistics.",
  },
  {
    icon: GraduationCapIcon,
    title: "Student Mentorship",
    body: "Advanced students may help mentor younger learners, share their project experiences, and support teamwork and problem-solving activities.",
  },
  {
    icon: CameraIcon,
    title: "Media & Documentation",
    body: "Help capture photos and videos of classes and events, assist with project documentation, and contribute to MGA's community updates.",
  },
  {
    icon: MegaphoneIcon,
    title: "Community Outreach",
    body: "Assist in promoting STEM learning through workshops, school visits, or community events.",
  },
];

const whoCanVolunteer = [
  "Middle and high school students interested in STEM",
  "MGA students who want leadership experience",
  "College students interested in education or engineering",
  "Community members who support youth education",
];

const benefits = [
  "Leadership and teamwork skills",
  "Experience working with younger students",
  "Exposure to engineering and STEM education",
  "Community service hours and volunteer certificates",
];

export default function VolunteerOpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Volunteer with MGA"
        description="MGA welcomes passionate students and community members who want to support STEM education and inspire younger learners. Our volunteers help create a supportive, creative, collaborative learning environment."
      />

      <section className="py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Volunteer Opportunities
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((item) => (
              <Card key={item.title} className="gap-3 p-6">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-8 rounded-3xl bg-secondary/40 p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <span className="flex size-11 items-center justify-center rounded-full bg-background text-primary">
                <UsersIcon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-xl font-semibold">Who Can Volunteer</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {whoCanVolunteer.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="flex size-11 items-center justify-center rounded-full bg-background text-primary">
                <AwardIcon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-xl font-semibold">
                Benefits of Volunteering
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {benefits.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Interested in Volunteering?"
        description="Email us to learn more about current volunteer openings at MGA."
        buttonLabel="Email Us"
        href={`mailto:${siteConfig.email}?subject=Volunteer%20Interest`}
        showEnrollButton={false}
      />
    </>
  );
}
