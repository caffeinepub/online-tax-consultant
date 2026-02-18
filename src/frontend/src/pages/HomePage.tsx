import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { CheckCircle2, Shield, Users, Clock, Award, HeadphonesIcon } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { setPageMeta } from '../utils/seo';
import { homeContent } from '../content/homeContent';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FaqSection from '../components/sections/FaqSection';
import AboutWhyChooseUsSection from '../components/sections/AboutWhyChooseUsSection';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageMeta({
      title: 'Online Tax Consultant | ITR & GST Filing Services',
      description:
        'Get expert ITR filing, GST registration, tax planning & business compliance services online. Affordable, secure & professional tax consultants in India.',
      keywords:
        'online tax consultant, ITR filing online, GST registration India, tax filing services, tax advisor India, business registration services, income tax consultant',
    });
  }, []);

  const handleWhatsApp = (message: string) => {
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-primary/5 via-background to-success/5 py-20 md:py-32"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {homeContent.h1}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {homeContent.introParagraph}
            </p>

            {/* CTA Bullets */}
            <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>{homeContent.ctaBullets[0]}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>{homeContent.ctaBullets[1]}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>{homeContent.ctaBullets[2]}</span>
              </div>
            </div>

            {/* Primary CTAs */}
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
                variant="outline"
                onClick={() => navigate({ to: '/services/$slug', params: { slug: 'itr-filing' } })}
                className="w-full border-primary/20 text-primary hover:bg-primary/10 sm:w-auto"
              >
                File Your ITR Now
              </Button>
              <Button
                size="lg"
                onClick={() => handleWhatsApp('I would like to talk to a tax expert')}
                className="w-full bg-success text-white hover:bg-success/90 sm:w-auto"
              >
                Talk to Tax Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Our Tax & Compliance Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive tax solutions for individuals and businesses across India
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'ITR Filing',
                description: 'Hassle-free income tax return filing for all categories',
                slug: 'itr-filing',
              },
              {
                title: 'GST Registration & Filing',
                description: 'Quick GST registration and compliance services',
                slug: 'gst-registration',
              },
              {
                title: 'Business Registration',
                description: 'Company incorporation and MSME registration',
                slug: 'business-registration',
              },
              {
                title: 'Tax Planning & Advisory',
                description: 'Strategic tax planning to maximize savings',
                slug: 'tax-planning',
              },
              {
                title: 'TDS Return Filing',
                description: 'Complete TDS compliance and return filing',
                slug: 'tds-filing',
              },
              {
                title: 'Accounting & Bookkeeping',
                description: 'Professional accounting services for businesses',
                slug: 'accounting',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border/40 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                <Button
                  variant="link"
                  className="h-auto p-0 text-primary"
                  onClick={() => navigate({ to: '/services/$slug', params: { slug: service.slug } })}
                >
                  Learn More →
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => navigate({ to: '/services' })}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About & Why Choose Us */}
      <AboutWhyChooseUsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Book a free consultation with our tax experts today and experience hassle-free tax
            compliance.
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
              onClick={() => handleWhatsApp('I would like to get started with your services')}
              className="w-full bg-success text-white hover:bg-success/90 sm:w-auto"
            >
              Contact via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
