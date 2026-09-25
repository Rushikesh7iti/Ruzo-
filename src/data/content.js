export const companyDetails = {
  name: "Ruzo Enterprises",
  heroHeading: "Support Consultant for your Business",
  heroDescription: "Ruzo team of experienced Consultants are assisting clients across all Industries to successfully achieve Technology Goals.",
  ethosHeading: "OUR ETHOS IS",
  ethos: "Find. Connect. Grow.",
  aboutHeading: "ABOUT COMPANY",
  aboutSubHeading: "Your Trusted Partner for",
  aboutTitle: "Innovative IT Solutions and Expert Consulting Services",
  aboutOverview: "As a world-class company with a regional focus, we primarily concentrate on providing Information Technology Solutions and Professional Consulting Services, across different verticals like Banking & Financial Services, Telecom, Government, Oil & Gas, Logistics, Supply Chain, Real Estate & Manufacturing.",
  aboutParagraphs: [
    "As a world-class company with a regional focus, we primarily concentrate on providing Information Technology Solutions and Professional Consulting Services, across different verticals like Banking & Financial Services, Telecom, Government, Oil & Gas, Logistics, Supply Chain, Real Estate & Manufacturing.",
    "We have a solid reputation in the technology industry for providing excellent services to our clients. Our values are represented by our integrity, thought leadership, and commitment to maintaining a high-level of excellence in the constantly evolving world of Information Technology. We strive to build a long-lasting relationship with our customers and client satisfaction is our key performance indicator. We take pride in becoming a preferred partner for most of our clients. With more than a decade in this industry, we have established a successful track record of consulting service delivery with a variety of technical roles across various industries.",
    "Ruzo has a specialized skilled team of IT Consultants offering both international expertise and a deep understanding of the local market."
  ],
  vision: "To be recognized as a dependable and Customer-focused Global IT Organization delivering innovative technology and business solutions.",
  mission: "To achieve business needs by providing technology solutions and exceed customer expectations by consistently improving the process and quality of the deliverables, while retaining talent and reducing overall costs.",
  email: "hr@ruzo.tech",
  inquiryEmail: "contact@ruzo.tech",
  phone: "9980474329",
  phoneDisplay: "Call 9980474329",
  telLink: "tel:9980474329",
  stats: [
    { value: "10+ Years", label: "Industry Experience", subtext: "Established successful track record" },
    { value: "8 Verticals", label: "Core Industries Served", subtext: "Banking, Telecom, Oil & Gas, Supply Chain & more" },
    { value: "100%", label: "Client Satisfaction Focus", subtext: "Find. Connect. Grow." },
    { value: "24/7", label: "End User & Infrastructure Support", subtext: "Continuous technical reliability" }
  ]
};

