import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  AwardIcon,
  BotIcon,
  Building2Icon,
  CarIcon,
  LightbulbIcon,
  PrinterIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Boston Makers & Inventors Challenge Awards",
  description:
    "The Boston Makers & Inventors Challenge is an inspiring hands-on STEM competition for youth. Integrating digital fabrication like 3D printing and laser cutting with AI, it empowers young innovators to collaborate, build, and solve real-world problems.",
};

const overallStats = [
  { value: "K–10", label: "Grade Levels" },
  { value: "8", label: "Expert Judges" },
  { value: "6", label: "Award Categories" },
  { value: "2026", label: "Event Year" },
];

type AwardItem = { award: string; winners: string };

function AwardRows({ items }: { items: AwardItem[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.award}
          className="flex items-start justify-between gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3"
        >
          <span className="text-sm font-medium">{item.award}</span>
          <span className="text-right text-sm text-muted-foreground">{item.winners}</span>
        </div>
      ))}
    </div>
  );
}

const committeeGrand: AwardItem[] = [
  { award: "Most Popular", winners: "Wenhao Xia" },
  { award: "Judge's Choice", winners: "Catherine Moy" },
  { award: "Creative Explorer Award", winners: "Mia Xu" },
];

const committeeSpecial: AwardItem[] = [
  { award: "Most Useful Chatbot Award", winners: "Larry Zuo" },
  { award: "Outstanding Innovation Award", winners: "Emma Geng" },
  { award: "Best Technical Design", winners: "Jayden Zheng" },
  { award: "Most Artistic Award", winners: "Ethan Lu" },
  { award: "Most Popular Design", winners: "Kevin Zhang" },
  { award: "Most Engineering Concept Award", winners: "Freya Tan" },
  { award: "Most Useful Design", winners: "Olivia Sheng" },
];

const neuroMakerMonetary: AwardItem[] = [
  { award: "1st ($200)", winners: "Eric Xie, Kevin Zhu" },
  { award: "2nd ($100)", winners: "Darren Xie, Dylan Wang" },
  {
    award: "3rd ($50)",
    winners:
      "Lucas Lei, Alesandra Weiberg, Rex Lin, Hongyu Liang, Timofey Ramankevich, Edgar Ng, Pinzhe Hu Paco, Peiyu Li",
  },
];

const neuroMakerCreativeRobot: AwardItem[] = [
  { award: "Gold Innovator Award", winners: "Owen Zhu" },
  { award: "Silver Innovator Award", winners: "Solomon Meeron" },
  { award: "Bronze Innovator Award", winners: "James Mattus" },
  {
    award: "Future Maker Award",
    winners:
      "Claire Tan, Edgar K Qiao, Edwin Tan, Even Qu, Jacob Xue, Lucas Lei, Luke Lu, Max An, Olivia Sheng, Milo Zhu, Christopher Lu",
  },
];

const neuroMakerObstacleAvoiding: AwardItem[] = [
  { award: "Gold Innovator Award", winners: "Mason Wang" },
  { award: "Silver Innovator Award", winners: "Benjamin Pompilio" },
  { award: "Bronze Innovator Award", winners: "Wenhao Xia" },
  {
    award: "Future Maker Award",
    winners:
      "Alex Cheng, Luke Weng, Vincent Geng, Raymond Wang, Ben Liu, Rex Lin, Reina Zhao, Albert Zhang, Eric Xie, Kevin Zhang",
  },
];

const neuroMakerAiChatRobot: AwardItem[] = [
  { award: "Gold Innovator Award", winners: "Abigail Chen" },
  { award: "Silver Innovator Award", winners: "Mia Wang" },
  { award: "Bronze Innovator Award", winners: "Alan Zhang" },
  { award: "Future Maker Award", winners: "Raymond Jin" },
];

const sustainableCity: AwardItem[] = [
  { award: "Gold Innovator Award", winners: "Catherine Moy" },
  { award: "Silver Innovator Award", winners: "Abigail Yu" },
  { award: "Bronze Innovator Award", winners: "Emily Tan" },
  {
    award: "Future Maker Award",
    winners: "Lilia Wu-Sun, Madelyn Shen, William Liu, Charlie Li, Joan Guo, James Zhang",
  },
];

