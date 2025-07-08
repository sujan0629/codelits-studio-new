'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export function NewsletterForm() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thanks for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
        <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter for the latest updates.
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-body"
            />
            <Button type="submit" size="sm">Subscribe</Button>
        </div>
    </form>
  );
}
