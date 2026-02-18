import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { CheckCircle2 } from 'lucide-react';
import { setPageMeta } from '../utils/seo';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function PricingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageMeta({
      title: 'Pricing | Online Tax Consultant',
      description:
        'Transparent and affordable pricing for ITR filing, GST registration, business registration, and other tax services.',
      keywords: 'tax consultant pricing, ITR filing cost, GST registration fees, tax services pricing India',
    });
  }, []);

  const handleWhatsApp = (service: string) => {
    const url = buildWhatsAppUrl(`I'd like to know more about pricing for ${service}`);
    window.open(url, '_blank');
  };

  const pricingTiers = [
    {
      name: 'ITR Filing',
      startingPrice: '₹499',
      description: 'For salaried individuals and freelancers',
      features: [
        'ITR-1 (Sahaj) filing',
        'ITR-2 for capital gains',
        'ITR-3 for business income',
        'ITR-4 (Sugam) for presumptive income',
        'Expert review and verification',
        'Maximum refund optimization',
        'E-filing with acknowledgment',
        'Dedicated support',
      ],
      popular: true,
    },
    {
      name: 'GST Registration & Filing',
      startingPrice: '₹999',
      description: 'For businesses and startups',
      features: [
        'GST registration (new)',
        'Monthly GST return filing (GSTR-1, GSTR-3B)',
        'Quarterly return filing',
        'Annual return filing (GSTR-9)',
        'Input tax credit reconciliation',
        'GST compliance advisory',
        'Notice handling support',
        'Dedicated account manager',
      ],
      popular: false,
    },
    {
      name: 'Business Registration',
      startingPrice: '₹4,999',
      description: 'For new businesses and startups',
      features: [
        'Private Limited Company registration',
        'LLP registration',
        'One Person Company (OPC)',
        'Partnership firm registration',
        'MSME/Udyam registration',
        'PAN and TAN application',
        'Bank account opening assistance',
        'Post-incorporation compliance',
      ],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Transparent Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Affordable tax and compliance services with no hidden charges. Choose the plan that fits
            your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-lg border p-8 ${
                  tier.popular
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border/40 bg-card'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold">{tier.name}</h2>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{tier.startingPrice}</span>
                    <span className="ml-2 text-muted-foreground">onwards</span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <Button
                    className="w-full"
                    variant={tier.popular ? 'default' : 'outline'}
                    onClick={() => navigate({ to: '/contact' })}
                  >
                    Get Started
                  </Button>
                  <Button
                    className="w-full bg-success text-white hover:bg-success/90"
                    onClick={() => handleWhatsApp(tier.name)}
                  >
                    Ask on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg border border-border/40 bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Prices may vary based on the complexity of your case, number of
              transactions, and specific requirements. The prices shown are starting prices for
              standard cases. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Need a Custom Quote?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Every business is unique. Get in touch with us for a personalized pricing plan that fits
            your specific needs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/contact' })}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              Request Custom Quote
            </Button>
            <Button
              size="lg"
              onClick={() => handleWhatsApp('Custom Pricing')}
              className="w-full bg-success text-white hover:bg-success/90 sm:w-auto"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
