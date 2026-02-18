import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { testimonials } from '../../content/testimonials';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trusted by thousands of individuals and businesses across India
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-border/40 bg-card p-6"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-success text-success" />
                ))}
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => navigate({ to: '/testimonials' })}>
            View All Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
}
