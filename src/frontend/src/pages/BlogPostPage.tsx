import { useEffect } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { setPageMeta } from '../utils/seo';
import { blogPosts } from '../content/blogPosts';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams({ from: '/blog/$slug' });
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      setPageMeta({
        title: `${post.title} | Online Tax Consultant Blog`,
        description: post.excerpt,
        keywords: 'tax tips India, ITR filing, GST updates, tax planning',
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Post Not Found</h1>
        <Button onClick={() => navigate({ to: '/blog' })}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => navigate({ to: '/blog' })}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <article className="prose prose-lg mx-auto max-w-4xl">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
                <p className="text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </article>

          {/* Related Links */}
          <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-border/40 bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">Need Help with Tax Filing?</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Our expert tax consultants are here to assist you with ITR filing, GST registration,
              and all your tax compliance needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => navigate({ to: '/services' })}>View Our Services</Button>
              <Button variant="outline" onClick={() => navigate({ to: '/contact' })}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
