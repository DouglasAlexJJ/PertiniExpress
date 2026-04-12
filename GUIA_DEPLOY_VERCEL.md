# 📚 Guia Completo - Deploy Pertini Express no Vercel

## 1️⃣ Preparação Inicial

### Pré-requisitos
- Node.js 18+ instalado ([download aqui](https://nodejs.org/))
- Git instalado ([download aqui](https://git-scm.com/))
- Conta no Vercel ([criar conta aqui](https://vercel.com/signup))
- Seu domínio já comprado e pronto para usar

### Estrutura do Projeto
O projeto é um **React 19 + Tailwind 4** com scaffold estático (frontend-only). Não há backend ou banco de dados.

```
transportadora-site/
├── client/                 # Código React (frontend)
│   ├── public/            # Arquivos estáticos (favicon, etc)
│   ├── src/
│   │   ├── pages/         # Páginas (Home.tsx)
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── App.tsx        # Rotas e layout
│   │   ├── index.css      # Estilos globais e temas
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML principal
├── package.json           # Dependências do projeto
├── vite.config.ts         # Configuração do Vite
└── tsconfig.json          # Configuração TypeScript
```

---

## 2️⃣ Configurar Localmente (VSCode)

### Passo 1: Extrair o ZIP
```bash
# Extraia o arquivo transportadora-site-completo.zip
# Navegue até a pasta no terminal
cd transportadora-site
```

### Passo 2: Instalar Dependências
```bash
# Use pnpm (recomendado) ou npm
pnpm install
# ou
npm install
```

### Passo 3: Executar Localmente
```bash
# Inicia o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

### Passo 4: Editar o Código
Abra o projeto no VSCode:
```bash
code .
```

**Arquivos principais para editar:**

| Arquivo | O que editar |
|---------|-------------|
| `client/src/pages/Home.tsx` | Conteúdo, textos, números de WhatsApp/telefone |
| `client/src/index.css` | Cores, fontes, estilos globais |
| `client/index.html` | Título, meta tags, descrição |
| `package.json` | Nome do projeto, versão |

---

## 3️⃣ Edições Comuns

### Adicionar Número de WhatsApp
No arquivo `client/src/pages/Home.tsx`, localize:
```typescript
const whatsappNumber = "55"; // Replace with actual number
```

Substitua por:
```typescript
const whatsappNumber = "5511999999999"; // Seu número com código país
```

### Adicionar Telefone Profissional
Procure por:
```typescript
<span>(XX) XXXX-XXXX</span>
```

Substitua por:
```typescript
<span>(11) 3000-0000</span>
```

### Adicionar E-mail
Localize:
```typescript
const emailAddress = "contato@pertiniexpress.com.br";
```

Substitua por seu e-mail real.

### Mudar Cores da Marca
No arquivo `client/src/index.css`, procure por `:root {` e edite:
```css
--primary: #1e3a8a;        /* Azul profundo */
--accent: #d97706;         /* Ouro/Bronze */
--background: #faf8f3;     /* Bege/Creme */
```

### Adicionar Logo
1. Coloque a imagem da logo em `client/public/logo.png`
2. No arquivo `client/src/pages/Home.tsx`, substitua:
```typescript
<Truck className="w-6 h-6 text-white" />
```

Por:
```typescript
<img src="/logo.png" alt="Pertini Express" className="w-8 h-8" />
```

---

## 4️⃣ Build para Produção

Antes de fazer deploy, teste o build:
```bash
pnpm build
# ou
npm run build
```

Isso gera a pasta `dist/` com os arquivos otimizados para produção.

---

## 5️⃣ Deploy no Vercel

### Opção A: Usando Git + Vercel Dashboard (Recomendado)

#### Passo 1: Criar Repositório Git
```bash
git init
git add .
git commit -m "Initial commit: Pertini Express homepage"
```

#### Passo 2: Enviar para GitHub
1. Crie um repositório no [GitHub](https://github.com/new)
2. No terminal:
```bash
git remote add origin https://github.com/seu-usuario/seu-repo.git
git branch -M main
git push -u origin main
```

#### Passo 3: Deploy no Vercel
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em "Import Git Repository"
3. Selecione seu repositório do GitHub
4. Clique em "Deploy"
5. Aguarde a conclusão (geralmente 2-3 minutos)

### Opção B: Usando Vercel CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça deploy
vercel

# Para produção
vercel --prod
```

---

## 6️⃣ Conectar Seu Domínio

### No Vercel Dashboard:
1. Vá para seu projeto → **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite seu domínio (ex: `transportadora.com.br`)
4. Siga as instruções para atualizar os DNS records

### Tempo de Propagação
- Geralmente 24-48 horas para o domínio estar totalmente ativo
- Você pode verificar em: [whatsmydns.net](https://whatsmydns.net/)

---

## 7️⃣ Variáveis de Ambiente (Opcional)

Se precisar adicionar variáveis de ambiente no futuro:

1. No Vercel Dashboard: **Settings** → **Environment Variables**
2. Adicione a variável (ex: `VITE_API_URL`)
3. No código, acesse com: `import.meta.env.VITE_API_URL`

---

## 8️⃣ Troubleshooting

### Erro: "Cannot find module"
```bash
# Limpe cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro: "Port 5173 already in use"
```bash
# Use outra porta
pnpm dev -- --port 3000
```

### Deploy falha no Vercel
1. Verifique se o `package.json` está correto
2. Certifique-se de que não há erros TypeScript: `pnpm check`
3. Veja os logs no Vercel Dashboard

### Imagens não carregam após deploy
As imagens estão hospedadas em CDN externo (CloudFront). Se não carregarem:
1. Verifique a URL da imagem em `client/src/pages/Home.tsx`
2. Certifique-se de que a URL começa com `https://`

---

## 9️⃣ Atualizações Futuras

Após fazer edições locais:

```bash
# Teste localmente
pnpm dev

# Commit e push
git add .
git commit -m "Descrição das mudanças"
git push origin main

# Vercel fará deploy automaticamente!
```

---

## 🔟 Recursos Úteis

- **Documentação Vite**: https://vitejs.dev/
- **Documentação React**: https://react.dev/
- **Documentação Tailwind**: https://tailwindcss.com/
- **Documentação Vercel**: https://vercel.com/docs
- **shadcn/ui Components**: https://ui.shadcn.com/

---

## ❓ Precisa de Ajuda?

Se tiver dúvidas:
1. Verifique os logs: `pnpm dev` mostra erros em tempo real
2. Consulte a documentação oficial dos frameworks
3. Teste localmente antes de fazer deploy

**Boa sorte com seu site! 🚀**
