import { ProjectCard } from '@/components/portfolio/ProjectCard';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A complete branding and web development project for a leading tech startup.',
    image: 'https://placehold.co/600x400.png',
    hint: 'tech startup',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    title: 'Project Beta',
    description: 'E-commerce platform with a custom design system and seamless user experience.',
    image: 'https://placehold.co/600x400.png',
    hint: 'ecommerce platform',
    tags: ['E-commerce', 'Branding'],
    link: '#',
  },
  {
    title: 'Project Gamma',
    description: 'Digital marketing campaign that increased lead generation by 300%.',
    image: 'https://placehold.co/600x400.png',
    hint: 'digital marketing',
    tags: ['Marketing', 'SEO'],
    link: '#',
  },
  {
    title: 'Project Delta',
    description: 'Mobile application for a new social media platform.',
    image: 'https://placehold.co/600x400.png',
    hint: 'social media',
    tags: ['Mobile App', 'UI/UX Design'],
    link: '#',
  },
  {
    title: 'Project Epsilon',
    description: 'Corporate website redesign for a Fortune 500 company.',
    image: 'https://placehold.co/600x400.png',
    hint: 'corporate website',
    tags: ['Web Development', 'Branding'],
    link: '#',
  },
  {
    title: 'Project Zeta',
    description: 'SEO and content strategy that doubled organic traffic in 6 months.',
    image: 'https://placehold.co/600x400.png',
    hint: 'content strategy',
    tags: ['SEO', 'Marketing'],
    link: '#',
  },
];


export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore a selection of projects that showcase our passion for creating impactful digital solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
