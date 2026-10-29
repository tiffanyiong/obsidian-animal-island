# Animal Island Cozy for Obsidian

Warm paper, soft colors, ribbon filenames, and rounded details. Based on **[Animal Island UI by guokaigdg](https://guokaigdg.github.io/animal-island-ui/)**, adapted by Tiffany Iong.

[Setup](#setup) · [Examples](#examples) · [Checkboxes & callouts](#checkboxes--callouts) · [Visual guide](#visual-guide) · [Calendar](#calendar) · [Notes & credits](#notes--credits)

[繁體中文](README.zh-TW.md)

![Animal Island Cozy — Welcome note in Obsidian](screenshot.png)

[Open the welcome note](examples/Welcome%20to%20Animal%20Island%20Cozy.md)

## Setup

1. **Settings → Appearance → Themes → Manage:** install **[Animal Island Cozy](https://community.obsidian.md/themes/animal-island-notes)**.
2. Install and enable **[Style Settings](https://community.obsidian.md/plugins/obsidian-style-settings)** under Community plugins.
3. Open **Settings → Style Settings → Animal Island Cozy** to customize.

The theme works without plugins; Style Settings unlocks customization. The welcome note shows the file explorer, Properties, paper textures, colored headings and tables. Customize their appearance in Style Settings.

![Style Settings](docs/images/style-settings-obsidian.png)

## Examples

[English Markdown](examples/Animal%20Island%20Example%20-%20English.md) · [繁體中文 Markdown](examples/Animal%20Island%20Example%20-%20中文.md) · [Download ZIP](https://github.com/tiffanyiong/obsidian-animal-island/releases/latest/download/animal-island-examples.zip)

Keep the ZIP folder structure and open in Reading view. Actual Obsidian captures: English left, 繁體中文 right.

### Text, formatting & tasks

![Text, formatting & tasks](docs/images/example-pair-reading.png)

### Tables

![Tables](docs/images/example-pair-tables.png)

### Java & JSON

![Java & JSON](docs/images/example-pair-code.png)

### Fixed dividers

![Fixed dividers](docs/images/example-pair-dividers.png)

## Checkboxes & callouts

### Checkboxes

**Images and tasks → Checkbox shape:** Rounded / Circle. **Checkbox border width:** 0–3px (default 2px).

```md
- [ ] Read a chapter
- [x] Write one useful note
```

![Checkbox syntax](docs/images/checkbox-syntax.png)

Standard unchecked/checked tasks only; `[/]`, `[-]`, and `[*]` have no custom icons.

### Callouts

```md
> [!tip] A little reminder
> Write one useful thought.
```

Built-in Markdown; no plugin needed. Default: colored title and icon, a 1px border and 10% background opacity. Sea-island colors pair pastel surfaces with readable titles and native icons.

The refreshed gallery uses the current defaults (1px border, 10% background), except the explicitly labeled borderless example. These are rendered CSS previews.

**Palette:** Note uses sea-salt blue; Info bay blue; Tip / Hint / Important island teal; Abstract sea-glass teal; Success soft green; Warning butter yellow; Danger / Failure / Bug coral; Quote sand. Question alone uses milk-tea brown; Help / FAQ retain sand apricot.

**Example:** `[!example]` uses the Lime ribbon color and the native list icon. Use `[!example]-` to start collapsed or `[!example]+` to start expanded.

[Open all callouts and aliases in Obsidian](examples/All%20callouts.md).

![Callout types · 提示框類型](docs/images/callout-syntax.png)

Customize in **Style Settings → Callouts and quotes**:

- **Callout style:** Card / Side accent / Dashed.
- **Callout background opacity:** 0–1, default 0.1; 0 removes the background.
- **Callout border width:** 0–4px, default 1px; Side accent uses twice this width.

Examples below show optional combinations. At border width 0, all three styles have no outline.

#### Styles and settings

![Callout styles · 提示框樣式](docs/images/callout-styles.png)

#### All colors × styles

![All callout colors × styles · 全部提示框配色與樣式](docs/images/callout-colors-styles.png)

#### Collapsible Question

 `+` starts expanded; `-` starts collapsed. Click the title to toggle. Other callout types support the same syntax.

```md
> [!question]+ A question / 一個問題
> Answer / 回答

> [!question]- More details / 更多細節
> Answer / 回答
```

![Question expanded and collapsed · 問題展開與收合](docs/images/callout-question-fold.png)


## Visual guide

**Upgrading:** existing saved colors are preserved. Set both **App accent palette** and **Filename title → Title palette** to **Match interface palette** to enable automatic pairing.

Filename title → Title palette → **Match interface palette** pairs the ribbon with Rose, Lavender, Sage, Mist blue or Sand. Cream keeps the original default green; a manually selected title color overrides this pairing.

### App palettes, code & tags

App accent palette → **Match interface palette** automatically pairs Rose with pink, Lavender with purple, Sage with green, Mist blue with blue, and Sand with peach. Cream uses island mint. Choose a specific accent for an independent override. It colors primary buttons and their depth, links and text selection. Markdown highlights and Highlighter plugin colors have their own controls.

**App colors → Interface background palette:** Cream, Sage, Rose, Lavender, Mist blue, Sand, or Custom.

![App palettes, code & tags](docs/images/palettes.png)

### Accent colors

**App colors → App accent palette:** Mint, Pink, Purple, Blue, Peach, Green, or Custom.

![Accent colors](docs/images/accents.png)

### Filename shapes

**Filename title → Title style:** Layer, Ribbon, Tab, Plain. Body headings are separate.

![Filename shapes](docs/images/title-shapes.png)

### Filename colors

**Filename title → Title palette:** 13 colors plus Parchment, independent of app colors.

![Filename colors](docs/images/title-colors.png)

### Paper backgrounds

**Background → Note background:** Plain, Cream dots, Mint dots, Pink dots, Grid, Sprinkles. Strength and spacing are adjustable.

![Paper backgrounds](docs/images/backgrounds.png)

### Dividers

**Dividers → Divider style:** six styles. Write `---` on its own line between paragraphs.

![Dividers](docs/images/dividers.png)

### Tables

**Tables:** Striped / Clean; matching or mint headers, dashed separators, row hover, adjustable padding.

![Tables](docs/images/tables.png)

### Tabs & navigation

**Directory and tabs:** Paper / Pill / Underline tabs; Soft / Mint / Outline selection.

![Tabs & navigation](docs/images/navigation.png)

### Properties

**Properties:** Card / Dashed / Flat.

![Properties styles](docs/images/properties-styles.png)

### Tags & headings

**Tags:** Filled / Outline / Soft. **Body headings:** Simple / Underline / Side marker.

![Tags & headings](docs/images/tags-headings.png)

### Controls & tasks

**Controls:** Pill / Rounded; Raised / Flat buttons. **Images and tasks:** Rounded / Circle checkboxes.

![Controls & tasks](docs/images/controls.png)

### Quotes, tooltips & fonts

**Callouts and quotes → Quote background opacity:** 0–1, default 0.14; 0 removes the background. **Quote color:** 14 ribbon colors, selected independently.

Organic tooltips; separate interface, body and code fonts. Nunito is bundled offline.

![Quotes, tooltips & fonts](docs/images/quotes-tooltips.png)

### Dark mode

**Settings → Appearance → Base color scheme → Dark.**

![Dark mode](docs/images/dark.png)

### Text highlight

**Text highlight → Highlight color (ribbon palette):** 14 ribbon colors for `==highlighted text==`, in Reading and Live Preview. Default: Yellow. **Corner radius:** 0–6px; default 6px. Set 0 for square corners.

![14 highlight colors — light mode / 14 色螢光標記](docs/images/highlight-colors-light.png)

#### Optional: Easy Text Highlighter

My **[Easy Text Highlighter](https://community.obsidian.md/plugins/easy-text-highlighter)** plugin adds a selection toolbar with colored highlights, straight and wavy underlines, plus a sidebar to collect, filter and export excerpts. Works in Reading View and Live Preview without changing your original Markdown.

[![Easy Text Highlighter toolbar and sidebar with Animal Island Cozy](docs/images/easy-text-highlighter.jpg)](https://community.obsidian.md/plugins/easy-text-highlighter)

**[Add to Obsidian](https://community.obsidian.md/plugins/easy-text-highlighter)** → choose **Add to Obsidian**, then install and enable the plugin. Its colors are configured separately from the theme’s Markdown highlights.


## Calendar

Optional: **[Animal Island Calendar](https://community.obsidian.md/plugins/animal-island-calendar)** adds a Properties date/time picker and independent settings-language switching. It is not an event planner.

Set Properties to **Date** or **Date & time**. **Confirm** saves; **Clear** stages removal; Escape/closing cancels. Changing the date preserves the time.

![Date picker](docs/images/calendar-obsidian.png)

![Date and time picker](docs/images/datetime-obsidian.png)

## Notes & credits

More options: [all settings](docs/SETTINGS.en.md) · [中文指南](docs/STYLE_GUIDE.zh-TW.md). Includes font size, reading width, line height, spacing, radii, and motion; reduced-motion preferences are respected.

Manual install: copy `theme.css` and `manifest.json` from [Releases](https://github.com/tiffanyiong/obsidian-animal-island/releases/latest) into `<vault>/.obsidian/themes/Animal Island Cozy/`.

Tested on macOS / Obsidian 1.14.5, with targeted mobile checks and user feedback; full cross-platform testing remains incomplete. No analytics, external services, or remote fonts.

Original design: **[Animal Island UI by guokaigdg](https://guokaigdg.github.io/animal-island-ui/)** ([source](https://github.com/guokaigdg/animal-island-ui) · [Skill](https://guokaigdg.github.io/animal-island-ui/#/skill)). This is an independent adaptation.

[Release notes](RELEASE_NOTES.md) · [Issues](https://github.com/tiffanyiong/obsidian-animal-island/issues) · [MIT](LICENSE) · [Third-party notices](THIRD_PARTY_NOTICES.md) · [Nunito OFL](Nunito-OFL.txt)

## Related theme & plugins

Optional companions for your Obsidian vault:

| Project | Type | What it adds |
| --- | --- | --- |
| [Animal Island Calendar](https://github.com/tiffanyiong/obsidian-animal-island-calendar) | Plugin | A date and time picker for note Properties. |
| [Easy Text Highlighter](https://github.com/tiffanyiong/easy-text-highlighter) | Plugin | Highlight Markdown and PDF text, collect excerpts, and export them. |

The plugins also work with other themes; Animal Island Cozy is optional.