const gravityPowerCar: AwardItem[] = [
  { award: "Gold Innovator Award", winners: "Theo Hu" },
  { award: "Silver Innovator Award", winners: "Tianyong Sun" },
  { award: "Bronze Innovator Award", winners: "Iris Gao" },
  { award: "Future Maker Award", winners: "Owen Zhang" },
];

const innovationCompetition: AwardItem[] = [
  { award: "Gold Innovator Award", winners: "Andrew Sun, Erin Sun" },
  { award: "Silver Innovator Award", winners: "Ethan Lu" },
  { award: "Bronze Innovator Award", winners: "Abigail Chen" },
  { award: "Best Real World Innovation", winners: "Adela Wu-Sun" },
  { award: "Future Maker Award", winners: "Benjamin Liu" },
];

const printAndLaserCutter: AwardItem[] = [
  { award: "Gold Innovator Award", winners: "Gabriel Gonzalez-Atanasav, Audrey (Linxi) Yan" },
  { award: "Silver Innovator Award", winners: "Alex Cheng" },
  { award: "Bronze Innovator Award", winners: "Wenhao Xia" },
  {
    award: "Future Maker Award",
    winners:
      "Lucas Lei, Christopher Lu, Claire Tan, Constance Lei Chang, Edward Xing, Edwin Tan, Henry Backaler, Jacob Urman, Madelyn Shen, Aivree Chen, Albert Chen, Roger Pei, Timofey Ramankevich, Abigail Yu, Alyssa Xue, Vincent Geng, Abigail Chen, Max An, Raymond Wang, Emma Geng",
  },
];

const galleryImages = Array.from(
  { length: 14 },
  (_, i) => `/images/awards_Makers/awards_Makers${i + 1}.png`,
);

export default function BostonMakersInventorsChallengePage() {
  return (
    <>
      <PageHero
        eyebrow="MGA Competitions"
        title="Boston Makers & Inventors Challenge"
        description="The Boston Makers & Inventors Challenge is an inspiring hands-on STEM competition for youth. Integrating digital fabrication like 3D printing and laser cutting with AI, it empowers young innovators to collaborate, build, and solve real-world problems."
      >
        <a
          href="https://www.bostonmic.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Visit Official Site
          <ArrowUpRightIcon className="size-3.5" aria-hidden />
        </a>
      </PageHero>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {overallStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 relative overflow-hidden rounded-3xl">
            <Image
              src="/images/awards_Makers/awards_Makers_hero.png"
              alt="Boston Makers & Inventors Challenge"
              width={2048}
              height={1203}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Awards in 2026</h2>
            <p className="mt-3 text-muted-foreground">
              The Boston Makers & Innovators Challenge concluded with great success on January
              31, 2026, at Newton North High School, bringing together an extraordinary
              community of young innovators. The competition featured students from grades K-10
              evaluated by eight judges including Harvard and MIT professors, AI experts, science
              educators, and entrepreneurs.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-10">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <AwardIcon className="size-4 text-primary" />
                Committee Award
              </h3>
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground">
                    Grand Award
                  </h4>
                  <AwardRows items={committeeGrand} />
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground">
                    Special Award
                  </h4>
                  <AwardRows items={committeeSpecial} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <BotIcon className="size-4 text-primary" />
                NeuroMaker AI Competition
              </h3>
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground">
                    Monetary Prizes
                  </h4>
                  <AwardRows items={neuroMakerMonetary} />
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground">
                    Creative Robot
                  </h4>
                  <AwardRows items={neuroMakerCreativeRobot} />
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground">
                    Obstacle Avoiding
                  </h4>
                  <AwardRows items={neuroMakerObstacleAvoiding} />
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground">
                    AI Chat Robot
                  </h4>
                  <AwardRows items={neuroMakerAiChatRobot} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <Building2Icon className="size-4 text-primary" />
                Sustainable City
              </h3>
              <AwardRows items={sustainableCity} />
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <CarIcon className="size-4 text-primary" />
                Gravity Power Car
              </h3>
              <AwardRows items={gravityPowerCar} />
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <LightbulbIcon className="size-4 text-primary" />
                Innovation Competition
              </h3>
              <AwardRows items={innovationCompetition} />
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <PrinterIcon className="size-4 text-primary" />
                3D Print & Laser Cutter Designs
              </h3>
              <AwardRows items={printAndLaserCutter} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Photo Gallery</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {galleryImages.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt="Boston Makers & Inventors Challenge event photo"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
