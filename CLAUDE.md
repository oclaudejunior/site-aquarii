# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o projeto

Site institucional da **Aquarii**, construído a partir da estrutura do site Performacoop. É um SPA em React + TypeScript + Vite, com roteamento via React Router, estilização com Tailwind CSS e componentes Radix UI (via shadcn/ui). Animações com GSAP, Framer Motion e scroll suave com Lenis.

## Comandos

```bash
npm run dev          # servidor de desenvolvimento
npm run build        # build de produção
npm run build:dev    # build em modo development
npm run preview      # preview do build
npm run lint         # ESLint
npm run test         # testes com Vitest (execução única)
npm run test:watch   # testes em modo watch
```

> O projeto tem `bun.lockb` — pode ser usado com `bun` como alternativa ao npm.

## Arquitetura

### Roteamento (`src/App.tsx`)
As páginas de programas e demais rotas secundárias são carregadas via `React.lazy` + `Suspense`. O `PageLoader` global controla o estado de carregamento inicial.

### Páginas (`src/pages/`)
Cada página de programa (`SelfManagement`, `Advisor`, `Leadership`, `Management`, `MentoriaIndividual`) é um wrapper fino que passa props para `ProgramPageTemplate`. Adicionar um novo programa = criar a página + adicionar a rota em `App.tsx` + registrar o slug em `src/data/programContent.ts`.

### Template de programa (`src/components/ProgramPageTemplate.tsx`)
Componente central que estrutura todas as páginas de programa com seções fixas: Transformação, Resultados, Entregáveis e Formato. As props definem todo o conteúdo textual; os assets visuais são compartilhados entre todos os programas.

### Design system (`src/styles/pc-design-system.css`)
Tokens CSS prefixados com `--pc-*` definem a paleta (marinho, champagne, superfícies escuras), tipografia (Taviraj para display, Montserrat para body, JetBrains Mono para nav) e easing curves. Classes utilitárias como `.pc-glass` e `.pc-nav` complementam o Tailwind.

### Componentes utilitários
- `AnimatedSection` — wrapper de entrada com IntersectionObserver
- `GoldText` — aplica gradiente champagne em texto
- `CountUpNumber` — animação de contagem ao entrar na viewport
- `InfiniteCarousel` — carrossel de logos com animação CSS
- `Layout` — wraps `Header` + `Footer` + scroll suave Lenis
- `ProceduralBackground` / `Particles` — fundos animados em canvas

### Path alias
`@/` aponta para `src/` (configurado em `tsconfig.app.json` e `vite.config.ts`).

## Assets

- `src/assets/` — imagens das seções, fotos de pessoas, logos de clientes (SVG), fotos de depoimentos
- `Fundo da seção hero.png` (raiz) — imagem de fundo para a hero section da Aquarii, ainda não movida para `src/assets/`
- As seções compartilhadas entre programas usam versões `.webp` dos assets para performance
