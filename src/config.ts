export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
  whatsapp?: string;
}

export interface ProfileCTA {
  label: string;
  href: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface Project {
  repo: string;
  name: string;
  description: string;
  highlights: string[];
  link: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
}

export interface EducationDomainSkill {
  name: string;
  detail: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  dateRange: string;
  badge?: string;
  logoType?: "ads" | "pucrs";
  achievements: string[];
  domainSkills: EducationDomainSkill[];
  impactTitle?: string;
  impactItems?: EducationDomainSkill[];
}

export interface CertificationPillar {
  title: string;
  detail: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  completedDate: string;
  workload: string;
  badges: string[];
  pillars: CertificationPillar[];
  imageUrl: string;
  verifyUrl: string;
  credentialUrl?: string;
}

export interface ComplementaryCertification {
  id: "google" | "duke";
  issuer: string;
  title: string;
  subtitle: string;
  credentialId: string;
  verifyUrl: string;
  logoSrc: string;
  invertOnDark?: boolean;
}

export interface ServicePackage {
  id: string;
  name: string;
  sla: string;
  painSolved: string;
  deliverables: string[];
  proofAnchor: string;
}

export interface B2BImpactCard {
  title: string;
  detail: string;
  iconKey: "postgresql" | "python" | "comex" | "docker";
}

export type ProfileMode = "clt" | "freela";

export interface SiteConfig {
  profileMode: ProfileMode;
  name: string;
  title: string;
  description: string;
  accentColor: string;
  resumeUrl?: string;
  cta: ProfileCTA;
  social: SocialLinks;
  aboutMe: string;
  aboutParagraphs?: string[];
  skills: string[];
  impactCards?: B2BImpactCard[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  complementaryCertifications?: ComplementaryCertification[];
  packages?: ServicePackage[];
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.replace(/^\//, "");
  return `${base}/${normalizedPath}`;
}

export const RESUME_URL = withBase("Hugo_Campos_Resume_DE.pdf");
export const WHATSAPP_URL = "https://wa.me/5516994100473";
const WHATSAPP_DIAGNOSTIC_URL =
  `${WHATSAPP_URL}?text=Ol%C3%A1%20Hugo%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20t%C3%A9cnico%20de%2015%20minutos.`;

export const SHARED_IDENTITY = {
  name: "Hugo Argeri Campos",
} as const;

export const SHARED_SOCIAL: SocialLinks = {
  email: "hugoargerio@gmail.com",
  linkedin: "https://linkedin.com/in/hugo-campos-b2a678273",
  github: "https://github.com/hugoargerio-glitch",
  whatsapp: WHATSAPP_URL,
};

export const CERTIFICATION_ISSUER = "Coursera • Credly Verified";
export const DE_VERIFY_URL = "https://coursera.org/verify/professional-cert/F9UH4EHNP12E";
export const DA_VERIFY_URL = "https://coursera.org/verify/professional-cert/QELOOTV7YY0H";

const CLT_CERTIFICATIONS: CertificationItem[] = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Set. 2026",
    workload: "~240 horas (16 cursos • 6 meses a 10h/semana)",
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
        title: "Python & Linux para Engenharia de Dados",
        detail:
          "Desenvolvimento de scripts ETL, manipulação de dados em Python e automação em Shell/Linux.",
      },
      {
        title: "Pipelines ETL & Streaming",
        detail:
          "Construção de fluxos de ingestão e orquestração com Apache Airflow, Apache Kafka e Shell.",
      },
      {
        title: "Bancos Relacionais, DBA & NoSQL",
        detail:
          "Administração SQL (RDBMS), tuning, modelagem e persistência em bancos NoSQL.",
      },
      {
        title: "Big Data, Spark & BI",
        detail:
          "Processamento distribuído com Apache Spark / Hadoop, Machine Learning com Spark e dashboards em Looker / Cognos.",
      },
    ],
  },
  {
    name: "IBM Data Architect Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Set. 2026",
    workload: "~160 horas (13 cursos • 4 meses a 10h/semana)",
    imageUrl: withBase("certs/ibm-data-architect.png"),
    verifyUrl: DA_VERIFY_URL,
    badges: [
      "Data Architecture",
      "Data Warehousing Kimball",
      "Data Governance",
      "Data Privacy",
      "PostgreSQL",
    ],
    pillars: [
      {
        title: "Enterprise Data Architecture & Operations",
        detail:
          "Desenho corporativo de plataformas de dados ponta a ponta, topologias híbridas e operação em escala.",
      },
      {
        title: "Data Integration, Storage & Migration",
        detail:
          "Estratégias de integração entre sistemas heterogêneos, arquitetura de armazenamento e migração segura sem perda de histórico.",
      },
      {
        title: "Privacy, Security, Governance & Compliance",
        detail:
          "Políticas de privacidade, controle de acesso, conformidade regulatória e gestão de risco em dados corporativos.",
      },
      {
        title: "Data Warehouse & Capstone Arquitetural",
        detail:
          "Modelagem dimensional empresarial e projeto prático completo (Capstone) de arquitetura de dados.",
      },
    ],
  },
];

