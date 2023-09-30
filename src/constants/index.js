import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  reactjs,
  aws,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  prisma,
  db,

  college,
  school,
  cartrabbit_logo,
  integrin,
  kafkaNestjs,
  lambda,
  shopify
} from '../assets';


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Cloud Development',
    icon: db,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'AWS',
    icon: aws
  },
  {
    name: 'prisma',
    icon: prisma
  },
  {
    name: 'db',
    icon: db
  }
];

const experiences = [
  {
    title: 'Higher-Secondary Education',
    company_name: 'RVG HSS Kurichikottai',
    icon: school,
    iconBg: '#333333',
    date: 'Jun 2018 - Mar 2020',
  },
  {
    title: "bachelor's in IT",
    company_name: 'bharathiar university',
    icon: college,
    iconBg: '#333333',
    date: 'Jul 2020 - May 2023',
  },
  {
    title: 'Full-Stack Developer Intern',
    company_name: 'Integrin Enterprise Solutions',
    icon: integrin,
    iconBg: '#333333',
    date: 'Feb 2023 - Aug 2023',
  },
  {
    title: 'Software Developer',
    company_name: 'Cartrabbit',
    icon: cartrabbit_logo,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'Microservices Kafka',
    description: 'Connecting Distributed systems in Nestjs using Apache Kafka.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: kafkaNestjs,
    repo: 'https://github.com/sivakrishnacode/Kafka-Nestjs',
    demo: 'https://github.com/sivakrishnacode/Kafka-Nestjs',
  },
  {
    id: 'project-2',
    name: 'AWS Lambda',
    description:
      'Rest-EndPoints hosted in Lambda with Loadbalancer',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: lambda,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://ajo3gvkh0i.execute-api.us-east-1.amazonaws.com/?name=This%20is%20SivaKrishna'
  },
  {
    id: 'project-3',
    name: 'Shopify App',
    description: 'Shopify app using graphql, postgres, webhooks, sockets, and more...',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: shopify,
    repo: '',
    demo: '',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
