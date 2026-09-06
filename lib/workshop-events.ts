export type WorkshopEventBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "schedule"; items: { time: string; activity: string }[] }
  | { type: "image"; src: string; alt: string }
  | { type: "imageGrid"; images: { src: string; alt: string }[] };

export type WorkshopEventSection = {
  heading: string;
  blocks: WorkshopEventBlock[];
};

export type WorkshopEvent = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  gradeLevel?: string;
  image: string;
  summary: string;
  sections: WorkshopEventSection[];
};

export const pastWorkshopEvents: WorkshopEvent[] = [
  {
    slug: "noetic-learning-awards-ceremony",
    title: "Noetic Learning Math Contest Award Celebration 2026",
    date: "May 9, 2026",
    time: "2:30 PM – 3:00 PM",
    location: "Suite 300, 288 Walnut St, Newton, MA 02460, USA",
    image: "/images/workshop-event/Noetic0509-1-731x1024.jpg",
    summary:
      "MGA celebrated the hard work, dedication, and achievements of our young mathletes in the Noetic Learning Math Contest.",
    sections: [
      {
        heading: "About the Event",
        blocks: [
          {
            type: "paragraph",
            text: "MGA is excited to invite students and families to our Noetic Learning Math Contest Award Celebration as we recognize the hard work, dedication, and achievements of our young mathletes.",
          },
          {
            type: "paragraph",
            text: "The Noetic Learning Math Contest encourages students to strengthen their mathematical reasoning, problem-solving skills, and confidence through challenging and creative math problems. At MGA, we are proud to support students as they explore mathematics beyond the classroom and develop a deeper love for logical thinking.",
          },
          {
            type: "paragraph",
            text: "This special event is designed to celebrate not only the contest results, but also the effort, persistence, and growth each student demonstrated throughout the competition journey.",
          },
        ],
      },
      {
        heading: "Event Details",
        blocks: [
          {
            type: "list",
            items: [
              "Event: Noetic Learning Math Contest Award Celebration",
              "Date: Saturday, May 9, 2026",
              "Time: 2:30 PM – 3:00 PM",
              "Location: MGA",
              "Address: 288 Walnut St. Suite 300, Newton, MA",
            ],
          },
          {
            type: "paragraph",
            text: "Families are invited to join us for a short celebration honoring our students' accomplishments in the Noetic Learning Math Contest.",
          },
        ],
      },
      {
        heading: "What We Are Celebrating",
        blocks: [
          {
            type: "paragraph",
            text: "During this award celebration, MGA will recognize students for their participation, effort, and achievements in the Noetic Learning Math Contest.",
          },
          {
            type: "paragraph",
            text: "Students will have the opportunity to celebrate their progress with classmates, teachers, and families. This event highlights the importance of mathematical curiosity, perseverance, and creative problem-solving.",
          },
          {
            type: "paragraph",
            text: "The celebration reflects MGA's continued commitment to helping students build strong academic foundations while developing confidence through meaningful challenges.",
          },
          {
            type: "image",
            src: "/images/workshop-event/noetic-celebration-1.jpg",
            alt: "Students celebrating at the Noetic Learning Math Contest Award Celebration",
          },
          {
            type: "imageGrid",
            images: [
              {
                src: "/images/workshop-event/noetic-celebration-2.jpg",
                alt: "MGA students receiving Noetic Learning Math Contest awards",
              },
              {
                src: "/images/workshop-event/noetic-celebration-3.jpg",
                alt: "MGA student posing with a Noetic Learning Math Contest award",
              },
            ],
          },
        ],
      },
      {
        heading: "About the Noetic Learning Math Contest",
        blocks: [
          {
            type: "paragraph",
            text: "The Noetic Learning Math Contest is a national math contest designed to challenge elementary and middle school students with engaging problem-solving questions. The contest helps students practice mathematical reasoning, critical thinking, and flexible problem-solving strategies.",
          },
          {
            type: "paragraph",
            text: "At MGA, math competitions such as the Noetic Learning Math Contest are an important part of our math enrichment pathway. Through guided preparation and contest participation, students learn to approach problems with confidence, accuracy, and creativity.",
          },
        ],
      },
      {
        heading: "Why Math Competitions Matter",
        blocks: [
          {
            type: "paragraph",
            text: "Math competitions give students the opportunity to apply classroom knowledge in new and challenging ways. They help students build:",
          },
          {
            type: "list",
            items: [
              "Strong problem-solving habits",
              "Logical reasoning skills",
              "Confidence under timed conditions",
              "Attention to detail",
              "A growth mindset toward challenging problems",
            ],
          },
          {
            type: "paragraph",
            text: "At MGA, we believe that every math competition experience is valuable. Whether students receive awards or participate for growth, the process helps them become stronger and more independent thinkers.",
          },
        ],
      },
    ],
  },
  {
    slug: "0509openhouse",
    title: "Mother's Day Special Open House",
    date: "May 9, 2026",
    time: "1:30 PM – 4:30 PM",
    location: "Suite 300, 288 Walnut St, Newton, MA 02460, USA",
    gradeLevel: "Grade 1-8",
    image: "/images/workshop-event/WechatIMG13908-745x1024.jpg",
    summary:
      "A Mother's Day open house introducing families to MGA's STEM, math, engineering, and AI programs across two concurrent sessions.",
    sections: [
      {
        heading: "Session 1: Elementary Open House for Grades 1–4",
        blocks: [
          { type: "paragraph", text: "Time: 1:30–2:45 PM" },
          {
            type: "paragraph",
            text: "This session is designed for younger students who are interested in hands-on STEM learning.",
          },
          { type: "subheading", text: "Student Experience" },
          { type: "paragraph", text: "Students will participate in:" },
          {
            type: "list",
            items: [
              "a 45-minute engineering trial class",
              "a 25-minute fun math experience",
            ],
          },
          {
            type: "paragraph",
            text: "These activities are designed to strengthen logical thinking, creativity, and curiosity through interactive learning.",
          },
          { type: "subheading", text: "Parent Session" },
          {
            type: "paragraph",
            text: "While students are in class, parents will learn more about:",
          },
          {
            type: "list",
            items: [
              "MGA's course system",
              "upcoming summer camps",
              "academic pathways for long-term growth",
            ],
          },
          {
            type: "paragraph",
            text: "This session is ideal for families who want an introduction to MGA's elementary STEM and math programs.",
          },
        ],
      },
      {
        heading: "Session 2: Competition and Innovation Open House for Grades 4+",
        blocks: [
          { type: "paragraph", text: "Time: 3:00–4:30 PM" },
          {
            type: "paragraph",
            text: "This session is designed for older students who are ready to explore advanced STEM learning, project-based innovation, and entrepreneurship.",
          },
          {
            type: "subheading",
            text: "New Featured Experience: Young Innovator and Entrepreneur Program",
          },
          {
            type: "paragraph",
            text: "One of the highlights of this event is a new interactive experience inspired by students from Babson College, a school widely recognized for entrepreneurship education.",
          },
          {
            type: "paragraph",
            text: "This program combines technology, invention, and business thinking, helping students experience how ideas can develop into real products. Students will not only work on projects, but also begin thinking about product purpose, user needs, and market value.",
          },
          {
            type: "image",
            src: "/images/workshop-event/openhouse-young-innovator-program.png",
            alt: "Young Innovator and Entrepreneur Program overview",
          },
          { type: "subheading", text: "Signature Program Trial Experiences" },
          {
            type: "paragraph",
            text: "Families will also have the opportunity to explore several of MGA's advanced programs:",
          },
          {
            type: "subheading",
            text: "AI Chatbot / NeuroMaker / AI Competition Projects",
          },
          {
            type: "paragraph",
            text: "Students will explore the connection between artificial intelligence, biomimicry, and innovation while learning about advanced AI project pathways.",
          },
          {
            type: "image",
            src: "/images/workshop-event/openhouse-ai-chatbot-program.jpg",
            alt: "AI Chatbot / NeuroMaker program trial experience",
          },
          {
            type: "subheading",
            text: "3D Invention, Toy Design, and Entrepreneurship Program",
          },
          {
            type: "paragraph",
            text: "This program introduces students to 3D invention and creative product design, while encouraging entrepreneurial thinking.",
          },
          {
            type: "image",
            src: "/images/workshop-event/openhouse-3d-creation-program.jpg",
            alt: "3D Invention, Toy Design, and Entrepreneurship program trial experience",
          },
          { type: "subheading", text: "ICW Global Inventor Program" },
          {
            type: "paragraph",
            text: "Students will learn how original ideas can be developed into strong projects for international invention competitions.",
          },
          {
            type: "image",
            src: "/images/workshop-event/openhouse-icw-program.jpg",
            alt: "ICW Global Inventor Program trial experience",
          },
        ],
      },
      {
        heading: "Special Guest Speaker for Parents",
        blocks: [
          {
            type: "paragraph",
            text: "A major highlight of the Open House is a featured parent talk by Sarah W., a former admissions leader at Milton Academy.",
          },
          {
            type: "paragraph",
            text: "Parent Talk Topic: Why STEM Is Incredibly Important, Especially These Days",
          },
          { type: "paragraph", text: "Sarah W. previously served as:" },
          {
            type: "image",
            src: "/images/workshop-event/openhouse-guest-speaker-sarah-w.png",
            alt: "Guest speaker Sarah W., former admissions leader",
          },
          {
            type: "list",
            items: [
              "Associate Director of Admission at Milton Academy",
              "Director of Admission at Shady Hill School",
            ],
          },
          {
            type: "paragraph",
            text: "With years of experience in independent school admissions, she brings valuable insight into how schools evaluate student potential and why STEM learning has become increasingly meaningful in today's educational environment.",
          },
          {
            type: "paragraph",
            text: "Her talk offered families a rare opportunity to hear directly from a former admissions professional about the growing importance of STEM in student development and school admissions.",
          },
        ],
      },
      {
        heading: "Registration and Special Offer",
        blocks: [
          { type: "subheading", text: "1. Registration Fee: $29 per student" },
          { type: "subheading", text: "2. Limited-Time Free Offer" },
          {
            type: "paragraph",
            text: "Families could attend for free if they completed one of the following by May 5:",
          },
          {
            type: "list",
            items: [
              "receive 10 social media likes, or share in a group of 100+ people",
            ],
          },
          {
            type: "paragraph",
            text: "After completing the requirement, families sent a screenshot to MGA for confirmation.",
          },
        ],
      },
      {
        heading: "Important Reminder",
        blocks: [
          {
            type: "list",
            items: [
              "This was a family participation event.",
              "Parents were required to stay on-site.",
              "This was not a drop-off event.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "shadow-workshop",
    title: "Shadow Puppetry & Light Science Mini Workshop",
    date: "April 11, 2026",
    time: "1:30 PM – 3:00 PM",
    location: "Suite 300, 288 Walnut St, Newton, MA 02460, USA",
    gradeLevel: "Grade 2+",
    image: "/images/workshop-event/0411-Workshop-0323-791x1024.jpg",
    summary:
      "Students watched a shadow play performance, explored backstage, and experienced an interactive Light & Shadow Magic Box demonstrating core optics principles.",
    sections: [
      {
        heading: "About the Event",
        blocks: [
          { type: "subheading", text: "Highlights:" },
          {
            type: "list",
            items: [
              "Watch the shadow play Superpower Academy: Rescue the Principal",
              "Explore backstage and try the shadow theater stage",
              "Experience the Light & Shadow Magic Box — discover 7 core optics principles",
              "Summer Camp Preview: Student Idea Journal & Character Script",
              "Yingqufang × MGA Shadow Theater Team Info Session — Performance: Aug 29 at Wellesley Library",
            ],
          },
          {
            type: "imageGrid",
            images: [
              {
                src: "/images/workshop-event/workshop-gallery-1.jpg",
                alt: "Shadow Puppetry & Light Science workshop activity",
              },
              {
                src: "/images/workshop-event/workshop-gallery-2.jpg",
                alt: "Students exploring the shadow theater stage",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "easterfun",
    title: "Easter Fun MGA Special Event for Pre-K",
    date: "April 4, 2026",
    time: "1:30 PM – 2:45 PM & 3:00 PM – 4:15 PM",
    location: "Suite 300, 288 Walnut St, Newton, MA 02460, USA",
    gradeLevel: "PreK – K",
    image: "/images/workshop-event/0404Easter-791x1024.jpg",
    summary:
      "Young learners made personalized laser-cut Easter eggs, took part in STEM activities, and joined an Easter egg hunt.",
    sections: [
      {
        heading: "Session 1",
        blocks: [
          {
            type: "schedule",
            items: [
              {
                time: "1:30 – 1:45 PM",
                activity: "Laser-Cut Easter Egg + Customized Name / Activity Introduction",
              },
              { time: "1:45 – 2:30 PM", activity: "STEM Learning Session" },
              { time: "2:30 – 2:45 PM", activity: "Easter Egg Hunt" },
            ],
          },
        ],
      },
      {
        heading: "Session 2",
        blocks: [
          {
            type: "schedule",
            items: [
              {
                time: "3:00 – 3:15 PM",
                activity: "Laser-Cut Easter Egg + Customized Name / Activity Introduction",
              },
              { time: "3:15 – 4:00 PM", activity: "STEM Learning Session" },
              { time: "4:00 – 4:15 PM", activity: "Easter Egg Hunt" },
            ],
          },
        ],
      },
      {
        heading: "About the Event",
        blocks: [
          { type: "subheading", text: "Highlights:" },
          {
            type: "list",
            items: [
              "Create a personalized laser-cut Easter egg",
              "Hands-on STEM learning experience",
              "Fun Easter egg hunt activity",
              "We also prepared a workshop to build claws for older siblings while waiting for the trial class!",
            ],
          },
          {
            type: "imageGrid",
            images: [
              {
                src: "/images/workshop-event/workshop-gallery-1.jpg",
                alt: "Easter Fun workshop activity",
              },
              {
                src: "/images/workshop-event/workshop-gallery-2.jpg",
                alt: "Students at the Easter Fun event",
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getPastWorkshopEventBySlug(slug: string) {
  return pastWorkshopEvents.find((event) => event.slug === slug);
}
