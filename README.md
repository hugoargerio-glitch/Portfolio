# Portfólio — Hugo Argeri Campos

Portfólio profissional dual-mode construído com **Astro 5**, **Tailwind CSS v4** e **TypeScript**, projetado para alternar dinamicamente sem flash visual (`data-mode` + `?modo=`) entre dois públicos:

- **`?modo=clt` — Modo Recrutador (CLT / Tech):** foco em arquitetura de dados, stack técnica, contratos de dados executáveis (`ODCS v3.2.0`), testes automatizados, experiência técnica, certificações IBM e currículo em PDF (`/portfolio/Hugo_Campos_Resume_DE.pdf`).
- **`?modo=freela` — Modo Empresa (Freelancer B2B):** foco em ROI, redução de risco operacional, automação de ERPs e planilhas, 4 pacotes de escopo fechado com SLA em dias úteis e CTA direto via WhatsApp/e-mail.

URL de publicação prevista no GitHub Pages: `https://hugoargerio-glitch.github.io/portfolio/`

## Projetos em Destaque

- [`comex-data-engine-v2`](https://github.com/hugoargerio-glitch/comex-data-engine-v2) — Motor HTAP tri-store (MongoDB 7, PostgreSQL 16, DuckDB/Parquet), razão contábil em partidas dobradas imutáveis, câmbio BACEN PTAX, conciliação SWIFT (`camt.053`), tributação aduaneira em cascata e contratos `ODCS v3.2.0`.
- [`MacroFlow-Lakehouse`](https://github.com/hugoargerio-glitch/MacroFlow-Lakehouse) — Pipeline Medallion (Bronze, Silver, Gold) com Apache Airflow, PySpark no Databricks, Delta Lake ACID, MLOps (LightGBM + intervalos conformais de 95% + MLflow) e Star Schema Kimball no Snowflake.
- [`B2B-Price-Market-Monitor`](https://github.com/hugoargerio-glitch/B2B-Price-Market-Monitor) — Engine CDC Dual-Hash SHA-256 sob contratos `ODCS v3.2.0`, persistência SQLite WAL (`BEGIN IMMEDIATE`), Circuit Breaker estatístico e Transactional Outbox para Discord/Slack.

## Estrutura do Projeto

```text
├── .github/workflows/deploy.yml       # Build, typecheck e deploy automático no GitHub Pages
├── public/
│   ├── favicon.svg
│   └── Hugo_Campos_Resume_DE.pdf      # Currículo ATS em PDF
├── src/
│   ├── components/
│   │   ├── Header.astro               # Navegação fixa sensível ao modo ativo
│   │   ├── Hero.astro                 # Seletor interativo de duas engrenagens (?modo=clt|freela)
│   │   ├── About.astro                # Bio técnica / Proposta de valor B2B
│   │   ├── Projects.astro             # Os 3 projetos principais adaptados por perfil
│   │   ├── Packages.astro             # 4 pacotes B2B com escopo fechado e SLA (modo freela)
│   │   ├── Experience.astro           # Histórico profissional adaptado por modo
│   │   ├── Education.astro            # Graduação PUCRS (Tecnólogo em Comércio Exterior)
│   │   ├── CertificationsSection.astro# Cards expansíveis das certificações IBM
│   │   └── Footer.astro               # CTAs de conversão, links sociais e PDF discreto no modo B2B
│   ├── config.ts                      # Fonte única tipada: cltConfig, freelaConfig, navItems
│   ├── pages/index.astro              # Layout principal com inicialização síncrona anti-FOUC
│   └── styles/global.css              # Tailwind v4 + variáveis de tema e visibilidade [data-mode]
├── astro.config.mjs                   # Configuração Astro (site & base: "/portfolio")
└── package.json
```

## Desenvolvimento Local

```bash
npm install
npm run dev       # Servidor local em http://localhost:4321/portfolio/
npm run check     # astro sync + tsc --noEmit
npm run build     # Gera o build estático em dist/
npm run preview   # Pré-visualização local do build
```

## Licença & Créditos

Licenciado sob a [MIT License](LICENSE.md), baseado originalmente no template [DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) de Ryan Fitzgerald.
