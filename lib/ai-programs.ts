export type Instructor = {
  name: string;
  title: string;
  image: string;
  bullets: string[];
};

export type PhaseLearnItem = {
  title?: string;
  description: string;
};

export type ProgramTrack = {
  title: string;
  description: string;
};

export type ProgramPhase = {
  title: string;
  meta: string;
  eligibility?: string;
  summary: string;
  tracks?: ProgramTrack[];
  learn?: PhaseLearnItem[];
};

export type JourneyStage = {
  title: string;
  description: string;
};

export type CompetitionInfo = {
  name: string;
  paragraphs: string[];
  facts?: string[];
  submissionRequirements?: string[];
  judgingCriteria?: string[];
  learnMoreUrl: string;
  learnMoreLabel: string;
};

export type AchievementWinner = {
  name: string;
  note?: string;
};

export type Achievement = {
  season: string;
  headline?: string;
  winners: AchievementWinner[];
};

export type AiProgram = {
  slug: string;
  name: string;
  requirement: string;
  image: string;
  description: string;
  detailDescription: string[];
  overview: { label: string; value: string }[];
  journey?: JourneyStage[];
  mgaPromise?: string;
  phases?: ProgramPhase[];
  competitions?: CompetitionInfo[];
  achievements?: {
    intro: string;
    seasons: Achievement[];
    image?: string;
  };
  instructors?: Instructor[];
  whoShouldApply?: string[];
  gallery?: string[];
};

