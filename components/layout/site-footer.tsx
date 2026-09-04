import Link from "next/link";
import Image from "next/image";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Container } from "@/components/container";
import { SiteLogo } from "@/components/site-logo";
import { footerLinks, mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

const socialQrs = [
  { label: "WeChat", qr: "/images/contact/contact_wx.jpg" },
  {
    label: "Instagram",
    qr: "/images/contact/contact_ins.png",
    href: siteConfig.social.instagram,
  },
  {
    label: "小红书",
    qr: "/images/contact/contact_rednote.png",
    href: siteConfig.social.rednote,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <SiteLogo />
          <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            {mainNav
              .filter((item) => item.href)
              .map((item) => (
                <li key={item.label}>
                  <Link href={item.href!} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-3 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <PhoneIcon className="size-4 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-primary">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 shrink-0 text-primary" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Follow</h3>
          <div className="mt-3 grid grid-cols-3 gap-3 sm:flex sm:gap-4">
            {socialQrs.map((social) => {
              const content = (
                <>
                  <span className="flex size-16 items-center justify-center rounded-lg bg-white p-1 ring-1 ring-border sm:size-20">
                    <Image
                      src={social.qr}
                      alt={`${social.label} QR code`}
                      width={160}
                      height={160}
                      className="size-full object-contain"
                    />
                  </span>
                  <span className="text-xs text-muted-foreground">{social.label}</span>
                </>
              );
              return social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={social.label}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
