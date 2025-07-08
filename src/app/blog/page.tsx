import { BlogPostCard } from '@/components/blog/BlogPostCard';

const posts = [
  {
    title: 'The Future of Web Development in 2024',
    description: 'An in-depth look at the trends shaping the future of web development, from AI to serverless architectures.',
    image: 'https://placehold.co/600x400.png',
    hint: 'web development future',
    author: 'Alex Johnson',
    date: '2024-05-10',
    tags: ['Web Development', 'Trends'],
    link: '#',
  },
  {
    title: 'Why User Experience is Key to Business Success',
    description: 'Discover how a user-centric approach to design can lead to higher engagement, conversion, and customer loyalty.',
    image: 'https://placehold.co/600x400.png',
    hint: 'user experience',
    author: 'Emily White',
    date: '2024-04-22',
    tags: ['UI/UX', 'Business'],
    link: '#',
  },
  {
    title: 'Mastering SEO: A Beginner\'s Guide',
    description: 'A comprehensive guide to understanding and implementing effective SEO strategies to boost your online visibility.',
    image: 'https://placehold.co/600x400.png',
    hint: 'seo guide',
    author: 'David Kim',
    date: '2024-03-15',
    tags: ['SEO', 'Marketing'],
    link: '#',
  },
  {
    title: 'The Rise of Headless CMS',
    description: 'Explore the benefits of using a headless CMS for more flexible and scalable content management.',
    image: 'https://placehold.co/600x400.png',
    hint: 'headless cms',
    author: 'Samantha Lee',
    date: '2024-02-28',
    tags: ['Technology', 'CMS'],
    link: '#',
  },
];


export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Insights & Articles</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stay updated with the latest industry trends, expert insights, and news from the CodeLits team.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
