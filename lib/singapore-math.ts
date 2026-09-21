export const classFormat = [
  "In-person",
  "Once a week · 90 minutes total (including a 5-minute break)",
  "Small group of 1–5 students",
];

export const apKeyFeatures = [
  {
    title: "90-Minute Focused Lessons",
    description:
      "Each class has time for a new concept, guided practice, and independent problem-solving, with a 5-minute break.",
  },
  {
    title: "Small-Group Classroom Learning",
    description:
      "With 1–5 students, the teacher follows each student's reasoning, corrects misunderstandings right away, and adjusts the pace. Students also learn from each other by comparing methods and explaining their thinking.",
  },
  {
    title: "Structured Learning Materials",
    description:
      "Well-designed textbooks and interactive teaching slides give every lesson a clear path from concept to practice.",
  },
  {
    title: "Competition-Level Practice",
    description:
      "Selected competition-style problems are part of AP lessons, so students get used to unfamiliar, multi-step questions. Students who enjoy them can continue in the Competition Program (CP).",
    cta: {
      text: "Competition Program (CP)",
      href: "/curriculum/singapore-math/competition-math-program-boston",
    },
  },
];

export const cpKeyFeatures = [
  {
    title: "90-Minute Focused Lessons",
    description:
      "Each class has time to learn a new strategy, practice it with guidance, and apply it to competition problems, with a 5-minute break.",
  },
  {
    title: "Small-Group Classroom Learning",
    description:
      "With 1–5 students, the teacher sees how each student approaches a problem, not only the final answer. Students present their solutions and learn from one another's methods.",
  },
  {
    title: "Structured and Supplementary Materials",
    description:
      "Textbooks and interactive teaching slides give each level a clear sequence. Teachers add problem sets and units that MGA designs for competition topics.",
  },
  {
    title: "Competition-Level Practice",
    description:
      "Students practice with the question styles and difficulty of Math Kangaroo, the Noetic Learning Math Contest, and, at Level 3, AMC 8, so the real contest feels familiar.",
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
      "Children master key early math concepts and begin using higher-order thinking. We want them to enjoy math and to start thinking independently and critically. Because problems go a step beyond counting and calculating, children learn to reason a question through on their own and apply simple strategies to everyday life, which gives them a strong, competitive start.",
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
      "Students master the core concepts and skills of first-grade math ahead of their school peers. They learn to check and reflect on their own work and to apply problem-solving strategies to daily exercises and schoolwork. This builds creativity and critical thinking and gives them an edge in math.",
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
      "Students master the core concepts and skills of second-grade math ahead of their peers. Higher-order thinking questions keep math interesting while building logical thinking, mathematical literacy, and competitiveness. Going deeper than the school textbook helps students apply problem-solving strategies in everyday situations, do better on tests, and grow in self-confidence.",
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
      "Students master the core concepts and skills of third-grade math ahead of their peers, including multiplication, division, and fractions. Higher-order thinking questions keep math interesting while building logical thinking, mathematical literacy, and competitiveness. As word problems become multi-step, students learn to choose and apply the right strategy, which supports strong results in math competitions and builds self-confidence.",
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
      "Students master the core concepts and skills of fourth-grade math and learn to solve unconventional, non-routine word problems. Higher-order thinking questions keep math interesting while building logical thinking, mathematical literacy, and competitiveness. Students learn strategies that make them stronger, more efficient problem-solvers, helping them excel in math competitions, apply math in everyday life, and build self-confidence.",
    topics: [
      "Number and Algebra",
      "Factors and Multiples",
      "Measurement and Geometry",
      "Four Operations on Whole Numbers",
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
      "Students strengthen self-reflective learning habits, such as checking their reasoning and learning from mistakes, while developing creativity, critical thinking, and an edge in math. Working with topics such as ratio, rate, percentage, and expressions and equations, they master the problem-solving strategies they will need in middle school and beyond.",
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
      "Level 1 is for students in Grades 1–2 who are ready to go beyond routine arithmetic and develop strong math reasoning, logic, and problem-solving skills. With Math Kangaroo and the Noetic Learning Math Contest as key goals, the course builds a solid foundation in competition math through engaging, structured, age-appropriate training.",
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
          "While reinforcing core school math skills, Level 1 introduces selected advanced competition concepts, including topics not taught in school, so students grow beyond grade-level limits in a structured, supportive environment.",
      },
    ],
    image: "/images/curriculum_singapore-math/tabs/cp-level1-photo.jpg",
  },
  {
    id: "level-2",
    label: "Level 2 (G3-4)",
    tagline: "Advance Math Thinking. Compete with Confidence.",
    description: [
      "Level 2 is designed for students in Grades 3–4, a key stage when mathematical thinking begins to move from concrete understanding to more abstract reasoning. This competition math program strengthens core skills while introducing more advanced challenges that help students build deeper logic, analyze complex conditions, and solve multi-step problems with greater confidence. With targeted training for Math Kangaroo and the Noetic Learning Math Contest, students learn to think more strategically and perform more effectively in competition settings.",
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
          "Level 2 bridges regular school math and advanced competitions through MGA's structured curriculum and supplementary competition units, giving students the tools to solve challenging problems with accuracy, flexibility, and speed.",
      },
    ],
    image: "/images/curriculum_singapore-math/tabs/cp-level2-photo.jpg",
  },
  {
    id: "level-3",
    label: "Level 3 (G5-6)",
    tagline: "Lead in Math Competitions. Prepare for Advanced Challenges.",
    description: [
      "Level 3 is designed for students in Grades 5–6 who are ready to strengthen abstract reasoning, advanced problem-solving, geometry, and competition math skills. As a key bridge to middle school math success, this program helps students move beyond routine methods and develop the ability to recognize patterns, build mathematical models, and solve complex problems with logic and precision. With preparation for Math Kangaroo, the Noetic Learning Math Contest, and early AMC 8 readiness, Level 3 supports students who are ready for more advanced competition pathways.",
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
    image: "/images/curriculum_singapore-math/tabs/cp-level3-photo.jpg",
  },
];
