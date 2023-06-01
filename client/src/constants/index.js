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
    name: "Mateus",
    description:
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of eremaining essentially unchanged. It was popularised",
    tags: [
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "centra",
        color: "pink-text-gradient",
      },
    ],
    image: "file:///Users/sandycongreve/Desktop/Screenshot%202023-06-01%20at%2011.19.37.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Restrictions App",
    description:
      "A web application that allows users to search for recipes based on their dietary restrictions and preferences.",
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
    image: "https://camo.githubusercontent.com/9c06e5b943c9ef1e9028f696ca5c247db304f6cc101fe5f58b27c16c5e3e20a6/68747470733a2f2f692e6962622e636f2f6e50784e7848682f53637265656e73686f742d323032332d30312d32362d61742d30392d35352d32322e706e67",
    source_code_link: "https://github.com/",
  },
  {
    name: "VioVin",
    description:
      "Business site for wine distribution company.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/59Mr9Pq/3-Chateau-Bellefontaine-blanc.jpg",
    source_code_link: "https://dkmg-mvp.netlify.app/",
  },
];

export { services, experiences, testimonials, projects };
