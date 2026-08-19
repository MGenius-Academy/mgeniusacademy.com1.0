import Image from "next/image";
import { Container } from "@/components/container";

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
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Makes MGA Different?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-balance">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
