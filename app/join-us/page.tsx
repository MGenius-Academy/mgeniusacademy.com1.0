import type { Metadata } from "next";
import { CheckIcon, GraduationCapIcon, SendIcon, UsersIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "MGA is hiring part-time engineering teachers and teaching assistants in Newton, MA to lead hands-on STEM projects with K-8 students.",
};

const roles = [
  {
    icon: GraduationCapIcon,
    title: "Engineering Enrichment Program Teacher",
    subtitle: "Afterschool / Weekend",
    rate: "$40–100/hour, depending on experience",
    responsibilities: [
      "Utilize MGA's pre-designed lesson plans and resources to effectively teach engineering concepts",
      "Guide students in designing and building their products using tools and software ranging from hot glue guns and laser cutters to 3D printers and AutoCAD",
      "Create a supportive, inclusive learning environment that encourages active participation and collaboration",
      "Assess and provide constructive feedback on student progress and development",
      "Collaborate with other teachers and staff to enhance program curriculum and activities",
    ],
    requirements: [
      "Background in Mechanical/Electrical Engineering, Education, Computer Science, or a related field",
      "Experience teaching or working with young children in an educational setting",
      "Strong knowledge of engineering concepts and their practical application",
      "Excellent communication and interpersonal skills",
      "Ability to engage and inspire students through interactive, innovative teaching methods",
      "Experience with 3D printers, laser cutters, AutoCAD, or Arduino is a plus",
    ],
  },
  {
    icon: UsersIcon,
    title: "Teaching Assistant",
    subtitle: "Afterschool / Weekend",
    rate: "$15–30/hour, depending on experience",
    responsibilities: [
      "Assist lead teachers in implementing engaging lessons and hands-on activities",
      "Support students in exploring engineering principles through project-based learning",
      "Facilitate a positive, inclusive learning environment that encourages participation",
      "Provide assistance during experiments, demonstrations, and practical activities",
      "Help students understand concepts, troubleshoot challenges, and offer guidance",
      "Assist in managing classroom materials, equipment, and resources",
    ],
    requirements: [
      "Age 16+",
      "Experience working with children in an educational or youth development setting",
      "Engineering background or experience with software/tools like AutoCAD or laser cutters is a plus",
      "Passion for STEM education and an interest in engineering concepts",
      "Patient, nurturing, and supportive attitude toward young learners",
      "Strong organizational skills and attention to detail",
    ],
  },
];

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Join Us and Grow Together"
        description="If you are talented and interesting, don't hide it. MGA is seeking part-time engineering teachers and teaching assistants in Newton to work with our little engineers after school and on weekends."
      />

      <section className="py-16">
        <Container>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground text-pretty">
            MGA is a STEAM program focused on engineering for K-8th grade
            kids who love making, creating, and problem-solving. Our program
            provides comprehensive lesson plans and resources — eliminating
            the need for teachers to plan their own lessons — and we&apos;re
            happy to train teachers to help them grow professionally.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {roles.map((role) => (
              <Card key={role.title} className="gap-4 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <role.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">{role.title}</h2>
                    <p className="text-sm text-muted-foreground">{role.subtitle}</p>
                  </div>
                </div>

                <p className="w-fit rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  {role.rate}
                </p>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Responsibilities
                  </h3>
                  <ul className="mt-2 flex flex-col gap-2">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Requirements
                  </h3>
                  <ul className="mt-2 flex flex-col gap-2">
                    {role.requirements.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mx-auto mt-12 max-w-2xl items-center gap-4 p-8 text-center">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <SendIcon className="size-5" aria-hidden />
            </span>
            <h2 className="text-xl font-semibold">How to Apply</h2>
            <p className="text-sm text-muted-foreground">
              Send us your updated resume detailing relevant qualifications
              and experience, along with a brief cover letter explaining your
              interest in the position.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={<a href={`mailto:${siteConfig.email}?subject=Job%20Application`} />}
            >
              Email {siteConfig.email}
            </Button>
          </Card>
        </Container>
      </section>

      <CtaBanner
        title="Have Questions About Working at MGA?"
        description="Reach out and we'll be happy to tell you more about our team and open positions."
        buttonLabel="Contact Us"
        href={`mailto:${siteConfig.email}`}
      />
    </>
  );
}
