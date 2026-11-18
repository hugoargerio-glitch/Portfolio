import {
  CERTIFICATION_ISSUER,
  cltConfig,
  DA_VERIFY_URL,
  DE_VERIFY_URL,
  freelaConfig,
  REPO_URLS,
  RESUME_URL,
  SHARED_IDENTITY,
  SHARED_SOCIAL,
  WHATSAPP_URL,
  withBase,
  type CertificationItem,
  type SiteConfig,
} from "../config";

const WHATSAPP_DIAGNOSTIC_URL_EN =
  `${WHATSAPP_URL}?text=Hello%20Hugo%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20request%20a%2015-minute%20technical%20diagnostic.`;

const EMAIL_DIAGNOSTIC_URL_EN =
  "mailto:hugoargerio@gmail.com?subject=B2B%20Technical%20Diagnostic%20-%20Data%20Engineering";

const CLT_CERTIFICATIONS_EN: CertificationItem[] = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Sep 2026",
    workload: "~240 hours (16 courses • 6 months at 10h/week)",
    imageUrl: withBase("certs/ibm-data-engineering.png"),
    verifyUrl: DE_VERIFY_URL,
    badges: [
      "PySpark",
      "Apache Kafka",
      "Apache Airflow",
      "MongoDB",
      "PostgreSQL",
      "Python & Linux",
    ],
    pillars: [
      {
        title: "Python & Linux for Data Engineering",
        detail:
          "ETL script development, Python data wrangling, and Shell/Linux workflow automation.",
      },
      {
        title: "ETL & Streaming Pipelines",
        detail:
          "Ingestion and orchestration pipelines built with Apache Airflow, Apache Kafka, and Shell.",
      },
      {
        title: "Relational DBs, DBA & NoSQL",
        detail:
          "SQL database administration (RDBMS), query tuning, data modeling, and NoSQL persistence.",
      },
      {
        title: "Big Data, Spark & BI",
        detail:
          "Distributed processing with Apache Spark / Hadoop, Spark ML, and BI dashboards in Looker / Cognos.",
      },
    ],
  },
  {
    name: "IBM Data Architect Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Sep 2026",
    workload: "~160 hours (13 courses • 4 months at 10h/week)",
    imageUrl: withBase("certs/ibm-data-architect.png"),
    verifyUrl: DA_VERIFY_URL,
    badges: [
      "Data Architecture",
      "Kimball Data Warehousing",
      "Data Governance",
      "Data Privacy",
      "PostgreSQL",
    ],
    pillars: [
      {
        title: "Enterprise Data Architecture & Operations",
        detail:
          "End-to-end enterprise data platform design, hybrid topologies, and operations at scale.",
      },
      {
        title: "Data Integration, Storage & Migration",
        detail:
          "Integration strategies across heterogeneous systems, storage architecture, and zero-loss migrations.",
      },
      {
        title: "Privacy, Security, Governance & Compliance",
        detail:
          "Privacy policies, access controls, regulatory compliance, and enterprise data risk management.",
      },
      {
        title: "Data Warehouse & Architecture Capstone",
        detail:
          "Enterprise dimensional modeling validated through a complete end-to-end architecture capstone project.",
      },
    ],
  },
];

