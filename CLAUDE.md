# CLAUDE.md

Guia de referência para manutenção deste repositório.

## Visão Geral

Portfólio estático dual-mode construído com **Astro 5**, **Tailwind CSS v4** (`@tailwindcss/vite`) e **TypeScript estrito**, publicado em GitHub Pages (`site: https://hugoargerio-glitch.github.io`, `base: "/Portfolio"`).

## Comandos Principais

```bash
npm run dev       # Servidor de desenvolvimento
npm run check     # astro sync + tsc --noEmit
npm run build     # Build estático para ./dist/
npm run preview   # Preview local da pasta dist/
```

## Arquitetura Dual-Mode (`clt` vs `freela`)

- **Configuração central ([`src/config.ts`](src/config.ts)):** Exporta `cltConfig`, `freelaConfig`, `profileEntries`, `navItems`, `withBase()` e `siteConfig` (alias de compatibilidade).
- **Prevenção de FOUC ([`src/pages/index.astro`](src/pages/index.astro)):** `<script is:inline>` no `<head>` lê `?modo=` da URL (`freela` ou padrão `clt`) e define `document.documentElement.dataset.mode` antes da primeira pintura.
- **Tema e visibilidade ([`src/styles/global.css`](src/styles/global.css)):** `--accent-color` alterna entre `--clt-accent` (`#1d4ed8`) e `--freela-accent` (`#0f766e`), e `.mode-clt` / `.mode-freela` controlam a exibição das variantes sem JavaScript por seção.
- **Seletor de modo ([`src/components/Hero.astro`](src/components/Hero.astro)):** Duas engrenagens interativas atualizam `document.documentElement.dataset.mode`, `aria-pressed` e `?modo=` via `window.history.replaceState`.
- **Caminhos com `BASE_URL`:** Assets em `public/` (`favicon.svg`, `Hugo_Campos_Resume_DE.pdf`) devem usar `withBase(...)` de `src/config.ts` para funcionar sob `/Portfolio/`.
