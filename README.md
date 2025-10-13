# DOT Energia - Landing Page

Uma Landing Page moderna e responsiva para a DOT Energia, empresa especializada em soluções inteligentes de energia.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de dados
- **RD Station** - Integração para captura de leads

## 📋 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Seções otimizadas seguindo a estrutura definida
- ✅ Formulário de contato com validação
- ✅ **Integração completa com RD Station**
- ✅ **Sistema de aceite de cookies (LGPD)**
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado com Next.js Metadata API
- ✅ Performance otimizada
- ✅ Componentes reutilizáveis e tipados

## 🏗️ Estrutura do Projeto

```
src/
├── app/                  # Páginas do Next.js (App Router)
│   └── api/             # API Routes
│       └── lead/        # Endpoint de envio de leads
├── components/          # Componentes reutilizáveis
│   ├── CookieConsent.tsx       # Banner de aceite de cookies
│   └── CookiePreferences.tsx   # Gerenciador de preferências
├── sections/           # Seções da landing page
├── hooks/              # Custom hooks
├── lib/                # Funções auxiliares e validações
│   └── rdstation/      # Módulo de integração RD Station
├── services/           # Serviços (APIs, leads, RD Station)
├── styles/             # Estilos globais
├── types/              # Definições de tipos TypeScript
│   └── rdstation.ts    # Tipos da integração RD Station
└── utils/              # Utilitários gerais
    └── cookies.ts      # Gerenciamento de consentimento de cookies
```

## 🎨 Seções da Landing Page

1. **Hero Section** - Chamada principal com CTAs
2. **Market Info** - Explicação sobre Mercado Livre de Energia
3. **Benefits** - Vantagens e benefícios
4. **Testimonials** - Depoimentos de clientes
5. **Process** - Como funciona a migração
6. **Sustainability** - Energia renovável e sustentabilidade
7. **Why Choose** - Por que escolher a DOT Energia
8. **Contact Form** - Formulário de conversão (integrado com RD Station)
9. **Footer** - Informações de contato e links

## 🚦 Como executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**

   Crie um arquivo `.env.local` na raiz do projeto:

   ```env
   RDSTATION_TOKEN=seu_token_aqui
   ```

   Para obter o token do RD Station, acesse: https://www.rdstation.com/integracoes/

3. **Executar em desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Build para produção:**

   ```bash
   npm run build
   ```

5. **Executar em produção:**
   ```bash
   npm start
   ```

## 📧 Integração com RD Station

Este projeto inclui uma **integração completa e modular** com RD Station para captura e envio de leads.

### 🚀 Quick Start

Consulte o guia rápido em: **[QUICK-START-RDSTATION.md](./QUICK-START-RDSTATION.md)**

### 📚 Documentação Completa

- **[RDSTATION-INTEGRATION.md](./RDSTATION-INTEGRATION.md)** - Documentação detalhada
- **[IMPLEMENTATION-SUMMARY.md](./IMPLEMENTATION-SUMMARY.md)** - Resumo da implementação
- **[examples/rdstation-usage-examples.tsx](./examples/rdstation-usage-examples.tsx)** - Exemplos práticos

## 🍪 Sistema de Aceite de Cookies

Implementação completa de consentimento de cookies em conformidade com a LGPD.

### 🚀 Quick Start Cookies

Consulte a documentação em: **[COOKIE-CONSENT-IMPLEMENTATION.md](./COOKIE-CONSENT-IMPLEMENTATION.md)**

### ✨ Características

- ✅ Banner responsivo e não intrusivo
- ✅ Armazenamento de preferências
- ✅ Links para políticas de privacidade
- ✅ Animações suaves
- ✅ Integração com analytics e tracking
- ✅ Conformidade com LGPD

### ✨ Características

- ✅ Modular e reutilizável
- ✅ Totalmente tipado com TypeScript
- ✅ Suporte a campos customizados
- ✅ Tags automáticas
- ✅ Validação em múltiplas camadas
- ✅ Tratamento robusto de erros
- ✅ Fácil de adaptar para outros projetos

### 📊 Campos Enviados

O formulário atual envia:

- Nome, Email, Telefone
- Empresa, Cargo
- Consumo Mensal (kWh)
- Tags automáticas baseadas nos dados

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

## � Customização

### Cores e Tema

As cores podem ser customizadas em `tailwind.config.js`:

```javascript
colors: {
  primary: { /* cores primárias */ },
  secondary: { /* cores secundárias */ },
  success: { /* cores de sucesso */ },
}
```

### Integração RD Station

Para customizar a integração:

1. **Tags**: Edite `src/app/api/lead/route.ts`
2. **Campos**: Ajuste o mapeador em `src/lib/rdstation/mapper.ts`
3. **Validação**: Modifique `src/lib/validations/contact-form.ts`

## 📁 Arquivos Importantes

- `src/app/api/lead/route.ts` - API de envio de leads
- `src/services/rdstation.ts` - Serviço de integração RD Station
- `src/lib/rdstation/mapper.ts` - Mapeamento de dados
- `src/types/rdstation.ts` - Tipos e interfaces
- `.env.example` - Exemplo de configuração

## � Troubleshooting

### Token RD Station não configurado

```
Error: RD Station token not found
```

**Solução**: Configure `RDSTATION_TOKEN` no `.env.local`

### Erros de build

```bash
# Limpe o cache
rm -rf .next
npm run build
```

## 📖 Recursos Adicionais

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [RD Station API](https://developers.rdstation.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 📝 Conteúdo

Todo o conteúdo pode ser facilmente modificado nos componentes das seções em `src/sections/`.

## 📄 Licença

Este projeto foi desenvolvido para a DOT Energia.
