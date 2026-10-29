# Spec — Site institucional do Centro de Treinamento ZN (Tucuruvi, São Paulo)

> Fonte da verdade para a implementação. Skills executam **dentro** deste documento. Modo: o dono do projeto pediu "implemente toda a solução", então as suposições abaixo foram decididas sem nova rodada de perguntas.

## 1. Missão e resultado esperado
Criar o site institucional do **Centro de Treinamento ZN** (box de CrossFit e HYROX na zona norte de SP) para que quem busca "crossfit Tucuruvi" ou "hyrox zona norte" entenda a proposta em segundos, veja os horários e **ligue ou chame no WhatsApp para agendar uma aula**.
- Conversão principal: **ligar / WhatsApp → aula experimental** (CTA "Agendar aula").
- Conversões secundárias: ver horários, traçar rota no Google Maps, Instagram.
- Site estático, rápido, mobile primeiro, sem formulário e sem backend.

## 2. Fatos confirmados (com origem)
| Fato | Origem |
|---|---|
| Nome: Centro de Treinamento ZN ("ZN" = zona norte, [CONFIRMAR] o significado) | Logo, Maps |
| Endereço: Av. Nova Cantareira, 4066 — Tucuruvi, São Paulo – SP, CEP 02330-000 | Print Google Maps; Bendito Guia |
| Coordenadas: -23.4651031, -46.6163024 | Bendito Guia (diretório) |
| Telefone: (11) 3567-4884 | Print Google Maps |
| Funcionamento: seg a qui 06:30–22:00; sex 06:30–21:00; sáb 08:00–12:00; dom fechado | Print Google Maps (horário de feriado "pode mudar") |
| Modalidades: CrossFit, HYROX, Ginásticos, Cross Kids, L.P.O (levantamento olímpico) | Story "Horários de Aulas" |
| Instagram: @ct_zn_ | Link do dono |
| Aulas de CrossFit e HYROX anunciadas para a "próxima semana" | Print Maps (posts) |
| Estrutura vista nas fotos do Maps: mezanino com bar/área de convivência, mural grande de atleta, parede azul, placar digital, pódio com medalhas | Print Maps (miniaturas, só referência) |
| Nota 4,8 com 100 avaliações; elogios a coaches, equipamentos, recepção e estacionamento ("Família ZN!") | Bendito Guia (terceiros, não validado) |

### Grade de aulas (decodificada do story; legenda: branco = CrossFit, verde = Ginásticos, azul = Cross Kids, laranja = L.P.O)
```json
{
  "crossfit": {
    "seg": ["06:30","07:30","14:00","16:00","18:00","19:00","20:00","21:00"],
    "ter": ["06:30","07:30","12:00","15:00","16:00","17:00","18:00",{"t":"18:15","tipo":"cross-kids"},"19:00","20:00"],
    "qua": ["06:30","07:30","12:00","16:00","18:00","19:00",{"t":"20:00","tipo":"ginasticos"},"21:00"],
    "qui": ["06:30","07:30","12:00","15:00","16:00","17:00","18:00",{"t":"18:15","tipo":"cross-kids"},"19:00",{"t":"20:00","tipo":"lpo"}],
    "sex": ["06:30","12:00","15:00","16:00","18:00","19:00","20:00"],
    "sab": ["08:00","09:00"]
  },
  "hyrox": {"seg":["12:00","17:00"],"ter":["08:30","21:00"],"qua":["14:00","17:00"],"qui":["08:30","21:00"],"sex":["07:30","17:00"],"sab":["10:00"]}
}
```
Observação: a leitura da imagem tem trechos com alinhamento ambíguo (ex.: qua 12:00, sex 06:30 sem 07:30). Todo o conjunto é `[CONFIRMAR]` e o site exibe aviso "Horários sujeitos a alteração — confirme pelo WhatsApp ou telefone".

