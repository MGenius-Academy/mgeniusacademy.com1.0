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
        label: "Engineering",
        href: "/curriculum/engineering-2",
        description: "Hands-on robotics & engineering tracks",
      },
      {
        label: "Singapore Math",
        href: "/curriculum/singapore-math",
        description: "Mastery-based competitive math",
      },
      {
        label: "AI Programs",
        href: "/ai-programs-boston",
        description: "AI + hard-tech for young makers",
      },
      {
        label: "Enrollment Guidance",
        href: "/curriculum/enrollment-guidance",
        description: "How to choose the right track",
      },
    ],
  },
  {
    label: "MGA Camp",
    href: "/mga-camp",
    children: [
      {
        label: "Week Camp",
        href: "/mga-camp/stem-summer-camps-boston",
        description: "STEM summer camps in Boston",
      },
    ],
  },
  {
    label: "Innovation & Competition",
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
    label: "Events",
    href: "/events",
    children: [
      {
        label: "Event & Workshop",
        href: "/workshop-event",
        description: "Upcoming workshops",
      },
      { label: "News", href: "/eventnews", description: "Latest from MGA" },
      {
        label: "Birthday Party",
        href: "/birthday-party",
        description: "STEM birthday parties",
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
      { label: "MGA Policy", href: "/mga-policy" },
      { label: "FAQ", href: "/faq" },
      { label: "Volunteer", href: "/volunteer-opportunities" },
    ],
  },
];

export const footerLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];
