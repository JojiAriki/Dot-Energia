# DOT Energia - Landing Page

Uma Landing Page moderna e responsiva para a DOT Energia, empresa especializada em soluções inteligentes de energia.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de dados

## 📋 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Seções otimizadas seguindo a estrutura definida
- ✅ Formulário de contato com validação
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado com Next.js Metadata API
- ✅ Performance otimizada
- ✅ Componentes reutilizáveis e tipados

## 🏗️ Estrutura do Projeto

```
src/
├── app/                  # Páginas do Next.js (App Router)
├── components/          # Componentes reutilizáveis
├── sections/           # Seções da landing page
├── hooks/              # Custom hooks
├── lib/                # Funções auxiliares e validações
├── services/           # Serviços (APIs, leads, etc.)
├── styles/             # Estilos globais
├── types/              # Definições de tipos TypeScript
└── utils/              # Utilitários gerais
```

## 🎨 Seções da Landing Page

1. **Hero Section** - Chamada principal com CTAs
2. **Market Info** - Explicação sobre Mercado Livre de Energia
3. **Benefits** - Vantagens e benefícios
4. **Testimonials** - Depoimentos de clientes
5. **Process** - Como funciona a migração
6. **Sustainability** - Energia renovável e sustentabilidade
7. **Why Choose** - Por que escolher a DOT Energia
8. **Contact Form** - Formulário de conversão
9. **Footer** - Informações de contato e links

## 🚦 Como executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Build para produção:**

   ```bash
   npm run build
   ```

4. **Executar em produção:**
   ```bash
   npm start
   ```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🎯 SEO e Performance

- ✅ Meta tags otimizadas
- ✅ Open Graph e Twitter Cards
- ✅ Structured data
- ✅ Images lazy loading
- ✅ Core Web Vitals otimizados

## 📧 Integração de Leads

O formulário está preparado para integração com:

- CRM systems
- Email marketing
- Webhooks
- APIs de terceiros

Atualmente usa uma simulação local que pode ser substituída pela integração real em `src/services/lead.ts`.

## 🔧 Customização

### Cores e Tema

As cores podem ser customizadas em `tailwind.config.js`:

```javascript
colors: {
  primary: { /* cores primárias */ },
  secondary: { /* cores secundárias */ },
  success: { /* cores de sucesso */ },
}
```

### Conteúdo

Todo o conteúdo pode ser facilmente modificado nos componentes das seções em `src/sections/`.

## 📄 Licença

Este projeto foi desenvolvido para a DOT Energia.
