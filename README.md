# Genius (AI SaaS) - Ferramenta de IA Web com Chatbot de Conversação, Gerador de Fotos, Vídeos, Músicas e Códigos

## Descrição do Projeto

O Genius é uma plataforma de Inteligência Artificial como Serviço (AI SaaS) que oferece uma variedade de recursos poderosos para os usuários. Essa ferramenta web inclui um chatbot de conversação inteligente, um gerador de fotos, um gerador de vídeos, um gerador de músicas e um gerador de código. O objetivo é permitir que os usuários tenham uma experiência única ao utilizar tecnologias de IA em diversas áreas.

## Funcionalidades

### 1. Chatbot de Conversação

O chatbot de conversação é uma interface de comunicação inteligente baseada em IA. Ele utiliza a biblioteca `openai` versão `^3.3.0` para processar e gerar respostas relevantes em tempo real. O chatbot é capaz de entender linguagem natural e responder a perguntas dos usuários, fornecendo informações precisas e úteis.

### 2. Gerador de Fotos

O gerador de fotos é uma funcionalidade incrível que utiliza a biblioteca `openai` para criar imagens exclusivas e surpreendentes. Os usuários podem personalizar os parâmetros de geração e obter fotos criativas de forma automática.

### 3. Gerador de Vídeos e Músicas

O gerador de vídeos e músicas utiliza a biblioteca `replicate` versão `^0.12.3` para criar clipes, animações e composições musicais personalizadas. Com a ajuda dessa biblioteca, os usuários podem criar conteúdo exclusivo e cativante em vídeo e áudio.

### 4. Gerador de Código

O gerador de código é uma funcionalidade voltada para desenvolvedores. Ele utiliza a biblioteca `openai` para gerar trechos de código com base no que foi pedido. Os usuários podem receber sugestões de código, economizando tempo e facilitando o desenvolvimento de projetos.

### 5. Sistema de Pagamento de Assinatura

Para oferecer um acesso mais amplo às funcionalidades do AI SaaS, foi implementado um sistema de pagamento de assinatura. O plano gratuito permite até 5 utilizações da ferramenta, enquanto o plano pago oferece acesso ilimitado a todas as funcionalidades. O sistema de pagamento utiliza a biblioteca `stripe` versão `^12.14.0` para processar os pagamentos de forma segura e confiável.

## Dependências

A seguir estão as principais dependências utilizadas no desenvolvimento do projeto:

- `@clerk/nextjs` v4.22.1
- `@hookform/resolvers` v3.1.1
- `@prisma/client` v5.0.0
- `@radix-ui/react-avatar` v1.0.3
- `@radix-ui/react-dialog` v1.0.4
- `@radix-ui/react-label` v2.0.2
- `@radix-ui/react-progress` v1.0.3
- `@radix-ui/react-select` v1.2.2
- `@radix-ui/react-slot` v1.0.2
- `@types/node` v20.4.2
- `@types/react` v18.2.15
- `@types/react-dom` v18.2.7
- `autoprefixer` v10.4.14
- `axios` v1.4.0
- `class-variance-authority` v0.7.0
- `clsx` v2.0.0
- `eslint` v8.45.0
- `eslint-config-next` v13.4.10
- `openai` v3.3.0
- `postcss` v8.4.26
- `react` v18.2.0
- `react-dom` v18.2.0
- `react-hook-form` v7.45.2
- `react-hot-toast` v2.4.1
- `react-markdown` v8.0.7
- `replicate` v0.12.3
- `stripe` v12.14.0
- `tailwind-merge` v1.14.0
- `tailwindcss` v3.3.3
- `tailwindcss-animate` v1.0.6
- `typescript` v5.1.6
- `typewriter-effect` v2.20.1
- `zod` v3.21.4
- `zustand` v4.3.9

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_UP_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=seu_valor_aqui
OPENAI_API_KEY=seu_valor_aqui
REPLICATE_API_TOKEN=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
STRIPE_API_KEY=seu_valor_aqui
NEXT_PUBLIC_APP_URL=seu_valor_aqui
STRIPE_WEBHOOK_SECRET=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. O projeto estará disponível em `http://localhost:3000`.
