export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Curriculum",
    href: "/curriculum",
    children: [
      {
        label: "Young CEO & CTO",
        href: "/ai-programs-boston",
        description: "AI-Powered Tech Entrepreneurship Program",
      },
      {
        label: "Engineering Course",
        href: "/curriculum/engineering-2",
        description: "Level EP1-5",
      },
      {
        label: "Math Course",
        href: "/curriculum/singapore-math",
        description: "Advancement & Competition Math",
      },
      {
        label: "Advanced Tech Competitions & Applied Innovation",
        href: "/curriculum/advanced-tech-competitions",
        description: "ICW, NeuroMaker Creative Challenge & more",
      },
    ],
  },
  {
    label: "Camp & Workshop",
    href: "/mga-camp",
    children: [
      {
        label: "Week Camp",
        href: "/mga-camp/stem-summer-camps-boston",
        description: "STEM summer camps in Boston",
      },
      {
        label: "Day Camp",
        href: "/mga-camp/day-camps-boston",
        description: "School-break day camps in Newton",
      },
      {
        label: "Workshop",
        href: "/workshop-event",
        description: "Mini workshops & open houses",
      },
      {
        label: "Birthday Party",
        href: "/birthday-party",
        description: "STEM birthday parties",
      },
    ],
  },
  {
    label: "Awards",
    children: [
      {
        label: "Math Awards",
        href: "/boston-stem/math-awards",
        description: "Math Kangaroo & Noetic results",
      },
      {
        label: "ICW Awards",
        href: "/icw-awards",
        description: "Invention Convention Worldwide",
      },
    ],
  },
  {
    label: "Incubation",
    children: [
      {
        label: "Student Project",
        href: "/student-project",
        description: "Student-built ventures & builds",
      },
      {
        label: "MGA Service",
        href: "/incubation/mga-service",
        description: "Student-run service offerings",
      },
    ],
  },
  {
    label: "News",
    href: "/eventnews",
    children: [
      {
        label: "Learning",
        href: `/eventnews?category=${encodeURIComponent("Learning")}`,
        description: "Classroom stories & student projects",
      },
      {
        label: "Competitions",
        href: `/eventnews?category=${encodeURIComponent("Competitions")}`,
        description: "Contest results & award wins",
      },
      {
        label: "Camp & Workshop",
        href: `/eventnews?category=${encodeURIComponent("Camp & Workshop")}`,
        description: "Camp recaps & workshop highlights",
      },
      {
        label: "Community",
        href: `/eventnews?category=${encodeURIComponent("Community")}`,
        description: "Open houses, events & community news",
      },
    ],
  },
  {
    label: "More",
    children: [
      { label: "Why Choose MGA", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Our Team", href: "/our-team" },
      { label: "Join Us", href: "/join-us" },
      { label: "FAQ", href: "/faq" },
      { label: "Volunteer", href: "/volunteer-opportunities" },
    ],
  },
];

export const footerLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];
