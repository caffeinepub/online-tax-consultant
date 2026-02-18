import { useEffect } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { services } from '../content/services';
import { setPageMeta } from '../utils/seo';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams({ from: '/services/$slug' });
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      setPageMeta({
        title: `${service.title} | Online Tax Consultant`,
        description: service.summary,
        keywords: service.keywords.join(', '),
      });
    }
  }, [service]);

  if (!service) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Service Not Found</h1>
        <Button onClick={() => navigate({ to: '/services' })}>Back to Services</Button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl(`I'm interested in ${service.title}`);
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">{service.summary}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">What We Offer</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">{service.content}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Key Benefits</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {service.keyBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-border/40 bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Why Choose Us</h2>
              <div className="rounded-lg border border-border/40 bg-card p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span>Expert Chartered Accountants with years of experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span>100% secure and confidential handling of your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span>Affordable pricing with transparent costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span>Fast turnaround time with dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-lg bg-gradient-to-br from-primary/5 to-success/5 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold">Ready to Get Started?</h3>
              <p className="mb-6 text-muted-foreground">
                Book a free consultation or contact us directly via WhatsApp
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
                  onClick={handleWhatsApp}
                  className="w-full bg-success text-white hover:bg-success/90 sm:w-auto"
                >
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
