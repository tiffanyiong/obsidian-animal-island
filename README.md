# Animal Island for Obsidian

A cozy home for your notes: warm paper, soft colors, ribbon titles, and gentle rounded shapes. Inspired by [animal-island-ui](https://github.com/guokaigdg/animal-island-ui), implemented as a native Obsidian CSS theme.

![Animal Island light appearance](screenshot.png)

[繁體中文](README.zh-TW.md) · [All settings](docs/SETTINGS.en.md) · [完整樣式指南](docs/STYLE_GUIDE.zh-TW.md) · [Release notes](RELEASE_NOTES.md)

## Features

- Six interface palettes: Cream, Sage, Rose, Lavender, Mist blue, and Sand, plus custom colors. Accent colors and outer frame colors are independent.
- Four filename title shapes, including layered ribbon tails, with 13 colorful palettes plus Parchment. Body headings have separate controls.
- Six backgrounds: plain, cream dots, mint dots, pink dots, grid paper, and sprinkles; six decorative Markdown dividers.
- Rounded tables with soft stripes, dashed row and column separators, and a full-row hover highlight.
- Coordinated code blocks, inline code, and tags for every app palette, with light and dark modes.
- Paper, pill, or underline document tabs; customizable file tree, Properties, callouts, controls, tasks, media, and motion.
- Offline bundled Nunito, with separate interface, body, and code font settings.
- Optional paper-style date and datetime picker with English, Traditional Chinese, and Simplified Chinese labels.

## Installation

Until the theme appears in Obsidian's community directory, download `theme.css` and `manifest.json` from [Releases](https://github.com/tiffanyiong/obsidian-animal-island/releases), place them in `<vault>/.obsidian/themes/Animal Island/`, then select **Settings → Appearance → Themes → Animal Island**.

The default appearance works without plugins. Install and enable the community plugin **Style Settings** to customize it under **Settings → Style Settings → Animal Island**. Select light or dark mode in Obsidian's Appearance settings.

## Your first island

The default is a cream-and-mint desk with a green layered ribbon title, subtle grid paper (9%, 24px), pill tabs, mint navigation selection, and a mint squiggle divider. Defaults are built into the CSS; importing a preset is unnecessary. Existing saved preferences remain yours.

Start with **App colors**, then **Fonts**, **Background**, and **Filename title**. Change the filename shape independently of Markdown H1–H6 headings. Tables, code blocks, and tags coordinate with the app palette automatically.

The individual reset buttons restore each setting. Export your preferences before using a group reset or importing [default-preset.json](default-preset.json), which contains only this theme's preferences. See the [complete settings reference](docs/SETTINGS.en.md) for all 46 controls across 17 groups.

## Optional calendar and language companion

The theme does not install executable plugins. To use the matching picker, download `animal-island-calendar.zip` from the release, extract its `animal-island-calendar` folder into `<vault>/.obsidian/plugins/`, restart Obsidian, and enable **Animal Island Calendar** under Community plugins. The source and instructions are in [companion/animal-island-calendar](companion/animal-island-calendar).

Click a date property, choose a day, and press **Confirm**. **Today** selects today; **Clear** stages an empty value. Closing or pressing Escape cancels. Datetime properties also show a time control, and changing the date preserves the existing time. This is a Properties picker, not an event planner.

The companion also activates the theme's independent **Language** choice and translates its settings and option labels at runtime. It works with unmodified Style Settings 1.0.9; no third-party plugin files are patched. Without the companion, upstream Style Settings controls localization. Obsidian's own menus and generic Style Settings buttons are outside this theme's translation scope.

## Compatibility and testing

Initial beta, version 0.1.0. Tested on macOS with Obsidian 1.14.5 and upstream Style Settings 1.0.9, including clean-vault loading and runtime language switching. Date arithmetic, staged saving, cancellation, conflict detection, time preservation, and mobile event interception have automated checks.

Mobile layout fixes have received user testing; the latest iOS native-picker suppression still needs confirmation on a physical device. Windows, Linux, popout windows, minimum supported Obsidian 1.5.0, and a complete accessibility audit remain unverified. Custom colors and third-party snippets can affect contrast and layout. The optional companion adapts to upstream DOM and Style Settings internals, which may change in future versions.

No analytics, external services, or remote font loading are included.

## License and credits

MIT. Inspired by animal-island-ui (MIT); Nunito is bundled under SIL OFL 1.1. Please retain [LICENSE](LICENSE), [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), and [Nunito-OFL.txt](Nunito-OFL.txt) when redistributing.
