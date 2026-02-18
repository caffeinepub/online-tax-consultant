import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { setPageMeta } from '../utils/seo';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { useSubmitLead } from '../hooks/useQueries';
import { services } from '../content/services';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    serviceInterested: '',
    message: '',
  });

  const submitLead = useSubmitLead();

  useEffect(() => {
    setPageMeta({
      title: 'Contact Us | Online Tax Consultant',
      description:
        'Get in touch with our tax experts. Book a free consultation or reach out via WhatsApp for immediate assistance.',
      keywords: 'contact tax consultant, tax consultation India, tax expert contact',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitLead.mutateAsync(formData);
      setFormData({ name: '', contactInfo: '', serviceInterested: '', message: '' });
    } catch (error) {
      console.error('Failed to submit lead:', error);
    }
  };

  const handleWhatsApp = () => {
    const message = formData.serviceInterested
      ? `I'm interested in ${formData.serviceInterested}`
      : 'I would like to get in touch';
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get in touch with our tax experts. We're here to help you with all your tax and
            compliance needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contactInfo">Email or Phone *</Label>
                  <Input
                    id="contactInfo"
                    type="text"
                    required
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="Enter your email or phone number"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In *</Label>
                  <Select
                    value={formData.serviceInterested}
                    onValueChange={(value) =>
                      setFormData({ ...formData, serviceInterested: value })
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.slug} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements"
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitLead.isPending}
                >
                  {submitLead.isPending ? 'Submitting...' : 'Submit Inquiry'}
                </Button>

                {submitLead.isSuccess && (
                  <div className="rounded-lg bg-success/10 p-4 text-center text-sm text-success">
                    Thank you! We've received your inquiry and will get back to you soon.
                  </div>
                )}

                {submitLead.isError && (
                  <div className="rounded-lg bg-destructive/10 p-4 text-center text-sm text-destructive">
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-border/40 bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">WhatsApp</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Get instant responses from our tax experts
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-success text-white hover:bg-success/90"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="rounded-lg border border-border/40 bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">info@onlinetaxconsultant.com</p>
                </div>

                <div className="rounded-lg border border-border/40 bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>

                <div className="rounded-lg border border-border/40 bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Office</h3>
                  <p className="text-sm text-muted-foreground">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