const FREELA_CERTIFICATIONS_EN: CertificationItem[] = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Sep 2026",
    workload: "~240 hours (16 courses • 6 months at 10h/week)",
    imageUrl: withBase("certs/ibm-data-engineering.png"),
    verifyUrl: DE_VERIFY_URL,
    badges: [
      "Python & Linux Automation",
      "API Integrations",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    pillars: [
      {
        title: "Python & Linux Automation",
        detail:
          "Replacing manual exports with autonomous Python and Shell jobs that sync ERPs and APIs unattended.",
      },
      {
        title: "Scheduled Pipelines & 24/7 Streaming",
        detail:
          "Automated orchestration (Airflow/Kafka) delivering fresh, reconciled datasets every morning before business hours.",
      },
      {
        title: "High-Performance SQL & NoSQL Storage",
        detail:
          "PostgreSQL and MongoDB tuning to eliminate sluggish spreadsheets and enforce zero duplicate records.",
      },
      {
        title: "Spark Processing & Executive Dashboards",
        detail:
          "High-volume consolidation feeding clean views directly into Looker and Power BI.",
      },
    ],
  },
  {
    name: "IBM Data Architect Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Sep 2026",
    workload: "~160 hours (13 courses • 4 months at 10h/week)",
    imageUrl: withBase("certs/ibm-data-architect.png"),
    verifyUrl: DA_VERIFY_URL,
    badges: [
      "Enterprise Architecture",
      "Safe Data Migration",
      "Single Source of Truth",
      "Privacy & Compliance",
    ],
    pillars: [
      {
        title: "End-to-End Platform & Operations",
        detail:
          "Structured data architecture connecting operational ERPs and analytics layers to scale without rework.",
      },
      {
        title: "Zero-Loss Legacy Migration",
        detail:
          "Clean consolidation of fragmented Excel/Sheets files and legacy databases with full metric integrity.",
      },
      {
        title: "Privacy, Security & Compliance",
        detail:
          "Granular access control (RBAC), governance, and immutable audit trails safeguarding financial data.",
      },
      {
        title: "Data Warehouse & Executive Capstone",
        detail:
          "Board-ready dimensional modeling proven in an end-to-end production architecture capstone.",
      },
    ],
  },
];

