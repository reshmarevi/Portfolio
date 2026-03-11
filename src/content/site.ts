export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  image?: string
}

export interface EducationItem {
  institute: string
  qualification: string
  period: string
}

export interface SiteContent {
  name: string
  title: string
  tagline: string
  about: {
    bio: string
    highlights: string[]
    image?: string
  }
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: string[]
  education: EducationItem[]
  contact: {
    email: string
    phone?: string
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export const siteContent: SiteContent = {
  name: 'Reshma Revi',
  title: 'Senior Software Engineer (Front-End)',
  tagline:
    'Front-end developer with 5+ years of experience building scalable, user-focused applications using React, TypeScript, and modern UI engineering practices.',
  about: {
    bio:
      'Accomplished front-end developer with over 5 years of experience specializing in HTML, CSS, and JavaScript. Proficient in React, with a strong commitment to delivering visually stunning, user-friendly web applications. Adept at collaborating with cross-functional teams to deliver high-quality, scalable solutions that enhance user experience and drive engagement.',
    highlights: [
      'Designed modular and scalable React architectures for SDK and product applications',
      'Optimized data fetching and app performance using GraphQL and efficient rendering patterns',
      'Collaborated with product, design, and backend teams to deliver production-ready features',
    ],
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
  },
  experience: [
    {
      company: 'Keyvalue Software Systems, Kochi',
      role: 'Senior Software Engineer',
      period: 'Feb 2024 – Present',
      bullets: [
        'Led development of a Data Visualization Application to improve interpretation and decision-making.',
        'Collaborated with stakeholders to gather business requirements and translate them into technical specifications.',
        'Conducted comprehensive testing to ensure functional and non-functional quality.',
        'Built a React SDK application with modular architecture for easy client integration.',
        'Implemented core features such as real-time updates and customizable notifications.',
      ],
    },
    {
      company: 'Keyvalue Software Systems',
      role: 'Software Engineer',
      period: 'June 2023 – Jan 2024',
      bullets: [
        'Developed and maintained an e-commerce application for an Indonesian client with strong UX focus.',
        'Used Tailwind CSS for responsive and consistent UI implementation.',
        'Built and integrated data-fetching components with React to improve maintainability.',
        'Applied GraphQL to improve API querying and overall data-fetching performance.',
      ],
    },
    {
      company: 'Keyvalue Software Systems',
      role: 'Associate Software Engineer',
      period: 'Nov 2020 – May 2023',
      bullets: [
        'Contributed to development and maintenance of an Edutech application.',
        'Built and integrated dynamic frontend components for engaging learning experiences.',
        'Collaborated closely with designers and backend developers to ship new features.',
        'Improved application performance and scalability through clean, efficient coding practices.',
      ],
    },
  ],
  projects: [
    {
      id: 'data-visualization-app',
      title: 'Data Visualization Application',
      description:
        'Built a visualization-focused application that helps users interpret business data and make faster decisions through intuitive UI patterns.',
      tech: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'react-sdk-development',
      title: 'React SDK Development',
      description:
        'Designed and developed an npm SDK in React with a modular architecture, real-time updates, and configurable notifications for client integration.',
      tech: ['React', 'NPM', 'TypeScript', 'REST API', 'Testing'],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description:
        'Implemented core UI modules and data integrations for an e-commerce product, improving responsiveness, maintainability, and user experience.',
      tech: ['React', 'Tailwind CSS', 'GraphQL', 'JavaScript'],
      image:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'edutech-application',
      title: 'Edutech Application',
      description:
        'Developed dynamic frontend components for an education platform and optimized reliability and cross-device performance.',
      tech: ['React', 'Redux', 'Context API', 'CSS Modules', 'Jest'],
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  skills: [
    'React.js',
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Redux',
    'Context API',
    'Recoil',
    'React Router',
    'Styled-components',
    'CSS Modules',
    'Sass',
    'Tailwind CSS',
    'Jest',
    'Enzyme',
    'React Testing Library',
    'RESTful APIs',
    'GraphQL',
  ],
  education: [
    {
      institute: 'Mar Athanasius College of Engineering, Kothamangalam',
      qualification: 'B.Tech, Computer Science - 8.24 CGPA',
      period: 'Aug 2020',
    },
    {
      institute: 'St. Peters HSS, Kolenchery',
      qualification: '12th - 97.8%',
      period: 'March 2015',
    },
    {
      institute: 'Govt. H.S.S, Pothrika',
      qualification: '10th - 96%',
      period: 'March 2013',
    },
  ],
  contact: {
    email: 'reshmarevi101@gmail.com',
    phone: '+91 8139071392',
    linkedin: 'https://linkedin.com',
  },
}
