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

export interface EducationItem {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

export interface CertificationPillar {
  title: string;
  detail: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badges: string[];
  pillars: CertificationPillar[];
  credentialUrl?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  sla: string;
  painSolved: string;
  deliverables: string[];
  proofAnchor: string;
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
  skills: string[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  packages?: ServicePackage[];
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.replace(/^\//, "");
  return `${base}/${normalizedPath}`;
}

const RESUME_URL = withBase("Hugo_Campos_Resume_DE.pdf");
const WHATSAPP_URL = "https://wa.me/5516994100473";
const WHATSAPP_DIAGNOSTIC_URL =
  `${WHATSAPP_URL}?text=Ol%C3%A1%20Hugo%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20t%C3%A9cnico%20de%2015%20minutos.`;

const SHARED_IDENTITY = {
  name: "Hugo Argeri Campos",
} as const;

const SHARED_SOCIAL: SocialLinks = {
  email: "hugoargerio@gmail.com",
  linkedin: "https://linkedin.com/in/hugo-campos-b2a678273",
  github: "https://github.com/hugoargerio-glitch",
  whatsapp: WHATSAPP_URL,
};

const CERTIFICATION_ISSUER = "IBM / Coursera — Credly Verified";

const CLT_CERTIFICATIONS: CertificationItem[] = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
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
        title: "Big Data com Spark & Hadoop",
        detail:
          "Processamento distribuído de grandes volumes com PySpark, RDDs, DataFrames, MapReduce e ecossistema Hadoop.",
      },
      {
        title: "Streaming & Orquestração (Kafka / Airflow)",
        detail:
          "Ingestão contínua de eventos em tempo real via Apache Kafka e orquestração de DAGs ETL/ELT no Apache Airflow.",
      },
      {
        title: "NoSQL em Escala (MongoDB / Cassandra / Redis)",
        detail:
          "Modelagem e persistência em bancos de documentos, colunas largas e cache em memória de baixa latência.",
      },
      {
        title: "DBA Relacional & SQL Avançado",
        detail:
          "Administração, modelagem normalizada, indexação, particionamento e tuning em PostgreSQL, MySQL e IBM Db2.",
      },
    ],
  },
  {
    name: "IBM Data Architect Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    badges: [
      "Data Architecture",
      "Data Warehousing Kimball",
      "Data Governance",
      "Data Privacy",
      "PostgreSQL",
    ],
    pillars: [
      {
        title: "Data Warehousing Kimball",
        detail:
          "Modelagem dimensional Star Schema e Snowflake, tabelas Fato/Dimensão, SCDs e criação de Data Marts para BI.",
      },
      {
        title: "Enterprise Data Governance & Privacy",
        detail:
          "Linhagem de dados, catalogação, qualidade e contratos de dados, RBAC e conformidade de privacidade corporativa.",
      },
      {
        title: "Arquitetura de Plataformas de Dados",
        detail:
          "Desenho ponta a ponta de Data Lakes, Lakehouses e pipelines integrando workloads OLTP e OLAP.",
      },
    ],
  },
];

const FREELA_CERTIFICATIONS: CertificationItem[] = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    badges: [
      "Automação Python & Linux",
      "Integração de APIs",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    pillars: [
      {
        title: "Integração de APIs & Automação Python/Linux",
        detail:
          "Substituição de extrações manuais por conectores autônomos tolerantes a falhas que sincronizam ERPs e APIs sem intervenção.",
      },
      {
        title: "Bancos SQL & MongoDB de Alta Performance",
        detail:
          "Armazenamento estruturado e rápido para eliminar lentidão de planilhas pesadas e evitar perda ou duplicidade de registros.",
      },
      {
        title: "Rotinas Contínuas 24/7",
        detail:
          "Orquestração automática e processamento incremental para entregar bases atualizadas diariamente antes do expediente.",
      },
    ],
  },
  {
    name: "IBM Data Architect Professional Certificate",
    issuer: CERTIFICATION_ISSUER,
    badges: [
      "Migração Segura de Dados",
      "Fonte Única da Verdade",
      "BI & Relatórios",
      "Privacidade & Compliance",
    ],
    pillars: [
      {
        title: "Migração Segura de Dados",
        detail:
          "Consolidação organizada de planilhas Excel/Sheets e bases legadas em PostgreSQL sem perda histórica nem quebra de métricas.",
      },
      {
        title: "Modelagem Pronta para Diretoria (BI)",
        detail:
          "Tabelas limpas e indexadas conectadas diretamente ao Power BI, Metabase ou Looker Studio com leitura instantânea.",
      },
      {
        title: "Privacidade & Compliance",
        detail:
          "Governança de dados, segregação de acessos e trilhas de auditoria protegendo informações financeiras e cadastrais do cliente.",
      },
    ],
  },
];

