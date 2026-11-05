// Dados públicos do CT ZN. Fonte: Google Maps, story de horários e logo (docs/spec/centro-de-treinamento-zn.md §2).
import { content, SITE_URL } from '../content/site';

export const site = {
  name: 'Centro de Treinamento ZN',
  short: 'CT ZN',
  url: SITE_URL,
  phone: { display: '(11) 3567-4884', tel: '+551135674884' },
  whatsapp: content.whatsapp.replace(/\D/g, ''),
  address: {
    street: 'Av. Nova Cantareira, 4066',
    district: 'Tucuruvi',
    city: 'São Paulo',
    state: 'SP',
    zip: '02330-000',
  },
  geo: { lat: -23.4651031, lng: -46.6163024 },
  instagram: { handle: '@ct_zn_', url: 'https://www.instagram.com/ct_zn_/' },
  // 0 = domingo … 6 = sábado
  hours: [
    { days: [1, 2, 3, 4], label: 'Segunda a quinta', open: '06:30', close: '22:00' },
    { days: [5], label: 'Sexta', open: '06:30', close: '21:00' },
    { days: [6], label: 'Sábado', open: '08:00', close: '12:00' },
    { days: [0], label: 'Domingo', open: null, close: null },
  ],
} as const;

export const fullAddress = `${site.address.street} – ${site.address.district}, ${site.address.city} – ${site.address.state}, ${site.address.zip}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Centro de Treinamento ZN ${site.address.street} ${site.address.district} ${site.address.city}`,
)}`;
export const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`;
const messages = {
  hyrox: 'Olá! Vi o site do CT ZN e quero agendar uma aula experimental de HYROX.',
  crossfit: 'Olá! Vi o site do CT ZN e quero agendar uma aula experimental de CrossFit.',
  default: 'Olá! Vi o site do CT ZN e quero agendar uma aula experimental.',
};
const waUrl = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const whatsappUrl = site.whatsapp ? waUrl(messages.default) : null;
export const hasWhatsapp = Boolean(site.whatsapp);
/** Canal ativo do CTA: WhatsApp quando preenchido, senão ligação. */
export const channelText = hasWhatsapp ? 'pelo WhatsApp' : 'por telefone';

/** Destino do CTA "Agendar aula experimental" para a página atual. */
export function ctaFor(pathname: string) {
  if (!hasWhatsapp) return { href: `tel:${site.phone.tel}`, external: false };
  const msg = pathname.includes('hyrox') ? messages.hyrox : pathname.includes('crossfit') ? messages.crossfit : messages.default;
  return { href: waUrl(msg), external: true };
}
