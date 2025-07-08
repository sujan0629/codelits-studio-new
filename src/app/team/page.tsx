import { TeamMemberCard } from '@/components/team/TeamMemberCard';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://placehold.co/400x400.png',
    hint: 'male professional',
    bio: 'A visionary leader with a passion for technology and design.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Samantha Lee',
    role: 'Lead Developer',
    image: 'https://placehold.co/400x400.png',
    hint: 'female developer',
    bio: 'Expert in full-stack development and complex problem-solving.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://placehold.co/400x400.png',
    hint: 'male creative',
    bio: 'Brings ideas to life with stunning visuals and user-centric design.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
    {
    name: 'Jessica Rodriguez',
    role: 'Project Manager',
    image: 'https://placehold.co/400x400.png',
    hint: 'female professional',
    bio: 'Ensures projects are delivered on time and exceed expectations.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Marketing Strategist',
    image: 'https://placehold.co/400x400.png',
    hint: 'male marketer',
    bio: 'Drives growth and engagement through innovative marketing campaigns.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emily White',
    role: 'UI/UX Designer',
    image: 'https://placehold.co/400x400.png',
    hint: 'female designer',
    bio: 'Passionate about crafting seamless and beautiful user experiences.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Meet Our Team</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The brilliant minds behind CodeLits Studio. We are a team of passionate creators, thinkers, and innovators.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