const FREELA_CERTIFICATIONS: CertificationItem[] = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Set. 2026",
    workload: "~240 horas (16 cursos • 6 meses a 10h/semana)",
    imageUrl: withBase("certs/ibm-data-engineering.png"),
    verifyUrl: DE_VERIFY_URL,
    badges: [
      "Automação Python & Linux",
      "Integração de APIs",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    pillars: [
      {
        title: "Automação Python & Linux",
        detail:
          "Substituição de extrações manuais por rotinas autônomas em Python e Shell que coletam ERPs e APIs sem intervenção.",
      },
      {
        title: "Pipelines Agendados & Streaming 24/7",
        detail:
          "Orquestração automática (Airflow/Kafka) para entregar bases atualizadas diariamente antes do expediente.",
      },
      {
        title: "Bancos SQL & NoSQL de Alta Performance",
        detail:
          "Tuning em PostgreSQL e MongoDB para eliminar lentidão de planilhas pesadas e evitar duplicidade de registros.",
      },
      {
        title: "Processamento Spark & Dashboards",
        detail:
          "Consolidação de grandes volumes e painéis analíticos claros conectados diretamente ao Looker / Power BI.",
      },
    ],
  },
  {
    name: "IBM Data Architect Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    completedDate: "Set. 2026",
    workload: "~160 horas (13 cursos • 4 meses a 10h/semana)",
    imageUrl: withBase("certs/ibm-data-architect.png"),
    verifyUrl: DA_VERIFY_URL,
    badges: [
      "Arquitetura Corporativa",
      "Migração Segura de Dados",
      "Fonte Única da Verdade",
      "Privacidade & Compliance",
    ],
    pillars: [
      {
        title: "Arquitetura Ponta a Ponta & Operações",
        detail:
          "Desenho estruturado de plataformas conectando sistemas operacionais e camada analítica para escalar sem retrabalho.",
      },
      {
        title: "Migração Segura Sem Perda de Histórico",
        detail:
          "Consolidação organizada de planilhas Excel/Sheets e bases legadas mantendo integridade integral das métricas.",
      },
      {
        title: "Privacidade, Segurança & Compliance",
        detail:
          "Controle granular de acessos (RBAC), governança e trilhas de auditoria protegendo informações financeiras da empresa.",
      },
      {
        title: "Data Warehouse & Capstone Corporativo",
        detail:
          "Modelagem dimensional pronta para diretoria validada em projeto prático completo de arquitetura.",
      },
    ],
  },
];

export const REPO_URLS = {
  comex: "https://github.com/hugoargerio-glitch/comex-data-engine-v2",
  macroflow: "https://github.com/hugoargerio-glitch/MacroFlow-Lakehouse",
  monitor: "https://github.com/hugoargerio-glitch/B2B-Price-Market-Monitor",
} as const;

