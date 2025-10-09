# 🚀 GUIDELINES — LANDING PAGES EM NEXT.JS

## 🎯 Objetivo

Definir padrões técnicos e boas práticas para desenvolvimento de **Landing Pages em Next.js**, com foco em **alta performance, SEO, escalabilidade, UI/UX e código limpo**.

---

## ⚙️ Stack e Ferramentas

- Framework: **Next.js (App Router)**
- Linguagem: **TypeScript**
- Estilização: **Styled-components ou TailwindCSS**
- Formulários: **React Hook Form + Zod**
- Animações: **Framer Motion**
- SEO: **Next Metadata API**
- Padronização: **ESLint + Prettier**
- Versionamento: **Git + Commit Semântico**
- Deploy:

---

## 🧩 Estrutura de Pastas

src/
├─ app/ # Estrutura principal da LP
│ ├─ layout.tsx # Layout base
│ ├─ page.tsx # Página inicial
│ └─ (rotas) # Outras LPs, se houver
├─ components/ # Componentes reutilizáveis (Hero, CTA, Footer, etc)
├─ sections/ # Blocos da LP organizados por seção
├─ hooks/ # Custom Hooks
├─ lib/ # Funções auxiliares
├─ services/ # Requisições (forms, leads, APIs)
├─ styles/ # Estilos globais / tema
├─ types/ # Tipagens globais
├─ utils/ # Funções genéricas
└─ public/ # Imagens e assets estáticos

---

## 🧠 Boas Práticas de Código

### Componentização

- Componentes **puros, reutilizáveis e desacoplados**.
- Cada seção da LP deve ser um componente dentro de `/sections`.
- Componentes nomeados em **PascalCase** e arquivos em **kebab-case**.
- **Nada de lógica inline** em JSX.

Tipagem e Estrutura de Props

Sempre definir interfaces claras para props.

Preferir interfaces exportadas para reuso em múltiplos componentes.

Nunca usar any.

export interface HeroProps {
title: string;
subtitle?: string;
ctaText?: string;
image?: string;
}

## SEO e Performance

Utilizar Next Metadata API para metatags, title e descrição.

Incluir Open Graph e Twitter Cards.

Minimizar renderizações desnecessárias e imagens pesadas.

Priorizar carregamento lazy em imagens fora do viewport.

Utilizar estrutura semântica HTML.

Nunca carregar bibliotecas pesadas sem necessidade.

// ✅ Exemplo SEO
export const metadata = {
title: "DOT Energia — Soluções Inteligentes em Energia",
description: "Maximize a eficiência e reduza custos com soluções sustentáveis de energia.",
openGraph: {
title: "DOT Energia — Soluções Inteligentes",
description: "Energia eficiente, limpa e rentável.",
url: "https://dotenergia.com",
siteName: "DOT Energia",
images: ["/og-image.jpg"],
},
};

## Formulários e Leads

Use React Hook Form + Zod para validação.

Campos obrigatórios devem ter feedback visual.

Nunca enviar dados sem validação local.

Centralizar envio de dados em /services/lead.ts.

## 🧠 Commit Semântico

✨ feat: nova seção de benefícios
🎨 style: ajustes visuais no hero
🐛 fix: correção no formulário de contato
⚙️ refactor: reorganização de componentes
📚 docs: atualização de README
🚀 perf: otimização de imagens e lazy loading

⚡ Regras para o Copilot
Sempre gerar código modular, performático e semântico.
Seguir o padrão de componentização por seções.
Usar tipagem explícita, sem any.
Evitar duplicação, inline styles e lógica acoplada ao JSX.
Priorizar UX e performance.
Respeitar a estrutura e a convenção de pastas.
Nunca gerar código fora dos padrões definidos acima.

```

```
