import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { setPageMeta } from '../utils/seo';
import { blogPosts } from '../content/blogPosts';
import { Calendar } from 'lucide-react';

export default function BlogPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageMeta({
      title: 'Tax Blog | Online Tax Consultant',
      description:
        'Stay updated with the latest tax news, ITR filing tips, GST updates, and tax-saving strategies for individuals and businesses in India.',
      keywords: 'tax blog India, ITR filing tips, GST updates, tax saving tips, income tax news',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Tax Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Expert insights, tax-saving tips, and the latest updates on ITR filing, GST, and
            business compliance
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-lg border border-border/40 bg-card transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mb-3 text-xl font-semibold group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-primary"
                    onClick={() => navigate({ to: `/blog/${post.slug}` })}
                  >
                    Read More →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
