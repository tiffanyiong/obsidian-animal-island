const { Plugin, Modal, Notice, setIcon } = require('obsidian');

const calendarStrings = {
  en: { date: 'Choose a date', datetime: 'Choose date & time', previous: 'Previous month', next: 'Next month', dates: 'Dates', empty: 'No date selected', time: 'Time', clear: 'Clear', today: 'Today', confirm: 'Confirm', chooseTime: 'Choose a time', conflict: 'This date was changed elsewhere. Reopen the calendar.', saveError: 'Could not save the date. Please try again.' },
  'zh-TW': { date: '選擇日期', datetime: '選擇日期與時間', previous: '上一個月', next: '下一個月', dates: '日期', empty: '尚未選擇日期', time: '時間', clear: '清空', today: '今天', confirm: '確定', chooseTime: '請選擇時間', conflict: '日期已在別處更新，請重新開啟月曆。', saveError: '日期儲存失敗，請重試。' },
  zh: { date: '选择日期', datetime: '选择日期与时间', previous: '上个月', next: '下个月', dates: '日期', empty: '尚未选择日期', time: '时间', clear: '清空', today: '今天', confirm: '确定', chooseTime: '请选择时间', conflict: '日期已在别处更新，请重新打开日历。', saveError: '日期保存失败，请重试。' }
};
function calendarLanguage() {
  const classes = typeof document !== 'undefined' ? document.body?.classList : null;
  if (classes?.contains('animal-language-en')) return 'en';
  if (classes?.contains('animal-language-zh-tw')) return 'zh-TW';
  if (classes?.contains('animal-language-zh')) return 'zh';
  const language = typeof window !== 'undefined' ? window.localStorage.getItem('language') : 'en';
  return language === 'zh-TW' ? 'zh-TW' : language === 'zh' || language === 'zh-CN' ? 'zh' : 'en';
}