## 3. O que ainda não sabemos
- `[CONFIRMAR]` Número de **WhatsApp** (o fixo (11) 3567-4884 pode ou não atender WhatsApp). Sem ele, o botão WhatsApp fica oculto e o CTA é ligar.
- `[CONFIRMAR]` Domínio, preços/planos, política de aula experimental, aceita Wellhub/TotalPass? (TotalPass informa que o CT **não** é mais parceiro; não citar convênios).
- `[CONFIRMAR]` Nome e formação dos coaches, ano de fundação, número de alunos, se é **licenciado HYROX** (não afirmar "afiliado oficial").
- `[CONFIRMAR]` Idade mínima do Cross Kids, existência de estacionamento próprio (avaliações citam), vestiário, lanchonete/bar.
- `[CONFIRMAR]` Cobertura Instagram: o acesso automático foi bloqueado (HTTP 429); não contornado.

**Regras de integridade:** nada de depoimento, número, prêmio, preço, certificação ou "afiliado oficial" inventado. Componente que depende de dado real (depoimentos, preços, equipe, galeria) fica **oculto enquanto vazio**. Sem logos de terceiros (HYROX, CrossFit®, Wellhub): só menção textual descritiva. Sem hotlink de imagem de rede social. Crianças (Cross Kids): nenhuma foto identificável sem autorização dos responsáveis.

## 4. Análise de marca
- **Nome/logo:** selo circular azul-marinho com aro vermelho fino, "ZN" branco em caixa alta pesada e **asas** brancas de cada lado; texto curvo "CENTRO DE / TREINAMENTO". Comunica: pertencimento ao bairro/zona, velocidade e superação (asas), seriedade de "centro de treinamento", clima de **time e comunidade** ("Família ZN").
- **Paleta (amostrada do logo):** azul-marinho `#1B2664` (miolo) · azul halo `#2A4884` · vermelho `#CD3E42` (aro; `#B23F46` em sombra) · branco `#FEFEFE`. Fundo escuro de apresentação do logo `#313234` não é cor da marca.
- **Personalidade:** forte, acolhedora, de bairro, competitiva sem arrogância.
- **Narrativa:** "O box da zona norte para quem quer evoluir junto": treino sério, comunidade grande, do iniciante ao atleta de HYROX.
- **Fraquezas atuais:** sem site; horários só em story que expira; ficha do Maps com pouco texto; fora de planos de convênio.

## 5. Nicho e concorrência
- HYROX em alta no Brasil: buscas pelo termo +330% sobre o ano anterior, expectativa de 30 mil atletas na temporada 2026/27 e +570 academias afiliadas (Mercado & Consumo, 15/10/2026). Etapa em São Paulo no Distrito Anhembi anunciada para 17/10/2026 (hyrox.com / Visit São Paulo; datas divergem entre guias, não citar data no site).
- Boxes de CrossFit são considerados o melhor ambiente para treinar HYROX (sled, SkiErg, remo, wall ball) — Prommer, guia HYROX SP.
- Concorrência local (diretórios, sem validação): Cross Nutrition Box Tucuruvi (Av. Guapira, 304), CF Tucuruvi (Av. Guapira, 1464), CrossFit Saurus Vila Guilherme. Nenhum aparece, nas buscas feitas, com página clara de horários + HYROX.
- **Diferenciais prováveis do ZN (a provar com fotos/dado do dono):** grade extensa (manhã a 21h, sábado), HYROX com 11 horários semanais, aulas Cross Kids/Ginásticos/L.P.O, estrutura com mezanino de convivência, nota 4,8 (100 avaliações em diretório).

## 6. Público e objetivos
- **Público:** adultos 20–45 da zona norte (Tucuruvi, Santana, Jaçanã, Vila Mazzei, Mandaqui) que treinam ou querem começar funcional; atletas que querem se preparar para HYROX; pais de crianças (Cross Kids).
- **Dores:** "tenho medo de começar", "não sei o horário", "fica longe?", "é só para quem já é forte?".
- **KPIs:** cliques em ligar/WhatsApp, cliques em rota, visitas a /horarios. **Metas técnicas:** LCP ≤ 2,0 s (4G), CLS ≤ 0,05, INP ≤ 200 ms, Lighthouse ≥ 95 em todas as categorias.

