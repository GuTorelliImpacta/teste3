# Site do Centro de Treinamento ZN

Site institucional estático (Astro) do CT ZN, box de CrossFit e HYROX no Tucuruvi, São Paulo.
A spec que guia o projeto está em [`docs/spec/centro-de-treinamento-zn.md`](docs/spec/centro-de-treinamento-zn.md).

## Rodar
```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # astro check + build estático em dist/
```

## Conteúdo editável: `src/content/site.ts` (arquivo único)
Todo campo vazio faz a seção ou linha correspondente não aparecer. Nunca há placeholder visível.

| Campo | O que controla |
|---|---|
| `SITE_URL` | canonical, `og:url`, `og:image`, sitemap e robots. Hoje: URL da Vercel. Ao conectar o domínio, trocar por `https://www.ctzn.com.br` |
| `whatsapp` | Só dígitos com DDI. Vazio: todos os CTAs ligam para o fixo. Preenchido: CTAs abrem `wa.me` com mensagem por página |
| `aulaExperimental` | Ex. `grátis`. Vazio: a linha "Primeira aula experimental" some |
| `fotos.hero`, `fotos.crossfit`, `fotos.hyrox` | Fotos dos heros (WebP 1600×900 em `public/fotos/`) |
| `fotos.faixa` | Faixa de 3 fotos na home (800×600) |
| `coaches` | Seção "Quem vai te treinar" |
| `depoimentos` | Seção "Quem treina aqui" (até 3, reais e autorizados) |

Os demais dados ficam em `src/data/`: `site.ts` (endereço, telefone, horário de funcionamento), `schedule.ts` (grade de aulas), `faq.ts` e `modalities.ts`.

## Deploy
Estático. Vercel usa `vercel.json` (headers de segurança). Hostinger/Apache usa `public/.htaccess`. Ambos aplicam CSP, HSTS e demais headers da spec §12. `robots.txt` é gerado a partir de `SITE_URL`.

## Decisões técnicas
- **Astro 6 estático, CSS próprio com tokens da marca**: o Tailwind v4 foi descartado porque o plugin não compilou com o Vite/Rolldown do Astro 6 neste ambiente e o site não precisava dele.
- **Astro 6, não 7**: o Astro 7 exige Node ≥ 22.23.4 e o ambiente de desenvolvimento tinha 22.22. Com Node novo, rode `npm i astro@latest`. O `npm audit` aponta avisos do Astro/sharp em recursos que o site não usa (SSR, MDX, transições, otimização de imagem); revise ao atualizar.
- **Sem formulário, sem cookies, sem analytics**: conversão por WhatsApp (quando preenchido) ou telefone, o que zera a coleta de dados.
- **Grade com abas por dia**: com JS abre no dia de hoje e funciona por teclado (setas, Home, End); sem JS todos os dias aparecem em sequência.
- **"Próxima aula" calculada no navegador** (fuso America/Sao_Paulo) a partir de `schedule.ts`; sem JS o card mostra um texto fixo.

## Pendências para o dono
Ver os campos vazios de `src/content/site.ts` (WhatsApp, aula experimental, fotos, coaches, depoimentos), além de confirmar a grade de horários, preços e idade do Cross Kids.