export const cltConfig: SiteConfig = {
  profileMode: "clt",
  ...SHARED_IDENTITY,
  title: "Engenheiro de Dados & Desenvolvedor Backend Python",
  description:
    "Portfólio técnico de Hugo Argeri Campos — Engenharia de Dados, Lakehouse Medallion, Arquiteturas HTAP, PostgreSQL 16 e Contratos de Dados ODCS v3.2.0.",
  accentColor: "#1d4ed8",
  resumeUrl: RESUME_URL,
  cta: {
    label: "Baixar Currículo (PDF)",
    href: RESUME_URL,
  },
  social: SHARED_SOCIAL,
  aboutMe:
    "Engenheiro de Dados e Desenvolvedor Backend Python focado em arquiteturas resilientes, integridade transacional e governança de dados guiada por contratos executáveis (ODCS v3.2.0) e validação shift-left com Pydantic V2. Construo pipelines idempotentes em Python 3.12, SQL avançado (PostgreSQL 16, PL/pgSQL, SQLite WAL) e stacks Lakehouse Medallion (Apache Airflow, PySpark, Databricks, Delta Lake e Snowflake), sempre empacotados em Docker Compose sobre Linux nativo. Certificado em Data Engineering e Data Architecture pela IBM, com base em Comércio Exterior pela PUCRS (2026) e ingresso em Análise e Desenvolvimento de Sistemas (ADS) em Fev. 2027.",
  aboutParagraphs: [
    "Engenheiro de Dados e Desenvolvedor Backend Python focado em arquiteturas resilientes, integridade transacional e governança de dados guiada por contratos executáveis (ODCS v3.2.0) e validação shift-left com Pydantic V2.",
    "Construo pipelines idempotentes em Python 3.12, SQL avançado (PostgreSQL 16, PL/pgSQL, SQLite WAL) e stacks Lakehouse Medallion (Apache Airflow, PySpark, Databricks, Delta Lake e Snowflake), sempre empacotados em Docker Compose sobre Linux nativo. Certificado em Data Engineering e Data Architecture pela IBM, com base em Comércio Exterior pela PUCRS (2026) e ingresso em Análise e Desenvolvimento de Sistemas (ADS) em Fev. 2027.",
  ],
  skills: [
    "Python 3.12",
    "PostgreSQL 16 & PL/pgSQL",
    "Apache Spark (PySpark)",
    "Databricks & Delta Lake",
    "Snowflake",
    "Apache Airflow",
    "FastAPI",
    "Pydantic V2",
    "ODCS v3.2.0",
    "DuckDB & Apache Parquet",
    "SQLite WAL",
    "MongoDB 7",
    "Tenacity",
    "Docker & Docker Compose",
    "Pytest & CI/CD",
    "Linux (Fedora/Ubuntu)",
  ],
  projects: [
    {
      repo: "comex-data-engine-v2",
      name: "comex-data-engine-v2 — Motor HTAP Fiduciário & Aduaneiro",
      description:
        "Plataforma HTAP tri-store (MongoDB 7, PostgreSQL 16 e DuckDB/Parquet) governada por contratos ODCS v3.2.0 para câmbio multi-moeda (BACEN PTAX), conciliação ISO 20022 SWIFT (camt.053) e tributação aduaneira em cascata (ICMS por dentro e CPC 16).",
      highlights: [
        "Razão fiduciário em partidas dobradas no PostgreSQL 16 com invariante de soma zero (0.0000) e triggers PL/pgSQL bloqueando UPDATE e DELETE.",
        "Escudo anti-float estrito (decimal.Decimal / NUMERIC(19,4)) com idempotência em tripla barreira (SHA-256 + chave natural composta + operation_hash_id).",
        "Extrator resiliente da API BACEN Olinda PTAX (USD, EUR, CHF) com Exponential Backoff + Full Jitter (Tenacity) e LOCF forward-fill sem lookahead bias.",
        "Validação shift-left via Pydantic V2, contratos ODCS v3.2.0 e fila de quarentena HITL com endpoints FastAPI e 34 asserções Pytest automatizadas.",
      ],
      link: REPO_URLS.comex,
      skills: [
        "Python 3.12",
        "PostgreSQL 16",
        "PL/pgSQL",
        "FastAPI",
        "Pydantic V2",
        "ODCS v3.2.0",
        "MongoDB 7",
        "DuckDB",
        "Parquet",
        "Tenacity",
      ],
    },
    {
      repo: "MacroFlow-Lakehouse",
      name: "MacroFlow-Lakehouse — Pipeline Macroeconômico & MLOps",
      description:
        "Plataforma enterprise Medallion (Bronze, Silver, Gold) orquestrada via Apache Airflow com PySpark no Databricks, Delta Lake ACID, inferência batch LightGBM com intervalos conformais de 95% (CQR + MLflow) e data marts Kimball no Snowflake.",
      highlights: [
        "Contratos shift-left na ingestão (Pydantic V2 + schemas PySpark StructType) barrando payloads inválidos antes de alocar compute em nuvem.",
        "Cargas incrementais idempotentes (Delta Lake e Snowflake MERGE INTO) com deduplicação determinística por watermark de ingestão e particionamento Hive-style.",
        "Cálculo da taxa real pela equação de Fisher com guarda de lag de 40 dias para o IPCA e anualização diferenciada de volatilidade (√252 mercado vs √365 cripto).",
        "Star Schema no Snowflake com RBAC granular (ETL_ROLE vs BI_READER), DIM_CALENDAR de 4.018 dias (B3 + NYSE) e CI com gate de 80% de cobertura no Pytest.",
      ],
      link: REPO_URLS.macroflow,
      skills: [
        "Apache Airflow",
        "PySpark",
        "Databricks",
        "Delta Lake",
        "Snowflake",
        "MLflow",
        "LightGBM",
        "Pydantic V2",
        "Parquet",
        "Pytest",
      ],
    },
    {
      repo: "B2B-Price-Market-Monitor",
      name: "B2B-Price-Market-Monitor — Engine CDC Dual-Hash & Outbox",
      description:
        "Engine CDC determinística sob contratos ODCS v3.2.0 para monitoramento contínuo de preços e estoques B2B, combinando Dual-Hash SHA-256, SQLite 3 WAL concorrente e despacho assíncrono via Transactional Outbox.",
      highlights: [
        "Motor Dual-Hash (entity_key + state_hash SHA-256) excluindo metadados transitórios para eliminar falsos positivos de scraping.",
        "Persistência single-writer em SQLite WAL sob BEGIN IMMEDIATE com lookup B-Tree (~0,05 ms) e valores monetários DECIMAL(18,4) sem coerção para float.",
        "Circuit Breaker estatístico protegido para amostras pequenas (N >= 10 e taxa de falha > 20%) interrompendo alertas em casos de template drift.",
        "Transactional Outbox assíncrono com Exponential Backoff + Full Jitter (Discord/Slack), Dead-Letter Queue em 5 retentativas e 100+ testes + lint ODCS no CI.",
      ],
      link: REPO_URLS.monitor,
      skills: [
        "Python 3.12",
        "SQLite WAL",
        "Pydantic V2",
        "ODCS v3.2.0",
        "SHA-256 CDC",
        "Transactional Outbox",
        "Docker",
        "Pytest",
      ],
    },
  ],
  experience: [
    {
      company: "Projetos e Consultoria B2B (Upwork, Workana & Direto)",
      title: "Engenheiro de Dados & Desenvolvedor Backend Freelance",
      dateRange: "Out. 2025 – Presente",
      bullets: [
        "Projetou e operou esteiras automatizadas de ingestão e transformação de dados com Python 3.12 e SQL, persistindo bases relacionais com garantia de idempotência e zero duplicatas em reprocessamentos.",
        "Implementou esteiras conteinerizadas com Docker Compose e agendamentos automatizados em Linux nativo, com rastreabilidade operacional via tabelas de auditoria transacional (pipeline runs audit).",
        "Estruturou validação rigorosa de esquemas via Pydantic V2 e contratos de dados executáveis (ODCS v3.2.0), prevenindo corrupção silenciosa de esquemas (schema drift) e assegurando SLAs analíticos.",
      ],
    },
  ],
  education: [
    {
      school: "Transição Acadêmica para TI • Ingresso 2027/1",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
      dateRange: "Ingresso: Fev. 2027",
      badge: "Próxima Graduação • TI & Engenharia de Software",
      logoType: "ads",
      achievements: [
        "Transição formal para a área de tecnologia alinhada à atuação prática em Engenharia de Dados, Backend Python, SQL e arquiteturas distribuídas.",
      ],
      domainSkills: [],
    },
    {
      school: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
      degree: "Tecnólogo em Comércio Exterior",
      dateRange: "2026 · 1 ano cursado (Transição para TI)",
      badge: "Diferencial de Domínio • Finanças & Comex",
      logoType: "pucrs",
      achievements: [
        "Domínio de regras cambiais, Incoterms 2020, classificação NCM e formação de tributos aduaneiros aplicados diretamente à modelagem de dados financeiros e fiscais.",
        "Base quantitativa e regulatória voltada à governança de fluxos cross-border e conciliação contábil.",
      ],
      domainSkills: [
        {
          name: "Contabilidade Fiduciária (CPC 16 / IAS 2)",
          detail:
            "Modelagem de partidas dobradas e custo de internação auditável.",
        },
        {
          name: "Liquidação Cambial SWIFT (ISO 20022)",
          detail:
            "Conciliação multi-moeda e split automático de tarifas bancárias.",
        },
        {
          name: "Regras Tributárias em Cascata",
          detail:
            'Implementação determinística de II, IPI, PIS/COFINS e ICMS "por dentro".',
        },
        {
          name: "Série Temporal & PTAX (BACEN)",
          detail:
            "Tratamento de feriados/fins de semana via LOCF sem lookahead bias.",
        },
      ],
      impactTitle: "Impacto na Engenharia",
      impactItems: [
        {
          name: "Semântica Contábil & Fiscal",
          detail:
            "Modelagem nativa de partidas dobradas, CPC 16 e impostos em cascata sem depender de tradução de analistas.",
        },
        {
          name: "Rigor em Séries Temporais",
          detail:
            "Tratamento de feriados bancários e câmbio PTAX (LOCF) sem lookahead bias.",
        },
        {
          name: "Governança Auditável",
          detail:
            "Contratos ODCS v3.2.0 alinhados às exigências reais de auditoria aduaneira e financeira.",
        },
      ],
    },
  ],
  certifications: CLT_CERTIFICATIONS,
  complementaryCertifications: [
    {
      id: "google",
      issuer: "Google",
      title: "Agile Project Management",
      subtitle: "Scrum, Kanban & Entregas Incrementais",
      credentialId: "OWLH8130V8BT",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/OWLH8130V8BT",
      logoSrc: withBase("icons/google.svg"),
    },
    {
      id: "duke",
      issuer: "Duke University",
      title: "Business Metrics for Data-Driven Companies",
      subtitle: "KPIs, BI & Análise Orientada a Dados",
      credentialId: "08CS9SA6U68D",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/08CS9SA6U68D",
      logoSrc: withBase("icons/duke.svg"),
      invertOnDark: true,
    },
  ],
};