## 7. Direção de design
- **Conceito: "Placar do box".** O site fala a língua do WOD: cronômetro, placar, quadro-branco. Mostrado na Home pela faixa **"Próxima aula"** (calculada no navegador com fuso America/Sao_Paulo a partir dos dados) e por números tabulares em fonte condensada. Nasce do placar digital visto nas fotos do box e do universo de timer do CrossFit/HYROX.
- **Tokens obrigatórios:** `--navy #1B2664`, `--royal #2A4884`, `--red #CD3E42`, `--white #FEFEFE`. Superfície escura derivada do navy (`#0E1440`, `#141C52`) para seções; seção clara off-white `#F4F5FA`. Destaques extras: no máximo **2** (amarelo-placar `#FFD23F` para números/timer e verde `#2ECC71` só para indicador "agora").
- **Tipografia (perfil):** títulos condensados, pesados e em caixa alta (estilo placar); corpo humanista legível; números tabulares. Candidatas: Barlow Condensed + Barlow; Archivo Narrow/Archivo; Bebas Neue + Inter. Fontes auto-hospedadas (WOFF2, `font-display: swap`).
- **Tom visual:** escuro e energético, interrompido por faixas claras; ângulos inclinados leves (herdados das asas); sem gradiente roxo, sem glassmorphism.
- **Hero (palavras):** à esquerda, H1 em **um único bloco**: "Treino de verdade, com a família ZN." (CrossFit e HYROX no Tucuruvi); sublinha curta; CTAs "Agendar aula" (vermelho, ligar/WhatsApp) e "Ver horários"; à direita/abaixo, cartão-placar "Próxima aula" com hora, modalidade e contagem regressiva. CTA primário visível acima da dobra em 360×740.
- **Asas:** motivo gráfico em SVG próprio (traços simplificados), jamais recortes do logo em baixa resolução. Logo oficial só no cabeçalho, rodapé e favicon.
- **Contraste:** texto branco sobre navy ≥ 7:1; vermelho `#CD3E42` sobre navy tem ~3,3:1, então **não usar para texto pequeno**; botão vermelho leva texto branco em negrito ≥ 18 px/700 ou fundo vermelho mais escuro `#B8323A` (≥ 4,5:1).
- **Não fazer:** foto de banco com atleta genérico; "transforme seu corpo"/antes e depois; carrossel automático; cards idênticos em grade de 3 com ícone; contador falso de alunos; vermelho/azul em pastel; barra de cookies grande (não há cookies).

## 8. UX: páginas e fluxo
| Página | URL | Objetivo |
|---|---|---|
| Home | `/` | Posicionar, mostrar próxima aula, modalidades, diferenciais, avaliações reais (se houver), CTA |
| CrossFit | `/crossfit` | Explicar o treino, para quem é (inclui iniciantes), aulas complementares (Ginásticos, L.P.O, Cross Kids) |
| HYROX | `/hyrox` | Explicar o formato da prova e o treino no box, horários HYROX |
| Horários | `/horarios` | Grade completa, filtro por modalidade/dia, dia atual destacado |
| Contato | `/contato` | Endereço, horário de funcionamento, telefone, WhatsApp, rota, Instagram, link ao Maps |
| Privacidade | `/privacidade` | Texto curto LGPD (site sem cookies de rastreio por padrão) |
- **Navegação:** Início · CrossFit · HYROX · Horários · Contato; botão "Agendar aula" fixo no topo; no celular, **barra inferior fixa** com Ligar / WhatsApp / Rota.
- **Fluxo mobile:** busca Google → Home (CTA) → toque em "Agendar aula" → abre discador (`tel:`) ou WhatsApp com mensagem pronta ("Olá! Quero agendar uma aula experimental no CT ZN."). Sem formulário: menos atrito e zero dado pessoal coletado.
- Mapa: **sem iframe**; cartão estático com botão "Abrir no Google Maps / Traçar rota" (performance e privacidade).