export const aiPrograms: AiProgram[] = [
  {
    slug: "ai-chat-bot-lab",
    name: "AI Chatbot: The Chief AI Entrepreneur Program",
    requirement: "EP5 completed or G6+ (Selected, Required)",
    image: "/images/ai-programs-boston/AI-Chatbot.jpg",
    description:
      "An elite founder-track program for future CEOs and CTOs. From AI product development to international competitions like CP and YTC, students are trained to build, lead, and compete at the highest level.",
    detailDescription: [
      "This is not just about learning AI — it is about becoming the future CEO and CTO. This selective, year-long program is designed for students in Grade 6 and above, structured in two phases across 34 sessions. It recreates the full journey of a technology startup — from zero to one, from product development to market strategy, and from local innovation to the international competitive stage.",
      "Admission is highly selective, with only five students per cohort. Students do not merely attend lessons — they take on the role of founders, building real products, refining them for real users, and preparing to compete on international stages such as the CP (Coolest Projects) and YTC (Young Tech Challenge) competitions.",
    ],
    overview: [
      { label: "Format", value: "Two-phase program · 34 sessions total" },
      { label: "Eligibility", value: "EP5 completed or Grade 6+" },
      { label: "Cohort Size", value: "Selective admission · max 5 students" },
    ],
    phases: [
      {
        title: "Phase 1 · Build",
        meta: "Sep 2026 – Jan 2027 · 17 Sessions (14 content + 2 mentoring + 1 Demo Day)",
        eligibility: "Selective admission · max 5 students",
        summary:
          "Phase 1 is the foundation-building stage — the moment students begin to face real-world challenges not as learners in a classroom, but as young founders. From writing their first line of code to launching a working AI product, students experience the full journey of tech entrepreneurship from idea to execution.",
        learn: [
          {
            title: "AI Core Skills",
            description:
              "Large language model fundamentals, prompt engineering, API integration, and building a functional AI chatbot from scratch with multi-turn conversation and personalized features.",
          },
          {
            title: "Product Management Thinking",
            description:
              "User research, competitor analysis, and professional PRD writing — learning to define a product like a real product manager.",
          },
          {
            title: "Branding & Commercialization",
            description:
              "Product naming, logo creation, visual identity, business model canvas, pricing strategy, market sizing, and marketing channel planning.",
          },
          {
            title: "Launch & Data-Driven Iteration",
            description:
              "Official product launch, real user acquisition, and analysis of key metrics such as DAU, retention, and NPS to guide the final round of iteration.",
          },
          {
            title: "Phase 1 Demo Day",
            description:
              "A public pitch event for parents, mentors, and industry guests, featuring product demos, business presentations, and Q&A. Students receive a completion certificate and become eligible for Phase 2.",
          },
        ],
      },
      {
        title: "Phase 2 · Compete",
        meta: "Feb 2027 – Jun 2027 · 17 Sessions (14 content + 2 mentoring + 1 Final Demo)",
        eligibility: "Open only to outstanding Phase 1 graduates",
        summary:
          "Phase 2 is built around two major international competitions: Coolest Projects (CP) and Young Tech Challenge (YTC). Students participate in at least one of them, taking their Phase 1 product to the next level and preparing to compete for top international recognition.",
        learn: [
          { description: "Analyze CP and YTC rules, judging criteria, and winning projects" },
          { description: "Advance technical skills in multimodal AI, RAG, and AI agents" },
          {
            description:
              "Refine branding, including logo, color system, landing page, and product homepage",
          },
          {
            description:
              "Build a competition-level business plan with market validation and financial modeling",
          },
          { description: "Create a polished competition video with scripting, filming, and editing" },
          { description: "Take part in mock judging with feedback from industry mentors" },
          { description: "Submit to CP and/or YTC and compete on the international stage" },
          { description: "Present the full journey at Final Demo Day" },
        ],
      },
    ],
    competitions: [
      {
        name: "Coolest Projects (CP)",
        paragraphs: [
          "Organized by the Raspberry Pi Foundation, Coolest Projects is one of the world's largest showcases for young digital creators.",
          "In 2024, 7,197 participants from 43 countries submitted 4,678 projects across categories including programming, web, mobile apps, and AI.",
          "MGA students submit their AI Chatbot projects to gain real feedback from global audiences and professional judges.",
        ],
        facts: ["43 countries", "7,197 creators"],
        learnMoreUrl:
          "https://www.raspberrypi.org/blog/coolest-projects-2026-opens-for-entries-in-january/",
        learnMoreLabel: "Learn More About CP",
      },
      {
        name: "Young Tech Challenge (YTC)",
        paragraphs: [
          "Young Tech Challenge is an international innovation competition that evaluates both technical excellence and business thinking.",
          "Students are judged on innovation, market value, presentation, and Q&A performance.",
          "At MGA, students further refine their Phase 1 AI Chatbot into a competition-ready product for YTC.",
        ],
        facts: ["Judged across technology and business dimensions"],
        learnMoreUrl: "https://www.chitag.com/ytc",
        learnMoreLabel: "Learn More About YTC",
      },
    ],
    whoShouldApply: [
      "Students in Grade 6 and above with strong logical thinking and a solid learning foundation",
      "Students passionate about technology and AI, curious about innovation and entrepreneurship",
      "Builders and problem-solvers motivated to create solutions, not just find answers",
      "Students with future academic goals looking to strengthen applications with tech and entrepreneurship experience",
    ],
    gallery: [
      "/images/ai-programs-boston/gallery/chatbot-7.png",
      "/images/ai-programs-boston/gallery/chatbot-8.png",
      "/images/ai-programs-boston/gallery/chatbot-1.jpg",
      "/images/ai-programs-boston/gallery/chatbot-2.jpg",
      "/images/ai-programs-boston/gallery/chatbot-3.jpg",
      "/images/ai-programs-boston/gallery/chatbot-4.jpg",
      "/images/ai-programs-boston/gallery/chatbot-5.jpg",
      "/images/ai-programs-boston/gallery/chatbot-6.jpg",
    ],
  },
  {
    slug: "3d-brick-lab",
    name: "3D Creation: The 3D Invention & Toy Design Program",
    requirement: "EP3 completed or G4+ (Selected, Required)",
    image: "/images/ai-programs-boston/width_1536.webp",
    description:
      "An elite maker program where original ideas are transformed into real products for competition and global display. Through rigorous design, 3D prototyping, and presentation training, students prepare for high-level invention showcases such as the Chicago Toy Show.",
    detailDescription: [
      "From bold imagination, to real product creation, to the global competitive stage — this is where ideas become reality.",
      "This is a selective maker lab designed for curious and capable students in Grade 4 and above. Across two phases and roughly 56 sessions, students learn to use 3D printing as a powerful tool for invention — crossing the boundaries of art, engineering, and product design to create work that is visually appealing, functional, marketable, and competition-ready.",
      "Every project is treated as a real invention. Students develop authentic products, refine them through feedback and iteration, and prepare them for presentation in a competitive setting — leaving with real 3D inventions, real product development experience, and a competition journey worth including in any future portfolio or application.",
    ],
    overview: [
      { label: "Format", value: "Two-phase program · ~56 sessions total" },
      { label: "Eligibility", value: "EP3 completed or Grade 4+" },
    ],
    phases: [
      {
        title: "Phase 1 · Explore × Create × Sell",
        meta: "Sep 2026 – Jan 2027 · 15 Group Sessions + 1 Demo Day",
        eligibility:
          "Selective admission · max 4 students per class · plus 1–2 flexible one-on-one mentoring sessions",
        summary:
          "Phase 1 is the exploration stage. Students move through three creative tracks and experience the full cycle of design → model → print → sell.",
        tracks: [
          {
            title: "Digital Art Collectibles",
            description: "Design original art pieces with strong visual style and creative identity.",
          },
          {
            title: "Industrial Prototype Design",
            description: "Build product-style prototypes with a focus on structure, form, and function.",
          },
          {
            title: "Everyday Tool Invention",
            description: "Identify real-life problems and invent practical tools with user value.",
          },
        ],
        learn: [
          { description: "3D modeling with Tinkercad and Fusion 360" },
          { description: "Product branding, pricing, packaging, and presentation" },
          { description: "Sales pitch skills and real marketplace experience" },
          { description: "Product refinement through customer feedback and sales data" },
          { description: "Phase 1 Demo Day with certificate and Phase 2 qualification" },
        ],
      },
      {
        title: "Phase 2 · Design × Compete × Showcase Globally",
        meta: "Feb 2027 – Jun 2027 · 14 Group Sessions + 1 Final Showcase",
        eligibility: "For Phase 1 graduates only · plus 2 flexible one-on-one mentoring sessions",
        summary:
          "Phase 2 is the competition stage. Students choose either toy design or board game design and prepare for Young Inventor Challenge (YIC) 2027, with the opportunity to showcase at the Chicago Toy & Game Fair.",
        learn: [
          { description: "Competition strategy and winning project analysis" },
          { description: "Advanced concept development and product refinement" },
          { description: "Multiple rounds of modeling, printing, and testing" },
          { description: "Competition-level branding, packaging, and presentation" },
          { description: "Video production and official submission materials" },
          { description: "Final Demo Day with public showcase and inventor portfolio" },
        ],
      },
    ],
    competitions: [
      {
        name: "What Level of Competition Is YIC?",
        paragraphs: [
          "Young Inventor Challenge® (YIC) is one of the most respected international competitions in youth toy invention. Organized by People of Play, part of the U.S. toy industry community, YIC has been held for over 20 years and hosts its international finals each November at the Chicago Toy & Game Fair (ChiTAG). The competition is open to young inventors ages 6–18 from around the world.",
          "A number of past entries have gone on to be licensed by major toy companies such as Hasbro, Mattel, and Pressman Toy, with products later sold through major retail channels including Target and Amazon — a real gateway to the global toy industry.",
          "Students who complete Phase 2 will officially submit their inventions to YIC 2027 as individual competitors and may have the opportunity to showcase their work in person at the Chicago Toy & Game Fair. MGA provides full support throughout the process, including competition strategy, submission materials, video production, and final submission guidance.",
        ],
        facts: [
          "168 participants in 2024",
          "5 countries and regions represented",
          "20+ years of competition history",
          "200+ hours of in-depth judging",
        ],
        learnMoreUrl: "https://www.chitag.com/yic",
        learnMoreLabel: "Learn More About YIC",
      },
    ],
    whoShouldApply: [
      "Students in Grade 4 and above with developing spatial reasoning and creative thinking skills",
      "Hands-on makers who genuinely enjoy building, inventing, and creating",
      "Curious young creators interested in invention, art, or engineering",
      "Students with future academic goals looking to strengthen applications with project-based achievements",
    ],
  },
  {
    slug: "ai-future-lab",
    name: "NeuroMaker STEM: AI Future Lab",
    requirement: "Age Group: G6+",
    image: "/images/ai-programs-boston/AI.png",
    description:
      "Introduces students to AI, coding, and brain-computer interface concepts through hands-on projects such as gesture tracking, object detection, and EMG-based control.",
    detailDescription: [
      "The NeuroMaker STEM AI Future Lab introduces students to the exciting intersection of artificial intelligence, human–computer interaction, and wearable technology through a series of hands-on projects. Students assemble the NeuroMaker Hand 2.0, learn the fundamentals of coding, and explore technologies such as gesture recognition, object detection, and micro:bit programming.",
      "As the workshop progresses, students design and build interactive systems including a gesture-tracking glove and EMG-based control applications — gaining practical experience in coding, electronics, and AI-driven interfaces while developing problem-solving skills, engineering thinking, and creativity.",
    ],
    overview: [
      { label: "Format", value: "17 regular classes (1.5 hrs each) + 1 additional lab session" },
      { label: "Eligibility", value: "Grade 6 and above" },
    ],
    gallery: [
      "/images/ai-programs-boston/gallery/future-1.jpg",
      "/images/ai-programs-boston/gallery/future-2.jpg",
      "/images/ai-programs-boston/gallery/future-3.jpg",
      "/images/ai-programs-boston/gallery/future-4.jpg",
      "/images/ai-programs-boston/gallery/future-5.jpg",
      "/images/ai-programs-boston/gallery/future-6.jpg",
    ],
  },
];

export function getAiProgramBySlug(slug: string) {
  return aiPrograms.find((program) => program.slug === slug);
}
