import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

type Post = {
  title: string;
  description: string;
  image: string;
  hint: string;
  author: string;
  date: string;
  tags: string[];
  link: string;
};

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card className="flex flex-col overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
      <CardHeader className="p-0 relative">
        <div className="overflow-hidden">
             <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={post.hint}
            />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
        <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
        <CardDescription className="mt-2 text-sm text-muted-foreground">
          By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </CardDescription>
        <p className="mt-4 text-sm">{post.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 h-auto">
          <Link href={post.link}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