export const freelaConfig: SiteConfig = {
  profileMode: "freela",
  ...SHARED_IDENTITY,
  title: "Engenheiro de Dados B2B | Automação de ERPs, Planilhas & Comex",
  description:
    "Consultoria e engenharia de dados B2B: elimine planilhas manuais, integre ERPs e APIs sem falhas e reduza riscos operacionais com entrega containerizada em Docker.",
  accentColor: "#0f766e",
  resumeUrl: RESUME_URL,
  cta: {
    label: "Solicitar Diagnóstico Técnico (15 min)",
    href: WHATSAPP_DIAGNOSTIC_URL,
    secondaryLabel: "Enviar E-mail",
    secondaryHref:
      "mailto:hugoargerio@gmail.com?subject=Diagn%C3%B3stico%20T%C3%A9cnico%20B2B%20-%20Engenharia%20de%20Dados",
  },
  social: SHARED_SOCIAL,
  aboutMe:
    "Ajudo empresas, importadoras e operações B2B a eliminar planilhas manuais que travam, integrações frágeis de ERPs e retrabalho financeiro através de pipelines de dados que rodam sozinhos em segundo plano. Em vez de scripts improvisados que param na primeira oscilação da API, entrego automações com validação na entrada, zero registros duplicados, tabela de auditoria de execuções e deploy isolado em Docker com baixo custo de infraestrutura. Uno engenharia de dados certificada pela IBM com base em Comércio Exterior (PUCRS, 2026) para transformar regras reais de negócio em sistemas previsíveis e com escopo fechado.",
  aboutParagraphs: [
    "Ajudo empresas, importadoras e operações B2B a eliminar planilhas manuais que travam, integrações frágeis de ERPs e retrabalho financeiro através de pipelines de dados que rodam sozinhos em segundo plano.",
    "Em vez de scripts improvisados que param na primeira oscilação da API, entrego automações com validação na entrada, zero registros duplicados, tabela de auditoria de execuções e deploy isolado em Docker com baixo custo de infraestrutura. Uno engenharia de dados certificada pela IBM com base em Comércio Exterior (PUCRS, 2026) para transformar regras reais de negócio em sistemas previsíveis e com escopo fechado.",
  ],
  impactCards: [
    {
      title: "Fim das Planilhas Manuais",
      detail:
        "Migração estruturada de Excel/Sheets para PostgreSQL com zero duplicatas.",
      iconKey: "postgresql",
    },
    {
      title: "Integração Resiliente de ERPs & APIs",
      detail:
        "Conectores automáticos (Bling, Omie, Tiny, BACEN) com retry e log de auditoria.",
      iconKey: "python",
    },
    {
      title: "Automação Comex & Câmbio PTAX",
      detail:
        "Cruzamento oficial MDIC/NCM, impostos em cascata e fechamento cambial.",
      iconKey: "comex",
    },
    {
      title: "Deploy Enxuto em Docker",
      detail:
        "Infraestrutura isolada de baixo custo e views prontas para Power BI / Metabase.",
      iconKey: "docker",
    },
  ],
  skills: [
    "Integração de ERPs (Bling, Omie, Tiny)",
    "Migração Excel / Sheets → PostgreSQL",
    "Ingestão de APIs com Auto-Retry",
    "Monitoramento & Alertas 24/7",
    "Comex, NCM & Câmbio PTAX (BACEN)",
    "Zero Duplicatas (Idempotent Upsert)",
    "Views Prontas para Power BI / Metabase",
    "Deploy Docker Compose (Baixo Custo)",
    "Log de Auditoria de Execuções",
    "Alertas Discord, Slack & Teams",
  ],
  projects: [
    {
      repo: "comex-data-engine-v2",
      name: "Automação Fiscal, Cambial & Landed Cost — Comex Data Engine V2",
      description:
        "Sistema que substitui planilhas manuais de importação cruzando câmbio oficial do Banco Central (PTAX), tarifas bancárias SWIFT e impostos aduaneiros em cascata com trilha de auditoria à prova de fraude.",
      highlights: [
        "Elimina erros de arredondamento em fechamentos USD, EUR e CHF e automatiza o cálculo real de Landed Cost (II, IPI, PIS/COFINS, ICMS por dentro e CPC 16).",
        "Intercepta faturas com erro de soma ou frete ausente antes de impactarem o financeiro, isolando apenas exceções para aprovação do gestor.",
        "Mantém livro-razão contábil imutável para conciliar faturas comerciais, extratos bancários SWIFT e declarações aduaneiras centavo a centavo.",
      ],
      link: REPO_URLS.comex,
      skills: [
        "Automação Comex",
        "Câmbio BACEN PTAX",
        "Landed Cost & Impostos",
        "Auditoria Anti-Erro",
        "FastAPI & PostgreSQL",
      ],
    },
    {
      repo: "MacroFlow-Lakehouse",
      name: "Central de Indicadores Financeiros & Câmbio — MacroFlow",
      description:
        "Plataforma automatizada que centraliza cotações, juros, inflação (Selic, IPCA, PTAX) e projeções cambiais em uma base analítica única pronta para BI, eliminando consolidações manuais em planilhas.",
      highlights: [
        "Garante que diretoria e financeiro iniciem o dia com indicadores atualizados automaticamente a partir de fontes oficiais, sem copiar CSVs.",
        "Atualização incremental segura que impede duplicação de histórico mesmo quando há reprocessamento ou revisão de índices.",
        "Projeções cambiais de curto prazo com faixas de confiança de 95% para apoiar decisões de compra, precificação e proteção de margem.",
      ],
      link: REPO_URLS.macroflow,
      skills: [
        "Fonte Única da Verdade",
        "Consolidação Financeira",
        "Pronto para Power BI",
        "Previsão Cambial",
        "Airflow & Snowflake",
      ],
    },
    {
      repo: "B2B-Price-Market-Monitor",
      name: "Monitoramento Competitivo de Preços & Estoques 24/7 — B2B Price Monitor",
      description:
        "Sistema autônomo que acompanha preços de concorrentes, rupturas de estoque e portais comerciais continuamente, disparando alertas limpos no Slack ou Discord sem custo de ferramentas SaaS em dólar.",
      highlights: [
        "Reduz o tempo de reação comercial de dias para minutos, avisando a equipe apenas quando há mudança real de preço, estoque ou promoção.",
        "Evita spam nos canais internos e trava alertas automaticamente se o site alvo mudar de layout, preservando a confiança da operação.",
        "Roda com pegada mínima de servidor (~35 MB de RAM em execução), reduzindo custos mensais de hospedagem em nuvem.",
      ],
      link: REPO_URLS.monitor,
      skills: [
        "Monitoramento 24/7",
        "Alertas Slack & Discord",
        "Zero Alertas Repetidos",
        "Baixo Custo de Servidor",
        "Docker",
      ],
    },
  ],
  packages: [
    {
      id: "api-erp-ingestion",
      name: "Pacote 01: Motor de Ingestão Resiliente de APIs & ERPs",
      sla: "5 a 7 dias úteis",
      painSolved:
        "Elimina a exportação manual diária de CSVs de ERPs (Bling, Omie, Tiny, ContaAzul) e impede que dashboards quebrem quando a API oscila ou atinge limite de requisições.",
      deliverables: [
        "Pipeline Python com controle de rate limit, paginação automática e retentativas exponenciais para até 3 endpoints da mesma API",
        "Carga incremental sem duplicatas em PostgreSQL ou Parquet com tabela de auditoria de execuções (pipeline_runs_audit)",
        "Deploy containerizado via Docker Compose com agendamento automático e manual de operação",
      ],
      proofAnchor: "Prova técnica: comex-data-engine-v2",
    },
    {
      id: "web-monitoring-bot",
      name: "Pacote 02: Monitoramento Web & Bot de Alertas 24/7",
      sla: "3 a 5 dias úteis",
      painSolved:
        "Substitui checagens manuais e assinaturas SaaS caras em dólar para monitorar preços de concorrentes, estoques, licitações ou novas oportunidades.",
      deliverables: [
        "Coletor autônomo para até 2 domínios web com controle de estado em banco SQL para impedir alertas repetidos",
        "Disparo formatado em tempo real para 1 canal ativo (Discord, Slack, Microsoft Teams ou Telegram)",
        "Empacotamento leve em Docker com agendamento contínuo via Cron/systemd",
      ],
      proofAnchor: "Prova técnica: B2B-Price-Market-Monitor",
    },
    {
      id: "spreadsheets-to-sql",
      name: "Pacote 03: Migração Planilhas Excel / Google Sheets → PostgreSQL (SSOT)",
      sla: "4 a 7 dias úteis",
      painSolved:
        "Resolve travamentos em planilhas gigantes, fórmulas quebradas e dados divergentes entre equipes criando uma Fonte Única da Verdade.",
      deliverables: [
        "Consolidação e padronização de até 5 planilhas/fontes com travas de validação na entrada",
        "Carga automatizada com Idempotent Upsert (MERGE / ON CONFLICT) em até 3 tabelas Fato/Dimensão no PostgreSQL",
        "Até 5 Views SQL indexadas prontas para leitura instantânea no Power BI, Metabase ou Looker Studio",
      ],
      proofAnchor: "Prova técnica: MacroFlow-Lakehouse",
    },
    {
      id: "comex-financial-hub",
      name: "Pacote 04: Comex & Financial Intelligence Data Hub",
      sla: "5 a 7 dias úteis",
      painSolved:
        "Automatiza o cruzamento semanal entre dados do Comex Stat (MDIC/NCM), câmbio oficial PTAX (BACEN) e embarques internos para apuração de margem e Landed Cost.",
      deliverables: [
        "Conectores pré-integrados às bases oficiais do BACEN (PTAX, Selic, IPCA) e MDIC Comex Stat (NCM, países, modais)",
        "Cruzamento automático com 1 base interna de pedidos ou embarques (FOB, frete, seguro e câmbio)",
        "Tabelas analíticas prontas para diretoria acompanhar custo de internação e exposição cambial",
      ],
      proofAnchor:
        "Prova técnica: comex-data-engine-v2 + MacroFlow-Lakehouse + Comércio Exterior (PUCRS, 2026)",
    },
  ],
  experience: [
    {
      company: "Consultoria B2B & Engenharia de Dados sob Demanda",
      title: "Engenheiro de Dados & Consultor em Automação B2B",
      dateRange: "Out. 2025 – Presente",
      bullets: [
        "Entrega de esteiras automatizadas de ingestão via Python e SQL com garantia de zero duplicatas e redução do retrabalho manual em planilhas.",
        "Implantação padronizada em Docker Compose com agendamento autônomo e tabela de auditoria transacional para dar visibilidade total ao gestor sobre cada execução.",
        "Blindagem na entrada dos dados contra mudanças de formato de APIs ou arquivos, protegendo dashboards executivos e rotinas financeiras contra quebras silenciosas.",
      ],
    },
  ],
  education: [
    {
      school: "Transição Acadêmica para TI • Ingresso 2027/1",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
      dateRange: "Ingresso: Fev. 2027",
      badge: "Próxima Graduação • TI & Engenharia de Software",
      logoType: "ads",
      achievements: [
        "Aprofundamento acadêmico em engenharia de software, bancos de dados e sistemas distribuídos para potencializar entregas B2B ponta a ponta.",
      ],
      domainSkills: [],
    },
    {
      school: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
      degree: "Tecnólogo em Comércio Exterior",
      dateRange: "2026 · 1 ano cursado (Transição para TI)",
      badge: "Diferencial de Domínio • Finanças & Comex",
      logoType: "pucrs",
      achievements: [
        "Diferencial de negócio para operações de importação/exportação: domínio prático de NCM, Incoterms 2020 (FOB/CIF), câmbio PTAX e composição de custos aduaneiros.",
        "Capacidade de alinhar diretamente regras fiscais e operacionais com o desenho técnico de bancos de dados e painéis gerenciais.",
      ],
      domainSkills: [
        {
          name: "Cálculo Automático de Landed Cost",
          detail:
            "Substituição de planilhas complexas de custo por NCM sem erro de arredondamento.",
        },
        {
          name: "Integração Siscomex / Comex Stat",
          detail:
            "Cruzamento automático de microdados aduaneiros (MDIC) com embarques internos.",
        },
        {
          name: "Auditoria de Frete & Incoterms (FOB/CIF)",
          detail:
            "Conferência automática de faturas internacionais e variação cambial.",
        },
        {
          name: "Fechamento Cambial sem Retrabalho",
          detail:
            "Sincronização diária automática da PTAX oficial do Banco Central no banco/BI.",
        },
      ],
      impactTitle: "Vantagem para sua Operação",
      impactItems: [
        {
          name: "Falamos a Mesma Língua",
          detail:
            "Você não precisa me explicar o que é NCM, DI/DUIMP, FOB, CIF ou fechamento de câmbio.",
        },
        {
          name: "Custo de Internação Exato",
          detail:
            "Automação do cálculo de Landed Cost sem erros de fórmula no Excel.",
        },
        {
          name: "Integração Direta ao seu BI",
          detail:
            "Cruzamento automático entre bases públicas (MDIC/BACEN) e os pedidos do seu ERP.",
        },
      ],
    },
  ],
  certifications: FREELA_CERTIFICATIONS,
  complementaryCertifications: [
    {
      id: "duke",
      issuer: "Duke University",
      title: "Business Metrics for Data-Driven Companies",
      subtitle: "Métricas de Negócio & BI para Decisão",
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
      subtitle: "Gestão por Marcos & Escopo Fechado",
      credentialId: "OWLH8130V8BT",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/OWLH8130V8BT",
      logoSrc: withBase("icons/google.svg"),
    },
  ],
};

