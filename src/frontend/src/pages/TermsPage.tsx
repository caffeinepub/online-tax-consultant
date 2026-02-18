import { useEffect } from 'react';
import { setPageMeta } from '../utils/seo';

export default function TermsPage() {
  useEffect(() => {
    setPageMeta({
      title: 'Terms & Conditions | Online Tax Consultant',
      description: 'Terms and conditions for using Online Tax Consultant services',
      keywords: 'terms and conditions, tax consultant terms, service agreement',
    });
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 to-success/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the services of Online Tax Consultant, you agree to be bound by
              these Terms and Conditions. If you do not agree with any part of these terms, please do
              not use our services.
            </p>

            <h2>Services Provided</h2>
            <p>Online Tax Consultant provides the following services:</p>
            <ul>
              <li>Income Tax Return (ITR) filing</li>
              <li>GST registration and return filing</li>
              <li>Business registration services</li>
              <li>Tax planning and advisory</li>
              <li>TDS return filing</li>
              <li>Accounting and bookkeeping</li>
              <li>Tax notice and compliance handling</li>
            </ul>

            <h2>Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information for all services</li>
              <li>Submit required documents in a timely manner</li>
              <li>Pay agreed fees for services rendered</li>
              <li>Comply with all applicable tax laws and regulations</li>
              <li>Review and verify all filings before submission</li>
            </ul>

            <h2>Professional Standards</h2>
            <p>
              Our services are provided by qualified tax professionals and chartered accountants. We
              adhere to professional standards and ethical guidelines in all our work. However, final
              responsibility for tax compliance rests with the taxpayer.
            </p>

            <h2>Fees and Payment</h2>
            <p>
              Service fees are communicated before engagement and may vary based on complexity.
              Payment terms will be specified in the service agreement. We reserve the right to
              withhold services for non-payment.
            </p>

            <h2>Confidentiality</h2>
            <p>
              We maintain strict confidentiality of all client information in accordance with
              professional standards and applicable laws. Client information will not be disclosed to
              third parties except as required by law or with client consent.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              While we strive for accuracy in all our services, we are not liable for any losses
              arising from:
            </p>
            <ul>
              <li>Inaccurate or incomplete information provided by clients</li>
              <li>Changes in tax laws or regulations after filing</li>
              <li>Actions or decisions of tax authorities</li>
              <li>Delays caused by third parties or government systems</li>
            </ul>

            <h2>Termination</h2>
            <p>
              Either party may terminate the service agreement with written notice. Fees for services
              already rendered remain payable. We will provide all client documents upon termination.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes will be subject to the
              jurisdiction of courts in Mumbai, Maharashtra.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services
              after changes constitutes acceptance of the modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us through our contact
              page or email us at info@onlinetaxconsultant.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
