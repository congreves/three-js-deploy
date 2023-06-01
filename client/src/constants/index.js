import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  svea,
  mp,
  triggers,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    id: 1,
    title: "Web Developer",
    icon: web,
  },
  {
    id: 2,
    title: "React Developer",
    icon: mobile,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "UI Developer Intern",
    company_name: "Made People",
    icon: mp,
    iconBg: "FFF4E8",
    date: "Jan 2023 - Current",
    points: [
      "Developing and maintaining web applications using Vue/React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility and client needs",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "VioVin",
    icon: svea,
    iconBg: "#FFF4E8",
    date: "Mar 2022 - April 2022",
    points: [
      "Managed client contact and project management.",
      "Designed & developed a web application using React.js and Figma",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "UX/UI Designer",
    company_name: "Try Triggers",
    icon: triggers,
    iconBg: "inherit",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Co-created two new services in Workshop design and online training, which were implemented.",
      "Collaborating with cross-functional teams including designers, product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Established new international partnerships with Miro.",
      "Co-facilitation in workshops & performed various user interviews.",
    ],
  },
  {
    title: "UI Designer",
    company_name: "Svea Solar",
    icon: svea,
    iconBg: "#FFF4E8",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Worked in an agile team & re- designed the utility page for B2B customers  together with stakeholders.",
      "Created new informational arcitecture schema, content strategy, wireframes,mock-ups hi-fi prototype. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed my skills in Figma  building a ui library.",
    ],
  },
  {
    title: "Other Activites",
    company_name: "Hyper Island / Changemaker Educations",
    icon: svea,
    iconBg: "#FFF4E8",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Student representative for the Front-End / App Development program aswell as the Digital Media Creative program at Hyper Island.",
      "Active participation in regional panel discussions, board meetings and workshops to improve the student experience that met industry needs. ",
      "Part of internal group working to create more inclusive design processes at the school, using an intersectional perspective",
      "Co-created tools for the Hyper Toolbox.",
      "Involved in creating a less biased recruitment process for new staff and students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sandy makes amazing banana bread! (not that I eat bananas)",
    name: "Ben Counsell",
    designation: "UI Lead Developer",
    company: "Made People",
    image: "",
  },
  {
    testimonial:
    "I loved working together with Sandy! Sandy is an awesome visual designer and has great communication. As we were working together it became apparent that she is someone that we would love to invest in as a company. Hungry, learns quick, has talent and is very adaptableleo.",
    name: "Marvin Benno",
    designation: "Engineering Manager",
    company: "Svea Solar",
    image: "https://media.licdn.com/dms/image/C5603AQG8ddVPn6QMeg/profile-displayphoto-shrink_800_800/0/1592859682105?e=1691020800&v=beta&t=Meay3Vi7U_Gqo5KuYu7fsoymyDRJ6dw4Tric1CV9keU",
  },
  {
    testimonial:
    "I had the privilege to work with Sandy during a project to develop our new brand strategy. The whole team, that she was part of, did a great job in understanding our brand history and values to build upon, and Sandy was a very active part in that. The results presented was well above expectations and I would be happy to work with her again!",
    name: "Erik Månsson",
    designation: "CEO",
    company: "Innoscentia",
    image: "https://media.licdn.com/dms/image/C4E03AQHC9Z0H6Sg17g/profile-displayphoto-shrink_800_800/0/1597346939878?e=1691020800&v=beta&t=P1nwGmKxaZHMpXKsEgx0OlXe7hSodIbXJJ2ak_pRWcw",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
