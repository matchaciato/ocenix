import type { ReactNode } from 'react'
import type { PropItem } from '@/components/docs/PropsTable'
import {
  AccordionDemo,
  AvatarDemo,
  BadgeDemo,
  BentoGridDemo,
  BorderBeamDemo,
  ButtonDemo,
  CardDemo,
  DialogDemo,
  InputDemo,
  MarqueeDemo,
  MeteorsDemo,
  ShimmerButtonDemo,
  SwitchDemo,
  TabsDemo,
  TextareaDemo,
  TooltipDemo,
} from '@/components/docs/component-demos'

export interface ComponentDemo {
  title: string
  description: string
  html: string
  css: string
  js: string
  code?: string
  preview: ReactNode
  props: PropItem[]
}

export const componentRegistry: Record<string, ComponentDemo> = {
  button: {
    title: 'Button',
    description: 'Komponen tombol interaktif native dengan ragam varian, ukuran, dan status loading spinner.',
    html: `<button type="button" class="ox-btn ox-btn-primary">Primary Action</button>
<button type="button" class="ox-btn ox-btn-secondary">Secondary</button>
<button type="button" class="ox-btn ox-btn-outline">Outline</button>
<button type="button" class="ox-btn ox-btn-ghost">Ghost</button>
<button type="button" class="ox-btn ox-btn-destructive">Destructive</button>
<button type="button" class="ox-btn ox-btn-primary is-loading" id="btnLoading">
  <span class="ox-spinner" aria-hidden="true"></span>
  <span>Loading...</span>
</button>`,
    css: `.ox-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius, 0.5rem);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.ox-btn:focus-visible {
  outline: 2px solid var(--ring, #09090b);
  outline-offset: 2px;
}

.ox-btn:disabled,
.ox-btn.is-loading {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.ox-btn-primary {
  background-color: var(--primary, #09090b);
  color: var(--primary-foreground, #ffffff);
}

.ox-btn-primary:hover {
  opacity: 0.9;
}

.ox-btn-secondary {
  background-color: var(--secondary, #f4f4f5);
  color: var(--secondary-foreground, #18181b);
}

.ox-btn-outline {
  background-color: transparent;
  border-color: var(--border, #e4e4e7);
  color: var(--foreground, #09090b);
}

.ox-btn-ghost {
  background-color: transparent;
  color: var(--foreground, #09090b);
}

.ox-btn-destructive {
  background-color: var(--destructive, #ef4444);
  color: #ffffff;
}

.ox-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ox-spin 0.6s linear infinite;
}

@keyframes ox-spin {
  to { transform: rotate(360deg); }
}`,
    js: `document.querySelectorAll('.ox-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    if (this.id === 'btnLoading') {
      this.classList.toggle('is-loading');
    }
  });
});`,
    preview: <ButtonDemo />,
    props: [
      {
        prop: 'class="ox-btn-primary"',
        type: 'CSS Class',
        default: 'none',
        description: 'Varian visual warna primer untuk aksi tombol utama.',
      },
      {
        prop: 'class="ox-btn-secondary"',
        type: 'CSS Class',
        default: 'none',
        description: 'Varian sekunder dengan latar belakang netral lembut.',
      },
      {
        prop: 'class="is-loading"',
        type: 'CSS State Class',
        default: 'none',
        description: 'Menampilkan animasi spinner dan mengunci interaksi klik.',
      },
      {
        prop: 'disabled',
        type: 'HTML Attribute',
        default: 'false',
        description: 'Menonaktifkan aksi dan mengubah pointer tombol secara native.',
      },
    ],
  },
  card: {
    title: 'Card',
    description: 'Komponen kontainer berbasis semantik HTML untuk mengelompokkan informasi terstruktur.',
    html: `<div class="ox-card">
  <div class="ox-card-header">
    <h3 class="ox-card-title">Create project</h3>
    <p class="ox-card-description">Deploy your new project in one-click.</p>
  </div>
  <div class="ox-card-content">
    <p>Project configuration details and environment setup...</p>
  </div>
  <div class="ox-card-footer">
    <button type="button" class="ox-btn ox-btn-outline">Cancel</button>
    <button type="button" class="ox-btn ox-btn-primary">Deploy</button>
  </div>
</div>`,
    css: `.ox-card {
  border-radius: var(--radius, 0.5rem);
  border: 1px solid var(--border, #e4e4e7);
  background-color: var(--card, #ffffff);
  color: var(--card-foreground, #09090b);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.ox-card-header {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.ox-card-title {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  margin: 0;
}

.ox-card-description {
  font-size: 0.875rem;
  color: var(--muted-foreground, #71717a);
  margin: 0;
}

.ox-card-content {
  padding: 0 1.5rem 1.5rem;
  font-size: 0.875rem;
}

.ox-card-footer {
  padding: 1.5rem;
  padding-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}`,
    js: `document.querySelectorAll('.ox-card[data-interactive="true"]').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-2px)';
    card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});`,
    preview: <CardDemo />,
    props: [
      {
        prop: 'class="ox-card"',
        type: 'CSS Class',
        default: 'none',
        description: 'Kelas pembungkus kontainer kartu dengan border dan bayangan halus.',
      },
      {
        prop: 'class="ox-card-header"',
        type: 'CSS Class',
        default: 'none',
        description: 'Bagian kepala kartu untuk judul dan sub-deskripsi.',
      },
      {
        prop: 'class="ox-card-footer"',
        type: 'CSS Class',
        default: 'none',
        description: 'Bagian bawah kartu untuk tombol aksi atau metadata tambahan.',
      },
    ],
  },
  input: {
    title: 'Input',
    description: 'Field input native berkinerja tinggi dengan dukungan prefix icon dan focus ring yang jelas.',
    html: `<div class="ox-input-group">
  <span class="ox-input-icon">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </span>
  <input
    type="text"
    id="searchInput"
    class="ox-input"
    placeholder="Search documentation..."
  />
</div>`,
    css: `.ox-input-group {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.ox-input-icon {
  position: absolute;
  left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: var(--muted-foreground, #71717a);
}

.ox-input {
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0.75rem 0.5rem 2.25rem;
  font-size: 0.875rem;
  border-radius: var(--radius, 0.5rem);
  border: 1px solid var(--border, #e4e4e7);
  background-color: var(--background, #ffffff);
  color: var(--foreground, #09090b);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.ox-input:focus {
  outline: none;
  border-color: var(--ring, #09090b);
  box-shadow: 0 0 0 1px var(--ring, #09090b);
}

.ox-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--muted, #f4f4f5);
}`,
    js: `const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    console.log('Search query:', query);
  });
}`,
    preview: <InputDemo />,
    props: [
      {
        prop: 'class="ox-input"',
        type: 'CSS Class',
        default: 'none',
        description: 'Kelas gaya input native dengan padding dan border konsisten.',
      },
      {
        prop: 'class="ox-input-group"',
        type: 'CSS Class',
        default: 'none',
        description: 'Kontainer pembungkus untuk penyelarasan ikon prefix/suffix.',
      },
    ],
  },
  switch: {
    title: 'Switch',
    description: 'Kontrol toggle dua status yang aksesibel sesuai standar WAI-ARIA switch pattern.',
    html: `<div class="ox-switch-container">
  <button
    type="button"
    role="switch"
    aria-checked="false"
    id="themeSwitch"
    class="ox-switch"
  >
    <span class="ox-switch-thumb"></span>
  </button>
  <label for="themeSwitch" class="ox-switch-label">Airplane Mode</label>
</div>`,
    css: `.ox-switch-container {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.ox-switch {
  position: relative;
  display: inline-flex;
  height: 1.5rem;
  width: 2.75rem;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 9999px;
  border: 2px solid transparent;
  background-color: var(--input, #e4e4e7);
  transition: background-color 0.2s ease;
}

.ox-switch:focus-visible {
  outline: 2px solid var(--ring, #09090b);
  outline-offset: 2px;
}

.ox-switch[aria-checked="true"] {
  background-color: var(--primary, #09090b);
}

.ox-switch-thumb {
  pointer-events: none;
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 9999px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transform: translateX(0);
  transition: transform 0.2s ease;
}

.ox-switch[aria-checked="true"] .ox-switch-thumb {
  transform: translateX(1.25rem);
}

.ox-switch-label {
  font-size: 0.875rem;
  cursor: pointer;
  user-select: none;
}`,
    js: `document.querySelectorAll('.ox-switch').forEach((switchEl) => {
  switchEl.addEventListener('click', function () {
    const isChecked = this.getAttribute('aria-checked') === 'true';
    this.setAttribute('aria-checked', String(!isChecked));
  });

  switchEl.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this.click();
    }
  });
});`,
    preview: <SwitchDemo />,
    props: [
      {
        prop: 'role="switch"',
        type: 'ARIA Attribute',
        default: "'switch'",
        description: 'Atribut aksesibilitas yang mendefinisikan elemen sebagai saklar toggle.',
      },
      {
        prop: 'aria-checked="true|false"',
        type: 'ARIA State',
        default: "'false'",
        description: 'Status nilai aktif saklar untuk screen reader dan selector styling CSS.',
      },
    ],
  },
  badge: {
    title: 'Badge',
    description: 'Indikator status kecil berbentuk pill untuk kategori atau tag numerik.',
    html: `<span class="ox-badge ox-badge-default">Default</span>
<span class="ox-badge ox-badge-secondary">Secondary</span>
<span class="ox-badge ox-badge-outline">Outline</span>
<span class="ox-badge ox-badge-success">Success</span>
<span class="ox-badge ox-badge-destructive">Destructive</span>`,
    css: `.ox-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  transition: background-color 0.15s ease, color 0.15s ease;
  border: 1px solid transparent;
}

.ox-badge-default {
  background-color: var(--primary, #09090b);
  color: var(--primary-foreground, #ffffff);
}

.ox-badge-secondary {
  background-color: var(--secondary, #f4f4f5);
  color: var(--secondary-foreground, #18181b);
}

.ox-badge-outline {
  border-color: var(--border, #e4e4e7);
  color: var(--foreground, #09090b);
}

.ox-badge-success {
  background-color: #ecfdf5;
  color: #047857;
  border-color: #a7f3d0;
}

.ox-badge-destructive {
  background-color: #fef2f2;
  color: #b91c1c;
  border-color: #fecaca;
}`,
    js: `document.querySelectorAll('.ox-badge[data-dismissible="true"]').forEach((badge) => {
  const closeBtn = badge.querySelector('.ox-badge-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => badge.remove());
  }
});`,
    preview: <BadgeDemo />,
    props: [
      {
        prop: 'class="ox-badge-default"',
        type: 'CSS Class',
        default: 'none',
        description: 'Latar gelap primer untuk badge status utama.',
      },
      {
        prop: 'class="ox-badge-success"',
        type: 'CSS Class',
        default: 'none',
        description: 'Latar hijau emerald untuk status sukses atau aktif.',
      },
    ],
  },
  dialog: {
    title: 'Dialog (Modal)',
    description: 'Jendela dialog modal native dengan backdrop filter blur, penangkap tombol Escape, dan pengunci scroll latar.',
    html: `<button type="button" class="ox-btn ox-btn-primary" id="openDialogBtn">
  Open Dialog
</button>

<div class="ox-dialog-overlay" id="dialogOverlay" hidden>
  <div class="ox-dialog-content" role="dialog" aria-modal="true" aria-labelledby="dialogTitle">
    <div class="ox-dialog-header">
      <h3 id="dialogTitle" class="ox-dialog-title">Are you sure?</h3>
      <p class="ox-dialog-description">This action cannot be undone. This will permanently delete your project data.</p>
    </div>
    <div class="ox-dialog-footer">
      <button type="button" class="ox-btn ox-btn-outline" id="cancelDialogBtn">Cancel</button>
      <button type="button" class="ox-btn ox-btn-destructive" id="confirmDialogBtn">Continue</button>
    </div>
  </div>
</div>`,
    css: `.ox-dialog-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 1rem;
}

.ox-dialog-overlay[hidden] {
  display: none !important;
}

.ox-dialog-content {
  position: relative;
  width: 100%;
  max-width: 32rem;
  border-radius: var(--radius, 0.5rem);
  background-color: var(--card, #ffffff);
  border: 1px solid var(--border, #e4e4e7);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  animation: ox-dialog-zoom 0.15s ease-out;
}

.ox-dialog-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.ox-dialog-description {
  font-size: 0.875rem;
  color: var(--muted-foreground, #71717a);
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.ox-dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

@keyframes ox-dialog-zoom {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
    js: `const openBtn = document.getElementById('openDialogBtn');
const overlay = document.getElementById('dialogOverlay');
const cancelBtn = document.getElementById('cancelDialogBtn');
const confirmBtn = document.getElementById('confirmDialogBtn');

function openDialog() {
  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDialog() {
  overlay.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

if (openBtn && overlay) {
  openBtn.addEventListener('click', openDialog);
  cancelBtn?.addEventListener('click', closeDialog);
  confirmBtn?.addEventListener('click', closeDialog);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDialog();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) {
      closeDialog();
    }
  });
}`,
    preview: <DialogDemo />,
    props: [
      {
        prop: 'aria-modal="true"',
        type: 'ARIA Attribute',
        default: "'true'",
        description: 'Menginformasikan pembaca layar bahwa konten di luar dialog tidak dapat diinteraksi.',
      },
      {
        prop: 'hidden',
        type: 'HTML Attribute',
        default: 'true',
        description: 'Menyembunyikan overlay dialog saat dalam keadaan tertutup.',
      },
    ],
  },
  tooltip: {
    title: 'Tooltip',
    description: 'Overlay kontekstual singkat saat pengguna mengarahkan kursor atau fokus pada elemen.',
    html: `<div class="ox-tooltip-wrap">
  <button type="button" class="ox-btn ox-btn-outline" aria-describedby="tooltip-info">
    Hover Me
  </button>
  <div role="tooltip" id="tooltip-info" class="ox-tooltip ox-tooltip-top">
    Quick action description
    <div class="ox-tooltip-arrow"></div>
  </div>
</div>`,
    css: `.ox-tooltip-wrap {
  position: relative;
  display: inline-block;
}

.ox-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  opacity: 0;
  pointer-events: none;
  background-color: var(--primary, #09090b);
  color: var(--primary-foreground, #ffffff);
  font-size: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-sm, 0.25rem);
  white-space: nowrap;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: opacity 0.15s ease, transform 0.15s ease;
  z-index: 50;
}

.ox-tooltip-wrap:hover .ox-tooltip,
.ox-tooltip-wrap:focus-within .ox-tooltip {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.ox-tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -4px;
  border-width: 4px;
  border-style: solid;
  border-color: var(--primary, #09090b) transparent transparent transparent;
}`,
    js: `document.querySelectorAll('.ox-tooltip-wrap').forEach((wrap) => {
  const trigger = wrap.querySelector('button, a, input');
  const tooltip = wrap.querySelector('.ox-tooltip');
  if (trigger && tooltip) {
    trigger.addEventListener('focus', () => tooltip.classList.add('is-visible'));
    trigger.addEventListener('blur', () => tooltip.classList.remove('is-visible'));
  }
});`,
    preview: <TooltipDemo />,
    props: [
      {
        prop: 'role="tooltip"',
        type: 'ARIA Attribute',
        default: "'tooltip'",
        description: 'Standar ARIA untuk elemen tooltip deskripsi.',
      },
      {
        prop: 'aria-describedby',
        type: 'HTML Attribute',
        default: 'ID tooltip',
        description: 'Menghubungkan elemen pemicu dengan elemen tooltip terkait.',
      },
    ],
  },
  tabs: {
    title: 'Tabs',
    description: 'Antarmuka tab berlapis dengan dukungan aksesibilitas WAI-ARIA tablist dan tabpanel.',
    html: `<div class="ox-tabs" data-tabs>
  <div role="tablist" class="ox-tablist">
    <button role="tab" aria-selected="true" aria-controls="panel-overview" id="tab-overview" class="ox-tab is-active">
      Overview
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel-analytics" id="tab-analytics" class="ox-tab">
      Analytics
    </button>
  </div>
  <div role="tabpanel" id="panel-overview" aria-labelledby="tab-overview" class="ox-tabpanel">
    <p>Overview metrics and operational statistics...</p>
  </div>
  <div role="tabpanel" id="panel-analytics" aria-labelledby="tab-analytics" class="ox-tabpanel" hidden>
    <p>Detailed performance analytics and conversion logs...</p>
  </div>
</div>`,
    css: `.ox-tabs {
  width: 100%;
}

.ox-tablist {
  display: inline-flex;
  height: 2.5rem;
  align-items: center;
  border-radius: var(--radius, 0.5rem);
  background-color: var(--muted, #f4f4f5);
  padding: 0.25rem;
  gap: 0.25rem;
}

.ox-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: calc(var(--radius, 0.5rem) - 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  background: transparent;
  color: var(--muted-foreground, #71717a);
  cursor: pointer;
  transition: all 0.15s ease;
}

.ox-tab.is-active,
.ox-tab[aria-selected="true"] {
  background-color: var(--background, #ffffff);
  color: var(--foreground, #09090b);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.ox-tabpanel {
  margin-top: 1rem;
  font-size: 0.875rem;
}

.ox-tabpanel[hidden] {
  display: none !important;
}`,
    js: `document.querySelectorAll('[data-tabs]').forEach((tabsContainer) => {
  const tabs = tabsContainer.querySelectorAll('[role="tab"]');
  const panels = tabsContainer.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('is-active');
      });
      panels.forEach((p) => p.setAttribute('hidden', ''));

      tab.setAttribute('aria-selected', 'true');
      tab.classList.add('is-active');
      const targetPanel = tabsContainer.querySelector(\`#\${tab.getAttribute('aria-controls')}\`);
      if (targetPanel) targetPanel.removeAttribute('hidden');
    });
  });
});`,
    preview: <TabsDemo />,
    props: [
      {
        prop: 'role="tablist"',
        type: 'ARIA Attribute',
        default: "'tablist'",
        description: 'Mendefinisikan daftar kontainer tab.',
      },
      {
        prop: 'aria-selected="true|false"',
        type: 'ARIA State',
        default: "'false'",
        description: 'Status tab yang sedang aktif dipilih pengguna.',
      },
    ],
  },
  accordion: {
    title: 'Accordion',
    description: 'Daftar item vertikal native yang dapat dibuka dan ditutup dengan transisi tinggi halus.',
    html: `<div class="ox-accordion" data-accordion>
  <div class="ox-accordion-item">
    <button type="button" class="ox-accordion-trigger" aria-expanded="false" aria-controls="faq-native">
      <span>What makes Ocenix UI native?</span>
      <span class="ox-accordion-chevron">&rsaquo;</span>
    </button>
    <div id="faq-native" class="ox-accordion-content" hidden>
      <div class="ox-accordion-body">
        Ocenix UI provides standalone HTML5 markup, standard CSS variables, and lightweight Vanilla JS with zero runtime dependencies.
      </div>
    </div>
  </div>
  <div class="ox-accordion-item">
    <button type="button" class="ox-accordion-trigger" aria-expanded="false" aria-controls="faq-theme">
      <span>How does theming work?</span>
      <span class="ox-accordion-chevron">&rsaquo;</span>
    </button>
    <div id="faq-theme" class="ox-accordion-content" hidden>
      <div class="ox-accordion-body">
        Override CSS custom properties like --background, --foreground, and --primary directly in your stylesheet.
      </div>
    </div>
  </div>
</div>`,
    css: `.ox-accordion {
  width: 100%;
  border-top: 1px solid var(--border, #e4e4e7);
}

.ox-accordion-item {
  border-bottom: 1px solid var(--border, #e4e4e7);
}

.ox-accordion-trigger {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--foreground, #09090b);
}

.ox-accordion-trigger:hover {
  text-decoration: underline;
}

.ox-accordion-chevron {
  display: inline-block;
  font-size: 1.25rem;
  transform: rotate(0deg);
  transition: transform 0.2s ease;
}

.ox-accordion-trigger[aria-expanded="true"] .ox-accordion-chevron {
  transform: rotate(90deg);
}

.ox-accordion-content {
  overflow: hidden;
}

.ox-accordion-content[hidden] {
  display: none !important;
}

.ox-accordion-body {
  padding-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--muted-foreground, #71717a);
  line-height: 1.5;
}`,
    js: `document.querySelectorAll('[data-accordion]').forEach((acc) => {
  const triggers = acc.querySelectorAll('.ox-accordion-trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const content = acc.querySelector(\`#\${trigger.getAttribute('aria-controls')}\`);
      
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (content) {
        if (isExpanded) {
          content.setAttribute('hidden', '');
        } else {
          content.removeAttribute('hidden');
        }
      }
    });
  });
});`,
    preview: <AccordionDemo />,
    props: [
      {
        prop: 'aria-expanded="true|false"',
        type: 'ARIA State',
        default: "'false'",
        description: 'Status perluasan item akordion untuk aksesibilitas dan animasi panah chevron.',
      },
    ],
  },
  avatar: {
    title: 'Avatar',
    description: 'Elemen gambar profil pengguna dengan fallback inisial teks otomatis saat gambar gagal termuat.',
    html: `<div class="ox-avatar">
  <img
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop"
    alt="User profile"
    class="ox-avatar-img"
    loading="lazy"
  />
  <div class="ox-avatar-fallback">OX</div>
</div>`,
    css: `.ox-avatar {
  position: relative;
  display: inline-flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 9999px;
  background-color: var(--muted, #f4f4f5);
  border: 1px solid var(--border, #e4e4e7);
}

.ox-avatar-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.ox-avatar-fallback {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: var(--muted, #f4f4f5);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground, #71717a);
}`,
    js: `document.querySelectorAll('.ox-avatar-img').forEach((img) => {
  img.addEventListener('error', function () {
    this.style.display = 'none';
  });
});`,
    preview: <AvatarDemo />,
    props: [
      {
        prop: 'class="ox-avatar"',
        type: 'CSS Class',
        default: 'none',
        description: 'Pembungkus avatar berbentuk bulat dengan border dan background default.',
      },
    ],
  },
  textarea: {
    title: 'Textarea',
    description: 'Bidang input teks multi-baris yang responsif dengan konsistensi ring fokus.',
    html: `<div class="ox-textarea-wrap">
  <label for="feedbackMessage" class="ox-label">Your message</label>
  <textarea
    id="feedbackMessage"
    class="ox-textarea"
    rows="4"
    placeholder="Type your message here..."
  ></textarea>
</div>`,
    css: `.ox-textarea-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
}

.ox-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--foreground, #09090b);
}

.ox-textarea {
  width: 100%;
  min-height: 5rem;
  border-radius: var(--radius, 0.5rem);
  border: 1px solid var(--border, #e4e4e7);
  background-color: var(--background, #ffffff);
  color: var(--foreground, #09090b);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  resize: vertical;
  line-height: 1.5;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.ox-textarea:focus {
  outline: none;
  border-color: var(--ring, #09090b);
  box-shadow: 0 0 0 1px var(--ring, #09090b);
}

.ox-textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--muted, #f4f4f5);
}`,
    js: `document.querySelectorAll('textarea.ox-textarea[data-auto-resize]').forEach((textarea) => {
  textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = \`\${this.scrollHeight}px\`;
  });
});`,
    preview: <TextareaDemo />,
    props: [
      {
        prop: 'data-auto-resize',
        type: 'Data Attribute',
        default: 'none',
        description: 'Mengaktifkan penyesuaian tinggi otomatis berdasarkan panjang teks masukan.',
      },
    ],
  },
  'bento-grid': {
    title: 'Bento Grid',
    description: 'Sistem grid kartu interaktif dengan visual elevation modern berbasis CSS Grid native.',
    html: `<div class="ox-bento-grid">
  <div class="ox-bento-card ox-bento-col-2">
    <div class="ox-bento-content">
      <h3 class="ox-bento-title">Dynamic Animations</h3>
      <p class="ox-bento-desc">Hardware accelerated native motion running seamlessly in modern web browsers.</p>
    </div>
  </div>
  <div class="ox-bento-card">
    <div class="ox-bento-content">
      <h3 class="ox-bento-title">Native First</h3>
      <p class="ox-bento-desc">HTML5, CSS3, and standard Vanilla JS.</p>
    </div>
  </div>
</div>`,
    css: `.ox-bento-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
}

@media (min-width: 768px) {
  .ox-bento-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .ox-bento-col-2 {
    grid-column: span 2 / span 2;
  }
}

.ox-bento-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl, 0.75rem);
  border: 1px solid var(--border, #e4e4e7);
  background-color: var(--card, #ffffff);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ox-bento-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1);
}

.ox-bento-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.ox-bento-desc {
  font-size: 0.875rem;
  color: var(--muted-foreground, #71717a);
  margin-top: 0.5rem;
}`,
    js: `document.querySelectorAll('.ox-bento-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', \`\${x}px\`);
    card.style.setProperty('--mouse-y', \`\${y}px\`);
  });
});`,
    preview: <BentoGridDemo />,
    props: [
      {
        prop: 'class="ox-bento-grid"',
        type: 'CSS Class',
        default: 'none',
        description: 'Sistem CSS grid multi-kolom yang menyesuaikan tampilan layar desktop/mobile.',
      },
    ],
  },
  'border-beam': {
    title: 'Border Beam',
    description: 'Efek berkas cahaya gradien dinamis yang mengitari border kartu dengan animasi CSS murni.',
    html: `<div class="ox-beam-card">
  <div class="ox-border-beam" style="--size: 160px; --duration: 8s;"></div>
  <div class="ox-beam-inner">
    <h3>Glowing Border Beam</h3>
    <p>Pure CSS animated light streak travelling along container borders.</p>
  </div>
</div>`,
    css: `.ox-beam-card {
  position: relative;
  border-radius: var(--radius-xl, 0.75rem);
  border: 1px solid var(--border, #e4e4e7);
  background-color: var(--card, #ffffff);
  padding: 2rem;
  overflow: hidden;
}

.ox-border-beam {
  pointer-events: none;
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  mask: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
  mask-clip: padding-box, border-box;
  mask-composite: intersect;
}

.ox-border-beam::after {
  content: "";
  position: absolute;
  aspect-ratio: 1;
  width: var(--size, 200px);
  background: linear-gradient(to left, #6366f1, #ec4899, transparent);
  offset-path: rect(0 auto auto 0 round var(--radius-xl, 0.75rem));
  animation: ox-beam-motion var(--duration, 15s) linear infinite;
}

@keyframes ox-beam-motion {
  to { offset-distance: 100%; }
}`,
    js: `function setBorderBeamSpeed(cardElement, seconds) {
  const beam = cardElement.querySelector('.ox-border-beam');
  if (beam) {
    beam.style.setProperty('--duration', \`\${seconds}s\`);
  }
}`,
    preview: <BorderBeamDemo />,
    props: [
      {
        prop: '--size',
        type: 'CSS Variable',
        default: '200px',
        description: 'Panjang berkas cahaya dalam piksel.',
      },
      {
        prop: '--duration',
        type: 'CSS Variable',
        default: '15s',
        description: 'Waktu perputaran penuh berkas cahaya mengelilingi kartu.',
      },
    ],
  },
  'shimmer-button': {
    title: 'Shimmer Button',
    description: 'Tombol interaktif dengan efek pantulan cahaya ambient conic gradient yang berputar.',
    html: `<button type="button" class="ox-shimmer-btn">
  <span class="ox-shimmer-spin"></span>
  <span class="ox-shimmer-content">
    <span>Explore Ocenix</span>
    &rarr;
  </span>
</button>`,
    css: `.ox-shimmer-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 1px;
  overflow: hidden;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
}

.ox-shimmer-spin {
  position: absolute;
  inset: -200%;
  background: conic-gradient(from 0deg, transparent 0 340deg, #ffffff 360deg);
  animation: ox-shimmer-rotate 3s linear infinite;
}

.ox-shimmer-content {
  position: relative;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  background-color: var(--primary, #09090b);
  color: var(--primary-foreground, #ffffff);
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.ox-shimmer-btn:hover .ox-shimmer-content {
  opacity: 0.95;
}

@keyframes ox-shimmer-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
    js: `document.querySelectorAll('.ox-shimmer-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    this.style.transform = 'scale(0.97)';
    setTimeout(() => { this.style.transform = ''; }, 150);
  });
});`,
    preview: <ShimmerButtonDemo />,
    props: [
      {
        prop: 'class="ox-shimmer-spin"',
        type: 'CSS Class',
        default: 'none',
        description: 'Lapisan rotasi gradien kerucut berkecepatan 3 detik.',
      },
    ],
  },
  marquee: {
    title: 'Animated Marquee',
    description: 'Ticker horizontal berjalan tanpa jeda dengan akselerasi GPU dan jeda saat kursor diarahkan.',
    html: `<div class="ox-marquee" data-pause-on-hover="true">
  <div class="ox-marquee-track">
    <div class="ox-marquee-item">HTML5</div>
    <div class="ox-marquee-item">CSS3</div>
    <div class="ox-marquee-item">Vanilla JS</div>
    <div class="ox-marquee-item">WAI-ARIA</div>
    <div class="ox-marquee-item">Zero-FOUC</div>
  </div>
  <div class="ox-marquee-track" aria-hidden="true">
    <div class="ox-marquee-item">HTML5</div>
    <div class="ox-marquee-item">CSS3</div>
    <div class="ox-marquee-item">Vanilla JS</div>
    <div class="ox-marquee-item">WAI-ARIA</div>
    <div class="ox-marquee-item">Zero-FOUC</div>
  </div>
</div>`,
    css: `.ox-marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 1.5rem;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.ox-marquee-track {
  display: flex;
  flex-shrink: 0;
  gap: 1.5rem;
  animation: ox-marquee-slide 20s linear infinite;
}

.ox-marquee[data-pause-on-hover="true"]:hover .ox-marquee-track {
  animation-play-state: paused;
}

.ox-marquee-item {
  display: flex;
  align-items: center;
  border-radius: var(--radius, 0.5rem);
  border: 1px solid var(--border, #e4e4e7);
  background-color: var(--card, #ffffff);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

@keyframes ox-marquee-slide {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 1.5rem)); }
}`,
    js: `document.querySelectorAll('.ox-marquee').forEach((marquee) => {
  const speed = marquee.dataset.speed || '20s';
  marquee.querySelectorAll('.ox-marquee-track').forEach((track) => {
    track.style.animationDuration = speed;
  });
});`,
    preview: <MarqueeDemo />,
    props: [
      {
        prop: 'data-pause-on-hover="true"',
        type: 'Data Attribute',
        default: "'true'",
        description: 'Menjeda animasi lintasan saat mouse pengguna melayang di atas ticker.',
      },
    ],
  },
  meteors: {
    title: 'Meteors Effect',
    description: 'Efek hujan bintang jatuh dengan garis ekor cahaya untuk background hero modern.',
    html: `<div class="ox-meteors-box" id="meteorsContainer">
  <span class="ox-meteor" style="top: 0; left: 15%; animation-delay: 0.2s;"></span>
  <span class="ox-meteor" style="top: 0; left: 45%; animation-delay: 0.6s;"></span>
  <span class="ox-meteor" style="top: 0; left: 75%; animation-delay: 1.1s;"></span>
  <div class="ox-meteors-body">
    <h2>Native Meteors Effect</h2>
    <p>Cosmic falling meteor animation with CSS hardware acceleration.</p>
  </div>
</div>`,
    css: `.ox-meteors-box {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl, 0.75rem);
  background-color: #09090b;
  color: #ffffff;
  padding: 3rem 2rem;
}

.ox-meteor {
  position: absolute;
  height: 2px;
  width: 2px;
  border-radius: 9999px;
  background-color: #94a3b8;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: rotate(215deg);
  animation: ox-meteor-fall 5s linear infinite;
  pointer-events: none;
}

.ox-meteor::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 1px;
  background: linear-gradient(to right, #64748b, transparent);
}

@keyframes ox-meteor-fall {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}`,
    js: `function initMeteors(containerSelector, count = 20) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const meteor = document.createElement('span');
    meteor.className = 'ox-meteor';
    meteor.style.left = \`\${Math.floor(Math.random() * 100)}%\`;
    meteor.style.animationDelay = \`\${(Math.random() * 2).toFixed(2)}s\`;
    meteor.style.animationDuration = \`\${Math.floor(Math.random() * 4 + 3)}s\`;
    container.appendChild(meteor);
  }
}
initMeteors('#meteorsContainer', 15);`,
    preview: <MeteorsDemo />,
    props: [
      {
        prop: 'class="ox-meteor"',
        type: 'CSS Class',
        default: 'none',
        description: 'Partikel meteor dengan rotasi 215 derajat dan ekor gradien transparan.',
      },
    ],
  },
}
