export type Camp = {
  slug: string;
  title: string;
  ageGroup: string;
  image: string;
};

export const camps: Camp[] = [
  {
    slug: "ai-humanoid-robot-camp",
    title: "AI Humanoid Robot Camp",
    ageGroup: "Grade 4+",
    image: "/images/mga-camp_stem-summer-camps-boston/AI-robot.jpg",
  },
  {
    slug: "battle-bot-arena-camp",
    title: "Battle Bot Arena Camp",
    ageGroup: "Grade 2+",
    image: "/images/mga-camp_stem-summer-camps-boston/battle-bot-1024x810.jpg",
  },
  {
    slug: "build-your-own-claw-machine-camp",
    title: "Build Your Own Claw Machine Camp",
    ageGroup: "Grade 4+",
    image: "/images/mga-camp_stem-summer-camps-boston/claw-1024x810.jpg",
  },
  {
    slug: "chemistry-mini-lab-camp",
    title: "Chemistry Mini Lab Camp",
    ageGroup: "Grade 4-7",
    image: "/images/mga-camp_stem-summer-camps-boston/chemi-1024x810.jpg",
  },
  {
    slug: "electric-car-and-rider-camp",
    title: "Electric Car & Rider Camp",
    ageGroup: "Grade 4+",
    image: "/images/mga-camp_stem-summer-camps-boston/electric-car-1024x810.jpg",
  },
  {
    slug: "magic-kitchen-science-camp",
    title: "Magic Kitchen Science Camp",
    ageGroup: "K-Grade 5",
    image: "/images/mga-camp_stem-summer-camps-boston/kitchen-1024x810.jpg",
  },
  {
    slug: "mystery-of-the-body-and-brain-camp",
    title: "Mystery of the Body & Brain Camp",
    ageGroup: "K-Grade 5",
    image: "/images/mga-camp_stem-summer-camps-boston/body-1024x810.jpg",
  },
  {
    slug: "omni-drone-academy-camp",
    title: "Omni Drone Academy Camp",
    ageGroup: "Grade 2+",
    image: "/images/mga-camp_stem-summer-camps-boston/Drone-1024x810.jpg",
  },
  {
    slug: "scratch-coding-and-3d-design-camp",
    title: "Scratch Coding & 3D Design Camp",
    ageGroup: "K-Grade 5",
    image: "/images/mga-camp_stem-summer-camps-boston/3D-coding-1024x810.jpg",
  },
  {
    slug: "shadow-studio-shadow-puppetry-camp",
    title: "Shadow Studio: Shadow Puppetry",
    ageGroup: "Grade 1-5",
    image: "/images/mga-camp_stem-summer-camps-boston/shadow-studio-1024x810.jpg",
  },
  {
    slug: "smart-home-designers-lab-camp",
    title: "Smart Home Designers Lab Camp",
    ageGroup: "Grade 2+",
    image: "/images/mga-camp_stem-summer-camps-boston/smart-home-1024x810.jpg",
  },
  {
    slug: "engineering-invention-camp",
    title: "Engineering Invention Camp",
    ageGroup: "K-Grade 5",
    image: "/images/mga-camp_stem-summer-camps-boston/little-inventor-1024x810.jpg",
  },
];

export function getCampBySlug(slug: string): Camp | undefined {
  return camps.find((camp) => camp.slug === slug);
}
