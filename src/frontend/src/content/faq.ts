export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: 'How can I file ITR online?',
    answer:
      'Filing ITR online is simple with our service. Just contact us through our website or WhatsApp, provide the required documents (Form 16, bank statements, investment proofs), and our experts will prepare and file your ITR. You will receive the acknowledgment once filed.',
  },
  {
    question: 'What documents are required for GST registration?',
    answer:
      'For GST registration, you need: PAN card, Aadhaar card, business address proof, bank account details, business registration certificate (if applicable), and photographs. We will guide you through the entire process and help with document preparation.',
  },
  {
    question: 'Is online tax filing safe?',
    answer:
      'Yes, online tax filing is completely safe. We use secure, encrypted systems to handle your data. All information is kept confidential and we follow strict data protection protocols. Your returns are filed directly on the government portal.',
  },
  {
    question: 'How long does company registration take?',
    answer:
      'Company registration typically takes 7-15 working days depending on the type of company and document verification. We handle all the paperwork and government filings to ensure a smooth and quick registration process.',
  },
  {
    question: 'Can you handle income tax notices?',
    answer:
      'Yes, we specialize in handling income tax notices. Our experts will analyze the notice, prepare a detailed response with supporting documents, and represent you before tax authorities if needed. We ensure timely resolution to avoid penalties.',
  },
];
