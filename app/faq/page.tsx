import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about MGA's STEM programs in Newton, MA — ages, curriculum, trial classes, discounts, and how to sign up.",
};

const TRIAL_FORM_URL = "https://forms.gle/4zJMfAakKVLg6yLJA";
const REGISTRATION_FORM_URL = "https://forms.gle/YDVTjLvjFc6T5uhq5";

const faqs = [
  {
    q: "What is the age range for children to attend classes at MGenius Academy?",
    a: "We are an educational institution for K-8.",
  },
  {
    q: "Are the classes taught in English or Chinese?",
    a: "All classes are taught in English.",
  },
  {
    q: "Where are you located? Is it easy to find parking?",
    a: (
      <>
        <p>
          Our address is: {siteConfig.address.line1}, {siteConfig.address.line2}.
        </p>
        <p>
          You can also navigate to our center by entering &ldquo;MGenius
          Academy&rdquo; on Google Maps. We are located between Star Market
          and Newton North High School. There is plenty of street parking,
          plus a large parking lot outside Star Market.
        </p>
      </>
    ),
  },
  {
    q: "What's the difference between Genius Workshop, Apprenticeship, and Maker's Club? How do I decide which curriculum to choose?",
    a: (
      <>
        <p>
          <strong>Genius Workshop</strong> follows a spiral, upward approach
          with structured lesson plans, typically in five parts: a short
          concept lesson (5–15 minutes), Maker&apos;s Time where students
          build their projects (e.g. hydraulic caterpillars, speed-changing
          mini fans, light-controlled vehicles), a Design &amp; Challenge
          round to improve their products, and Show Time where students
          share what they made. Students take one class per week, and the
          same concept resurfaces at different points as the course
          progresses. It&apos;s divided into three age groups: Enlightenment
          (K–G2), Exploration (G2–G4), and Innovation (G4–G6). Students use
          laser cutters, 3D printers, and coding as tools throughout.
        </p>
        <p>
          <strong>Apprenticeship</strong> is designed around completing one
          large product and is suited for ages G5–G7. Young engineers work
          with mentors who modularize the large project so students learn
          concepts while building — repeating an engineering design process
          of asking questions, weighing constraints, building prototypes,
          and improving designs. Current apprenticeships include:
        </p>
        <ul className="list-disc pl-5">
          <li>Drivable Electric Cars — Saturdays 9:30–11:30 AM or 1:30–3:30 PM</li>
          <li>Combat Robots — Sundays 9:30–11:30 AM or 1:30–3:30 PM</li>
        </ul>
        <p>
          <strong>Maker&apos;s Club</strong> revolves around a small theme
          each session, offering a more open-ended, hands-on creative space
          without a fixed pattern — themes include conductive dough,
          Strawbees structures, toothbrush robots, cardboard construction,
          and more. Suitable for ages K–G2.
        </p>
      </>
    ),
  },
  {
    q: "Do you offer trial classes?",
    a: (
      <p>
        Yes. Please submit the{" "}
        <a href={TRIAL_FORM_URL} target="_blank" rel="noopener noreferrer">
          Trial Form
        </a>{" "}
        and select the trial course you&apos;re interested in, and
        we&apos;ll contact you shortly to confirm the trial time.
      </p>
    ),
  },
  {
    q: "I'm worried the lessons are too hard and my kid can't focus for that long.",
    a: "Our philosophy is to learn by making, not by listening. We've spent 100+ hours designing and refining our curriculum so the content is accessible and engaging for kids. We limit content instruction to 5–15 minutes across all curriculum, keep class sizes small (no more than 8 students), and have a teaching assistant in every class to help.",
  },
  {
    q: "My kid is very shy, and I'm worried they won't share anything during Show Time or will feel stressed.",
    a: "Our teachers are patient and progressively encourage children to share their work and the challenges they encountered. If a child is initially hesitant to speak, we encourage them to share through writing or drawing. We've also prepared reward coins and prizes to encourage kids to confidently present and share.",
  },
  {
    q: "How are you different from other robotics programs or organizations like KiwiCo?",
    a: "Our structured curriculum focuses on building a scientific and engineering mindset where kids learn by doing and experimenting, drawing their own conclusions about real-world applications. KiwiCo and many robotics courses are based on assembling kits — fun, but similar to playing with LEGO, without necessarily building an understanding of underlying principles. Our courses start from the basics so young engineers understand how things work before applying them. Students leave with strong hands-on experience and a genuine foundational understanding of mechanical and electrical engineering, plus coding. The laser cutter, 3D printer, and coding are all tools — once students learn to use them with an engineer's mindset, they can create their own unique products.",
  },
  {
    q: "Any discounts if I sign up now?",
    a: (
      <ul className="list-disc pl-5">
        <li>
          <strong>Google Review Bonus</strong> — Current students receive an
          additional $10 off by writing a compelling Google review or
          posting a moment with at least 100 words and one picture.
        </li>
        <li>
          <strong>Referral Credit</strong> — Receive a $50 bonus when you
          refer new students to register for our courses.
        </li>
        <li>
          <strong>Sibling Discount</strong> — Enjoy a $50 discount for each
          additional sibling if you choose Pay in Full.
        </li>
      </ul>
    ),
  },
  {
    q: "How do I sign up for your class?",
    a: (
      <p>
        Submit the{" "}
        <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
          Registration Form
        </a>
        , or contact us through WeChat or email us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We&apos;ll
        send you a registration form to fill out and arrange payments.
      </p>
    ),
  },
  {
    q: "Where can I learn more about your program?",
    a: (
      <p>
        Please explore this website, or email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> directly.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything families ask us about ages, curriculum, trial classes, and enrollment."
      />

      <section className="py-16">
        <Container className="max-w-3xl">
          <Accordion multiple>
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-secondary/50 p-8 text-center">
            <h2 className="text-xl font-semibold">Still Have Questions?</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Book a free trial class to see MGA in action, or reach out and
              we&apos;ll be happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                render={<a href={TRIAL_FORM_URL} target="_blank" rel="noopener noreferrer" />}
              >
                Book a Free Trial
              </Button>
              <Button
                variant="outline"
                render={<a href={`mailto:${siteConfig.email}`} />}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
