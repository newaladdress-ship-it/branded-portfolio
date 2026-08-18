export type Location = {
  slug: string;
  city: string;
  province: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  highlights: { label: string; value: string }[];
  about: string;
  services: string[];
  serviceLinks?: { label: string; slug: string }[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "multan",
    city: "Multan",
    province: "Punjab",
    metaTitle: "Expert Web Developer in Multan | Custom Sites & SEO",
    metaDescription:
      "Imran Digitals is a web developer in Multan building fast business websites, React applications, and technical SEO foundations for local and remote clients.",
    h1: "Web Developer in Multan for Websites, Web Apps and SEO",
    intro:
      "Based in Multan, I help businesses and growing teams launch fast, accessible websites and custom web applications with clear communication from discovery to launch.",
    highlights: [
      { label: "Based in", value: "Multan, Punjab" },
      { label: "Work style", value: "Local and remote" },
      { label: "Typical reply", value: "Within 24 hours" },
      { label: "Core stack", value: "React and Node.js" },
    ],
    about:
      "Imran Digitals works directly with businesses in Multan that need more than a template site. Based near Pracha Street and Chowk B.C.G., I serve clients across Gulzaib Colony, Bosan Road, and the wider Multan area. Every project starts with the business goal, then pairs a responsive interface with dependable engineering, technical SEO, and a practical launch plan. Remote collaboration is also available across Pakistan and internationally.",
    services: [
      "Business website development and redesigns in Multan",
      "Custom React, Next.js, and MERN stack applications",
      "Technical SEO and website speed optimization",
      "Local SEO Expert services for Multan businesses",
      "Dashboard, API, and third-party integration work",
      "Website maintenance and ongoing improvements",
    ],
    faqs: [
      {
        q: "Do you work with businesses in Multan?",
        a: "Yes. I am based in Multan and work directly with local businesses as well as remote clients across Pakistan and worldwide.",
      },
      {
        q: "What kinds of websites do you build?",
        a: "I build business websites, landing pages, custom web applications, dashboards, and SEO-focused rebuilds using a modern React and Node.js stack.",
      },
      {
        q: "Can you improve an existing website?",
        a: "Yes. I can audit slow or outdated websites, improve performance and accessibility, resolve technical SEO issues, and add the features your business needs.",
      },
    ],
    ctaHeading: "Need a web developer in Multan?",
    ctaBody:
      "Share your goal, current website, and timeline. I will respond with practical next steps and a clear scope for your project.",
  },
  {
    slug: "bahawalpur",
    city: "Bahawalpur",
    province: "Punjab",
    metaTitle: "Web & Software Developer in Bahawalpur | Imran Digitals",
    metaDescription:
      "Need a website or software developer in Bahawalpur? Imran Digitals delivers fast websites, SEO, e-commerce, and custom software remotely from Multan.",
    h1: "Web Developer & Software Developer in Bahawalpur",
    intro:
      "Imran Digitals helps businesses, educators, hospitality teams, and growing organizations in Bahawalpur build useful websites and software through a remote-first process from Multan. Discovery, design, development, SEO, and support are handled digitally with clear communication and a practical scope; this is a service-area offering, not a Bahawalpur office.",
    highlights: [
      { label: "Service area", value: "Bahawalpur, Punjab" },
      { label: "Delivery", value: "Remote from Multan" },
      { label: "Best for", value: "SMEs and growing teams" },
      { label: "Typical reply", value: "Within 24 hours" },
    ],
    about:
      "Bahawalpur brings together agriculture and agri-business, education, hospitality, retail, professional services, and small and medium-sized businesses serving South Punjab. For these organizations, a clear website can explain services, earn enquiries, support local search visibility, and make it easier for customers to take the next step. Imran Digitals provides the technical side of that work remotely from Multan, including business websites, e-commerce builds, custom software, and technical SEO. The page is intended for businesses looking for a dependable digital partner for Bahawalpur projects, without claiming a local office or in-person presence in the city.",
    services: [
      "Business website development for Bahawalpur organizations",
      "E-commerce website development for products and services",
      "Custom business software, dashboards, and internal tools",
      "Technical SEO and website speed optimization",
      "React, Next.js, and MERN stack web applications",
      "Website redesigns, maintenance, and feature improvements",
    ],
    serviceLinks: [
      { label: "Business website development", slug: "business-website-development" },
      { label: "Custom web application development", slug: "custom-web-application-development" },
      { label: "Business software development", slug: "business-software-development" },
      { label: "Technical SEO and website performance", slug: "technical-seo-website-performance" },
    ],
    faqs: [
      {
        q: "Can I hire Imran Digitals for a Bahawalpur project from Multan?",
        a: "Yes. Bahawalpur projects are delivered remotely from Multan using video calls, shared documents, online approvals, and a clear milestone-based workflow. I do not present this service as a Bahawalpur office or local branch.",
      },
      {
        q: "What can you build for a Bahawalpur business?",
        a: "Depending on the goal, I can build a business website, e-commerce store, custom web application, dashboard, or business software workflow, then prepare the technical SEO foundation for launch.",
      },
      {
        q: "Can you help a Bahawalpur business improve its Google visibility?",
        a: "Yes. I can review technical SEO, page structure, content clarity, Core Web Vitals, internal links, and local service-area signals. Results depend on the site, competition, content quality, and ongoing work, so no ranking position is promised.",
      },
      {
        q: "How does remote collaboration work?",
        a: "We start with your goals, audience, current website, and timeline. I then provide a practical scope, communicate progress online, share staging links for review, and hand over the finished site with agreed support arrangements.",
      },
    ],
    ctaHeading: "Planning a website or software project in Bahawalpur?",
    ctaBody:
      "Send your business goal, current website if you have one, and preferred timeline. I will review the brief remotely from Multan and reply with practical next steps, scope, and the information needed to begin.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getLocationsByProvince(province?: string): Location[] {
  if (!province) return LOCATIONS;
  return LOCATIONS.filter((l) => l.province.toLowerCase() === province.toLowerCase());
}
