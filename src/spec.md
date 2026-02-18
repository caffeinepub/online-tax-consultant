# Specification

## Summary
**Goal:** Build an SEO-optimized, clean corporate marketing website for “Online Tax Consultant” with services, CTAs, testimonials, FAQ, blog, pricing, and a WhatsApp-enabled contact form that stores leads on-canister.

**Planned changes:**
- Apply a consistent blue/white theme with subtle green accents across typography, layout, header/footer, and responsive components.
- Implement routing and navigation for: Home, Services (overview), 7 Service detail pages, Pricing, Testimonials, Blog (list + post pages), Contact, Privacy Policy, Terms & Conditions.
- Build the Home page with the exact provided H1, intro paragraph, and prominent CTA bullets; add About/Why Choose Us content and CTAs.
- Add persistent CTAs site-wide (“Book Free Consultation”, “File Your ITR Now”, “Talk to Tax Expert”), including at least one WhatsApp click-to-chat (wa.me) link with a prefilled message mentioning “Online Tax Consultant”.
- Create Services overview listing exactly 7 services with summaries/benefits and links to dedicated service pages containing the provided keyword-rich content and CTAs.
- Add Testimonials section (min 4) on Home and a dedicated Testimonials page with name/initials, customer type, and quote, plus a CTA.
- Add an FAQ section on Home with exactly the 5 provided questions and clear answers in an accessible format (e.g., accordion).
- Implement a Contact page with a form (name, email/phone, service interested in, message), WhatsApp integration (including selected service when available), and UI states for loading/success/error.
- Add backend (single Motoko actor) methods to persist lead submissions with timestamp and to query/list leads for admin/debug/testing.
- Implement SEO basics: provided meta title/description/keywords site-wide baseline; ensure each page has exactly one H1 and appropriate H2 headings; keep service pages keyword-rich in natural prose.
- Create a Blog page with at least 6 static starter posts and individual readable post pages with internal links to Services/Contact.
- Create a Pricing page with tiers for at least ITR filing, GST filing, and Business registration, plus a variability disclaimer and CTA.
- Add Privacy Policy and Terms & Conditions pages with professional, generic content and footer links.

**User-visible outcome:** Visitors can navigate a complete SEO-ready tax consultancy website, read services/pricing/testimonials/blog content, and submit inquiries via a contact form (saved as leads) or contact via WhatsApp using prominent CTAs.
