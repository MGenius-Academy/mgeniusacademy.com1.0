export const classFormat = [
  "In-person",
  "Once a week · 90 minutes total (including a 5-minute break)",
  "Small group of 1–5 students",
];

export const keyFeatures = [
  {
    title: "90-Minute Focused Lessons",
    description:
      "Each class provides sufficient time for concept learning, guided practice, and problem-solving.",
  },
  {
    title: "Small-Group Classroom Learning",
    description:
      "Small class sizes allow for personalized instruction and closer teacher support.",
  },
  {
    title: "Structured Learning Materials",
    description:
      "Lessons are supported by well-designed textbooks and interactive teaching slides.",
  },
  {
    title: "Competition-Level Practice",
    description:
      "Students work with selected competition-style problems to strengthen analytical thinking.",
  },
];

export type ApLevel = {
  id: string;
  label: string;
  ageGroup: string;
  objectives: string;
  topics: string[];
  image: string;
};

export const apLevels: ApLevel[] = [
  {
    id: "ap-k",
    label: "AP K",
    ageGroup: "PreK-K",
    objectives:
      "Our program aims to help students master key concepts and develop higher-order thinking skills, so as to instill an interest in math, develop their independent and critical-thinking skills, and enhance their competitiveness. By expanding the depth of their knowledge, our students learn to think independently and apply problem-solving strategies to everyday life.",
    topics: [
      "Numbers to 50",
      "Addition and Subtraction",
      "Money",
      "Geometry",
      "Measurement",
      "Patterns and Sequences",
      "Computational Thinking",
      "Data Representation and Interpretation",
      "Word Problems",
    ],
    image: "/images/curriculum_singapore-math/tabs/ap-k.png",
  },
  {
    id: "ap-1",
    label: "AP 1",
    ageGroup: "G1-2",
    objectives:
      "Students will master the core concepts and skills taught in first-grade math ahead of their peers in school. Students will develop self-reflective learning skills and learn to apply effective problem-solving strategies to their daily exercises and schoolwork, allowing them to explore their creativity and critical-thinking skills while gaining an edge in math.",
    topics: [
      "Numbers to 120",
      "Addition and Subtraction",
      "Geometry",
      "Data Representation and Interpretation",
      "Measurement",
      "Money",
    ],
    image: "/images/curriculum_singapore-math/tabs/ap-1.png",
  },
  {
    id: "ap-2",
    label: "AP 2",
    ageGroup: "G2-3",
    objectives:
      "Our program is designed to help students master the core concepts and skills taught in second-grade math ahead of their peers. We aim to develop their higher-order thinking skills, so as to instill an interest in math, cultivate their logical thinking skills, and enhance their mathematical literacy and competitiveness. By expanding the depth of their knowledge, our students learn to apply problem-solving strategies to everyday life, allowing them to perform better on tests and build self-confidence.",
    topics: [
      "Numbers to 1,000",
      "Addition and Subtraction",
      "Money",
      "Time",
      "Measurement",
      "Geometry",
      "Data Representation and Interpretation",
      "Patterns and Sequences",
      "Word Problems",
    ],
    image: "/images/curriculum_singapore-math/tabs/ap-2.png",
  },
  {
    id: "ap-3",
    label: "AP 3",
    ageGroup: "G3-4",
    objectives:
      "Our program is designed to help students master the core concepts and skills taught in third-grade math ahead of their peers. We aim to develop their higher-order thinking skills, so as to instill an interest in math, cultivate their logical thinking skills, and enhance their mathematical literacy and competitiveness. By expanding the depth of their knowledge, our students learn to apply problem-solving strategies to everyday life, helping them to achieve excellence in math competitions and build self-confidence.",
    topics: [
      "Numbers to 10,000",
      "Addition and Subtraction",
      "Multiplication and Division",
      "Fractions",
      "Measurement",
      "Time",
      "Patterns and Sequences",
      "Geometry",
      "Data Representation and Interpretation",
      "Word Problems Involving Problem-Solving Strategies",
    ],
    image: "/images/curriculum_singapore-math/tabs/ap-3.png",
  },
  {
    id: "ap-4",
    label: "AP 4",
    ageGroup: "G4-5",
    objectives:
      "Our program is designed to help students master the core concepts and skills taught in fourth-grade math in addition to unconventional word problems. We aim to develop their higher-order thinking skills, so as to instill an interest in math, cultivate their logical thinking skills, and enhance their mathematical literacy and competitiveness. Students will learn effective strategies to enhance problem-solving capabilities and learning efficiency. By expanding the depth of their knowledge, our students learn to apply problem-solving strategies to everyday life, allowing them to excel in math competitions and build self-confidence.",
    topics: [
      "Number and Algebra",
      "Factors and Multiples",
      "Measurement and Geometry",
      "4 Operations of Whole Numbers",
      "Angles",
      "Fractions",
      "Decimals",
      "Statistics",
      "Word Problems Involving Problem-Solving Strategies",
    ],
    image: "/images/curriculum_singapore-math/tabs/ap-4.png",
  },
  {
    id: "ap-5",
    label: "AP 5",
    ageGroup: "G5-6",
    objectives:
      "Our program aims to improve students' self-reflective learning skills, allowing them to explore their creativity and critical-thinking skills while gaining an edge in math. Students will master problem-solving strategies in order to become better prepared for middle school and beyond.",
    topics: [
      "Expressions and Equations",
      "Word Problems Involving Whole Numbers",
      "Fractions",
      "Word Problems Involving Fractions",
      "Area of Triangles",
      "Volume",
      "Ratio",
      "Decimals",
      "Word Problems Involving Decimals",
      "Rate",
      "Percentage",
      "Word Problems Involving Percentage",
      "Average",
      "Basic Angle Properties",
    ],
    image: "/images/curriculum_singapore-math/tabs/ap-5.png",
  },
];