const REPO_URLS = {
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
    "Engenheiro de Dados e Desenvolvedor Backend Python focado em arquiteturas resilientes, integridade transacional e governança de dados guiada por contratos executáveis (ODCS v3.2.0) e validação shift-left com Pydantic V2. Construo pipelines idempotentes em Python 3.12, SQL avançado (PostgreSQL 16, PL/pgSQL, SQLite WAL) e stacks Lakehouse Medallion (Apache Airflow, PySpark, Databricks, Delta Lake e Snowflake), sempre empacotados em Docker Compose sobre Linux nativo. Certificado em Data Engineering e Data Architecture pela IBM e graduando em Comércio Exterior pela PUCRS.",
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
      dateRange: "Out. 2024 – Presente",
      bullets: [
        "Projetou e operou esteiras automatizadas de ingestão e transformação de dados com Python 3.12 e SQL, persistindo bases relacionais com garantia de idempotência e zero duplicatas em reprocessamentos.",
        "Implementou esteiras conteinerizadas com Docker Compose e agendamentos automatizados em Linux nativo, com rastreabilidade operacional via tabelas de auditoria transacional (pipeline runs audit).",
        "Estruturou validação rigorosa de esquemas via Pydantic V2 e contratos de dados executáveis (ODCS v3.2.0), prevenindo corrupção silenciosa de esquemas (schema drift) e assegurando SLAs analíticos.",
      ],
    },
  ],
  education: [
    {
      school: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
      degree: "Tecnólogo em Comércio Exterior",
      dateRange: "Previsão de Conclusão: Dez. 2028",
      achievements: [
        "Domínio de regras cambiais, Incoterms 2020, classificação NCM e formação de tributos aduaneiros aplicados diretamente à modelagem de dados financeiros e fiscais.",
        "Base quantitativa e regulatória voltada à governança de fluxos cross-border e conciliação contábil.",
      ],
    },
  ],
  certifications: CLT_CERTIFICATIONS,
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
    "Ajudo empresas, importadoras e operações B2B a eliminar planilhas manuais que travam, integrações frágeis de ERPs e retrabalho financeiro através de pipelines de dados que rodam sozinhos em segundo plano. Em vez de scripts improvisados que param na primeira oscilação da API, entrego automações com validação na entrada, zero registros duplicados, tabela de auditoria de execuções e deploy isolado em Docker com baixo custo de infraestrutura. Uno engenharia de dados certificada pela IBM com formação em Comércio Exterior (PUCRS) para transformar regras reais de negócio em sistemas previsíveis e com escopo fechado.",
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
      sla: "7 a 12 dias úteis",
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
      sla: "7 a 10 dias úteis",
      painSolved:
        "Automatiza o cruzamento semanal entre dados do Comex Stat (MDIC/NCM), câmbio oficial PTAX (BACEN) e embarques internos para apuração de margem e Landed Cost.",
      deliverables: [
        "Conectores pré-integrados às bases oficiais do BACEN (PTAX, Selic, IPCA) e MDIC Comex Stat (NCM, países, modais)",
        "Cruzamento automático com 1 base interna de pedidos ou embarques (FOB, frete, seguro e câmbio)",
        "Tabelas analíticas prontas para diretoria acompanhar custo de internação e exposição cambial",
      ],
      proofAnchor:
        "Prova técnica: comex-data-engine-v2 + MacroFlow-Lakehouse + Comércio Exterior (PUCRS)",
    },
  ],
  experience: [
    {
      company: "Projetos e Consultoria B2B (Upwork, Workana & Direto)",
      title: "Engenheiro de Dados & Consultor em Automação B2B",
      dateRange: "Out. 2024 – Presente",
      bullets: [
        "Entrega de esteiras automatizadas de ingestão via Python e SQL com garantia de zero duplicatas e redução do retrabalho manual em planilhas.",
        "Implantação padronizada em Docker Compose com agendamento autônomo e tabela de auditoria transacional para dar visibilidade total ao gestor sobre cada execução.",
        "Blindagem na entrada dos dados contra mudanças de formato de APIs ou arquivos, protegendo dashboards executivos e rotinas financeiras contra quebras silenciosas.",
      ],
    },
  ],
  education: [
    {
      school: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
      degree: "Tecnólogo em Comércio Exterior",
      dateRange: "Previsão de Conclusão: Dez. 2028",
      achievements: [
        "Diferencial de negócio para operações de importação/exportação: domínio prático de NCM, Incoterms 2020 (FOB/CIF), câmbio PTAX e composição de custos aduaneiros.",
        "Capacidade de alinhar diretamente regras fiscais e operacionais com o desenho técnico de bancos de dados e painéis gerenciais.",
      ],
    },
  ],
  certifications: FREELA_CERTIFICATIONS,
};

/**
 * Alias de compatibilidade para os componentes visuais atuais enquanto a alternância
 * dinâmica entre `cltConfig` e `freelaConfig` não é implementada na UI.
 */
export const siteConfig: SiteConfig = cltConfig;

export interface NavItem {
  href: string;
  label: string;
  modeClass?: "mode-clt" | "mode-freela";
}

export const profileEntries = [
  { mode: "clt", modeClass: "mode-clt", config: cltConfig },
  { mode: "freela", modeClass: "mode-freela", config: freelaConfig },
] as const;

export const navItems: NavItem[] = [
  { href: "#about", label: "Sobre" },
  ...(cltConfig.projects.length > 0 || freelaConfig.projects.length > 0
    ? [{ href: "#projects", label: "Projetos" }]
    : []),
  ...((freelaConfig.packages?.length ?? 0) > 0
    ? [
        {
          href: "#packages",
          label: "Pacotes B2B",
          modeClass: "mode-freela" as const,
        },
      ]
    : []),
  ...(cltConfig.experience.length > 0 || freelaConfig.experience.length > 0
    ? [{ href: "#experience", label: "Experiência" }]
    : []),
  ...(cltConfig.education.length > 0 || freelaConfig.education.length > 0
    ? [{ href: "#education", label: "Formação" }]
    : []),
  ...(cltConfig.certifications.length > 0 ||
  freelaConfig.certifications.length > 0
    ? [{ href: "#certifications", label: "Certificações" }]
    : []),
];
