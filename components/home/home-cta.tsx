import { ArrowUpRightIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/home/reveal";
import { siteConfig } from "@/lib/site-config";

// Home-only version of <CtaBanner />, same copy and links, restyled to match
// the home page. The shared banner stays untouched for every other page.
export function HomeCta() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[16px] bg-[#1A43BF] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent_70%)]"
            />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-balance text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
                  Book a Trial Class in Boston Today
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/80">
                  Serving families across Newton, Waltham, Lexington, and the Greater Boston area.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <a
                  href={siteConfig.trialFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 text-[15px] font-semibold text-[#1A43BF] transition-[background-color,transform] duration-200 hover:bg-[#F8FAFC] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book a Trial
                  <ArrowUpRightIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.enrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center whitespace-nowrap rounded-full border border-white/40 px-6 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-white/10 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