// Local dates deliberately avoid UTC conversion (which can change the day).
function iso(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function parse(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
  const [y, m, d] = value.split('-').map(Number);
  const date = new Date(2000, m - 1, d, 12);
  date.setFullYear(y);
  return iso(date) === value ? date : null;
}
function shift(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}
function month(date, delta) {
  const next = new Date(date);
  const day = next.getDate();
  next.setDate(1);
  next.setMonth(next.getMonth() + delta);
  const last = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
  next.setDate(Math.min(day, last));
  return next;
}
function grid(date) {
  const first = new Date(date.getFullYear(), date.getMonth(), 1, 12);
  const start = shift(first, -first.getDay());
  return Array.from({ length: 42 }, (_, i) => shift(start, i));
}

class IslandCalendar extends Modal {
  constructor(plugin, input, context) {
    super(plugin.app);
    this.plugin = plugin;
    this.language = calendarLanguage();
    this.labels = calendarStrings[this.language];
    this.locale = this.language === 'zh' ? 'zh-CN' : this.language;
    this.input = input;
    this.context = context;
    this.restoreInputFocus = context.restoreInputFocus !== false;
    this.isDateTime = input.type === 'datetime-local';
    this.originalValue = Object.prototype.hasOwnProperty.call(context, 'originalValue') ? context.originalValue : input.value;
    this.original = this.originalValue == null ? '' : this.originalValue instanceof Date ? iso(this.originalValue) : String(this.originalValue);
    this.time = this.isDateTime ? (this.original.split('T')[1]?.match(/^\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?/)?.[0] || '00:00') : '';
    this.selected = parse(this.original.slice(0, 10));
    this.cursor = this.selected || new Date();
    this.cursor.setHours(12, 0, 0, 0);
    this.pending = this.selected ? iso(this.selected) : '';
    this.scope.register([], 'Escape', () => { this.close(); return false; });
  }
  onOpen() {
    this.modalEl.addClass('animal-calendar-modal');
    this.setTitle(this.isDateTime ? this.labels.datetime : this.labels.date);
    this.contentEl.addClass('animal-calendar');
    this.contentEl.addEventListener('keydown', (event) => {
      if (!event.target.closest('[data-date]')) return;
      const steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
      if (event.key in steps) this.cursor = shift(this.cursor, steps[event.key]);
      else if (event.key === 'PageUp') this.cursor = month(this.cursor, -1);
      else if (event.key === 'PageDown') this.cursor = month(this.cursor, 1);
      else if (event.key === 'Home') this.cursor = shift(this.cursor, -this.cursor.getDay());
      else if (event.key === 'End') this.cursor = shift(this.cursor, 6 - this.cursor.getDay());
      else return;
      event.preventDefault();
      event.stopPropagation();
      this.render(true);
    });
    this.render(true);
  }
  button(parent, label, handler, className = '') {
    const el = parent.createEl('button', { text: label, cls: className });
    el.type = 'button';
    el.addEventListener('click', handler);
    return el;
  }
  render(focus = false) {
    const root = this.contentEl;
    root.empty();
    const header = root.createDiv('animal-calendar-header');
    const prev = this.button(header, '', () => { this.cursor = month(this.cursor, -1); this.render(true); }, 'animal-calendar-nav');
    setIcon(prev, 'chevron-left');
    prev.setAttribute('aria-label', this.labels.previous);
    const title = header.createDiv('animal-calendar-month');
    title.setAttribute('aria-live', 'polite');
    const monthIcon = title.createSpan('animal-calendar-month-icon');
    setIcon(monthIcon, 'calendar-days');
    title.createSpan({ text: new Intl.DateTimeFormat(this.locale, { year: 'numeric', month: 'long' }).format(this.cursor) });
    const next = this.button(header, '', () => { this.cursor = month(this.cursor, 1); this.render(true); }, 'animal-calendar-nav');
    setIcon(next, 'chevron-right');
    next.setAttribute('aria-label', this.labels.next);
    const paper = root.createDiv('animal-calendar-paper');
    const week = paper.createDiv('animal-calendar-week');
    for (let i = 0; i < 7; i++) {
      week.createSpan({ text: new Intl.DateTimeFormat(this.locale, { weekday: 'narrow' }).format(new Date(2026, 0, 4 + i)) });
    }
    const days = paper.createDiv('animal-calendar-grid');
    days.setAttribute('role', 'group');
    days.setAttribute('aria-label', this.labels.dates);
    for (const date of grid(this.cursor)) {
      const value = iso(date);
      const day = this.button(days, '', () => {
        this.pending = value;
        this.cursor = date;
        this.render(true);
      }, 'animal-calendar-day');
      day.createSpan({ cls: 'animal-calendar-day-number', text: String(date.getDate()) });
      day.dataset.date = value;
      day.tabIndex = value === iso(this.cursor) ? 0 : -1;
      day.setAttribute('aria-label', new Intl.DateTimeFormat(this.locale, { dateStyle: 'full' }).format(date));
      day.setAttribute('aria-pressed', String(value === this.pending));
      if (date.getMonth() !== this.cursor.getMonth()) day.addClass('is-other-month');
      if (value === iso(new Date())) { day.addClass('is-today'); day.setAttribute('aria-current', 'date'); }
      if (value === this.pending) day.addClass('is-selected');
    }
    const status = root.createDiv({ cls: 'animal-calendar-selection', text: this.pending || this.labels.empty });
    status.setAttribute('aria-live', 'polite');
    if (this.isDateTime) {
      const timeRow = root.createDiv('animal-calendar-time');
      const label = timeRow.createEl('label', { text: this.labels.time });
      const timeInput = label.createEl('input', { type: 'time' });
      timeInput.value = this.time;
      timeInput.step = '1';
      timeInput.addEventListener('input', () => { this.time = timeInput.value; });
    }
    const footer = root.createDiv('animal-calendar-footer');
    this.button(footer, this.labels.clear, () => { this.pending = ''; this.render(true); });
    this.button(footer, this.labels.today, () => {
      this.cursor = new Date(); this.cursor.setHours(12, 0, 0, 0);
      this.pending = iso(this.cursor); this.render(true);
    });
    this.button(footer, this.labels.confirm, () => this.commit(), 'mod-cta');
    if (focus) root.querySelector(`[data-date="${iso(this.cursor)}"]`)?.focus();
  }
  async commit() {
    if (this.saving) return;
    if (this.isDateTime && this.pending && !this.time) { new Notice(this.labels.chooseTime); return; }
    this.saving = true;
    const { file, key } = this.context;
    try {
      await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        const current = frontmatter[key];
        const normalize = value => value == null ? '' : value instanceof Date ? value.toISOString() : String(value);
        if (normalize(current) !== normalize(this.originalValue)) throw new Error(this.labels.conflict);
        frontmatter[key] = this.pending ? this.pending + (this.isDateTime ? 'T' + this.time : '') : null;
      });
      this.input.value = this.pending ? this.pending + (this.isDateTime ? 'T' + this.time : '') : '';
      this.close();
    } catch (error) {
      new Notice(error.message || this.labels.saveError);
    } finally { this.saving = false; }
  }
  onClose() {
    this.contentEl.empty();
    if (this.plugin.calendar === this) this.plugin.calendar = null;
    if (this.restoreInputFocus && this.input.isConnected) this.input.focus();
  }
}

