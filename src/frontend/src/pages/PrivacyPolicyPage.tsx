import { useEffect } from 'react';
import { setPageMeta } from '../utils/seo';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    setPageMeta({
      title: 'Privacy Policy | Online Tax Consultant',
      description: 'Privacy policy for Online Tax Consultant services',
      keywords: 'privacy policy, data protection, tax consultant privacy',
    });
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Introduction</h2>
            <p>
              Online Tax Consultant ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our tax consultancy services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Financial information necessary for tax filing and compliance services</li>
              <li>Business information for company registration and GST services</li>
              <li>Communication records and service inquiries</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide tax filing, GST registration, and compliance services</li>
              <li>Communicate with you about our services</li>
              <li>Process your requests and transactions</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Improve our services and customer experience</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. All
              sensitive financial data is encrypted and stored securely.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services
              and comply with legal obligations, including tax record-keeping requirements under
              Indian law.
            </p>

            <h2>Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your
              information with:
            </p>
            <ul>
              <li>Government authorities as required by law for tax compliance</li>
              <li>Professional advisors bound by confidentiality obligations</li>
              <li>Service providers who assist in delivering our services</li>
            </ul>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Withdraw consent for processing where applicable</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact
              us through our contact page or email us at info@onlinetaxconsultant.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
