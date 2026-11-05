// Interações do site: próxima aula, aberto agora, dia de hoje e filtro da grade. Sem dependências.
type Slot = { t: string; kind: string };
type Data = {
  days: { id: string; label: string; dow: number }[];
  schedule: Record<string, Slot[]>;
  labels: Record<string, string>;
  hours: { days: number[]; open: string | null; close: string | null }[];
};

const el = document.getElementById('zn-data');
const data: Data | null = el ? JSON.parse(el.textContent || 'null') : null;

const spNow = () => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value || '';
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { dow, min: Number(get('hour')) * 60 + Number(get('minute')) };
};
const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));
const fmt = (t: string) => (t.endsWith(':00') ? `${Number(t.slice(0, 2))}h` : `${Number(t.slice(0, 2))}h${t.slice(3)}`);

function nextClass(kinds: string[] | null) {
  if (!data) return;
  const now = spNow();
  for (let add = 0; add < 8; add++) {
    const dow = (now.dow + add) % 7;
    const day = data.days.find((d) => d.dow === dow);
    if (!day) continue;
    const slot = data.schedule[day.id].find((s) => (!kinds || kinds.includes(s.kind)) && (add > 0 || toMin(s.t) > now.min));
    if (slot) return { add, day, slot, diff: add * 1440 + toMin(slot.t) - now.min };
  }
}

function openNow() {
  if (!data) return false;
  const now = spNow();
  const h = data.hours.find((x) => x.days.includes(now.dow));
  return !!(h && h.open && h.close && now.min >= toMin(h.open) && now.min < toMin(h.close));
}

function render() {
  const open = openNow();
  document.querySelectorAll<HTMLElement>('[data-next]').forEach((box) => {
    const n = nextClass(box.dataset.kinds ? box.dataset.kinds.split(',') : null);
    if (n && data) {
      const mins = n.diff % 60;
      const when =
        n.diff < 60 ? `começa em ${n.diff} min`
        : n.add === 0 ? `hoje, em ${Math.floor(n.diff / 60)}h${mins ? (mins < 10 ? '0' : '') + mins : ''}`
        : n.add === 1 ? 'amanhã'
        : n.day.label.toLowerCase();
      box.querySelector('[data-next-time]')!.textContent = fmt(n.slot.t);
      box.querySelector('[data-next-kind]')!.textContent = data.labels[n.slot.kind];
      box.querySelector('[data-next-when]')!.textContent = `Próxima aula: ${when}`;
    }
    const live = box.querySelector<HTMLElement>('[data-open]');
    if (live) {
      live.dataset.open = String(open);
      live.textContent = open ? 'Aberto agora' : 'Fechado agora';
    }
  });
}

function markToday() {
  const { dow } = spNow();
  document.querySelectorAll<HTMLElement>('[data-dow]').forEach((node) => {
    const days = node.dataset.days ? node.dataset.days.split(',').map(Number) : [Number(node.dataset.dow)];
    if (days.includes(dow)) {
      node.dataset.today = 'true';
      node.querySelector('[data-today-tag]')?.removeAttribute('hidden');
    }
  });
}

function tabs() {
  const root = document.querySelector<HTMLElement>('[data-sched]');
  if (!root) return;
  const tabEls = [...root.querySelectorAll<HTMLButtonElement>('[role=tab]')];
  const panels = tabEls.map((t) => document.getElementById(t.getAttribute('aria-controls')!)!);
  root.classList.add('is-tabs');
  document.documentElement.classList.add('has-tabs');
  const select = (i: number, focus = false) => {
    tabEls.forEach((t, k) => {
      t.setAttribute('aria-selected', String(k === i));
      t.tabIndex = k === i ? 0 : -1;
      panels[k].hidden = k !== i;
    });
    if (focus) tabEls[i].focus();
  };
  const { dow } = spNow();
  const start = tabEls.findIndex((t) => Number(t.dataset.dow) === dow);
  select(start >= 0 ? start : 0);
  tabEls.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const last = tabEls.length - 1;
      const to = e.key === 'ArrowRight' ? (i === last ? 0 : i + 1) : e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1) : e.key === 'Home' ? 0 : e.key === 'End' ? last : -1;
      if (to >= 0) { e.preventDefault(); select(to, true); }
    });
  });
}

function filters() {
  const chips = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      const kind = chip.dataset.filter!;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      document.querySelectorAll<HTMLElement>('.slot').forEach((s) => {
        s.hidden = kind !== 'all' && s.dataset.kind !== kind;
      });
    }),
  );
}

function reveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js');
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  items.forEach((n, i) => { n.style.setProperty('--i', String(i % 6)); io.observe(n); });
}

function dock() {
  const bar = document.querySelector<HTMLElement>('.dock');
  const targets = document.querySelectorAll('[data-hide-dock]');
  if (!bar || !targets.length || !('IntersectionObserver' in window)) return;
  const seen = new Set<Element>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
    bar.dataset.away = String(seen.size > 0);
  });
  targets.forEach((t) => io.observe(t));
}

render();
reveal();
dock();
markToday();
tabs();
filters();
setInterval(render, 30000);