// Exact 8 services from Fouratechnology
export const servicesData = [
  {
    id: "recruitment",
    category: "Talent Solutions",
    title: "Recruitment",
    badge: "Core Service",
    shortDesc: "Specialized IT recruitment providing pre-screened technical talent across all technology domains and business verticals.",
    fullDesc: "Our experienced recruitment team helps clients source, evaluate, and place top-tier technology professionals. We handle technical screening, niche skill acquisition, executive search, and permanent staffing to fulfill your exact organizational needs.",
    deliverables: [
      "Permanent & Contract IT Staffing",
      "Executive Technical Search & Headhunting",
      "Comprehensive Skill & Domain Screening",
      "Fast-Track Candidate Onboarding",
      "Cross-Industry Technical Roles"
    ],
    techStack: ["IT Recruitment", "Technical Sourcing", "Executive Search", "Contract Staffing"],
    icon: "Users"
  },
  {
    id: "staff-augmentation",
    category: "Talent Solutions",
    title: "Staff Augmentation",
    badge: "Flexible Scaling",
    shortDesc: "Rapid deployment of skilled IT consultants and engineering pods to reinforce your in-house project teams.",
    fullDesc: "Accelerate your delivery milestones with flexible IT contract staffing services. Our specialized team of IT consultants offers both international expertise and a deep understanding of local market requirements to seamlessly integrate into your workflow.",
    deliverables: [
      "On-Demand Skilled IT Consultants",
      "Project-Based Team Augmentation",
      "Flexible Contract & SOW Models",
      "Specialized Technical Skillsets",
      "Zero Onboarding Overhead"
    ],
    techStack: ["Contract Staffing", "Augmented Teams", "Dedicated Consultants", "Skill Matching"],
    icon: "UserCheck"
  },
  {
    id: "managed-it",
    category: "Infrastructure",
    title: "Managed IT Service",
    badge: "24/7 Management",
    shortDesc: "Comprehensive IT management, desktop support, server infrastructure maintenance, and system health oversight.",
    fullDesc: "Ensure maximum business continuity with our proactive Managed IT Services. We take full ownership of your IT infrastructure, monitoring hardware, networks, and operating environments to prevent disruptions before they impact operations.",
    deliverables: [
      "Server Infrastructure Support",
      "Desktop & Workstation Management",
      "Proactive Health & Telemetry Monitoring",
      "Network & Systems Administration",
      "SLA-Backed Operational Support"
    ],
    techStack: ["Server Support", "Desktop Support", "Infrastructure", "NOC", "SysAdmin"],
    icon: "Settings"
  },
  {
    id: "software-implementations",
    category: "Software Engineering",
    title: "Software Implementations",
    badge: "End-to-End Delivery",
    shortDesc: "Enterprise software implementation, custom web development, mobile applications, AR/VR, and E-Learning platforms.",
    fullDesc: "We assist clients across all industries to successfully achieve technology goals through end-to-end software implementations. From web and mobile development to immersive AR/VR and specialized software trainings, we build and deliver robust systems.",
    deliverables: [
      "Enterprise Web Development",
      "Mobile Applications (iOS & Android)",
      "AR/VR & Immersive Solutions",
      "E-Learning Systems & Platforms",
      "Software Trainings & Enterprise Rollouts"
    ],
    techStack: ["Web Development", "Mobile Dev", "AR/VR", "E-Learning", "Software Trainings"],
    icon: "Code2"
  },
  {
    id: "datacenter-solutions",
    category: "Infrastructure",
    title: "Data Centre Solutions",
    badge: "High Availability",
    shortDesc: "Robust data center architecture, server infrastructure support, network engineering, and hardware maintenance.",
    fullDesc: "We design, deploy, and manage enterprise Data Centre Solutions. Our consultants optimize physical and virtual server infrastructure, network switches, computer systems, and storage arrays to deliver maximum uptime and security.",
    deliverables: [
      "Data Centre Architecture & Design",
      "Server Infrastructure Support",
      "Network Engineering & Routing",
      "Hardware Provisioning & Maintenance",
      "Power, Cooling & Capacity Planning"
    ],
    techStack: ["Data Centre", "Computer Systems", "Networks", "Server Infrastructure", "SAN/NAS"],
    icon: "Server"
  },
  {
    id: "cloud-computing",
    category: "Cloud & Mobility",
    title: "Cloud Computing & Mobility Applications",
    badge: "Scalable Platforms",
    shortDesc: "Cloud computing migration, hybrid cloud architecture, mobility solutions, and biometric support integration.",
    fullDesc: "Unlock organizational agility with secure Cloud Computing and Mobility Applications. We help enterprises migrate to public, private, and hybrid clouds, while integrating mobile workflows and specialized biometric support systems.",
    deliverables: [
      "Cloud Migration & Optimization",
      "Hybrid & Multi-Cloud Solutions",
      "Enterprise Mobility Applications",
      "Biometric Support & Integration",
      "Cloud Governance & Security"
    ],
    techStack: ["Cloud Computing", "Mobility Apps", "Biometric Support", "Hybrid Cloud"],
    icon: "Cloud"
  },
  {
    id: "disaster-recovery",
    category: "Security & Governance",
    title: "Disaster Recovery Planning",
    badge: "Business Continuity",
    shortDesc: "Strategic disaster recovery planning, backup automation, cyber security defenses, and failover validation.",
    fullDesc: "Protect your critical assets against outages, cyber threats, and catastrophic disruptions. We architect comprehensive disaster recovery strategies with automated off-site backups, cyber security hardening, and rapid recovery time objectives (RTO).",
    deliverables: [
      "Disaster Recovery Planning & Audits",
      "Cyber Security Hardening & Perimeter Defense",
      "Automated Off-site & Cloud Backups",
      "Business Continuity Strategy (BCP)",
      "Failover Testing & Verification"
    ],
    techStack: ["Disaster Recovery", "Cyber Security", "Backup Systems", "Failover", "BCP"],
    icon: "ShieldAlert"
  },
  {
    id: "end-user-support",
    category: "Support Services",
    title: "End User Support Services",
    badge: "User Centric",
    shortDesc: "Responsive desktop support, software trainings, biometric support, and 24/7 technical troubleshooting for your staff.",
    fullDesc: "Empower your workforce with dependable End User Support Services. We deliver prompt technical issue resolution, desktop troubleshooting, hands-on software trainings, and biometric system support so your employees stay productive.",
    deliverables: [
      "24/7 Desktop Support & Troubleshooting",
      "Software Trainings & User Enablement",
      "Biometric Support & Identity Hardware",
      "Ticketing & Incident Management",
      "On-site & Remote Technical Assistance"
    ],
    techStack: ["Desktop Support", "Software Trainings", "Biometric Support", "Helpdesk"],
    icon: "Headphones"
  }
];

