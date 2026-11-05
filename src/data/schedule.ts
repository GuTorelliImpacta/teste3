// Grade decodificada do story "Horários de Aulas". [CONFIRMAR] com o dono antes de publicar.
export type ClassKind = 'crossfit' | 'ginasticos' | 'cross-kids' | 'lpo' | 'hyrox';
export type Day = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab';
export type Slot = { t: string; kind: ClassKind };

export const kindLabel: Record<ClassKind, string> = {
  crossfit: 'CrossFit',
  ginasticos: 'Ginásticos',
  'cross-kids': 'Cross Kids',
  lpo: 'L.P.O',
  hyrox: 'HYROX',
};

export const days: { id: Day; label: string; short: string; dow: number }[] = [
  { id: 'seg', label: 'Segunda', short: 'Seg', dow: 1 },
  { id: 'ter', label: 'Terça', short: 'Ter', dow: 2 },
  { id: 'qua', label: 'Quarta', short: 'Qua', dow: 3 },
  { id: 'qui', label: 'Quinta', short: 'Qui', dow: 4 },
  { id: 'sex', label: 'Sexta', short: 'Sex', dow: 5 },
  { id: 'sab', label: 'Sábado', short: 'Sáb', dow: 6 },
];

const cf = (...t: string[]): Slot[] => t.map((x) => ({ t: x, kind: 'crossfit' }));
const hx = (...t: string[]): Slot[] => t.map((x) => ({ t: x, kind: 'hyrox' }));
const k = (t: string, kind: ClassKind): Slot => ({ t, kind });

const raw: Record<Day, Slot[]> = {
  seg: [...cf('06:30', '07:30', '14:00', '16:00', '18:00', '19:00', '20:00', '21:00'), ...hx('12:00', '17:00')],
  ter: [...cf('06:30', '07:30', '12:00', '15:00', '16:00', '17:00', '18:00'), k('18:15', 'cross-kids'), ...cf('19:00', '20:00'), ...hx('08:30', '21:00')],
  qua: [...cf('06:30', '07:30', '12:00', '16:00', '18:00', '19:00'), k('20:00', 'ginasticos'), ...cf('21:00'), ...hx('14:00', '17:00')],
  qui: [...cf('06:30', '07:30', '12:00', '15:00', '16:00', '17:00', '18:00'), k('18:15', 'cross-kids'), ...cf('19:00'), k('20:00', 'lpo'), ...hx('08:30', '21:00')],
  sex: [...cf('06:30', '12:00', '15:00', '16:00', '18:00', '19:00', '20:00'), ...hx('07:30', '17:00')],
  sab: [...cf('08:00', '09:00'), ...hx('10:00')],
};

export const schedule: Record<Day, Slot[]> = Object.fromEntries(
  (Object.keys(raw) as Day[]).map((d) => [d, [...raw[d]].sort((a, b) => a.t.localeCompare(b.t))]),
) as Record<Day, Slot[]>;

export const count = (kinds: ClassKind[]) =>
  Object.values(schedule).reduce((n, list) => n + list.filter((s) => kinds.includes(s.kind)).length, 0);

export const weeklyHyrox = count(['hyrox']);
export const weeklyTotal = count(['crossfit', 'ginasticos', 'cross-kids', 'lpo', 'hyrox']);