/**
 * Alias de compatibilidade para os componentes visuais atuais enquanto a alternância
 * dinâmica entre `cltConfig` e `freelaConfig` não é implementada na UI.
 */
export const siteConfig: SiteConfig = cltConfig;

export interface NavItem {
  href: string;
  label: string;
  labelEn: string;
  modeClass?: "mode-clt" | "mode-freela";
}

export const profileEntries = [
  { mode: "clt", modeClass: "mode-clt", config: cltConfig },
  { mode: "freela", modeClass: "mode-freela", config: freelaConfig },
] as const;

export const navItems: NavItem[] = [
  { href: "#about", label: "Sobre", labelEn: "About" },
  ...(cltConfig.projects.length > 0 || freelaConfig.projects.length > 0
    ? [{ href: "#projects", label: "Projetos", labelEn: "Projects" }]
    : []),
  ...((freelaConfig.packages?.length ?? 0) > 0
    ? [
        {
          href: "#packages",
          label: "Pacotes B2B",
          labelEn: "B2B Packages",
          modeClass: "mode-freela" as const,
        },
      ]
    : []),
  ...(cltConfig.experience.length > 0 || freelaConfig.experience.length > 0
    ? [{ href: "#experience", label: "Experiência", labelEn: "Experience" }]
    : []),
  ...(cltConfig.education.length > 0 || freelaConfig.education.length > 0
    ? [{ href: "#education", label: "Formação", labelEn: "Education" }]
    : []),
  ...(cltConfig.certifications.length > 0 ||
  freelaConfig.certifications.length > 0
    ? [{ href: "#certifications", label: "Certificações", labelEn: "Certifications" }]
    : []),
];
