const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const sandbox = { module: { exports: {} }, require: () => ({ Plugin: class {}, Modal: class {} }), Date };
vm.runInNewContext(fs.readFileSync(__dirname + '/main.js', 'utf8'), sandbox);
const { iso, parse, shift, month, grid } = sandbox.module.exports.calendarMath;
assert.equal(iso(parse('2024-02-29')), '2024-02-29');
assert.equal(parse('2026-02-29'), null);
assert.equal(parse('2026-02-30'), null);
assert.equal(parse('2026-13-01'), null);
assert.equal(iso(month(parse('2026-01-31'), 1)), '2026-02-28');
assert.equal(iso(month(parse('2024-01-31'), 1)), '2024-02-29');
assert.equal(iso(month(parse('2026-01-31'), -1)), '2025-12-31');
assert.equal(iso(shift(parse('2026-12-31'), 1)), '2027-01-01');
const days = grid(parse('2026-07-19'));
assert.equal(days.length, 42);
assert.equal(days[0].getDay(), 0);
assert.equal(new Set(days.map(iso)).size, 42);
assert.equal(days.filter(d => d.getMonth() === 6).length, 31);
console.log('Calendar behavior: 11 checks passed');
// Exercise the same commit path used by the real modal, including conflict handling.
(async () => {
  const notices = [];
  const state = { created: '2026-07-18', title: 'Keep this field' };
  class Modal {
    constructor(app) { this.app = app; this.scope = { register() {} }; }
    close() { this.closed = true; }
  }
  const runtime = { module: { exports: {} }, Date,
    require: () => ({ Plugin: class {}, Modal, Notice: class { constructor(text) { notices.push(text); } } }) };
  vm.runInNewContext(fs.readFileSync(__dirname + '/main.js', 'utf8'), runtime);
  const Calendar = runtime.module.exports.IslandCalendar;
  const app = { fileManager: { async processFrontMatter(file, callback) { assert.equal(file.path, 'qa.md'); callback(state); } } };
  const plugin = { app };
  const input = { value: '2026-07-18' };
  const context = { file: { path: 'qa.md' }, key: 'created' };
  const calendar = new Calendar(plugin, input, context);
  calendar.pending = '2026-07-20';
  await calendar.commit();
  assert.equal(state.created, '2026-07-20');
  assert.equal(input.value, '2026-07-20');
  const reopen = new Calendar(plugin, { value: '2026-07-18' }, { ...context, originalValue: state.created });
  assert.equal(iso(reopen.selected), '2026-07-20');
  assert.equal(state.title, 'Keep this field');
  assert.equal(calendar.closed, true);
  const clear = new Calendar(plugin, { value: state.created }, context);
  clear.pending = '';
  await clear.commit();
  assert.equal(state.created, null);
  const conflict = new Calendar(plugin, { value: '2026-07-18' }, context);
  conflict.pending = '2026-07-21';
  await conflict.commit();
  assert.equal(state.created, null);
  assert.equal(notices.length, 1);
  assert.equal(conflict.closed, undefined);
  state.created = '2026-06-25T00:00:00';
  const datetime = new Calendar(plugin, { type: 'datetime-local', value: '2026-06-25T00:00' }, { ...context, originalValue: state.created });
  assert.equal(iso(datetime.selected), '2026-06-25');
  datetime.pending = '2026-06-26';
  await datetime.commit();
  assert.equal(state.created, '2026-06-26T00:00:00');
  const timeChange = new Calendar(plugin, { type: 'datetime-local', value: state.created }, context);
  timeChange.time = '14:35';
  await timeChange.commit();
  assert.equal(state.created, '2026-06-26T14:35');
  const cancel = new Calendar(plugin, { type: 'datetime-local', value: state.created }, context);
  cancel.pending = '2026-07-01';
  cancel.close();
  assert.equal(state.created, '2026-06-26T14:35');
  const clearTime = new Calendar(plugin, { type: 'datetime-local', value: state.created }, context);
  clearTime.pending = '';
  await clearTime.commit();
  assert.equal(state.created, null);
  console.log('Datetime behavior: initial date, normalized original value, preserved time, edited time, cancel and clear passed');
  console.log('Commit behavior: save, clear, unrelated-field preservation, and conflict checks passed');
})().catch(error => { console.error(error); process.exitCode = 1; });

