/**
 * ============================================================
 *  CENTRAL SITE CONFIGURATION
 *  ------------------------------------------------------------
 *  Edit everything about the site from this one file:
 *  name, email, WhatsApp, location, socials, pricing, services.
 *  Nothing else on the site needs to be touched for content.
 * ============================================================
 */
import {
  Bot,
  Briefcase,
  Building2,
  Globe,
  LayoutTemplate,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  /* ------------------------------------------------------------------
   *  IDENTITY
   * ------------------------------------------------------------------ */
  name: "Saurav Singh",
  legalName: "Saurav Singh",
  tagline: "AI Product Manager & Digital Product Builder",
  role: "AI Product Manager | AI Website Developer | Digital Product Builder",
  // Used for SEO titles on every page
  websiteTitle: "Saurav Singh — AI Product Manager & Website Developer",
  // Used for the <meta name="description"> fallback across pages
  description:
    "AI-powered websites, business websites, AI chatbots, landing pages, MVPs and AI product strategy — built to grow your business.",

  /* ------------------------------------------------------------------
   *  CONTACT
   *  NOTE: replace yourname@gmail.com with your real email.
   * ------------------------------------------------------------------ */
  email: "yourname@gmail.com", // TODO: replace with real email

  whatsapp: {
    // Full number with country code. Only digits and "+" are used.
    number: "+918299445475",
    display: "+91 82994 45475",
    defaultMessage:
      "Hello Saurav, I am interested in your website/AI product development services. I would like to discuss my project.",
  },

  /* ------------------------------------------------------------------
   *  LOCATION (no street address is claimed — keep it general)
   * ------------------------------------------------------------------ */
  location: "India — Available for Remote Projects",
  locationShort: "India · Remote worldwide",
  // Optional: paste a Google Maps embed src later to show a map on the
  // contact page. Leave empty to hide the map.
  mapEmbedUrl: "",

  /* ------------------------------------------------------------------
   *  SOCIAL MEDIA — leave "" to hide the icon entirely.
   *  Do not invent URLs; paste real profile links here.
   * ------------------------------------------------------------------ */
  social: {
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  /* ------------------------------------------------------------------
   *  NAVIGATION
   * ------------------------------------------------------------------ */
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],

  /* ------------------------------------------------------------------
   *  CONTACT FORM OPTIONS
   * ------------------------------------------------------------------ */
  projectTypes: [
    "Business Website",
    "AI Website",
    "AI Chatbot",
    "Landing Page",
    "Website Redesign",
    "AI Product Management",
    "MVP Development",
    "Other",
  ],
  budgets: [
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000 – ₹2,00,000",
    "₹2,00,000+",
    "Not Sure",
  ],
  preferredContactMethods: ["WhatsApp", "Email", "Phone Call"],

  /* ------------------------------------------------------------------
   *  SERVICES (shown on Home, Services page, and used to prefill the
   *  contact form). projectType must match an entry in projectTypes.
   * ------------------------------------------------------------------ */
  services: [
    {
      slug: "business-website",
      title: "Business Website Development",
      short: "Professional websites for businesses, startups, professionals and local businesses.",
      icon: Building2,
      projectType: "Business Website",
      features: [
        "Professional, brand-aligned design",
        "Clear service & contact sections",
        "Mobile-first responsive build",
        "WhatsApp & contact integration",
        "Basic SEO structure",
        "Fast loading, easy to update",
      ],
    },
    {
      slug: "ai-website",
      title: "AI Website Development",
      short: "Build websites with AI-powered features and intelligent user experiences.",
      icon: Bot,
      projectType: "AI Website",
      features: [
        "AI chatbot & assistant integration",
        "Intelligent lead capture",
        "Smart content & recommendation features",
        "AI product planning baked in",
        "Modern AI-first UX",
        "Designed for measurable business value",
      ],
    },
    {
      slug: "ai-product-management",
      title: "AI Product Management",
      short: "Help businesses transform ideas into structured AI products.",
      icon: Lightbulb,
      projectType: "AI Product Management",
      features: [
        "Product idea analysis & validation",
        "User research & problem analysis",
        "Product requirements & PRD creation",
        "Feature prioritization & MVP planning",
        "User flows & product roadmap",
        "AI feature planning",
      ],
    },
    {
      slug: "ai-chatbot",
      title: "AI Chatbot Development",
      short: "Create AI-powered customer support and business chatbots.",
      icon: Bot,
      projectType: "AI Chatbot",
      features: [
        "Custom-trained on your business",
        "24/7 customer support automation",
        "Lead qualification built in",
        "WhatsApp / website embedding",
        "Human handoff when needed",
        "Analytics on what customers ask",
      ],
    },
    {
      slug: "landing-page",
      title: "Landing Page Development",
      short: "High-converting landing pages for products, services and campaigns.",
      icon: LayoutTemplate,
      projectType: "Landing Page",
      features: [
        "Conversion-focused structure",
        "Clear value proposition & CTA flow",
        "Lead form & WhatsApp capture",
        "Fast, mobile-first build",
        "A/B-test ready sections",
        "SEO-friendly markup",
      ],
    },
    {
      slug: "website-redesign",
      title: "Website Redesign",
      short: "Modernize outdated websites into fast, premium experiences.",
      icon: MonitorSmartphone,
      projectType: "Website Redesign",
      features: [
        "Full design refresh",
        "Mobile & speed overhaul",
        "Modern UI/UX patterns",
        "SEO structure preserved & improved",
        "Content reorganization",
        "Conversion improvements",
      ],
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      short: "Automate repetitive business workflows.",
      icon: Workflow,
      projectType: "Other",
      features: [
        "Lead capture & follow-up automation",
        "Customer inquiry routing",
        "Workflow & process automation",
        "AI-assisted responses",
        "Tool & integration setup",
        "Time saved on repeat tasks",
      ],
    },
    {
      slug: "mvp-development",
      title: "MVP Development",
      short: "Turn an idea into a functional minimum viable product.",
      icon: Rocket,
      projectType: "MVP Development",
      features: [
        "Core feature definition",
        "Fast functional build",
        "Product architecture planning",
        "AI features where they add value",
        "Iteration-ready foundation",
        "Launch & feedback loop setup",
      ],
    },
  ] as const,

  /* ------------------------------------------------------------------
   *  PRICING — starting prices only. Final pricing depends on scope.
   * ------------------------------------------------------------------ */
  pricingNote:
    "All prices are starting prices. Final pricing depends on requirements, complexity, integrations, pages, features and timeline.",
  pricing: [
    {
      id: "starter",
      name: "Starter Website",
      price: "₹25,000",
      priceSuffix: "starting",
      description: "A clean, professional website that gets your business online fast.",
      features: [
        "Professional responsive website",
        "Up to 5 pages",
        "Modern UI/UX",
        "Contact form",
        "WhatsApp integration",
        "Basic SEO",
        "Mobile optimization",
        "Deployment assistance",
      ],
      cta: "Choose Starter",
      highlighted: false,
    },
    {
      id: "business-pro",
      name: "Business Pro",
      price: "₹50,000",
      priceSuffix: "starting",
      description: "A complete business presence built to generate leads and grow.",
      features: [
        "Everything in Starter",
        "Up to 10 pages",
        "Advanced UI/UX",
        "Lead generation forms",
        "WhatsApp integration",
        "Advanced SEO structure",
        "Analytics integration",
        "CMS/content management",
        "Performance optimization",
        "Professional business sections",
      ],
      cta: "Choose Business Pro",
      highlighted: true,
    },
    {
      id: "ai-premium",
      name: "AI Premium",
      price: "₹1,00,000",
      priceSuffix: "starting",
      description: "AI-powered products and websites with real business intelligence.",
      features: [
        "Everything in Business Pro",
        "AI chatbot",
        "AI-powered features",
        "AI product planning",
        "Custom integrations",
        "Advanced automation",
        "Custom dashboard where required",
        "Advanced product architecture",
        "MVP planning",
        "Premium support",
      ],
      cta: "Choose AI Premium",
      highlighted: false,
    },
  ] as const,

  customEnterprise: {
    name: "Custom Enterprise",
    price: "Custom Pricing",
    description:
      "For large businesses, startups, SaaS products, AI products, custom platforms and complex applications.",
    features: [
      "Tailored scope & architecture",
      "Multi-page / multi-module platforms",
      "AI product strategy & execution",
      "Custom integrations & automation",
      "Dedicated planning & support",
    ],
    cta: "Discuss Your Project",
  },

  /* ------------------------------------------------------------------
   *  PORTFOLIO — labeled "Concept / Demo Project" because these are
   *  demonstration builds, not claims of real client work.
   * ------------------------------------------------------------------ */
  projects: [
    {
      id: "ai-business-assistant",
      title: "AI Business Assistant",
      type: "AI Website",
      tagline: "A chat-first AI assistant that answers customer questions and captures qualified leads.",
      objective:
        "Demonstrate how an AI assistant can handle customer queries, qualify visitors and hand off hot leads to the business.",
      features: [
        "AI chat trained on business knowledge",
        "Lead capture with qualification",
        "WhatsApp handoff for hot leads",
        "Analytics dashboard of queries",
      ],
      stack: ["React", "AI APIs", "Convex", "Tailwind"],
      accent: "indigo",
    },
    {
      id: "real-estate-website",
      title: "Real Estate Website",
      type: "Business Website",
      tagline: "A premium property website with listings, filters and inquiry routing.",
      objective:
        "Show how a real-estate business can present properties professionally and convert visitors into site visits and inquiries.",
      features: [
        "Property listing grid with filters",
        "Detailed property pages",
        "Inquiry & WhatsApp contact flow",
        "Google Maps location integration",
      ],
      stack: ["React", "Convex", "Tailwind"],
      accent: "slate",
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      type: "Business Website",
      tagline: "An appetizing, mobile-first website for a restaurant with menu and reservations.",
      objective:
        "Demonstrate a high-impact, mobile-first site that drives reservations and phone orders for a local restaurant.",
      features: [
        "Menu with category navigation",
        "Reservation & call-to-order CTAs",
        "Photo-led responsive design",
        "Google Maps & directions",
      ],
      stack: ["React", "Tailwind"],
      accent: "amber",
    },
    {
      id: "ecommerce-landing",
      title: "E-commerce Landing Page",
      type: "Landing Page",
      tagline: "A conversion-focused campaign landing page for a product launch.",
      objective:
        "Show how a single landing page can carry a product launch: offer, proof, urgency and checkout CTA.",
      features: [
        "Campaign hero with offer",
        "Benefits & social-proof sections",
        "Lead capture form",
        "Mobile-first CTA flow",
      ],
      stack: ["React", "Tailwind"],
      accent: "emerald",
    },
    {
      id: "ai-saas-dashboard",
      title: "AI SaaS Dashboard",
      type: "AI Product",
      tagline: "A product dashboard concept for an AI SaaS — usage, insights and billing.",
      objective:
        "Demonstrate product-thinking for an AI SaaS: what a founder needs to see at a glance to run the business.",
      features: [
        "Usage & spend overview",
        "AI insight summaries",
        "Customer & plan management",
        "Clean, dense data UI",
      ],
      stack: ["React", "Convex", "Recharts"],
      accent: "indigo",
    },
    {
      id: "coaching-institute",
      title: "Coaching Institute Website",
      type: "Business Website",
      tagline: "A trusted website for a coaching institute: courses, results and enrollment.",
      objective:
        "Show how an institute can build trust with course details, faculty and a simple enrollment flow.",
      features: [
        "Course & batch listings",
        "Enrollment & inquiry forms",
        "Results & student section",
        "WhatsApp counseling CTA",
      ],
      stack: ["React", "Tailwind"],
      accent: "violet",
    },
  ] as const,

  /* ------------------------------------------------------------------
   *  PROCESS — the 6-step engagement model
   * ------------------------------------------------------------------ */
  process: [
    {
      step: "01",
      title: "Discovery",
      description: "Understand the business, goals and target audience.",
      detail:
        "We talk through your business, customers and objectives so the project is built around what actually matters to you.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Define the website/product structure and requirements.",
      detail:
        "Pages, features, content plan and success metrics are mapped out before a single line of code is written.",
    },
    {
      step: "03",
      title: "Design",
      description: "Create the visual direction and user experience.",
      detail:
        "A modern, on-brand design system is applied — layout, typography, colors and interactions designed for conversion.",
    },
    {
      step: "04",
      title: "Development",
      description: "Build the actual website/product.",
      detail:
        "Clean, fast, production-grade code. AI features, forms, WhatsApp and integrations are wired in during this phase.",
    },
    {
      step: "05",
      title: "Testing",
      description: "Test responsiveness, navigation, forms, links and functionality.",
      detail:
        "Every page, button and form is checked across desktop, tablet and mobile before handover.",
    },
    {
      step: "06",
      title: "Launch",
      description: "Deploy and prepare the project for the client.",
      detail:
        "The project goes live, analytics are connected and you get everything you need to run and grow it.",
    },
  ] as const,

  /* ------------------------------------------------------------------
   *  FAQ
   * ------------------------------------------------------------------ */
  faqs: [
    {
      q: "What does it cost to build a website?",
      a: "Packages start at ₹25,000 for a Starter website, ₹50,000 for Business Pro and ₹1,00,000 for AI Premium. Final pricing depends on pages, features, integrations and timeline — share your requirements on the contact page and I'll send a clear, fixed quote.",
    },
    {
      q: "How long does a project take?",
      a: "A landing page typically takes 1–2 weeks, a business website 2–4 weeks, and AI-powered products or MVPs 4–8 weeks depending on scope. You'll get a timeline estimate after the discovery call.",
    },
    {
      q: "Do I need to provide content, images and branding?",
      a: "I can work with whatever you have. If content is missing, I'll set up a clear structure with placeholders you can fill in — and where needed I can help plan content for your business.",
    },
    {
      q: "What exactly is an 'AI-powered' website?",
      a: "An AI-powered website includes intelligent features like a chatbot trained on your business, automated lead capture, smart recommendations or AI-assisted content — features that engage visitors and save you time.",
    },
    {
      q: "How does AI Product Management work as a service?",
      a: "You bring an idea or a vague problem. I structure it: user and problem analysis, product requirements, PRD, feature prioritization, user flows, AI feature planning, MVP strategy and roadmap — so you know exactly what to build and why.",
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Yes. Every project is built mobile-first and tested on phones, tablets and desktops. A site that doesn't work on mobile isn't finished.",
    },
    {
      q: "Is my website SEO-ready?",
      a: "Yes. Every build includes clean semantic markup, proper heading structure, page titles and meta descriptions, fast loading and mobile optimization. Advanced SEO setup is included in Business Pro and above.",
    },
    {
      q: "How do revisions work?",
      a: "Design and content revisions are handled during the project phases. The exact revision allowance is agreed per project so you always know where you stand.",
    },
    {
      q: "How do payments work?",
      a: "Projects start with an agreed advance (typically 50%), with the balance due on completion. Payment details are confirmed in the project proposal.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. Every project includes a post-launch support window, and AI Premium includes premium support. Ongoing maintenance and updates can be arranged separately.",
    },
    {
      q: "Do you work with clients outside India?",
      a: "Yes — I'm based in India and available for remote projects worldwide. Communication happens over WhatsApp, email or video calls.",
    },
    {
      q: "What do you need from me to start?",
      a: "Just your idea and a few details about your business. Use the contact form, chat on WhatsApp, or email me — I'll take it from there.",
    },
  ] as const,

  /* ------------------------------------------------------------------
   *  VALUE PROPS shown in the home hero
   * ------------------------------------------------------------------ */
  trustPoints: [
    "Premium Design",
    "AI-Powered Solutions",
    "Mobile Responsive",
    "SEO Ready",
    "Business Focused",
    "End-to-End Development",
  ],

  /* ------------------------------------------------------------------
   *  WHY CHOOSE ME — home page value section
   * ------------------------------------------------------------------ */
  whyChooseMe: [
    {
      icon: Briefcase,
      title: "Business-First Thinking",
      description:
        "Every project starts with your goals. Design decisions are made to win customers, not just to look good.",
    },
    {
      icon: Bot,
      title: "Real AI, Not Gimmicks",
      description:
        "AI features are planned where they create measurable value — chatbots, automation, intelligent capture.",
    },
    {
      icon: Globe,
      title: "Modern, Premium Builds",
      description:
        "Fast, mobile-first, SEO-ready websites built with a clean, professional design system.",
    },
    {
      icon: Lightbulb,
      title: "Product-Level Structure",
      description:
        "Requirements, PRDs and clear scopes — you always know what you're getting and why it matters.",
    },
    {
      icon: Workflow,
      title: "End-to-End Ownership",
      description:
        "From idea and strategy through design, build, launch and support — one person accountable for the result.",
    },
    {
      icon: Rocket,
      title: "Built to Launch & Scale",
      description:
        "Every build is production-ready, deployable and structured so you can grow it as your business grows.",
    },
  ] as const,
} as const;

/* ------------------------------------------------------------------
 *  HELPERS
 * ------------------------------------------------------------------ */

/** WhatsApp deep link with a pre-filled, professional message. */
export function waLink(message: string = siteConfig.whatsapp.defaultMessage) {
  const digits = siteConfig.whatsapp.number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Mailto link using the configured email. */
export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${siteConfig.email}${qs ? `?${qs}` : ""}`;
}

/** Type re-export so components can type their data cleanly. */
export type Service = (typeof siteConfig.services)[number] & { icon: LucideIcon };
export type Project = (typeof siteConfig.projects)[number];
export type PricingPlan = (typeof siteConfig.pricing)[number];
export type ProcessStep = (typeof siteConfig.process)[number];
export type FaqItem = (typeof siteConfig.faqs)[number];
