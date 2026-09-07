export interface Step {
  step: string;
  calendar: string;
  responsible: string;
  risk?: string;
}

export interface Phase {
  id: string;
  title: string;
  duration: string;
  steps: Step[];
  description?: string;
}

export const timelineData: Phase[] = [
  {
    id: "preparation",
    title: "Project Preparation",
    duration: "Variable duration",
    description: "Foundation setting and validation",
    steps: [
      {
        step: "Define concept (brand, offer, delivery zone, positioning)",
        calendar: "Before signature",
        responsible: "Client",
        risk: "Concept insufficiently framed",
      },
      {
        step: "Develop economic forecast (revenue, charges, team, profitability)",
        calendar: "Before signature",
        responsible: "Client",
        risk: "Unrealistic hypotheses",
      },
      {
        step: "Validate launch budget and available treasury",
        calendar: "Before signature",
        responsible: "Client",
        risk: "Under-capitalization / Financing issues",
      },
      {
        step: "Select site and validate location",
        calendar: "Before signature",
        responsible: "Client + ProKitchens",
        risk: "Target clientele doesn't match zone",
      },
      {
        step: "Final project validation by decision makers",
        calendar: "Before signature",
        responsible: "Client",
        risk: "Misalignment / Communication gaps",
      },
      {
        step: "Final project verification",
        calendar: "Just before signature",
        responsible: "Client + ProKitchens",
      },
    ],
  },
  {
    id: "contractual",
    title: "Contractual Setup",
    duration: "3 days to 2 months",
    description: "Agreements and initial payments",
    steps: [
      {
        step: "Contract signature",
        calendar: "2 months before launch",
        responsible: "Client + ProKitchens",
      },
      {
        step: "Reimbursable fee payment",
        calendar: "Within 3 days of signature",
        responsible: "Client",
        risk: "Treasury / Internal validation",
      },
      {
        step: "Integration fees payment",
        calendar: "Within 3 days of signature",
        responsible: "Client",
        risk: "Treasury / Internal validation",
      },
      {
        step: "Launch meeting with Onboarding Manager",
        calendar: "Upon fee settlement",
        responsible: "Client + ProKitchens",
        risk: "Meeting too late before launch date",
      },
      {
        step: "First monthly license fee payment",
        calendar: "Latest 10 days before access",
        responsible: "Client",
        risk: "Treasury / Start date alignment",
      },
    ],
  },
  {
    id: "administrative",
    title: "Administrative Formalities",
    duration: "10 days to 6 weeks",
    description: "Legal and compliance registration",
    steps: [
      {
        step: "Company creation (if necessary)",
        calendar: "Before signature, if possible",
        responsible: "Client",
        risk: "Variable timelines by jurisdiction",
      },
      {
        step: "Secondary establishment creation",
        calendar: "10 days to 6 weeks",
        responsible: "Client",
        risk: "Variable timelines by jurisdiction",
      },
      {
        step: "Professional multi-risk insurance subscription",
        calendar: "1 day to 1 week",
        responsible: "Client",
        risk: "Depends on broker",
      },
      {
        step: "Transmit administrative documents to Onboarding Manager",
        calendar: "1-2 weeks",
        responsible: "Client",
        risk: "Delays / Missing documents",
      },
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance",
    duration: "2-4 weeks",
    description: "Food safety and consumer standards",
    steps: [
      {
        step: "DDPP declaration (food safety authority)",
        calendar: "2-4 weeks before opening",
        responsible: "Client",
      },
      {
        step: "HACCP food hygiene training",
        calendar: "2-4 weeks before opening",
        responsible: "Client",
      },
      {
        step: "Setup allergen table and consumer information",
        calendar: "Before opening",
        responsible: "Client",
      },
    ],
  },
  {
    id: "works",
    title: "Kitchen Works & Installation",
    duration: "1 week to 12 weeks",
    description: "Physical setup and equipment deployment",
    steps: [
      {
        step: "Transmit equipment list and kitchen plan",
        calendar: "Within 1 week of signature",
        responsible: "Client",
        risk: "Imprecise information causing delays",
      },
      {
        step: "Technical equipment validation",
        calendar: "Within 1 week",
        responsible: "ProKitchens",
        risk: "Compliance / Electrical power",
      },
      {
        step: "Validate quotes and pay for works",
        calendar: "1 day",
        responsible: "Client",
        risk: "Treasury / Internal validation",
      },
      {
        step: "Equipment purchase or rental",
        calendar: "1-2 weeks",
        responsible: "Client",
        risk: "Supplier delays / Costs",
      },
      {
        step: "Equipment delivery",
        calendar: "1-12 weeks",
        responsible: "Client + Supplier",
        risk: "Depends on delivery",
      },
      {
        step: "Works execution (if needed)",
        calendar: "10 days to 3 weeks",
        responsible: "ProKitchens",
        risk: "Depends on parts reception and complexity",
      },
      {
        step: "Works reception sign-off",
        calendar: "1 hour",
        responsible: "ProKitchens + Client",
      },
      {
        step: "Equipment installation and commissioning",
        calendar: "3-6 weeks",
        responsible: "Client",
      },
      {
        step: "Entry condition inspection",
        calendar: "1 hour",
        responsible: "Client + ProKitchens",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations Preparation",
    duration: "Variable duration",
    description: "Menu, supplies, and team readiness",
    steps: [
      {
        step: "Finalize menu / menus",
        calendar: "Ongoing",
        responsible: "Client",
        risk: "Offer not stabilized",
      },
      {
        step: "Select packaging and consumables",
        calendar: "Ongoing",
        responsible: "Client",
        risk: "Quality issues / Costs / Delivery delays",
      },
      {
        step: "Choose food suppliers",
        calendar: "Ongoing",
        responsible: "Client",
        risk: "Supplier delays / Costs",
      },
      {
        step: "Recruit or mobilize team",
        calendar: "Ongoing",
        responsible: "Client",
        risk: "Insufficient FTEs / Wrong profiles",
      },
      {
        step: "Train team on internal procedures",
        calendar: "Ongoing",
        responsible: "Client",
        risk: "Inadequate training process",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery Platform Integration",
    duration: "1-6 weeks total",
    description: "Online ordering channels activation",
    steps: [
      {
        step: "Create or activate delivery platform accounts",
        calendar: "2-6 weeks",
        responsible: "Client",
        risk: "Depends on Uber / Deliveroo response times",
      },
      {
        step: "Integrate platform accounts in Otter software",
        calendar: "1-2 days",
        responsible: "Client + ProKitchens",
      },
      {
        step: "Create menus and upload photos on platforms",
        calendar: "1-2 days",
        responsible: "Client",
        risk: "Weak menu / Poor photos / Limited upsell options",
      },
    ],
  },
  {
    id: "launch",
    title: "Official Launch",
    duration: "1 week to 3 days before opening",
    description: "Final testing and go-live",
    steps: [
      {
        step: "Equipment testing and trial orders",
        calendar: "1 week to 3 days before launch",
        responsible: "Client",
        risk: "No testing phase or too late to fix issues",
      },
      {
        step: "Official activity launch",
        calendar: "2 weeks to 2 months after signature",
        responsible: "Client",
      },
    ],
  },
];
