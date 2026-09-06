import type { Metadata } from "next";
import Image from "next/image";
import { MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact MGenius Academy in Newton, MA. Call, email, or find us on WeChat, Instagram, and 小红书 (RedNote) — or book a free trial class.",
};

const cards = [
  {
    icon: MapPinIcon,
    label: "Address",
    lines: [siteConfig.address.line1, siteConfig.address.line2],
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    )}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    lines: siteConfig.phones,
    href: `tel:${siteConfig.phones[0].replace(/[^\d+]/g, "")}`,
  },
  {
    icon: MailIcon,
    label: "Email",
    lines: [siteConfig.email],
    href: `mailto:${siteConfig.email}`,
  },
];

const socials = [
  {
    icon: MessageCircleIcon,
    label: "WeChat",
    value: "MGeniusAcademy",
    qr: "/images/contact/poster_wx.png",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@MGENIUSACADEMY",
    href: siteConfig.social.instagram,
    qr: "/images/contact/contact_ins.png",
  },
  {
    icon: MessageCircleIcon,
    label: "小红书 (RedNote)",
    value: "MGeniusAcade",
    href: siteConfig.social.rednote,
    qr: "/images/contact/contact_rednote.png",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch with MGA"
        description="Questions about our programs, schedules, or enrollment? Reach us any of the ways below — or skip straight to booking a free trial class."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {cards.map((card) => (
              <Card key={card.label} className="p-6">
                <a
                  href={card.href}
                  target={card.label === "Address" ? "_blank" : undefined}
                  rel={card.label === "Address" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-start gap-3"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <card.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {card.label}
                    </p>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Find Us on Social
            </h2>
            <p className="mt-2 text-muted-foreground">
              Follow along or say hello on WeChat, Instagram, and 小红书.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            {socials.map((social) => {
              const content = (
                <>
                  <span className="flex size-32 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-border">
                    <Image
                      src={social.qr}
                      alt={`${social.label} QR code`}
                      width={200}
                      height={200}
                      className="size-full object-contain"
                    />
                  </span>
                  <div>
                    <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-foreground">
                      <social.icon className="size-4 text-primary" aria-hidden />
                      {social.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{social.value}</p>
                  </div>
                </>
              );
              return social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center hover:border-primary/40"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={social.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              WeChat Customer Service
            </h2>
            <p className="mt-2 text-muted-foreground">
              Scan the QR code to chat with our team directly on WeChat.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xs">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center">
              <span className="flex size-40 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-border">
                <Image
                  src="/images/contact/helper_wx.jpg"
                  alt="WeChat customer service QR code"
                  width={240}
                  height={240}
                  className="size-full object-contain"
                />
              </span>
              <div>
                <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-foreground">
                  <MessageCircleIcon className="size-4 text-primary" aria-hidden />
                  WeChat Customer Service
                </p>
                <p className="text-sm text-muted-foreground">Grace 老师</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
