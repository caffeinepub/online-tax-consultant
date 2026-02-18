export interface Service {
  slug: string;
  title: string;
  summary: string;
  keywords: string[];
  content: string;
  keyBenefits: string[];
}

export const services: Service[] = [
  {
    slug: 'itr-filing',
    title: 'Income Tax Return (ITR) Filing',
    summary:
      'Hassle-free and accurate ITR filing services for salaried individuals, freelancers, and businesses.',
    keywords: [
      'ITR filing online',
      'income tax return filing India',
      'file ITR online',
      'tax filing consultant',
    ],
    content:
      'We provide hassle-free and accurate ITR filing services for salaried individuals, freelancers, and businesses. Our expert tax consultants ensure maximum tax savings and complete compliance with Income Tax regulations.',
    keyBenefits: [
      'Expert review of all income sources and deductions',
      'Maximum tax refund optimization',
      'Support for all ITR forms (ITR-1 to ITR-7)',
      'E-filing with acknowledgment',
      'Dedicated support throughout the process',
      'Compliance with latest Income Tax Act provisions',
    ],
  },
  {
    slug: 'gst-registration',
    title: 'GST Registration & Filing',
    summary: 'Quick GST registration and monthly/quarterly GST return filing services.',
    keywords: [
      'GST registration online',
      'GST return filing',
      'GST consultant India',
      'GST compliance services',
    ],
    content:
      'Get quick GST registration and monthly/quarterly GST return filing services. We help businesses stay compliant and avoid penalties.',
    keyBenefits: [
      'Fast GST registration (within 3-5 working days)',
      'Monthly and quarterly return filing (GSTR-1, GSTR-3B)',
      'Annual return filing (GSTR-9)',
      'Input tax credit reconciliation',
      'GST notice handling and compliance advisory',
      'Dedicated account manager for ongoing support',
    ],
  },
  {
    slug: 'business-registration',
    title: 'Business Registration Services',
    summary:
      'Start your business legally with our company incorporation and registration services.',
    keywords: [
      'company registration online',
      'LLP registration',
      'startup registration India',
      'MSME registration',
    ],
    content:
      'Start your business legally with our company incorporation and registration services including Pvt Ltd, LLP, OPC, and MSME registration.',
    keyBenefits: [
      'Private Limited Company registration',
      'Limited Liability Partnership (LLP) registration',
      'One Person Company (OPC) registration',
      'Partnership firm registration',
      'MSME/Udyam registration',
      'Complete documentation and filing support',
    ],
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Advisory',
    summary: 'Strategic tax planning solutions to minimize liabilities and maximize savings.',
    keywords: ['tax planning services', 'tax saving consultant', 'financial tax advisor'],
    content:
      'Our tax experts provide strategic tax planning solutions to minimize liabilities and maximize savings legally.',
    keyBenefits: [
      'Personalized tax-saving strategies',
      'Investment planning for tax optimization',
      'Retirement planning with tax benefits',
      'Business structure optimization',
      'Year-round tax advisory support',
      'Compliance with all tax regulations',
    ],
  },
  {
    slug: 'tds-filing',
    title: 'TDS Return Filing',
    summary: 'Complete TDS calculation, deduction, and return filing services.',
    keywords: ['TDS return filing online', 'TDS consultant', 'TDS compliance'],
    content:
      'We handle TDS calculation, deduction, and return filing ensuring complete compliance with tax laws.',
    keyBenefits: [
      'Accurate TDS calculation and deduction',
      'Quarterly TDS return filing',
      'Form 16/16A issuance',
      'TDS reconciliation',
      'Correction of TDS defaults',
      'TDS notice handling',
    ],
  },
  {
    slug: 'accounting',
    title: 'Accounting & Bookkeeping',
    summary: 'Professional accounting and bookkeeping services for businesses.',
    keywords: [
      'accounting services online',
      'bookkeeping services India',
      'small business accounting',
    ],
    content:
      'Maintain accurate financial records with our professional accounting and bookkeeping services for businesses.',
    keyBenefits: [
      'Daily bookkeeping and transaction recording',
      'Financial statement preparation',
      'Bank reconciliation',
      'Accounts payable and receivable management',
      'Payroll processing',
      'Monthly financial reports',
    ],
  },
  {
    slug: 'notice-handling',
    title: 'Notice & Compliance Handling',
    summary: 'Expert assistance in responding to income tax notices and compliance issues.',
    keywords: ['income tax notice reply', 'tax notice consultant', 'compliance services India'],
    content:
      'Received an income tax notice? Our experts will analyze and respond professionally to avoid penalties.',
    keyBenefits: [
      'Expert analysis of tax notices',
      'Professional response preparation',
      'Representation before tax authorities',
      'Documentation and evidence compilation',
      'Appeal filing if required',
      'Complete resolution support',
    ],
  },
];