// Exact verticals listed in Fouratechnology
export const industriesData = [
  {
    id: "banking",
    name: "Banking & Financial Services",
    icon: "Landmark",
    summary: "Reliable IT consulting, high-availability software implementations, and secure infrastructure for banking and financial operations.",
    points: [
      "Secure banking software implementations",
      "Data centre & disaster recovery planning",
      "End user support for banking branches",
      "Specialized IT contract staffing & recruitment"
    ]
  },
  {
    id: "telecom",
    name: "Telecom",
    icon: "Wifi",
    summary: "High-throughput server infrastructure support, network engineering, and mobility applications for telecommunication providers.",
    points: [
      "Telecom network & computer system support",
      "Cloud computing & mobility applications",
      "24/7 managed IT and server infrastructure",
      "Experienced technical consultants and engineers"
    ]
  },
  {
    id: "government",
    name: "Government",
    icon: "Building2",
    summary: "Dependable public-sector IT solutions, biometric support systems, and certified cybersecurity defenses.",
    points: [
      "Biometric support and identity integration",
      "Rigorous disaster recovery planning and security",
      "Public-sector software implementations & trainings",
      "Managed IT services with high accountability"
    ]
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: "Flame",
    summary: "Mission-critical computer systems, remote infrastructure support, and reliable communications in demanding industrial sectors.",
    points: [
      "Resilient data centre solutions for remote sites",
      "Server infrastructure support & network reliability",
      "Disaster recovery and emergency continuity planning",
      "Specialized technical recruitment for energy sectors"
    ]
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: "Truck",
    summary: "Mobility applications, tracking software implementations, and 24/7 end-user support across warehousing and distribution networks.",
    points: [
      "Mobility applications for fleet & field staff",
      "Software implementations for warehouse operations",
      "End user desktop support across distribution hubs",
      "Staff augmentation for rapid logistics project ramp-up"
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "Home",
    summary: "Enterprise web development, CRM implementations, and managed IT services for modern property management and real estate firms.",
    points: [
      "Web development and property management portals",
      "Cloud computing and mobility applications for agents",
      "Desktop support and software trainings",
      "Secure data centre solutions and client record backups"
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    summary: "Shop floor computer system integration, server infrastructure support, and software implementations for manufacturing operations.",
    points: [
      "Factory computer systems and server support",
      "Network infrastructure for production lines",
      "Biometric support for worker access and attendance",
      "Disaster recovery planning and continuous uptime"
    ]
  }
];

export const usefulLinks = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "Technology & Solutions", href: "#services" },
  { name: "Contact us", href: "#contact" }
];

export const caseStudies = [
  {
    client: "Leading Banking & Financial Group",
    sector: "Banking & Financial Services",
    headline: "Full-Scale Software Implementation & High-Availability Data Centre Modernization",
    metrics: [
      { label: "System Uptime", value: "99.99%" },
      { label: "Deployment", value: "On-Time" },
      { label: "Support SLA", value: "24/7/365" }
    ],
    summary: "Delivered core banking software implementations and modernized server infrastructure support, ensuring zero downtime and complete regulatory adherence."
  },
  {
    client: "National Telecom Operator",
    sector: "Telecom",
    headline: "Enterprise Mobility Applications & 24/7 Server Infrastructure Support",
    metrics: [
      { label: "Response Time", value: "< 15m" },
      { label: "Consultants", value: "25+ Squad" },
      { label: "Resolution Rate", value: "99.4%" }
    ],
    summary: "Deployed augmented team of specialized IT consultants to design enterprise mobility applications and manage multi-site server infrastructure."
  },
  {
    client: "Global Logistics & Freight Enterprise",
    sector: "Logistics & Supply Chain",
    headline: "Disaster Recovery Planning & End User Desktop Support Rollout",
    metrics: [
      { label: "RTO Recovery", value: "< 12 mins" },
      { label: "Staff Trained", value: "1,200+" },
      { label: "Data Redundancy", value: "100%" }
    ],
    summary: "Executed comprehensive disaster recovery planning with automated backup pipelines and delivered nationwide end user support across distribution hubs."
  }
];

export const testimonials = [
  {
    quote: "Ruzo's team of experienced consultants assisted us in successfully achieving our technology goals. Their commitment to 'Find. Connect. Grow.' is evident in every deliverable.",
    author: "Rajesh Sharma",
    role: "Head of Information Technology",
    company: "Apex Banking Services",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Their staff augmentation and IT contract staffing services provided us with deeply skilled consultants who understood both international standards and our regional market demands.",
    author: "Priya Nair",
    role: "VP of Enterprise Infrastructure",
    company: "Horizon Telecom Solutions",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "From data centre solutions to end-user desktop support and software trainings, Ruzo has become our most dependable and preferred technology partner.",
    author: "Vikram Malhotra",
    role: "Operations Director",
    company: "Continental Logistics & Supply Chain",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export const partnerBadges = [
  { name: "Cloud Computing", label: "Multi-Cloud & Hybrid" },
  { name: "Data Centre Solutions", label: "Server Infrastructure" },
  { name: "Disaster Recovery", label: "Business Continuity" },
  { name: "IT Contract Staffing", label: "Recruitment & Augmentation" },
  { name: "Software Development", label: "Web, Mobile & AR/VR" },
  { name: "End User Support", label: "24/7 Desktop & Training" }
];

