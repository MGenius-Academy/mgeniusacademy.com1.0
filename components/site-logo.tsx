import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteLogo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={siteConfig.name}>
      <Image
        src="/mga-logo.png"
        alt={`${siteConfig.name} logo`}
        width={429}
        height={194}
        priority
        className="h-10 w-auto shrink-0 sm:h-12"
      />
    </Link>
  );
}
