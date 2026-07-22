# Echlin do Brasil — Site

Reconstrução moderna do site institucional da Echlin do Brasil, com React + Vite.

## Stack

- React 19 + Vite
- JavaScript puro (sem TypeScript)
- CSS Modules
- React Router
- ESLint + Prettier
- Alias `@/` → `src/`

## Scripts

```bash
npm install       # instala dependências
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção
npm run preview   # preview do build
npm run lint      # lint do projeto
npm run lint:fix  # lint com correção automática
npm run format    # formata com Prettier
```

## Estrutura

- `src/pages` — páginas da aplicação (Home, ProductLine, About)
- `src/pages/ProductLine` — template único reaproveitado pelas 3 linhas de produto (interruptores, cabos de vela, sensores), alimentado por `src/data/products.json`
- `src/components` — componentes reutilizáveis (Button, Header, Footer, ProductCard, SectionTitle, FormField, SocialIcon)
- `src/data` — conteúdo em JSON (produtos, navegação, redes sociais, dados institucionais)
- `src/styles` — variáveis de tema, reset e tipografia globais

## Conteúdo

Conteúdo institucional e de produtos reconstruído a partir do site original [echlindobrasil.com.br](https://echlindobrasil.com.br/), reorganizado com foco em clareza e usabilidade.

Os catálogos em PDF ficam em `public/catalogos/` e são referenciados diretamente pelas páginas de produto.

## Variáveis de ambiente

Copie `.env.example` para `.env` e configure:

- `VITE_CONTACT_FORM_ENDPOINT` — endpoint que receberá os envios do formulário de contato
- `VITE_PLATE_SEARCH_URL` — URL base do portal de busca de peças por placa
