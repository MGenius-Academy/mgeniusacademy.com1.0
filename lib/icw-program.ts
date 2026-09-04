import type { AiProgram } from "@/lib/ai-programs";

export const icwProgram: AiProgram = {
  slug: "icw-innovation-program-boston",
  name: "ICW: Global Inventor Annual Program",
  requirement: "EP3 completed or G7+ (*Selected Required)",
  image: "/images/ai-programs-boston/ICW.jpg",
  description:
    "An elite invention journey for young innovators. From real-world problem discovery to global competition presentation, this program develops ideas into inventions with true impact.",
  detailDescription: [
    "MGA's Youth Inventor Program in Boston is designed for advanced students who are ready to turn real-world problems into original engineering and innovation projects. Through guided invention coaching, students develop competition-ready solutions for national and global innovation stages.",
    "From identifying meaningful real-world problems, to inventing solutions that can make an impact, to competing on the global stage — this is not a course where students simply finish a project and move on. It is a true inventor's journey. Students move through the full process of design, testing, refinement, and innovation to develop inventions that are both original and competition-ready.",
    "MGA accepts only one cohort each year, with no more than four EP3+ teams, personally led by Dr. Yuesen Wang — a highly selective, deeply mentored experience designed to help each team bring its invention to an international competition standard.",
  ],
  overview: [
    {
      label: "Program Timeline",
      value:
        "Coming Fall 2026 — Phase 1: Sep 2026–Mar 2027 (22 sessions) · Phase 2: National/global competition coaching",
    },
    { label: "Program Format", value: "Year-long single-track program" },
    { label: "Eligibility", value: "MGA students who have completed EP3 or above" },
    { label: "Cohort Size", value: "One cohort only · up to 4 teams" },
    {
      label: "Sessions",
      value: "18 group sessions + 4 individual mentoring sessions before the state competition",
    },
  ],
  mgaPromise:
    "Continued Support at Every Stage — if students advance beyond the state competition, to Nationals and even the Global Finals, MGA will continue to provide full guidance at no additional coaching cost.",
  journey: [
    {
      title: "Find a Real Problem",
      description: "Use design thinking to identify a meaningful problem worth solving.",
    },
    {
      title: "Build the Invention",
      description: "Turn ideas into a working prototype through testing and improvement.",
    },
    {
      title: "Prepare for Competition",
      description:
        "Create the competition video, display board, and supporting materials with expert guidance.",
    },
    {
      title: "Advance with MGA Support",
      description:
        "From State to Nationals to Globals, MGA continues to guide students every step of the way.",
    },
  ],
  competitions: [
    {
      name: "What Is ICW?",
      paragraphs: [
        "Invention Convention Worldwide (ICW) is one of the world's leading K–12 invention education competitions, hosted by The Henry Ford. Students typically advance through a pathway from local or regional events to state competitions, then to U.S. Nationals at The Henry Ford, with additional global participation pathways available through the broader ICW network.",
        "In 2025, ICW U.S. Nationals was held at The Henry Ford Museum of American Innovation. Official rules for the 2025 event listed 77 prizes, including grade-level awards, industry innovation awards, cash prizes, scholarships, medals, trophies, and certificates.",
      ],
      submissionRequirements: ["Logbook", "Display board", "Prototype (if needed)"],
      judgingCriteria: [
        "The problem being solved",
        "How the invention works",
        "The invention's originality",
        "The student's ability to clearly communicate the invention process and impact",
      ],
      learnMoreUrl: "https://inhub.thehenryford.org/icw/competitions/us-nationals-landing",
      learnMoreLabel: "Learn More About ICW",
    },
  ],
  achievements: {
    intro:
      "Over the past two years in ICW, 100% of MGA students have advanced to the state competition.",
    image: "/images/ai-programs-boston/icw-track-record.jpg",
    seasons: [
      {
        season: "2025 Season",
        headline: "Global Semifinalist Award",
        winners: [
          {
            name: "Raymond",
            note: "Advanced from the Massachusetts state competition to the global stage, earning recognition at U.S. Nationals and reaching the global semifinals.",
          },
        ],
      },
      {
        season: "2025 Season",
        headline: "U.S. State Awards",
        winners: [
          { name: "Ethan" },
          { name: "Jayden" },
          { name: "Allan" },
        ],
      },
      {
        season: "2026 Season",
        headline: "Four State-Level Special Awards",
        winners: [
          { name: "Adela", note: "Belcan Passion to Innovate Award" },
          { name: "Adela", note: "Emerson Green Innovations Award" },
          { name: "Sun", note: "RTX Dependable Power Award" },
          { name: "Sun", note: "Avangrid Sustainability Award" },
        ],
      },
      {
        season: "2026 Season",
        headline: "National Innovator Challenge Finalist",
        winners: [{ name: "Adela" }, { name: "Sun" }],
      },
    ],
  },
  instructors: [
    {
      name: "Yuesen Wang",
      title: "Postdoctoral Researcher · CTO",
      image: "/images/ai-programs-boston/instructors/yuesen-wang.jpg",
      bullets: [
        "15+ years in mechanical and automotive engineering research",
        "Expertise in mechanical, electrical, control, and chemical engineering",
        "Guides students in engineering and AI through real-world problem solving",
      ],
    },
  ],
  whoShouldApply: [
    "EP3 and above students with a solid foundation in engineering and science",
    "Young inventors and builders passionate about discovering problems and creating real solutions",
    "Students ready for competition, eager to challenge themselves on national and international stages",
    "Students with future academic goals looking to strengthen middle or high school applications",
  ],
};
