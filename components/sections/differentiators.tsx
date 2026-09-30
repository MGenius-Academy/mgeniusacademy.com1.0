"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/home/reveal";
import { dotGrid, sectionTitle } from "@/components/home/styles";

const items = [
  {
    title: "Hyper-Tooling: AI + Hard-Tech Integration",
    description:
      "At MGA, everything is a tool. Students combine AI with physical technologies—using AI to generate ideas and optimize designs, while mastering industrial tools like 3D printing, laser cutting, and soldering to bring concepts into reality.",
    image: "/images/home/AI4-1024x572.jpg",
  },
  {
    title: "System-Level Engineering Thinking",
    description:
      "Beyond assembling kits, students learn to build complete systems. Through platforms like Arduino, Micro:bit, and Mixly, they integrate software, electronics, and mechanics—developing true engineering logic and problem-solving skills.",
    image: "/images/home/AI-ChatBot-File-3-1024x576.jpg",
  },
  {
    title: "Product Innovation (From Lab to Market)",
    description:
      "We connect STEM with business, design, and the arts, helping students see how technology creates value across industries and society.",
    image: "/images/home/5-6-1024x572.jpg",
  },
  {
    title: "Mathematics as the Core Engine",
    description:
      "Mathematical thinking underpins all learning at MGA. Students develop strong logical reasoning and modeling skills, enabling them to understand complex systems in AI, engineering, and business.",
    image: "/images/home/AI-ChatBot-File-2-1024x576.jpg",
  },
  {
    title: "Always in Sync with Emerging Technology",
    description:
      "Curriculum evolves with the latest global tech trends. Students gain early exposure to cutting-edge tools and innovations, building intuition through frequent interaction, experimentation, and application.",
    image: "/images/home/3-3-1024x572.jpg",
  },
  {
    title: "Diverse, Real-World Learning Scenarios",
    description:
      "From immersive camps to hands-on workshops, MGA provides varied learning environments where students continuously test, iterate, and showcase their ideas—turning knowledge into real-world experience.",
    image: "/images/home/5-5-1024x572.jpg",
  },
];

export function Differentiators() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = items[active];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-72 ${dotGrid} [mask-image:linear-gradient(to_bottom,black,transparent)]`}
      />

      <Container className="relative">
        <Reveal>
          <h2 className={`max-w-xl ${sectionTitle}`}>What Makes MGA Different?</h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          {/* Image panel: first on mobile, sticky on the right at desktop */}
          <Reveal className="lg:order-2 lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-16/10 overflow-hidden rounded-[16px] border border-slate-200/80 bg-slate-100">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={current.image}
                    className="absolute inset-0"
                    initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={current.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:order-1 lg:col-span-5">
            <ul className="border-t border-slate-200/80">
              {items.map((item, index) => {
                const isActive = index === active;
                return (
                  <li key={item.title} className="border-b border-slate-200/80">
                    <button
                      type="button"
                      aria-expanded={isActive}
                      onClick={() => setActive(index)}
                      className="group flex w-full items-start gap-4 py-5 text-left"
                    >
                      <span
                        className={`mt-1 w-5 shrink-0 text-xs font-bold tabular-nums transition-colors ${
                          isActive ? "text-[#E86A3E]" : "text-slate-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 text-lg font-bold tracking-tight text-balance transition-colors ${
                          isActive ? "text-[#1A43BF]" : "text-[#0F172A] group-hover:text-[#1A43BF]"
                        }`}
                      >
                        {item.title}
                      </span>
                      <PlusIcon
                        aria-hidden="true"
                        className={`mt-1 size-4 shrink-0 transition-transform duration-300 ${
                          isActive ? "rotate-45 text-[#1A43BF]" : "text-slate-400"
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.div
                          key="body"
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pl-9 text-[15px] leading-relaxed text-slate-600">
                            {item.description}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
