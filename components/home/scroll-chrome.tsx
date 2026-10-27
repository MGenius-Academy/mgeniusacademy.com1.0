"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export type HomeSection = { id: string; label: string };

// Page-level scroll UI for the home page: a progress bar pinned to the top of
// the viewport and a dot nav on the right edge that tracks the section in view.
export function ScrollChrome({ sections }: { sections: HomeSection[] }) {
  return (
    <>
      <ScrollProgress />
      <SectionNav sections={sections} />
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-[#1A43BF]"
      style={{ scaleX }}
    />
  );
}

function SectionNav({ sections }: { sections: HomeSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const reduce = useReducedMotion();

  useEffect(() => {
    // A section counts as active once it crosses the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Home page sections"
      className="fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col items-end gap-1">
        {sections.map(({ id, label }) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => {
                  const el = document.getElementById(id);
                  if (!el) return;
                  event.preventDefault();
                  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
                  history.replaceState(null, "", `#${id}`);
                }}
                className="group flex h-7 items-center gap-3 focus-visible:outline-none"
              >
                <span className="rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-[#0F172A] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-6 w-1.5 bg-[#1A43BF]"
                      : "size-1.5 bg-[#0F172A]/25 group-hover:bg-[#0F172A]/60"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
