import type { ClassKind } from './schedule';

export const modalities: { kind: ClassKind; name: string; text: string; href?: string }[] = [
  {
    kind: 'crossfit',
    name: 'CrossFit',
    text: 'Treino funcional em grupo, conduzido por coach, com movimentos variados feitos em alta intensidade e escalados para cada nível.',
    href: '/crossfit',
  },
  {
    kind: 'hyrox',
    name: 'HYROX',
    text: 'Corrida e estações de força combinadas: o preparo para a prova que reúne corredores e atletas de box.',
    href: '/hyrox',
  },
  { kind: 'ginasticos', name: 'Ginásticos', text: 'Aula focada em barras, argolas e movimentos de ginástica: base, controle e técnica.' },
  { kind: 'lpo', name: 'L.P.O', text: 'Levantamento de peso olímpico: arranco e arremesso trabalhados com técnica e progressão de carga.' },
  { kind: 'cross-kids', name: 'Cross Kids', text: 'Treino para crianças com orientação de coach. Consulte a recepção sobre idades e turmas.' },
];
