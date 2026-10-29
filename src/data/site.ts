// Dados públicos do CT ZN. Fonte: Google Maps, story de horários e logo (docs/spec/centro-de-treinamento-zn.md §2).
export const site = {
  name: 'Centro de Treinamento ZN',
  short: 'CT ZN',
  url: (import.meta.env.PUBLIC_SITE_URL as string | undefined) || 'https://www.ctzn.com.br',
  phone: { display: '(11) 3567-4884', tel: '+551135674884' },
  whatsapp: ((import.meta.env.PUBLIC_WHATSAPP as string | undefined) || '').replace(/\D/g, ''),
  whatsappMessage: 'Olá! Quero agendar uma aula experimental no CT ZN.',
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
export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : null;
