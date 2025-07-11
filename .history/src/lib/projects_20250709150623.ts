
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string; // Keep for fallback or og:image meta tags
  hint: string;
  link: string;
  tags: string[];
};

export const allProjects: Project[] = [
  {
    slug: 'rms',
    title: 'RMS',
    description: 'A comprehensive management system for educational institutions.',
    longDescription: 'A comprehensive management system for educational institutions, providing tools for student, teacher, and administrative management to streamline school operations.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'school dashboard',
    link: 'https://rms.codelitsstudio.com/',
    tags: ['Web Application', 'SaaS', 'EdTech'],
  },
  {
    slug: 'playxio',
    title: 'Playxio',
    description: 'A modern and sleek gaming platform for enthusiasts.',
    longDescription: 'Playxio is a modern and sleek gaming platform for enthusiasts, featuring game libraries, community features, and a clean user interface for an immersive gaming experience.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'gaming platform',
    link: 'https://playxio.xyz/',
    tags: ['Web Design', 'Gaming', 'Community'],
  },

    {
    slug: 'e-commerce-clothing',
    title: 'Urban Threads',
    description: 'A stylish and functional e-commerce store for a clothing brand.',
    longDescription: 'Urban Threads is a complete e-commerce solution for a modern clothing brand. It features a clean product grid, easy navigation, and a seamless checkout process, built to provide an excellent online shopping experience.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'clothing store website',
    link: 'https://e-commerce-site-demo-sujan.netlify.app/',
    tags: ['E-commerce', 'Web Development', 'Fashion'],
  },

  {
    slug: 'eco-club',
    title: 'Eco Club CCRC',
    description: 'An environmental awareness platform for a college club.',
    longDescription: 'A dynamic website for the Eco Club of a college, dedicated to promoting environmental awareness, organizing events, and showcasing green initiatives. The platform serves as a central hub for members and visitors to learn about sustainability.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'nature environment website',
    link: 'https://ccrcecoclub.netlify.app/',
    tags: ['Web Design', 'Community', 'Non-Profit'],
  },


  {
    slug: 'project-gamma',
    title: 'Project Gamma',
    description: 'Digital marketing campaign that increased lead generation by 300%.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'marketing analytics',
    tags: ['Marketing', 'SEO'],
    link: 'https://www.google.com/search?q=digital+marketing+campaign', // Placeholder link
    longDescription: 'Project Gamma was a targeted digital marketing initiative designed to skyrocket lead generation. We implemented a multi-channel strategy encompassing SEO, content marketing, PPC campaigns, and social media engagement. Through careful analysis and optimization, we were able to increase qualified leads by over 300% in just six months, providing a massive return on investment for our client.',
  },
  {
    slug: 'project-delta',
    title: 'Project Delta',
    description: 'Mobile app for a fintech company, with a focus on security and user experience.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'secure fintech app',
    tags: ['Mobile App', 'Fintech'],
    link: 'https://www.google.com/search?q=fintech+app', // Placeholder link
    longDescription: 'Project Delta involved the creation of a secure and intuitive mobile application for a fintech startup. Security was paramount, and we integrated multi-factor authentication and end-to-end encryption. The user experience was designed to be simple and reassuring, helping users manage their finances with confidence. The app received high praise for its design and reliability upon launch.',
  },
   {
    slug: 'project-epsilon',
    title: 'Project Epsilon',
    description: 'AI-powered analytics dashboard for a major logistics corporation.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'ai dashboard logistics',
    link: 'https://www.google.com/search?q=ai+analytics+dashboard', // Placeholder link
    tags: ['AI', 'Data Visualization'],
    longDescription: 'We developed an advanced, AI-powered analytics dashboard for a major logistics corporation. The tool, Project Epsilon, processes vast amounts of data in real-time to provide actionable insights on supply chain efficiency, delivery times, and cost-saving opportunities. The intuitive data visualizations make complex information easy to understand for stakeholders at all levels.',
  },
  {
    slug: 'project-phi',
    title: 'Project Phi',
    description: 'A beautiful and performant marketing website for a SaaS product.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'modern saas website',
    link: 'https://www.google.com/search?q=saas+marketing+website', // Placeholder link
    tags: ['Web Design', 'SaaS'],
    longDescription: 'Project Phi was a complete overhaul of a SaaS company\'s marketing website. We focused on creating a visually stunning design that communicated the product\'s value proposition clearly. Performance was a key goal, and we delivered a site with lightning-fast load times, which helped to improve their SEO rankings and reduce bounce rates significantly.',
  },
];

export const featuredProjects = allProjects.filter(p => ['rms', 'playxio', 'nexus', 'eco-club'].includes(p.slug));
