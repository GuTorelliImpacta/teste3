# Site do Centro de Treinamento ZN

Site institucional estático (Astro) do CT ZN, box de CrossFit e HYROX no Tucuruvi, São Paulo.
A spec que guia o projeto está em [`docs/spec/centro-de-treinamento-zn.md`](docs/spec/centro-de-treinamento-zn.md).

## Rodar
```bash
npm install
cp .env.example .env   # preencha PUBLIC_SITE_URL e PUBLIC_WHATSAPP
npm run dev            # http://localhost:4321
npm run build          # astro check + build estático em dist/
```

## Onde editar o conteúdo (src/data)
| Arquivo | O que controla |
|---|---|
| `site.ts` | Telefone, endereço, coordenadas, horário de funcionamento, Instagram |
| `schedule.ts` | Grade de aulas (CrossFit, HYROX, Ginásticos, L.P.O, Cross Kids) |
| `faq.ts` | Perguntas frequentes (também geram JSON-LD) |
| `modalities.ts` | Textos das modalidades |
| `reviews.ts` | Depoimentos reais autorizados (vazio = seção oculta) |

Variáveis: `PUBLIC_SITE_URL` (canonical, sitemap, Open Graph) e `PUBLIC_WHATSAPP` (só dígitos com DDI, ex. `5511999999999`; vazio oculta os botões de WhatsApp).
Atualize também o `Sitemap:` em `public/robots.txt` quando o domínio for definido.

## Deploy
Estático. Vercel usa `vercel.json` (headers de segurança). Hostinger/Apache usa `public/.htaccess`. Ambos aplicam CSP, HSTS e demais headers da spec §12.

## Decisões técnicas
- **Astro 6 estático, CSS próprio com tokens da marca**: o Tailwind v4 foi descartado porque o plugin não compilou com o Vite/Rolldown do Astro 6 neste ambiente e o site não precisava dele.
- **Astro 6, não 7**: o Astro 7 exige Node ≥ 22.23.4 e o ambiente de desenvolvimento tinha 22.22. Com Node novo, rode `npm i astro@latest`. O `npm audit` aponta avisos do Astro/sharp em recursos que o site não usa (SSR, MDX, transições, otimização de imagem); revise ao atualizar.
- **Sem formulário, sem cookies, sem analytics**: conversão por telefone/WhatsApp, o que zera a coleta de dados.
- **"Próxima aula" calculada no navegador** (fuso America/Sao_Paulo) a partir de `schedule.ts`; sem JS o card mostra um texto fixo.

## Pendências para o dono (ver spec §3 e §14)
- Confirmar a grade de horários, o número de WhatsApp, preços, política de aula experimental e idade do Cross Kids.
- Enviar fotos originais (fachada, box, aulas, HYROX, mezanino, coaches com autorização) e a logo em PNG transparente/vetor. O site hoje não usa fotos de terceiros nem miniaturas de redes sociais.
- Definir domínio e atualizar `PUBLIC_SITE_URL`.
- Depoimentos: só com autorização; ao preencher `reviews.ts` a seção aparece.