for (const [language, expected] of [['zh-TW', 'zh-TW'], ['zh', 'zh'], ['en', 'en'], [null, 'en']]) {
  const localized = { module: { exports: {} }, Date, window: { localStorage: { getItem: () => language } }, require: () => ({ Plugin: class {}, Modal: class {} }) };
  vm.runInNewContext(fs.readFileSync(__dirname + '/main.js', 'utf8'), localized);
  assert.equal(localized.module.exports.calendarLanguage(), expected);
}
console.log('Calendar language follows Obsidian: traditional Chinese, simplified Chinese, English and default passed');

// Press interception must cancel native activation before click on touch devices.
{
  const handlers = new Map();
  let opened = 0, blurred = 0, focused = 0, cancelled = 0;
  const doc = { body: { classList: { contains: name => name === 'is-mobile' } } };
  const input = { type: 'date', value: '2026-07-20', isConnected: true,
    blur() { blurred++; }, focus() { focused++; },
    closest(selector) {
      if (selector === '.metadata-property') return { querySelector: () => ({ value: 'created' }) };
      return this;
    }
  };
  const file = { path: 'touch-qa.md' };
  const runtime = { module: { exports: {} }, Date, document: doc,
    require: () => ({ Plugin: class {}, Modal: class {
      constructor(app) { this.app = app; this.scope = { register() {} }; this.contentEl = { empty() {} }; }
      open() { opened++; }
    } }) };
  vm.runInNewContext(fs.readFileSync(__dirname + '/main.js', 'utf8'), runtime);
  const Plugin = runtime.module.exports;
  const plugin = new Plugin();
  plugin.app = {
    workspace: { getLeavesOfType: () => [{ view: { file, containerEl: { contains: el => el === input, ownerDocument: doc } } }], onLayoutReady: fn => fn(), on: () => ({}) },
    metadataCache: { getFileCache: () => ({ frontmatter: { created: input.value } }) }
  };
  plugin.registerEvent = () => {};
  plugin.registerDomEvent = (target, type, callback, options) => { assert.equal(target, doc); handlers.set(type, { callback, options }); };
  plugin.onload();
  assert.equal(handlers.get('touchstart').options.passive, false);
  for (const type of ['pointerdown', 'touchstart', 'mousedown', 'click']) {
    const event = { target: input, type, pointerType: 'touch', button: 0,
      preventDefault() { cancelled++; }, stopImmediatePropagation() {} };
    handlers.get(type).callback(event);
  }
  assert.equal(cancelled, 4);
  assert.equal(opened, 1, 'one gesture must not open duplicate custom modals');
  assert.ok(blurred > 0);
  assert.equal(plugin.calendar.restoreInputFocus, false);
  plugin.calendar.onClose();
  assert.equal(focused, 0, 'closing a touch calendar must not refocus the native date input');
  assert.equal(plugin.calendar, null);
  console.log('Touch behavior: early native cancellation, non-passive touch listener, one modal, and no date-input refocus passed');
}

{
  const runtime = { module: { exports: {} }, Date, require: () => ({ Plugin: class {}, Modal: class {} }) };
  vm.runInNewContext(fs.readFileSync(__dirname + '/main.js', 'utf8'), runtime);
  const Bridge = runtime.module.exports.IslandSettingsLanguage;
  const bridge = new Bridge({});
  const setting = { title: 'Language', 'title.zh-TW': '語言', description: 'Choose', 'description.zh-TW': '選擇' };
  const option = { value: 'mint', label: 'Mint', 'label.zh-TW': '薄荷' };
  bridge.localizeObject(setting, 'zh-TW', 'en');
  bridge.localizeObject(option, 'zh-TW', 'en');
  assert.equal(setting.title, '語言');
  assert.equal(option.label, '薄荷');
  assert.equal(option.value, 'mint');
  bridge.localizeObject(setting, 'en', 'zh-TW');
  bridge.localizeObject(option, 'en', 'zh-TW');
  assert.equal(setting['title.zh-TW'], 'Language');
  assert.equal(option.label, 'Mint');
  bridge.restore(false);
  assert.equal(setting.title, 'Language');
  assert.equal(setting['title.zh-TW'], '語言');
  assert.equal(option.label, 'Mint');
  console.log('Upstream-compatible language bridge: localized labels, stable option values, locale switching and restoration passed');
}