export type CpLevel = {
  id: string;
  label: string;
  tagline: string;
  description: string[];
  highlights: { title: string; description: string }[];
  image: string;
};

export const cpLevels: CpLevel[] = [
  {
    id: "level-1",
    label: "Level 1 (G1-2)",
    tagline: "Build a Strong Foundation Early",
    description: [
      "Level 1 is designed for young learners in Grades 1–2 who are ready to go beyond routine arithmetic and develop strong math reasoning, logic, and problem-solving skills. With Math Kangaroo and Noetic Math as key learning goals, this course helps students build a solid foundation in competition math through engaging, structured, and age-appropriate training.",
    ],
    highlights: [
      {
        title: "Early Competition Math Foundation",
        description:
          "Students build essential skills in logical thinking, visual reasoning, number sense, and word problem solving, creating a strong base for future success in advanced math and competitions.",
      },
      {
        title: "Math Kangaroo & Noetic Preparation",
        description:
          "The course is aligned with the problem styles found in Math Kangaroo (Grades 1–2) and Noetic Learning Math Contest (Grade 2), helping students gain confidence through targeted competition practice.",
      },
      {
        title: "Strong Basics + Meaningful Enrichment",
        description:
          "While reinforcing core school math skills, Level 1 also introduces selected advanced competition math concepts, allowing students to grow beyond grade-level limits in a structured and supportive environment.",
      },
    ],
    image: "/images/curriculum_singapore-math/tabs/cp-level1.jpg",
  },
  {
    id: "level-2",
    label: "Level 2 (G3-4)",
    tagline: "Advance Math Thinking. Compete with Confidence.",
    description: [
      "Level 2 is designed for students in Grades 3–4, a key stage when mathematical thinking begins to move from concrete understanding to more abstract reasoning. This competition math program strengthens core skills while introducing more advanced challenges that help students build deeper logic, analyze complex conditions, and solve multi-step problems with greater confidence. With targeted training for Math Kangaroo and Noetic Math, students learn to think more strategically and perform more effectively in competition settings.",
    ],
    highlights: [
      {
        title: "Deeper Logic and Problem-Solving Skills",
        description:
          "Students develop stronger logical reasoning, pattern analysis, visual thinking, and multi-step problem-solving abilities, building the foundation needed for higher-level competition math.",
      },
      {
        title: "Targeted Math Kangaroo and Noetic Preparation",
        description:
          "The course is aligned with the question styles and challenge level of Math Kangaroo (Grades 3–4) and Noetic Learning Math Contest (Grades 3–4), helping students strengthen competition-specific strategies and test confidence.",
      },
      {
        title: "Strong School Math Plus Advanced Competition Training",
        description:
          "Level 2 bridges the gap between regular school math and advanced math competitions through MGA's structured curriculum, giving students the tools to tackle challenging problems with accuracy, flexibility, and speed.",
      },
    ],
    image: "/images/curriculum_singapore-math/tabs/cp-level2.jpg",
  },
  {
    id: "level-3",
    label: "Level 3 (G5-6)",
    tagline: "Lead in Math Competitions. Prepare for Advanced Challenges.",
    description: [
      "Level 3 is designed for students in Grades 5–6 who are ready to strengthen abstract reasoning, advanced problem-solving, geometry, and competition math skills. As a key bridge to middle school math success, this program helps students move beyond routine methods and develop the ability to recognize patterns, build mathematical models, and solve complex problems with logic and precision. With preparation for Math Kangaroo, Noetic Math, and early AMC 8 readiness, Level 3 supports students who are ready for more advanced competition pathways.",
    ],
    highlights: [
      {
        title: "Advanced Competition Math Training",
        description:
          "Students build stronger skills in abstract logic, number patterns, counting, geometry, and multi-step problem solving, creating a solid foundation for higher-level math competitions.",
      },
      {
        title: "Preparation for Math Kangaroo, Noetic, and AMC 8",
        description:
          "The course supports students preparing for Math Kangaroo (Grades 5–6) and Noetic Learning Math Contest (Grades 5–6), while also providing early enrichment for students interested in AMC 8 and other advanced math competitions.",
      },
      {
        title: "Structured, Module-Based Learning",
        description:
          "Level 3 uses a clear, focused curriculum with modules in logical reasoning, visual analysis, arithmetic strategy, geometry, and competition problem-solving, allowing students to strengthen each skill area step by step and build lasting confidence.",
      },
    ],
    image: "/images/curriculum_singapore-math/tabs/cp-level3.jpg",
  },
];
