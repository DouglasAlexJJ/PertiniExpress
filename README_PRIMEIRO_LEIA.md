# 🚀 Pertini Express - Homepage Profissional

Bem-vindo! Este é o código-fonte completo da sua homepage.

## ⚡ Quick Start

### 1. Instalar dependências
```bash
pnpm install
# ou npm install
```

### 2. Executar localmente
```bash
pnpm dev
# Abra http://localhost:5173
```

### 3. Fazer edições
Edite os arquivos em `client/src/` e veja as mudanças em tempo real!

## 📋 Arquivos Importantes

- **`client/src/pages/Home.tsx`** - Conteúdo principal (textos, números de contato)
- **`client/src/index.css`** - Estilos e cores da marca
- **`client/index.html`** - Título e meta tags

## 🌐 Deploy no Vercel

Leia o arquivo **`GUIA_DEPLOY_VERCEL.md`** para instruções completas de:
- Configuração local
- Deploy no Vercel
- Conectar seu domínio
- Edições futuras

## 📞 Edições Rápidas

### Adicionar número de WhatsApp
Abra `client/src/pages/Home.tsx` e procure por:
```typescript
const whatsappNumber = "55";
```
Substitua por seu número com código país (ex: "5511999999999")

### Adicionar telefone
Procure por `(XX) XXXX-XXXX` e substitua pelo seu telefone real

### Mudar cores
Abra `client/src/index.css` e edite as cores em `:root {}`

## 🎨 Tecnologias Usadas

- **React 19** - Framework UI
- **Tailwind CSS 4** - Estilos
- **TypeScript** - Tipagem
- **Vite** - Build tool
- **shadcn/ui** - Componentes prontos

## 📚 Documentação Completa

Veja `GUIA_DEPLOY_VERCEL.md` para:
- Estrutura do projeto
- Como editar cada seção
- Troubleshooting
- Recursos úteis

---

**Pronto para começar? Execute `pnpm install && pnpm dev`! 🎉**