## 9. Conteúdo (copy final, pt-BR, sem inventar fato)
- **Home H1:** "Treino de verdade, com a família ZN." **Sub:** "CrossFit e HYROX no Tucuruvi, com aulas das 6h30 às 21h e coaches que acompanham cada treino." *(os "coaches que acompanham" é afirmação de avaliações de terceiros: usar "aulas conduzidas por coaches" apenas)*.
- **Blocos Home:** Próxima aula · Modalidades (CrossFit, HYROX, Ginásticos, L.P.O, Cross Kids) · "Para quem nunca treinou" (aulas são escaláveis; confirmar com dono) · Estrutura (apenas o que foi visto: mezanino de convivência, espaço amplo; fotos pendentes) · Como chegar · Instagram · CTA final.
- **FAQ (Home e Contato):** Preciso estar em forma? · Como agendo a aula experimental? (ligar ou WhatsApp; `[CONFIRMAR]` se é gratuita) · Qual o horário de funcionamento? · O que é HYROX? · Cross Kids: a partir de que idade? (`[CONFIRMAR]`, texto "consulte a recepção") · Tem estacionamento? (`[CONFIRMAR]`).
- **Páginas educativas:** "O que é CrossFit" e "O que é HYROX" dentro das próprias páginas (8 estações de exercício intercaladas por 1 km de corrida — descrição pública do formato; sem citar recordes).
- **Tom:** direto, acolhedor, frases curtas, "você". **Avisos:** "Treinos devem ser acompanhados por profissionais; consulte seu médico antes de iniciar atividade física." Horários sujeitos a alteração (feriados).

## 10. SEO
- **Termos:** crossfit tucuruvi, crossfit zona norte sp, hyrox são paulo, treino hyrox zona norte, box de crossfit tucuruvi, cross kids zona norte, aula experimental crossfit.
- **Títulos (≤ 60):** Home "CrossFit e HYROX no Tucuruvi | Centro de Treinamento ZN" · CrossFit "CrossFit no Tucuruvi, zona norte SP | CT ZN" · HYROX "Treino de HYROX na zona norte de SP | CT ZN" · Horários "Horários das aulas | Centro de Treinamento ZN" · Contato "Contato e como chegar | CT ZN".
- Meta description única (≤ 155) por página; canonical via `SITE_URL`; OG/Twitter com imagem 1200×630 gerada com a marca; `sitemap.xml`, `robots.txt`.
- **JSON-LD:** `ExerciseGym` (ou `SportsActivityLocation`) na Home/Contato com NAP **idêntico ao Maps**, `openingHoursSpecification`, `geo`, `sameAs` (Instagram); `aggregateRating` **só se o dono validar** (não incluir por padrão); `FAQPage` nas FAQs; `BreadcrumbList` nas internas.
- Links internos: Home ↔ modalidades ↔ horários ↔ contato.
- **Checklist Google Meu Negócio (dono):** categoria principal "Academia de CrossFit"; incluir serviços (CrossFit, HYROX, Cross Kids, L.P.O); URL do site; WhatsApp; fotos reais; postagens semanais; responder avaliações; horário de feriado atualizado.
- **Analytics:** nenhum por padrão. Se o dono quiser, evento `click_call`, `click_whatsapp`, `click_route` só com consentimento.

## 11. Performance e acessibilidade
- Metas: seção 6. HTML estático, CSS único crítico, JS < 15 KB (apenas "próxima aula", filtro de horários e menu). Imagens AVIF/WebP com `width/height`, `loading=lazy` abaixo da dobra; sem hotlink; fontes WOFF2 subset latin.
- WCAG 2.1 AA: foco visível, navegação por teclado, `lang="pt-BR"`, skip link, `prefers-reduced-motion`, alvos de toque ≥ 44 px, `alt` descritivo, hierarquia de títulos, tabela de horários com `<th scope>`. Testar em 360 px.

