import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Shield, Users, Clock, Award, HeadphonesIcon, CheckCircle2 } from 'lucide-react';
import { aboutContent } from '../../content/about';

export default function AboutWhyChooseUsSection() {
  const navigate = useNavigate();

  const icons = [Shield, Users, Award, Clock, HeadphonesIcon];

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* About Us */}
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">About Us</h2>
            <p className="mb-6 text-lg text-muted-foreground">{aboutContent.description}</p>
            <div className="flex flex-wrap gap-2">
              {aboutContent.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us</h2>
            <div className="space-y-4">
              {aboutContent.whyChooseUs.map((item, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border border-border/40 bg-card p-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-success/10">
                      <Icon className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{item}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/contact' })}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
