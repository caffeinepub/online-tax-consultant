import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { setPageMeta } from '../utils/seo';
import { testimonials } from '../content/testimonials';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageMeta({
      title: 'Testimonials | Online Tax Consultant',
      description:
        'Read what our clients say about our tax and compliance services. Trusted by individuals and businesses across India.',
      keywords: 'tax consultant reviews, client testimonials, tax services India reviews',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trusted by thousands of individuals and businesses across India for their tax and
            compliance needs
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-border/40 bg-card p-6"
              >
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-success text-success" />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Join Our Satisfied Clients
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Experience professional tax services with personalized attention and expert guidance
          </p>
          <Button
            size="lg"
            onClick={() => navigate({ to: '/contact' })}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
