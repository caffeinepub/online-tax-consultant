import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTalkToExpert = () => {
    const url = buildWhatsAppUrl('I would like to talk to a tax expert');
    window.open(url, '_blank');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/generated/otc-logo.dim_512x256.png"
            alt="Online Tax Consultant"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center space-x-3 md:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate({ to: '/contact' })}
            className="border-primary/20 text-primary hover:bg-primary/10"
          >
            Book Free Consultation
          </Button>
          <Button
            size="sm"
            onClick={handleTalkToExpert}
            className="bg-success text-white hover:bg-success/90"
          >
            Talk to Tax Expert
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="container flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: 'text-primary' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: '/contact' });
                }}
                className="border-primary/20 text-primary hover:bg-primary/10"
              >
                Book Free Consultation
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleTalkToExpert();
                }}
                className="bg-success text-white hover:bg-success/90"
              >
                Talk to Tax Expert
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
