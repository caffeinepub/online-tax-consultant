import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { services } from '../content/services';
import { setPageMeta } from '../utils/seo';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageMeta({
      title: 'Our Services | Online Tax Consultant',
      description:
        'Comprehensive tax and compliance services including ITR filing, GST registration, business registration, tax planning, and more.',
      keywords:
        'tax services India, ITR filing, GST registration, business registration, tax planning, accounting services',
    });
  }, []);

  const handleWhatsApp = (serviceName: string) => {
    const url = buildWhatsAppUrl(`I'm interested in ${serviceName}`);
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Our Tax & Compliance Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Professional tax solutions tailored for individuals, freelancers, startups, and small
            businesses across India
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="group flex flex-col rounded-lg border border-border/40 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <img
                    src="/assets/generated/service-icons-sprite.dim_1024x1024.png"
                    alt={service.title}
                    className="h-10 w-10 object-contain"
                    style={{
                      objectPosition: `${(index % 4) * 33.33}% ${Math.floor(index / 4) * 50}%`,
                    }}
                  />
                </div>
                <h2 className="mb-3 text-2xl font-semibold">{service.title}</h2>
                <p className="mb-4 flex-1 text-muted-foreground">{service.summary}</p>
                <div className="mb-4 space-y-2">
                  {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-success">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate({ to: `/services/${service.slug}` })}
                  >
                    Learn More
                  </Button>
                  <Button
                    className="flex-1 bg-success text-white hover:bg-success/90"
                    onClick={() => handleWhatsApp(service.title)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Need Help Choosing the Right Service?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Our tax experts are here to guide you. Book a free consultation today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/contact' })}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              onClick={() => handleWhatsApp('I need help choosing the right service')}
              className="w-full bg-success text-white hover:bg-success/90 sm:w-auto"
            >
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
