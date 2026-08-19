import Link from "next/link";
import Image from "next/image";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { Container } from "@/components/container";
import { footerLinks, mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Image
            src="/mga-logo.png"
            alt={`${siteConfig.name} logo`}
            width={429}
            height={194}
            className="h-10 w-auto"
          />
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
          <div className="mt-3 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MGA on Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
            >
              <InstagramIcon className="size-4" aria-hidden />
            </a>
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