// Optional runtime labels for upstream Style Settings. Only this theme's
// in-memory configuration is localized; no third-party files are modified.
class IslandSettingsLanguage {
  constructor(plugin) {
    this.plugin = plugin;
    this.originals = new Map();
    this.signature = '';
  }
  localizeObject(object, language, appLanguage) {
    if (!this.originals.has(object)) this.originals.set(object, { ...object });
    const source = this.originals.get(object);
    for (const key of ['title', 'description', 'label']) {
      if (!(key in source)) continue;
      const value = source[`${key}.${language}`] ?? source[key];
      object[key] = value;
      // Upstream prefers the locale-specific field to the base field.
      if (appLanguage && `${key}.${appLanguage}` in source) object[`${key}.${appLanguage}`] = value;
    }
  }
  refresh() {
    const upstream = this.plugin.app.plugins.getPlugin('obsidian-style-settings');
    const section = upstream?.settingsList?.find(item => item.id === 'animal-island');
    if (!section) return;
    const language = calendarLanguage();
    const signature = `${language}:${window.localStorage.getItem('language') || 'en'}`;
    const changed = this.section !== section || this.signature !== signature;
    if (!changed) return;
    if (this.section !== section) this.restore(false);
    this.section = section;
    this.signature = signature;
    const appLanguage = window.localStorage.getItem('language') || 'en';
    for (const setting of section.settings) {
      this.localizeObject(setting, language, appLanguage);
      for (const option of setting.options || []) {
        if (option && typeof option === 'object') this.localizeObject(option, language, appLanguage);
      }
    }
    this.render(upstream);
  }
  render(upstream) {
    // Record root expansion before upstream rebuilds its generated root heading.
    const markup = upstream.settingsTab?.settingsMarkup;
    const heading = markup?.containerEl?.querySelector('.style-settings-heading[data-id="animal-island"]');
    if (heading && this.section) this.section.collapsed = heading.classList.contains('is-collapsed');
    upstream.settingsTab?.rerender?.();
    for (const leaf of this.plugin.app.workspace.getLeavesOfType('style-settings')) leaf.view.rerender?.();
  }
  restore(render = true) {
    for (const [object, original] of this.originals) Object.assign(object, original);
    this.originals.clear();
    if (render) {
      const upstream = this.plugin.app.plugins.getPlugin('obsidian-style-settings');
      if (upstream) this.render(upstream);
    }
    this.section = null;
    this.signature = '';
  }
  start() {
    const update = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.refresh(), 120);
    };
    this.plugin.registerEvent(this.plugin.app.workspace.on('css-change', update));
    this.plugin.registerEvent(this.plugin.app.workspace.on('layout-change', update));
    this.plugin.app.workspace.onLayoutReady(update);
    this.observer = new MutationObserver(update);
    this.observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    this.plugin.register(() => {
      clearTimeout(this.timer);
      this.observer.disconnect();
      this.restore();
    });
    update();
  }
}

module.exports = class AnimalIslandCalendar extends Plugin {
  onload() {
    this.calendar = null;
    if (typeof MutationObserver !== 'undefined') {
      this.settingsLanguage = new IslandSettingsLanguage(this);
      this.settingsLanguage.start();
    }
    const attached = new WeakSet();
    const attach = (doc) => {
      if (!doc || attached.has(doc)) return;
      attached.add(doc);
      const find = (event) => event.target?.closest?.('.metadata-container input:is([type="date"], [type="datetime-local"]):not(:disabled):not([readonly])');
      const open = (event) => {
        const input = find(event);
        if (!input || (event.button != null && event.button !== 0)) return;
        const leaf = this.app.workspace.getLeavesOfType('markdown').find(leaf => leaf.view.containerEl.contains(input));
        const key = input.closest('.metadata-property')?.querySelector('.metadata-property-key-input')?.value;
        if (!leaf?.view.file || !key) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        // iOS activates native date controls before click. Cancel the initiating
        // press, and do not restore focus to a date input after closing.
        const touch = event.pointerType === 'touch' || event.type.startsWith('touch') || doc.body.classList.contains('is-mobile');
        if (touch) input.blur();
        if (!this.calendar) {
          const frontmatter = this.app.metadataCache.getFileCache(leaf.view.file)?.frontmatter;
          const context = { file: leaf.view.file, key, restoreInputFocus: !touch };
          if (frontmatter) context.originalValue = frontmatter[key];
          this.calendar = new IslandCalendar(this, input, context);
          this.calendar.open();
        }
      };
      this.registerDomEvent(doc, 'pointerdown', open, true);
      this.registerDomEvent(doc, 'mousedown', open, true);
      // Non-passive is required for preventDefault to suppress WebKit's picker.
      this.registerDomEvent(doc, 'touchstart', open, { capture: true, passive: false });
      this.registerDomEvent(doc, 'click', open, true);
      this.registerDomEvent(doc, 'keydown', (event) => {
        if (event.key === 'Enter' || (event.altKey && event.key === 'ArrowDown')) open(event);
      }, true);
    };
    const attachExisting = () => {
      attach(document);
      for (const leaf of this.app.workspace.getLeavesOfType('markdown')) attach(leaf.view.containerEl.ownerDocument);
    };
    attachExisting();
    this.app.workspace.onLayoutReady(attachExisting);
    this.registerEvent(this.app.workspace.on('layout-change', attachExisting));
    this.registerEvent(this.app.workspace.on('window-open', (win) => attach(win.doc)));
  }
  onunload() { this.calendar?.close(); }
};
module.exports.calendarMath = { iso, parse, shift, month, grid };
module.exports.IslandCalendar = IslandCalendar;

module.exports.calendarLanguage = calendarLanguage;

module.exports.IslandSettingsLanguage = IslandSettingsLanguage;
