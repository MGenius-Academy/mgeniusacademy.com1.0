export type EngineeringLevel = {
  slug: string;
  level: string;
  ageGroup: string;
  image: string;
  tagline: string;
  description: string[];
  gallery: string[];
};

export const engineeringLevels: EngineeringLevel[] = [
  {
    slug: "ep1",
    level: "EP Level 1",
    ageGroup: "K–G1",
    image: "/images/curriculum_engineering-2/EP1-1.jpg",
    tagline: "Igniting Curiosity and Sparking Interest",
    description: [
      "MGA EP1 is an introductory engineering class for K–G1 students in Boston. This hands-on course helps young learners explore basic mechanics, physics, simple circuits, and creative building projects in a fun and supportive environment.",
      "Students in EP1 develop early engineering thinking through guided projects, tool exploration, and problem-solving activities. The course is designed for children who are beginning their STEM learning journey and want to build confidence through hands-on creation.",
    ],
    gallery: [
      "/images/curriculum_engineering-2/gallery/ep1-1.jpg",
      "/images/curriculum_engineering-2/gallery/ep1-2.jpg",
      "/images/curriculum_engineering-2/gallery/ep1-3.jpg",
      "/images/curriculum_engineering-2/gallery/ep1-4.jpg",
    ],
  },
  {
    slug: "ep2",
    level: "EP Level 2",
    ageGroup: "G2–G3",
    image: "/images/curriculum_engineering-2/EP2.jpg",
    tagline: "Crafting with Basic Principles",
    description: [
      "Stage 2 courses are designed for students who have completed the EP1 course, aiming to further deepen their understanding of engineering science. In this stage, children will enhance their observation skills and problem-solving abilities through more complex projects and experiments.",
      "During Stage 2, children will not only continue to develop concentration and manual dexterity but also gain a deeper understanding of scientific principles and engineering concepts. They will further solidify their interest and knowledge in science, taking a significant step towards becoming little explorers.",
    ],
    gallery: [
      "/images/curriculum_engineering-2/gallery/ep2-1.jpg",
      "/images/curriculum_engineering-2/gallery/ep2-2.jpg",
      "/images/curriculum_engineering-2/gallery/ep2-3.jpg",
      "/images/curriculum_engineering-2/gallery/ep2-4.jpg",
    ],
  },
  {
    slug: "ep3",
    level: "EP Level 3",
    ageGroup: "G3–G4",
    image: "/images/curriculum_engineering-2/3-0.png",
    tagline: "Project-Oriented Training with Basic Hands-On Tools",
    description: [
      "Stage 3 courses are designed for children who have completed the previous two stages, aiming to provide them with basic STEM training and initiate their preliminary STEM exploration. This stage of the curriculum will guide children from foundational understanding to deeper comprehension, exploring more complex scientific and engineering problems.",
      "Through this exploration platform, children will be introduced to project-based learning methods for the first time, combining various materials, material combinations, and digital manufacturing tools to comprehensively develop their fine motor skills, cultivate spatial and logical thinking abilities, and enhance their problem-solving skills.",
    ],
    gallery: [
      "/images/curriculum_engineering-2/gallery/ep3-1.jpg",
      "/images/curriculum_engineering-2/gallery/ep3-2.jpg",
      "/images/curriculum_engineering-2/gallery/ep3-3.jpg",
      "/images/curriculum_engineering-2/gallery/ep3-4.jpg",
    ],
  },
  {
    slug: "ep4",
    level: "EP Level 4",
    ageGroup: "G4–G5",
    image: "/images/curriculum_engineering-2/EP4.jpg",
    tagline: "Fostering Creativity and Problem-Solving Skills with Solid Fundamentals",
    description: [
      "Stage 4 is designed for children who have completed the first three stages, aiming to deepen their understanding of science, technology, and innovation. Children will work with diverse materials and advanced digital tools in this stage to create more complex projects.",
      "This helps improve fine motor skills, spatial thinking, and logical reasoning. Through hands-on projects, they will apply scientific concepts, gain valuable experience, and build a strong foundation for the next stage of learning.",
    ],
    gallery: [
      "/images/curriculum_engineering-2/gallery/ep4-1.jpg",
      "/images/curriculum_engineering-2/gallery/ep4-2.jpg",
      "/images/curriculum_engineering-2/gallery/ep4-3.jpg",
      "/images/curriculum_engineering-2/gallery/ep4-4.jpg",
    ],
  },
  {
    slug: "ep5",
    level: "EP Level 5",
    ageGroup: "G6–G7",
    image:
      "/images/curriculum_engineering-2/Gemini_Generated_Image_9xjel49xjel49xje-1024x768.png",
    tagline: "Enhanced Fundamental Learning about Mechanical, Electrical, and Programming",
    description: [
      "This stage offers personalized, in-depth learning to develop children's logical thinking, critical reasoning, teamwork, and independent research skills. Collaborating with engineers, they engage in scientific innovation and product development.",
      "Through hands-on projects, they apply scientific theories, strengthen problem-solving, design thinking, and communication skills, building a strong foundation for future science and engineering studies.",
    ],
    gallery: [
      "/images/curriculum_engineering-2/gallery/ep5-1.jpg",
      "/images/curriculum_engineering-2/gallery/ep5-2.jpg",
      "/images/curriculum_engineering-2/gallery/ep5-3.jpg",
      "/images/curriculum_engineering-2/gallery/ep5-4.jpg",
      "/images/curriculum_engineering-2/gallery/ep5-5.jpg",
      "/images/curriculum_engineering-2/gallery/ep5-6.jpg",
    ],
  },
];

export function getEngineeringLevelBySlug(slug: string) {
  return engineeringLevels.find((level) => level.slug === slug);
}