export const cltConfigEn: SiteConfig = {
  profileMode: "clt",
  ...SHARED_IDENTITY,
  title: "Data Engineer & Python Backend Developer",
  description:
    "Technical portfolio of Hugo Argeri Campos — Data Engineering, Medallion Lakehouse, HTAP Architectures, PostgreSQL 16, and ODCS v3.2.0 Data Contracts.",
  accentColor: "#1d4ed8",
  resumeUrl: RESUME_URL,
  cta: {
    label: "Download Resume (PDF)",
    href: RESUME_URL,
  },
  social: SHARED_SOCIAL,
  aboutMe:
    "Data Engineer and Python Backend Developer focused on resilient architectures, transactional integrity, and governance powered by executable Data Contracts (ODCS v3.2.0) and Shift-Left Validation with Pydantic V2. I build idempotent pipelines in Python 3.12, advanced SQL (PostgreSQL 16, PL/pgSQL, SQLite WAL), and Medallion Lakehouse stacks (Apache Airflow, PySpark, Databricks, Delta Lake, and Snowflake) containerized with Docker Compose on native Linux. Certified by IBM in Data Engineering and Data Architecture while pursuing a degree in Foreign Trade at PUCRS.",
  aboutParagraphs: [
    "Data Engineer and Python Backend Developer focused on resilient architectures, transactional integrity, and governance powered by executable Data Contracts (ODCS v3.2.0) and Shift-Left Validation with Pydantic V2.",
    "I build idempotent pipelines in Python 3.12, advanced SQL (PostgreSQL 16, PL/pgSQL, SQLite WAL), and Medallion Lakehouse stacks (Apache Airflow, PySpark, Databricks, Delta Lake, and Snowflake) containerized with Docker Compose on native Linux. Certified by IBM in Data Engineering and Data Architecture while pursuing a Foreign Trade degree at PUCRS.",
  ],
  skills: cltConfig.skills,
  projects: [
    {
      repo: "comex-data-engine-v2",
      name: "comex-data-engine-v2 — Fiduciary & Customs HTAP Engine",
      description:
        "Tri-store HTAP platform (MongoDB 7, PostgreSQL 16, and DuckDB/Parquet) governed by ODCS v3.2.0 contracts for multi-currency FX (Central Bank PTAX), ISO 20022 SWIFT (camt.053) reconciliation, and cascading customs taxes (gross-up ICMS and CPC 16 / IAS 2).",
      highlights: [
        "Double-Entry Ledger in PostgreSQL 16 enforcing a strict zero-sum invariant (0.0000) and PL/pgSQL immutability triggers blocking UPDATE and DELETE.",
        "Strict anti-float financial shield (decimal.Decimal / NUMERIC(19,4)) with triple-layer idempotency (SHA-256 + composite natural key + operation_hash_id).",
        "Resilient Central Bank Olinda PTAX extractor (USD, EUR, CHF) with Exponential Backoff + Full Jitter (Tenacity) and LOCF forward-fill preventing lookahead bias.",
        "Shift-Left Validation via Pydantic V2, executable ODCS v3.2.0 contracts, HITL quarantine endpoints in FastAPI, and 34 automated Pytest assertions.",
      ],
      link: REPO_URLS.comex,
      skills: cltConfig.projects[0].skills,
    },
    {
      repo: "MacroFlow-Lakehouse",
      name: "MacroFlow-Lakehouse — Macroeconomic Pipeline & MLOps",
      description:
        "Enterprise Medallion Lakehouse (Bronze, Silver, Gold) orchestrated with Apache Airflow, PySpark on Databricks, ACID Delta Lake, batch LightGBM inference with 95% Conformal Prediction Intervals (CQR + MLflow), and Kimball data marts in Snowflake.",
      highlights: [
        "Shift-Left Data Contracts at ingestion (Pydantic V2 + PySpark StructType schemas) blocking malformed payloads before allocating cloud compute.",
        "Idempotent incremental loads (Delta Lake & Snowflake MERGE INTO) with deterministic watermark deduplication and Hive-style partitioning.",
        "Fisher equation real interest rate modeling with a 40-day IPCA lag guard and asset-specific volatility annualization (√252 equities vs √365 crypto).",
        "Snowflake Star Schema with granular RBAC (ETL_ROLE vs BI_READER), 4,018-day multi-exchange DIM_CALENDAR (B3 + NYSE), and CI gated at 80%+ Pytest coverage.",
      ],
      link: REPO_URLS.macroflow,
      skills: cltConfig.projects[1].skills,
    },
    {
      repo: "B2B-Price-Market-Monitor",
      name: "B2B-Price-Market-Monitor — Dual-Hash CDC Engine & Outbox",
      description:
        "Deterministic CDC engine under ODCS v3.2.0 contracts for continuous B2B price and inventory monitoring, combining Dual-Hash SHA-256 diffing, concurrent SQLite 3 WAL storage, and asynchronous Transactional Outbox delivery.",
      highlights: [
        "Dual-Hash engine (entity_key + state_hash SHA-256) filtering transient metadata to eliminate false-positive scraping diffs.",
        "Single-writer SQLite WAL persistence under BEGIN IMMEDIATE (~0.05 ms B-Tree lookup) using DECIMAL(18,4) with zero float coercion.",
        "Sample-size-aware statistical Circuit Breaker (N >= 10 and failure rate > 20%) halting noisy alerts during upstream template drift.",
        "Asynchronous Transactional Outbox with Exponential Backoff + Full Jitter (Discord/Slack), 5-retry Dead-Letter Queue, and 100+ tests + ODCS lint in CI.",
      ],
      link: REPO_URLS.monitor,
      skills: cltConfig.projects[2].skills,
    },
  ],
  experience: [
    {
      company: "B2B Engineering Projects & Consulting (Upwork, Workana & Direct)",
      title: "Freelance Data Engineer & Python Backend Developer",
      dateRange: "Oct 2025 – Present",
      bullets: [
        "Designed and operated automated Python 3.12 and SQL ingestion pipelines persisting to relational stores with strict idempotency and zero duplicates across retries.",
        "Deployed containerized workflows via Docker Compose and Linux schedulers backed by transactional execution audit tables (pipeline_runs_audit).",
        "Enforced strict schema validation with Pydantic V2 and executable Data Contracts (ODCS v3.2.0), preventing silent schema drift and protecting analytical SLAs.",
      ],
    },
  ],
  education: [
    {
      school: "Pontifical Catholic University of Rio Grande do Sul (PUCRS)",
      degree: "Associate Degree in Foreign Trade (Comex)",
      dateRange: "Expected Graduation: Dec 2028",
      achievements: [
        "Deep command of FX rules, Incoterms 2020, HS/NCM tariff classification, and cascading customs tax logic applied directly to financial and fiscal data modeling.",
        "Quantitative and regulatory foundation tailored to cross-border trade flows and accounting reconciliation.",
      ],
      domainSkills: [
        {
          name: "Fiduciary Accounting (CPC 16 / IAS 2)",
          detail:
            "Double-entry ledger modeling and auditable landed cost capitalization.",
        },
        {
          name: "SWIFT FX Settlement (ISO 20022)",
          detail:
            "Multi-currency statement reconciliation and automated bank fee splitting.",
        },
        {
          name: "Cascading Customs Tax Logic",
          detail:
            "Deterministic calculation of import duties, excise, PIS/COFINS, and gross-up ICMS.",
        },
        {
          name: "Time Series & Central Bank PTAX",
          detail:
            "Holiday and weekend alignment via LOCF without lookahead bias.",
        },
      ],
      impactTitle: "Engineering Impact",
      impactItems: [
        {
          name: "Accounting & Fiscal Semantics",
          detail:
            "Native modeling of double-entry ledgers, IAS 2 / CPC 16, and cascading taxes without analyst translation bottlenecks.",
        },
        {
          name: "Time-Series Rigor",
          detail:
            "Strict banking holiday alignment and Central Bank PTAX series (LOCF) with zero lookahead bias.",
        },
        {
          name: "Auditable Governance",
          detail:
            "ODCS v3.2.0 Data Contracts mapped directly to real customs and financial audit standards.",
        },
      ],
    },
  ],
  certifications: CLT_CERTIFICATIONS_EN,
  complementaryCertifications: [
    {
      id: "google",
      issuer: "Google",
      title: "Agile Project Management",
      subtitle: "Scrum, Kanban & Iterative Delivery",
      credentialId: "OWLH8130V8BT",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/OWLH8130V8BT",
      logoSrc: withBase("icons/google.svg"),
    },
    {
      id: "duke",
      issuer: "Duke University",
      title: "Business Metrics for Data-Driven Companies",
      subtitle: "KPIs, BI & Data-Driven Decision Making",
      credentialId: "08CS9SA6U68D",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/08CS9SA6U68D",
      logoSrc: withBase("icons/duke.svg"),
      invertOnDark: true,
    },
  ],
};

