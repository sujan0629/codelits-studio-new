import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Twitter, Linkedin } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  hint: string;
  bio: string;
  socials: {
    twitter: string;
    linkedin: string;
    github: string;
  };
};

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="text-center group overflow-hidden">
      <CardHeader className="p-0">
        <div className="bg-muted aspect-square overflow-hidden">
            <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={member.hint}
            />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
        <p className="text-primary font-medium">{member.role}</p>
        <CardDescription className="mt-2">{member.bio}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 pb-6">
        <Link href={member.socials.twitter} className="text-muted-foreground hover:text-primary">
          <Twitter />
        </Link>
        <Link href={member.socials.linkedin} className="text-muted-foreground hover:text-primary">
          <Linkedin />
        </Link>
        <Link href={member.socials.github} className="text-muted-foreground hover:text-primary">
          <Github />
        </Link>
      </CardFooter>
    </Card>
  );
}
