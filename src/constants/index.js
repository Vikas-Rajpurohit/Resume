import {
  mobile,
  backend,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  teacher,
  sign,
  express,
  python,
  c,
  unity,
  vision,
  bot,
  block,
  flask,
  threejs,
  navneet,
  sid,
  komal,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AIML Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenCV",
    icon: vision,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Assistant Teacher",
    company_name: "Abhyudaya",
    icon: teacher,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Assisted students from grades 7 to 10 in understanding and excelling in Physics, Chemistry, and Maths subjects.",
      "Mentored students individually and in groups, addressing their academic queries and providing guidance for their overall growth and development",
      "Maintained a positive and inclusive classroom environment, fostering students' curiosity, critical thinking, and problem-solving abilities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is a very good team player. He is a hardworking and an inquisitive guy. He puts in a sustained amount of effort into whatever work he takes up.",
    name: "Navneet Nair",
    designation: "IEEE Subordinate",
    company: "SPIT",
    image: navneet,
  },
  {
    testimonial:
      "Vikas is very enthusiastic, hard-working and fun person. He is an excellent team worker and remains calm in stressful times Overall, he is very hardworking and insightful person.",
    name: "Komal Tarachandani",
    designation: "CSI Member",
    company: "SPIT",
    image: komal,
  },
  {
    testimonial:
      "With him I had a great experience of working as a team. He has a very unique perspective and often sees the gaps which people usually tend to miss.He comes up with creative solutions for complex problems.",
    name: "Siddhant Rao",
    designation: "IEEE Subordinate",
    company: "SPIT",
    image: sid,
  },
];

const projects = [
  {
    name: "Sign Language Recognition",
    description:
      "Developed a sign language recognition system by creating a custom dataset, converting images to Numpy arrays, and implementing LSTM for processing sequential data.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: sign,
    source_code_link: "https://github.com/Vikas-Rajpurohit",
  },
  {
    name: "Chat Bot",
    description:
      "A chatbot for a web project, implemented tokenization and stemming techniques. Processed text data, converted it into a numpy array. Built a linear model with three layers for effective interaction with users.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "NLTK",
        color: "green-text-gradient",
      },
    ],
    image: bot,
    source_code_link: "https://github.com/Vikas-Rajpurohit",
  },
  {
    name: "BlockChain Database",
    description:
      "Developed a blockchain-based database for hospitals, integrating smart contracts, REST API, and secure file storage. Efficiently managed and secured medical data using decentralized technology",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Pinata",
        color: "green-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
    ],
    image: block,
    source_code_link: "https://github.com/Vikas-Rajpurohit",
  },
];

export { services, technologies, experiences, testimonials, projects };
