import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  sql,
  aws,
  express,
  bootstrap,
  socket
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },

  // {
  //   name: "socket.io",
  //   icon: socket,
  // },
  // {
  //   name: "aws",
  //   icon: aws,
  // },

  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "tailwind",
    icon: tailwind,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];


const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Wise Neosco India Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#111",
    date: "March 2023 - Present",
    points: [
      "Optimized responsive web applications with React.js, reducing load times by 20%.",
      "Developed cross-platform mobile apps with React Native, reducing costs by 25%.",
      "Improved API response times by 20% and overall system performance through Node.js and Express.js.",
      "Designed and developed cross-platform desktop applications using Electron.js and Tauri.",
      "Implemented user-friendly interfaces and improved user experiences across multiple platforms.",
      "Utilized automated testing frameworks like Jest to ensure code quality and reduce bugs by 30%.",
      "Managed source code using Git and GitHub, maintaining code integrity and facilitating seamless collaboration.",
    ],
  },
  // {
  //   title: "Full Stack Developer Intern",
  //   company_name: "Null Class",
  //   icon: tesla,
  //   iconBg: "#383E56",
  //   date: "Jan 2021 - March 2022",
  //   points: [
  //     "Developed and maintained web applications using React.js, Node.js, Express.js, MongoDb and other related technologies.",
  //     "Implemented responsive design and ensuring cross-browser compatibility.",
  //   ],
  // },
  // {
  //   title: "Full Stack Developer Trainee",
  //   company_name: "The 10X Academy",
  //   icon: shopify,
  //   iconBg: "#E6DEDD",
  //   date: "June 2022 - Jan 2023",
  //   points: [
  //     "Learned to implement efficient data structures and algorithms for optimized data storage and retrieval.",
  //     "Learned to develop interactive and dynamic user interfaces using React, enhancing user experience.",
  //     "Learned to develop server-side applications and APIs using Node.js and Express.js",
  //     "Learned to work with MongoDB, MySql databases, for efficient data management.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Library Management System",
    description:
      "We developed a Smart Library Management System using the MERN stack and React Native for mobile apps. The mobile application includes an NFC feature for easy book check-outs/returns. Our desktop app, built with Electron.js, integrates with serial port devices, QR code scanners, RFID readers, and printers, streamlining library operations. Key features include a React admin panel for efficient resource management, a kiosk app for seamless integration with IT devices, and real-time monitoring via IP and serial devices. This system enhances user experience and operational efficiency, leading to a 25% improvement in user satisfaction, a 30% reduction in access-related incidents, and a 15% reduction in operational costs. Our Smart Library Management System is a state-of-the-art solution that automates and optimizes library functions, providing a smart, efficient, and user-friendly environment.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/apurba2001",
  },
  {
    name: "Access Control System",
    description:
      "Our team developed an advanced Access Control System using Electron and React technologies. This system integrates IP and serial devices to enable real-time monitoring and control, enhancing facility security and operational efficiency. The backend infrastructure, powered by Node.js (Express.js) and SQL databases, was optimized to ensure high performance and scalability. A robust role-based access control (RBAC) system was implemented, incorporating encrypted communication protocols to meet GDPR compliance standards and mitigate unauthorized access risks. We also incorporated a user-friendly interface for seamless navigation and management. Additionally, the system supports integration with third-party security solutions for enhanced versatility and adaptability. Regular updates and maintenance cycles ensure the system remains secure and up-to-date with the latest technology standards.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "electron.js",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/apurba2001",
  },
];

export { services, technologies, experiences, testimonials, projects };
