# 📋 Instruções para Adicionar a Logo

## 🖼️ Como adicionar a imagem da logo

1. **Salve a imagem da logo** que você enviou como:

   ```
   public/images/logos/dot-energia-logo.png
   ```

2. **Formatos recomendados:**
   - PNG com fundo transparente (recomendado)
   - SVG (melhor para escalabilidade)
   - JPG (se não precisar de transparência)

3. **Tamanhos recomendados:**
   - Logo original: pelo menos 300x100px
   - Para melhor qualidade: 600x200px ou maior

## 🔧 Configuração Atual

A logo está configurada para ser exibida:

- **Header:** 140x45px
- **Footer:** 160x50px (versão maior)

## 📁 Estrutura de Pastas

```
public/
├── images/
│   ├── logos/
│   │   └── dot-energia-logo.png  ← Adicione sua logo aqui
│   └── hero/
└── ...
```

## ✅ Após adicionar a imagem:

1. Reinicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

2. A logo aparecerá automaticamente no header e footer

## 🎨 Customizações Disponíveis

No componente `Logo.tsx` você pode ajustar:

- Tamanho (width/height)
- Variante para temas claros/escuros
- Classes CSS adicionais

Exemplo de uso:

```tsx
<Logo width={200} height={60} variant="light" />
```
