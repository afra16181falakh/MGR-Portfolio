export type EngagementActivity = {
  title: string;
  description: string;
};

export type EngagementFact = {
  value: string;
  label: string;
};

export type Engagement = {
  slug: string;
  client: string;
  employer: string;
  facts: EngagementFact[];
  summary: string;
  context: string;
  role: string;
  activities: EngagementActivity[];
  technologies: string[];
  relationshipNote?: string;
};

export const engagements: Engagement[] = [
  {
    slug: "woolworths",
    client: "Woolworths",
    employer: "ITC Infotech",
    facts: [
      { value: "South Africa", label: "Region" },
      { value: "10 years", label: "On the account" },
      { value: "6+", label: "Integration programmes" },
    ],
    summary:
      "Project and team management across retail integration and platform migration work.",
    context:
      "Woolworths' Indibano programme migrated the core platform from LynXII on Sybase to an IBM middleware stack, alongside integrations with internal and external systems.",
    role: "Overall project and resource management, onsite/offshore coordination, delivery assurance, process oversight, milestone tracking, stakeholder status reviews and quality-focused delivery.",
    activities: [
      {
        title: "Indibano and WFS",
        description:
          "Integration work connected Woolworths business platforms and supporting systems. Related initiatives included Sireco, Triad, POPI and CASA Services.",
      },
      {
        title: "David Jones integration",
        description:
          "Following Woolworths' acquisition of David Jones, the engagement included integration between the organizations and related internal and external systems.",
      },
      {
        title: "Delivery coordination",
        description:
          "Responsibilities included project and resource management, monitoring customer and internal processes, reviewing weekly status, presenting progress to stakeholders and tracking delivery quality and timelines.",
      },
    ],
    technologies: [
      "IBM Integration Bus 10.x",
      "IBM WebSphere Message Broker 7.x",
      "IBM WebSphere MQ 7.x",
      "IBM InfoSphere DataStage 8.x",
      "Oracle",
    ],
  },
  {
    slug: "absa",
    client: "ABSA",
    employer: "ITC Infotech · Woolworths engagement",
    facts: [
      { value: "South Africa", label: "Region" },
      { value: "Indibano", label: "Programme" },
    ],
    summary:
      "An external-system integration touchpoint within Woolworths platform work.",
    context:
      "ABSA was one of the external systems integrated as part of Woolworths' Indibano programme, delivered within the Woolworths account.",
    role: "Project and team management, delivery assurance, onsite/offshore coordination, stakeholder communication and tracking within the broader Woolworths engagement.",
    activities: [
      {
        title: "Banking-system integration",
        description:
          "Banking-system connectivity for ABSA formed part of the wider Woolworths integration landscape.",
      },
    ],
    technologies: [
      "IBM Integration Bus",
      "IBM WebSphere Message Broker",
      "IBM WebSphere MQ",
      "Oracle",
    ],
    relationshipNote:
      "Delivered within the Woolworths engagement; this does not imply direct employment or endorsement by ABSA.",
  },
  {
    slug: "david-jones",
    client: "David Jones",
    employer: "ITC Infotech · Woolworths engagement",
    facts: [
      { value: "Australia", label: "Region" },
      { value: "Post-acquisition", label: "Integration" },
    ],
    summary:
      "Integration work following Woolworths' acquisition of David Jones.",
    context:
      "Following the acquisition, Woolworths and David Jones were integrated, connecting internal and external systems as part of the wider Indibano and retail integration work.",
    role: "Project and team management, onsite/offshore coordination, delivery assurance, process oversight and stakeholder reporting within the Woolworths account.",
    activities: [
      {
        title: "Retail integration",
        description:
          "Integration between Woolworths and David Jones systems, delivered as part of the wider Woolworths project portfolio.",
      },
    ],
    technologies: [
      "IBM Integration Bus",
      "IBM WebSphere Message Broker",
      "IBM WebSphere MQ",
      "IBM InfoSphere DataStage",
    ],
    relationshipNote:
      "Delivered within the Woolworths engagement; this does not imply direct employment or endorsement by David Jones.",
  },
  {
    slug: "michelin",
    client: "Michelin",
    employer: "Torry Harris Business Solutions",
    facts: [
      { value: "Singapore", label: "Asia-Pacific EAI hub" },
      { value: "6", label: "Markets served" },
      { value: "15 months", label: "Engagement" },
    ],
    summary:
      "Project and team management for integration, migration and business intelligence work across the Asia-Pacific hub.",
    context:
      "Michelin's Singapore EAI hub supported regional systems. The work spanned middleware integration, migration planning and offshore delivery across several initiatives.",
    role: "Project and team management, onsite coordination, analysis, design, delivery assurance, requirements understanding, proposal preparation, effort estimation and project tracking.",
    activities: [
      {
        title: "Middleware migration",
        description:
          "Work included planning migration of MQ Workflow and ICS to a higher-version Process Server environment.",
      },
      {
        title: "Sales-force integration",
        description:
          "An integration connected Siebel Sales Force Automation with a Thailand database so customer profile changes were reflected between systems.",
      },
      {
        title: "Business intelligence",
        description:
          "DataStage and Hyperion were used to extract legacy AS/400 business transactions for management reporting and analysis.",
      },
    ],
    technologies: [
      "WebSphere Application Server",
      "WebSphere MQ",
      "WebSphere Message Broker",
      "WebSphere Process Server",
      "WebSphere Partner Gateway",
      "DataStage",
      "Hyperion",
      "Siebel",
    ],
  },
  {
    slug: "aviva",
    client: "AVIVA",
    employer: "Torry Harris Business Solutions",
    facts: [
      { value: "Malaysia · UK", label: "Regions" },
      { value: "24/7", label: "Offshore support" },
    ],
    summary:
      "Support and solution work across Aviva Investors and a CGU engagement in Malaysia.",
    context:
      "Two engagements: Alphacourt support for Aviva Investors' Hub Components, and an earlier scanning and indexing programme in Malaysia for CGU (now AVIVA).",
    role: "Project and team management, onsite/offshore coordination and delivery assurance for support work; module leadership and development for the CGU imaging engagement.",
    activities: [
      {
        title: "Aviva Investors Hub Components",
        description:
          "Support was provided through an Alphacourt engagement, with a dedicated offshore team supporting Hub Components using WebSphere Application Server and Message Broker.",
      },
      {
        title: "CGU imaging and workflow",
        description:
          "The solution covered scanning and indexing documents into Visual Info, workflow routing, rescanning, account scheduling and administrative features.",
      },
    ],
    technologies: [
      "WebSphere Application Server",
      "WebSphere MQ",
      "WebSphere Message Broker",
      "Visual Info",
      "Visual Basic",
    ],
    relationshipNote:
      "Delivered through Alphacourt and CGU engagements; this does not imply direct employment by AVIVA.",
  },
  {
    slug: "amex",
    client: "AMEX",
    employer: "Torry Harris Business Solutions",
    facts: [
      { value: "Bahrain", label: "Region" },
      { value: "Phase II", label: "Commissioned after Phase I go-live" },
    ],
    summary:
      "Middleware integration and solution design for front-end banking applications and the Vision Plus core system.",
    context:
      "The Bahrain engagement supported American Express' strategy to streamline business processes and integrate front-end applications with its Vision Plus core banking system.",
    role: "Project and team management, onsite coordination, analysis, design, integration and delivery assurance. Work included requirements sessions, integration design, testing coordination and offshore liaison.",
    activities: [
      {
        title: "Enterprise integration",
        description:
          "Common services and MQ message flows connected web-based banking front ends with Vision Plus, including applications such as IVR, Online Services and CTI.",
      },
      {
        title: "Phase I go-live",
        description:
          "Common services such as unbilled transactions, card history, payment history and account information went live, with a secured membership-rewards web service for a US partner. After stabilisation, AMEX commissioned Phase II.",
      },
      {
        title: "Delivery lifecycle",
        description:
          "Responsibilities included requirements gathering, interface design, unit and integration testing, user acceptance testing and coordination with the offshore team.",
      },
    ],
    technologies: [
      "IBM WebSphere Message Broker",
      "IBM WebSphere MQ",
      "Vision Plus",
      "Oracle",
    ],
  },
  {
    slug: "rak-bank",
    client: "RAK Bank",
    employer: "Torry Harris Business Solutions",
    facts: [
      { value: "Dubai", label: "Region" },
      { value: "8 months", label: "Engagement" },
      { value: "ICCS", label: "Cheque-imaging readiness for the UAE Central Bank rollout" },
    ],
    summary:
      "Integration design and project management for banking systems using an IBM middleware layer.",
    context:
      "The Dubai engagement focused on streamlining bank business processes and integrating applications with the Equation core banking system.",
    role: "Project management, onsite coordination, requirements analysis, solution and interface design, effort estimation, planning, testing coordination and offshore delivery coordination.",
    activities: [
      {
        title: "Banking integration framework",
        description:
          "A reusable EAI framework provided logging, MQ and HTTP communication, and shared services for legacy-system connectivity.",
      },
      {
        title: "Business-system integration",
        description:
          "Integration touchpoints included image-based cheque clearing, utility bill payment, retail lending and a debit card module handling transactions from the UAE Switch and Mastercard networks.",
      },
    ],
    technologies: [
      "IBM WebSphere Message Broker",
      "IBM WebSphere MQ",
      "Equation",
    ],
  },
  {
    slug: "insight",
    client: "Insight",
    employer: "ITC Infotech",
    facts: [
      { value: "UK", label: "Region" },
      { value: "16 months", label: "Engagement" },
    ],
    summary:
      "Project and delivery management for Enterprise Agreement Timeline Analysis and Enterprise Agreement Business Management.",
    context:
      "EATA was a tool Insight used to estimate software license costs over time and prepare pricing option matrices for clients.",
    role: "Overall project and resource management, process oversight, delivery management, weekly status review, stakeholder reporting and monitoring deliverables for quality and schedule.",
    activities: [
      {
        title: "EATA and EABM",
        description:
          "The engagement supported product tooling for estimating Microsoft, Symantec and VMware license costs and presenting pricing options.",
      },
    ],
    technologies: [
      "ASP.NET",
      "C#",
      "ADO.NET",
      "JavaScript",
      "AJAX",
      "SQL Server 2008 R2",
      "SharePoint",
    ],
  },
  {
    slug: "sundial",
    client: "Sundial",
    employer: "ITC Infotech",
    facts: [
      { value: "United States", label: "Region" },
      { value: "Magento 2", label: "Platform" },
    ],
    summary:
      "Project and delivery management for a planned migration of the SheaMoisture shopping cart to Magento 2.",
    context:
      "Sundial planned to upgrade its existing SheaMoisture shopping cart to Magento 2 to address current and future business needs.",
    role: "Delivery and project management, planning, resource management, process discipline, quality activity coordination and monitoring progress against cost and timeline expectations.",
    activities: [
      {
        title: "Commerce platform migration",
        description:
          "The scope covered moving the SheaMoisture shopping-cart website to Magento 2, using MySQL and third-party extensions.",
      },
    ],
    technologies: ["Magento 2", "MySQL", "Third-party extensions"],
  },
  {
    slug: "toyota-kirloskar-motor",
    client: "Toyota Kirloskar Motor",
    employer: "Torry Harris Business Solutions",
    facts: [
      { value: "India", label: "Region" },
      { value: "4", label: "Projects delivered" },
      { value: "42 months", label: "CONNECT support" },
    ],
    summary:
      "Project and delivery management for dealership, supplier, warranty and portal initiatives around CONNECT.",
    context:
      "CONNECT supported Toyota Kirloskar Motor and dealerships across sales, service and service-parts operations, including warranty, customer satisfaction and reporting modules.",
    role: "Project and resource management, onsite/offshore coordination, schedule tracking, proposal and effort planning, artifact review, stakeholder reporting and delivery assurance.",
    activities: [
      {
        title: "CONNECT maintenance and support",
        description:
          "Support and enhancement work covered production problem reports, system change requests, data modification reports, service delivery and stakeholder reporting.",
      },
      {
        title: "Used Cars project",
        description:
          "The project automated parts of pre-owned vehicle delivery and warranty processing, including interfaces for vehicle delivery and warranty data and claim validation.",
      },
      {
        title: "Security Centre single sign-on",
        description:
          "A wrapper application connected the CONNECT portal with Toyota Kirloskar Motor's Security Centre application for single sign-on.",
      },
      {
        title: "Supplier Communication Portal",
        description:
          "The portal connected suppliers with Toyota Kirloskar Motor for parts requirements, delivery notes and advance shipping information.",
      },
    ],
    technologies: [
      "WebSphere Portal",
      "WebSphere Application Server",
      "IBM Directory Server",
      "DB2",
      "WebSphere MQ",
      "Message Broker",
      "MQ Workflow",
      "Oracle 11g",
    ],
  },
  {
    slug: "hindustan-unilever",
    client: "Hindustan Unilever",
    employer: "Torry Harris Business Solutions",
    facts: [
      { value: "India", label: "Region" },
      { value: "5,000+", label: "Stockists on Central Unify" },
      { value: "4", label: "Workstreams" },
    ],
    summary:
      "Integration and workflow architecture across customer master, vendor payment, claims and central-unify processes.",
    context:
      "Web-based business applications were integrated with SAP R/3 and other legacy systems, with workflow automation for customer and payment processes.",
    role: "Requirements understanding, solution and workflow design, integration planning, project monitoring, test planning, documentation, onsite coordination and stakeholder communication.",
    activities: [
      {
        title: "Fusion customer master",
        description:
          "A web application supported customer-master activities and automated appointment, extension, termination, resignation and resumption processes, integrating with SAP R/3 and MFG/PRO.",
      },
      {
        title: "Vendor Payment",
        description:
          "A workflow supported vendor invoice and payment requests, with approvals and integration to SAP R/3 through web services and XML message standards.",
      },
      {
        title: "Claims Proposal",
        description:
          "The process handled damage and shortage claims through business-role approvals, with messages transformed by Message Broker and records retained for audit.",
      },
      {
        title: "Central Unify",
        description:
          "The solution automated monthly schemes and master-data processes using MQ Workflow, MQ, DB2, J2EE and Message Broker, and was used by more than 5,000 redistribution stockists.",
      },
    ],
    technologies: [
      "WebSphere Application Server",
      "WebSphere MQ",
      "WebSphere Message Broker",
      "MQ Workflow",
      "SAP R/3",
      "Oracle",
      "DB2",
      "J2EE",
    ],
  },
  {
    slug: "kotak-life-insurance",
    client: "Kotak Life Insurance",
    employer: "Automated Workflow",
    facts: [
      { value: "India", label: "Region" },
      { value: "7 months", label: "Engagement" },
    ],
    summary:
      "Technical consulting for imaging and workflow automation in policy servicing.",
    context:
      "Policy-servicing processes, including endorsement, revival, switching, free-look cancellation and minor alterations, were automated with imaging and workflow.",
    role: "Business-process understanding, workflow design, technical sign-off documentation, Visual Basic automatic-activity development, integration, UAT, training and production deployment.",
    activities: [
      {
        title: "Policy servicing workflow",
        description:
          "The solution combined MQ Workflow and IBM Content Manager with DotSphere components for work distribution, document viewing, letters, requirements tracking and audit support.",
      },
    ],
    technologies: [
      "WebSphere Application Server",
      "WebSphere MQ",
      "MQ Workflow",
      "IBM Content Manager",
      "DB2",
      "Visual Basic",
      "Oracle",
    ],
  },
  {
    slug: "prudential",
    client: "Prudential",
    employer: "Automated Workflow",
    facts: [
      { value: "Malaysia", label: "Region" },
      { value: "9", label: "Workflow processes, users trained" },
    ],
    summary:
      "Technical consulting for imaging and workflow automation in a Malaysia engagement.",
    context:
      "A workflow solution connected to an Informix line-of-business database on Sun Solaris, with document imaging and work distribution for users.",
    role: "Manual-process transformation, MQ Workflow activity development, documentation, UAT changes, end-user training and administrator deployment guidance.",
    activities: [
      {
        title: "Imaging and workflow",
        description:
          "The solution connected MQ Workflow, IBM Content Manager and OnDemand with line-of-business data, work queues and user desktop tools.",
      },
    ],
    technologies: [
      "WebSphere Application Server",
      "WebSphere MQ",
      "MQ Workflow",
      "IBM Content Manager",
      "OnDemand",
      "Visual Basic",
      "Informix",
      "Sun Solaris",
    ],
  },
];
