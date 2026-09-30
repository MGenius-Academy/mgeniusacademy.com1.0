import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/home/reveal";
import { sectionTitle } from "@/components/home/styles";

const publicSchools = [
  "8.png",
  "7.png",
  "13.png",
  "3.png",
  "1-150x150.png",
  "5.png",
  "6.png",
  "2.png",
  "9.png",
  "11.png",
  "12.png",
  "10.png",
  "14-1.jpg",
];

const privateSchools = [
  "13-1.png",
  "1-1.png",
  "9-1.png",
  "11-1.png",
  "16.png",
  "15.jpg",
  "17.png",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "12-2.png",
  "7-1.png",
  "3-1.png",
  "4-1.png",
  "5-1.png",
  "6-1.png",
  "14-1.png",
  "10-1.png",
  "8-1.png",
  "2-1.png",
];

// Two rows of one marquee device: the track holds the list twice and slides by
// half its width, so the loop is seamless. Pauses on hover; under reduced motion
// it stops and becomes a scrollable row instead.
function LogoRow({
  files,
  label,
  reverse = false,
}: {
  files: string[];
  label: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:items-center lg:gap-8">
      <p className="text-sm font-bold text-[#0F172A] lg:col-span-2">{label}</p>
      <div className="group relative overflow-hidden motion-reduce:overflow-x-auto lg:col-span-10 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <ul
          className={`flex w-max gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
            reverse
              ? "animate-[mga-marquee_60s_linear_infinite_reverse]"
              : "animate-[mga-marquee_60s_linear_infinite]"
          }`}
        >
          {[...files, ...files].map((file, index) => (
            <li
              key={`${file}-${index}`}
              aria-hidden={index >= files.length ? true : undefined}
              className="relative size-24 shrink-0 rounded-[16px] border border-slate-200/80 bg-white sm:size-28"
            >
              <Image
                src={`/images/home/${file}`}
                alt=""
                fill
                sizes="112px"
                className="object-contain p-3"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AlumniSchools() {
  return (
    <section id="alumni" className="scroll-mt-24 py-16 lg:py-24">
      <style>{`@keyframes mga-marquee{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 0.375rem))}}`}</style>
      <Container>
        <Reveal>
          <h2 className={`max-w-xl ${sectionTitle}`}>Where MGA Alumni Are Studying</h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 flex flex-col gap-6 lg:mt-12">
          <LogoRow files={publicSchools} label="Public School" />
          <LogoRow files={privateSchools} label="Private School" reverse />
        </Reveal>
      </Container>
    </section>
  );
}