export const freelaConfigEn: SiteConfig = {
  profileMode: "freela",
  ...SHARED_IDENTITY,
  title: "B2B Data Engineer | ERP, Spreadsheet & Trade Automation",
  description:
    "B2B Data Engineering & Consulting: eliminate manual spreadsheets, integrate ERPs and APIs reliably, and cut operational risk with containerized Docker deployments.",
  accentColor: "#0f766e",
  resumeUrl: RESUME_URL,
  cta: {
    label: "Book 15-Min Tech Diagnostic",
    href: WHATSAPP_DIAGNOSTIC_URL_EN,
    secondaryLabel: "Send Email",
    secondaryHref: EMAIL_DIAGNOSTIC_URL_EN,
  },
  social: SHARED_SOCIAL,
  aboutMe:
    "I help B2B teams, importers, and finance operations eliminate brittle spreadsheets, flaky ERP integrations, and manual reconciliation through reliable background data pipelines. Instead of ad-hoc scripts that break on the first API hiccup, I deliver automated systems with input validation, zero duplicate records, execution audit logs, and low-footprint Docker deployments. I combine IBM-certified Data Engineering with Foreign Trade domain expertise (PUCRS) to turn real business rules into predictable, fixed-scope software.",
  aboutParagraphs: [
    "I help B2B teams, importers, and finance operations eliminate brittle spreadsheets, flaky ERP integrations, and manual reconciliation through reliable background data pipelines.",
    "Instead of ad-hoc scripts that break on the first API hiccup, I deliver automated systems with input validation, zero duplicate records, execution audit logs, and low-footprint Docker deployments. I combine IBM-certified Data Engineering with Foreign Trade domain expertise (PUCRS) to turn real business rules into predictable, fixed-scope software.",
  ],
  impactCards: [
    {
      title: "No More Fragile Spreadsheets",
      detail:
        "Structured migration from Excel/Google Sheets into PostgreSQL with zero duplicates.",
      iconKey: "postgresql",
    },
    {
      title: "Resilient ERP & API Integrations",
      detail:
        "Automated connectors (ERPs, FX feeds, REST APIs) with smart retries and audit trails.",
      iconKey: "python",
    },
    {
      title: "Global Trade & FX Automation",
      detail:
        "Automated HS/NCM customs intelligence, cascading tax calculation, and FX closing.",
      iconKey: "comex",
    },
    {
      title: "Lean Docker Deployment",
      detail:
        "Low-cost isolated containers and indexed views ready for Power BI or Metabase.",
      iconKey: "docker",
    },
  ],
  skills: [
    "ERP & REST API Integrations",
    "Excel / Sheets → PostgreSQL Migration",
    "Auto-Retry API Ingestion",
    "24/7 Monitoring & Alerts",
    "Global Trade, HS/NCM & Central Bank FX",
    "Zero Duplicates (Idempotent Upsert)",
    "Power BI / Metabase-Ready SQL Views",
    "Low-Cost Docker Compose Deploy",
    "Execution Audit Logs",
    "Discord, Slack & Teams Alerts",
  ],
  projects: [
    {
      repo: "comex-data-engine-v2",
      name: "FX, Customs & Landed Cost Automation — Comex Data Engine V2",
      description:
        "Replaces error-prone import spreadsheets by reconciling Central Bank FX rates (PTAX), SWIFT bank fees, and cascading customs duties inside a tamper-proof financial audit trail.",
      highlights: [
        "Eliminates floating-point rounding bugs on USD, EUR, and CHF closings and automates exact Landed Cost allocation (duties, VAT/ICMS gross-up, IAS 2).",
        "Quarantines mismatched invoices or missing freight lines before they hit accounting, isolating only real exceptions for manager sign-off.",
        "Maintains an immutable double-entry ledger matching commercial invoices, SWIFT statements, and customs entries down to the cent.",
      ],
      link: REPO_URLS.comex,
      skills: [
        "Trade & Customs Automation",
        "Central Bank PTAX FX",
        "Landed Cost & Tax Engine",
        "Fraud-Proof Audit Trail",
        "FastAPI & PostgreSQL",
      ],
    },
    {
      repo: "MacroFlow-Lakehouse",
      name: "Automated Macro & FX Intelligence Hub — MacroFlow",
      description:
        "Automated analytics hub consolidating official FX rates, interest rates, inflation indices, and short-term currency forecasts into a BI-ready Single Source of Truth.",
      highlights: [
        "Ensures finance and leadership start every morning with freshly synced official indicators—zero manual CSV copy-pasting.",
        "Safe incremental updates guarantee zero historical duplicates even during index revisions or backfills.",
        "Short-term FX forecasts with 95% confidence bands to support purchasing, hedging, and margin protection.",
      ],
      link: REPO_URLS.macroflow,
      skills: [
        "Single Source of Truth",
        "Financial Consolidation",
        "Power BI Ready",
        "FX Forecasting",
        "Airflow & Snowflake",
      ],
    },
    {
      repo: "B2B-Price-Market-Monitor",
      name: "24/7 Competitive Price & Stock Monitor — B2B Price Monitor",
      description:
        "Autonomous monitoring engine tracking competitor pricing, stockouts, and B2B portals continuously—sending clean Slack or Discord alerts without recurring USD SaaS fees.",
      highlights: [
        "Cuts commercial reaction time from days to minutes by notifying your team only on genuine price, stock, or promo changes.",
        "Prevents alert fatigue and pauses notifications automatically if a target site changes layout, keeping team trust high.",
        "Runs on a tiny server footprint (~35 MB RAM in production), keeping monthly cloud hosting bills near zero.",
      ],
      link: REPO_URLS.monitor,
      skills: [
        "24/7 Monitoring",
        "Slack & Discord Alerts",
        "Zero Duplicate Alerts",
        "Low Server Footprint",
        "Docker",
      ],
    },
  ],
  packages: [
    {
      id: "api-erp-ingestion",
      name: "Package 01: Resilient ERP & API Ingestion Engine",
      sla: "5 to 7 business days",
      painSolved:
        "Eliminates daily manual CSV exports from ERPs and stops dashboards from breaking when APIs rate-limit or time out.",
      deliverables: [
        "Python ingestion pipeline with rate-limit handling, auto-pagination, and exponential retries for up to 3 API endpoints",
        "Duplicate-free incremental loads into PostgreSQL or Parquet with an execution audit table (pipeline_runs_audit)",
        "Containerized Docker Compose deployment with automated scheduling and an operations runbook",
      ],
      proofAnchor: "Technical proof: comex-data-engine-v2",
    },
    {
      id: "web-monitoring-bot",
      name: "Package 02: 24/7 Web Monitoring & Alert Bot",
      sla: "3 to 5 business days",
      painSolved:
        "Replaces manual portal checks and expensive USD SaaS subscriptions for tracking competitor prices, stockouts, tenders, or leads.",
      deliverables: [
        "Autonomous collector for up to 2 web targets with SQL state tracking to guarantee zero repeated alerts",
        "Clean real-time notifications routed to 1 active channel (Discord, Slack, Microsoft Teams, or Telegram)",
        "Lightweight Docker packaging with continuous Cron/systemd scheduling",
      ],
      proofAnchor: "Technical proof: B2B-Price-Market-Monitor",
    },
    {
      id: "spreadsheets-to-sql",
      name: "Package 03: Excel / Google Sheets → PostgreSQL Migration (SSOT)",
      sla: "4 to 7 business days",
      painSolved:
        "Fixes freezing spreadsheets, broken formulas, and conflicting team numbers by establishing a single database source of truth.",
      deliverables: [
        "Standardization and ingestion of up to 5 spreadsheets/sources with strict entry-level validation checks",
        "Automated Idempotent Upserts (MERGE / ON CONFLICT) into up to 3 Fact/Dimension tables in PostgreSQL",
        "Up to 5 indexed SQL views ready for instant consumption in Power BI, Metabase, or Looker Studio",
      ],
      proofAnchor: "Technical proof: MacroFlow-Lakehouse",
    },
    {
      id: "comex-financial-hub",
      name: "Package 04: Trade & Financial Intelligence Data Hub",
      sla: "5 to 7 business days",
      painSolved:
        "Automates weekly reconciliation between official trade stats, Central Bank FX rates, and internal shipments for accurate Landed Cost & margin tracking.",
      deliverables: [
        "Pre-built connectors to Central Bank series (PTAX, Selic, IPCA) and customs trade datasets",
        "Automated matching against 1 internal order or shipment dataset (FOB, freight, insurance, FX)",
        "Executive-ready analytical tables tracking landed cost per SKU and currency exposure",
      ],
      proofAnchor:
        "Technical proof: comex-data-engine-v2 + MacroFlow-Lakehouse + Foreign Trade (PUCRS)",
    },
  ],
  experience: [
    {
      company: "On-Demand B2B Consulting & Data Engineering",
      title: "Data Engineer & B2B Automation Consultant",
      dateRange: "Oct 2025 – Present",
      bullets: [
        "Delivered automated Python and SQL ingestion pipelines guaranteeing zero duplicates and eliminating manual spreadsheet rework.",
        "Standardized containerized deployments via Docker Compose with autonomous scheduling and execution audit tables for full operational visibility.",
        "Shielded executive dashboards and finance workflows against silent upstream API or spreadsheet schema changes.",
      ],
    },
  ],
  education: [
    {
      school: "Pontifical Catholic University of Rio Grande do Sul (PUCRS)",
      degree: "Associate Degree in Foreign Trade (Comex)",
      dateRange: "Expected Graduation: Dec 2028",
      achievements: [
        "Business-ready edge for import/export operations: hands-on command of HS/NCM classification, Incoterms 2020 (FOB/CIF), FX settlement, and customs cost structures.",
        "Ability to translate fiscal and operational rules directly into clean relational schemas and executive BI dashboards.",
      ],
      domainSkills: [
        {
          name: "Automated Landed Cost Engine",
          detail:
            "Replacing complex NCM cost spreadsheets without floating-point rounding errors.",
        },
        {
          name: "Customs & Trade Stats Integration",
          detail:
            "Automated cross-referencing of official trade microdata against internal shipments.",
        },
        {
          name: "Freight & Incoterms Audit (FOB/CIF)",
          detail:
            "Automated verification of commercial invoices and FX variance.",
        },
        {
          name: "Zero-Rework FX Closing",
          detail:
            "Daily automated sync of official Central Bank PTAX rates directly into SQL and BI.",
        },
      ],
      impactTitle: "Operational Advantage",
      impactItems: [
        {
          name: "We Speak the Same Language",
          detail:
            "You never have to spend meetings explaining Incoterms, FOB vs CIF, customs declarations, or FX closing.",
        },
        {
          name: "Exact Landed Cost",
          detail:
            "Automated landed cost calculations without fragile Excel formulas.",
        },
        {
          name: "Direct BI Integration",
          detail:
            "Automated matching between public trade/FX feeds and your internal ERP orders.",
        },
      ],
    },
  ],
  certifications: FREELA_CERTIFICATIONS_EN,
  complementaryCertifications: [
    {
      id: "duke",
      issuer: "Duke University",
      title: "Business Metrics for Data-Driven Companies",
      subtitle: "Business Metrics & BI for Decision-Making",
      credentialId: "08CS9SA6U68D",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/08CS9SA6U68D",
      logoSrc: withBase("icons/duke.svg"),
      invertOnDark: true,
    },
    {
      id: "google",
      issuer: "Google",
      title: "Agile Project Management",
      subtitle: "Milestone-Based Fixed-Scope Delivery",
      credentialId: "OWLH8130V8BT",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/OWLH8130V8BT",
      logoSrc: withBase("icons/google.svg"),
    },
  ],
};

export const configByModeAndLang = {
  clt: { pt: cltConfig, en: cltConfigEn },
  freela: { pt: freelaConfig, en: freelaConfigEn },
} as const;

export const profileBilingualEntries = [
  { mode: "clt", modeClass: "mode-clt", pt: cltConfig, en: cltConfigEn },
  { mode: "freela", modeClass: "mode-freela", pt: freelaConfig, en: freelaConfigEn },
] as const;

export function getPackageContactHref(
  packageName: string,
  lang: "pt" | "en"
): string {
  const baseWhatsapp = freelaConfig.social.whatsapp;
  if (!baseWhatsapp) {
    return lang === "en" ? freelaConfigEn.cta.href : freelaConfig.cta.href;
  }
  const message =
    lang === "en"
      ? `Hello Hugo, I saw your portfolio and I'm interested in ${packageName}. I would like to request a technical diagnostic.`
      : `Olá Hugo, vim pelo seu portfólio e tenho interesse no ${packageName}. Gostaria de solicitar um diagnóstico técnico.`;
  return `${baseWhatsapp}?text=${encodeURIComponent(message)}`;
}
