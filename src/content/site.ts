// ============================================================================
// CONTEÚDO EDITÁVEL DO SITE (arquivo único)
// Todo campo vazio abaixo faz a seção/linha correspondente NÃO aparecer no site.
// Preencha aqui e publique: nada mais precisa mudar no código.
// ============================================================================

// URL base do site (canonical, og:url, og:image, sitemap, robots).
// Fase atual: URL de produção da Vercel.
// Quando o domínio for conectado, troque por: 'https://www.ctzn.com.br'
export const SITE_URL = 'https://teste3-torelli-s-team.vercel.app';

type Foto = { src: string; alt: string };

export const content = {
  // WhatsApp do CT ZN: só dígitos com DDI, ex. '5511999999999'.
  // Vazio = os botões usam ligação para (11) 3567-4884.
  whatsapp: '',

  // Condição da primeira aula, ex. 'grátis'. Vazio = a linha não aparece.
  aulaExperimental: '',

  // Fotos de treino (WebP em /public/fotos). Slot com src vazio não renderiza.
  // Hero: 1600×900. Faixa: 3 fotos de 800×600.
  fotos: {
    hero: { src: '', alt: '' } as Foto, // hero da home
    crossfit: { src: '', alt: '' } as Foto, // hero de /crossfit
    hyrox: { src: '', alt: '' } as Foto, // hero de /hyrox
    faixa: [] as Foto[], // faixa de 3 fotos na home
  },

  // Equipe: { nome, especialidade, foto?: { src, alt } }
  coaches: [] as { nome: string; especialidade: string; foto?: Foto }[],

  // Depoimentos reais e autorizados (máx. 3): { texto, autor }
  depoimentos: [] as { texto: string; autor: string }[],
};