## 12. Segurança e privacidade
- Sem formulário, sem login, sem backend ⇒ superfície mínima. Nenhum segredo no cliente; o número de WhatsApp vem de variável pública `PUBLIC_WHATSAPP` (é dado público, não segredo).
- **Headers:** CSP restritiva (`default-src 'self'`; `img-src 'self' data:`; sem scripts de terceiros), HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` vazia, `X-Frame-Options: DENY`. Entregues em `vercel.json` e `public/.htaccess` (hospedagem Vercel ou Hostinger).
- Links externos com `rel="noopener noreferrer"`. `npm audit` limpo no build; lockfile versionado. LGPD: `/privacidade` explica que o site não coleta dados nem usa cookies de rastreio.

## 13. Stack e estrutura
- **Astro 5 (estático) + Tailwind CSS v4 + TypeScript.** Motivo: conteúdo majoritariamente estático, zero JS por padrão, SEO e performance máximas, páginas e dados fáceis de editar.
- Dados editáveis do dono em `src/data/` : `site.ts` (NAP, horários de funcionamento, redes), `schedule.ts` (grade), `faq.ts`, `modalities.ts`, `reviews.ts` (vazio ⇒ seção oculta).
- Variáveis: `PUBLIC_SITE_URL`, `PUBLIC_WHATSAPP` (somente dígitos com DDI, ex.: 5511…). Sem WhatsApp ⇒ botão oculto.

## 14. Assets e política de imagens
| Arquivo | O que mostra | Resolução | Origem | Uso |
|---|---|---|---|---|
| `logo-zn.png` (gerado do envio do dono, recorte circular) | Selo ZN | 893×879 | Dono | Header, rodapé, favicon, OG |
| Miniaturas do Maps/story | pódio, mural, bar, atleta | baixa | Print | **Não usar** (só referência) |
- Regras: foto do cliente primeiro; miniatura de Maps/Instagram **não** serve para hero; hero ≥ 1600 px, conteúdo ≥ 800 px; sem repetição; sem fotos de banco.
- **Sem fotos prontas, o site usa composição tipográfica/SVG (placar, asas) e blocos "Foto necessária" apenas em modo desenvolvimento (não visíveis ao público).**
- **Fotos necessárias (cliente):** fachada; box vazio amplo (hero); aula em andamento; HYROX (sled, remo, SkiErg); mezanino/bar; coaches (com autorização); Cross Kids (com autorização dos responsáveis); logo em PNG transparente/vetor.

## 15. Processo e QA
1. Base (tokens, layout, dados) → 2. Home → **gate visual 1 (Home em 390 e 1440 px)** → 3. demais páginas → 4. QA: web-design-guidelines → web-perf → seo-audit → security-and-hardening → 5. **gate visual final em 390, 768 e 1440 px com ao menos um ciclo de correção** → 6. README + relatório de pendências.

## 16. Critérios de aceite
- [ ] 6 páginas existem e navegam; `sitemap.xml` e `robots.txt` válidos.
- [ ] NAP, telefone e horários idênticos aos fatos da seção 2.
- [ ] Grade de aulas igual ao JSON (e aviso de confirmação visível).
- [ ] Nenhum dado inventado; seções sem dado ficam ocultas.
- [ ] CTA "Agendar aula" acima da dobra a 360×740; barra inferior mobile funcional (`tel:`, WhatsApp se configurado, Maps).
- [ ] Sem scroll horizontal em 360/390/768/1440 px.
- [ ] Contraste AA, foco por teclado, skip link, `reduced-motion`.
- [ ] Lighthouse ≥ 95 (perf, a11y, boas práticas, SEO) em mobile.
- [ ] JSON-LD válido; títulos/descrições únicos; canonical correto.
- [ ] Headers de segurança presentes; `npm audit` sem críticas; build e `astro check` limpos.
- [ ] Nenhuma imagem de terceiro/miniatura; logo nítido.

## 17. Fontes
- Bendito Guia — Centro de Treinamento ZN Tucuruvi (acesso 29/10/2026): https://www.benditoguia.com.br/empresa/centro-de-treinamento-zn-tucuruvi-sao-paulo
- TotalPass — página do CT ZN (informa que não é mais parceiro) (acesso 29/10/2026): https://totalpass.com/br/academias/centro-de-treinamento-zn/
- Mercado & Consumo — Amazon fecha parceria global com HYROX (15/10/2026): https://mercadoeconsumo.com.br/15/10/2026/ecommerce/amazon-fecha-parceria-global-com-hyrox-para-ampliar-presenca-no-mercado-fitness/
- Prommer — HYROX Training em São Paulo: https://www.prommer.net/pt/training/hyrox/treino/sao-paulo/
- Visit São Paulo — HYROX 2026: https://visitesaopaulo.com/evento/hyrox-2026/
- Wellhub — CF Tucuruvi; Cross Nutrition Box Tucuruvi (diretórios de concorrentes).
- Prints do dono: logo, story @AULAS "Horários de Aulas", Google Maps (horários, endereço, telefone).
