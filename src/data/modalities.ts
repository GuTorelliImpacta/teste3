import type { ClassKind } from './schedule';

export const modalities: { kind: ClassKind; name: string; short: string; text: string; href?: string; featured?: boolean }[] = [
  {
    kind: 'crossfit',
    name: 'CrossFit',
    short: 'Treino funcional em grupo, com coach, para todos os níveis.',
    text: 'Treino funcional em grupo, conduzido por coach, com movimentos variados feitos em alta intensidade e escalados para cada nível.',
    href: '/crossfit',
    featured: true,
  },
  {
    kind: 'hyrox',
    name: 'HYROX',
    short: 'Corrida e estações de força: o preparo para a prova.',
    text: 'Corrida e estações de força combinadas: o preparo para a prova que reúne corredores e atletas de box.',
    href: '/hyrox',
    featured: true,
  },
  { kind: 'ginasticos', name: 'Ginásticos', short: 'Barras, argolas e técnica.', text: 'Aula focada em barras, argolas e movimentos de ginástica: base, controle e técnica.' },
  { kind: 'lpo', name: 'L.P.O', short: 'Arranco, arremesso e técnica.', text: 'Levantamento de peso olímpico: arranco e arremesso trabalhados com técnica e progressão de carga.' },
  { kind: 'cross-kids', name: 'Cross Kids', short: 'Treino para crianças.', text: 'Treino para crianças com orientação de coach. Consulte a recepção sobre idades e turmas.' },
];
