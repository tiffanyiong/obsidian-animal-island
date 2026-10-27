# Animal Island Cozy 0.1.5 Beta

## Spacing fixes

- Move the Properties disclosure arrow inside the rounded card in normal notes, with an 8px gap before the label. Collapsing and expanding still work in Reading view and Live Preview.
- Add a 12px text gutter beside side-marker body headings in Reading view and Live Preview, including an editor override so CodeMirror cannot remove that spacing.

## CSS maintenance

- Use the dedicated underline property for editor headings.
- Remove redundant decoration-break rules from non-wrapping editor tags and two unnecessary Page preview clipping resets, preserving the existing tag pills, section-heading appearance, colors, fonts and saved settings.
- This is a targeted cleanup; it does not remove all Community review warnings or the CSS size warning. Functional clipping and reduced-motion overrides remain.

## Validation

Verified Properties folding and heading spacing locally in Obsidian 1.14.5 using a clean test vault. A browser fixture using the installed Obsidian CSS at a verified 375px viewport showed no horizontal overflow and intact tag pills. The maintenance-only changes also passed five before/after screenshot comparisons with no pixel differences. Mobile checks are simulations, not a physical-iPhone regression pass. The Calendar plugin is unchanged.

## 本次更新

- 修正正文 Properties 箭頭太貼圓角框的問題，保留正常收合與展開。
- 側邊色條標題增加 12px 文字留白，閱讀及編輯模式皆適用。
- 整理不影響外觀的 CSS，保留原有配色、字型、標籤與設定；並非清除所有審查警告。
- 已完成本機 Obsidian 測試及 375px 手機寬度模擬；日曆插件沒有更新。

Design based on [Animal Island UI](https://guokaigdg.github.io/animal-island-ui/) by [guokaigdg](https://github.com/guokaigdg), adapted for Obsidian by Tiffany Iong.

---

# Animal Island Cozy 0.1.4 Beta

A cozy Obsidian theme with warm paper backgrounds, soft coordinated colors, ribbon filenames, and rounded UI details.

## New in 0.1.4

### Sidebar and Outline

- Add breathing room around folder disclosure arrows and the top-level Outline arrow.
- Start nested file and Outline hover/selection backgrounds at their own indentation guides, keeping both left and right corners rounded through deeper levels.
- Add internal left and vertical padding to Links and Backlinks rows so link icons stay inside their highlight surface.

### Heading navigation and Page preview

- Extend the yellow jump-to-heading highlight with 16px horizontal and 4px vertical breathing room while compensating margins to keep text in place.
- Move the Properties collapse arrow inside its card in Page preview, with an 8px gap before the label.
- Fix section-preview headings incorrectly receiving the filename ribbon. Obsidian wraps these headings in an inline-title container; that section wrapper now keeps its original heading level, color, and size. Real filenames retain their selected title decoration.

### Properties, tags, and callouts

- Align mobile Properties labels, icons, date/time inputs, and tag controls on a common first-line height; keep multiline values aligned to the first line and remove the unnecessary iOS date-input left gutter.
- Keep rendered tag pills together when wrapping on desktop and mobile, rather than splitting a tag at its hyphen.
- Join the editing-mode hashtag marker and text into a single visual pill, retaining filled, outline, and soft palettes.
- Align icons, title text, and collapse controls across all callout types on desktop and mobile. Wrapped titles align their icons to the first line.
- Increase vertical quote spacing in desktop Reading view and Live Preview. Mobile quote spacing is unchanged.

### Setup and documentation

- Add Style Settings install/enable steps near the start of both English and Traditional Chinese READMEs, with an actual settings screenshot.
- Link the theme and standalone Calendar through their Obsidian installation pages, with separate source/release references and original Animal Island UI credit preserved.

### Validation and scope

Desktop changes were reviewed locally during this iteration. The user confirmed the mobile Properties alignment and tag-wrap fixes on their phone. Section-preview markup was checked against the installed Obsidian renderer and reproduced in an isolated rendering check. Isolated mobile layout checks using the installed Obsidian CSS and release theme CSS at 375px and 390px verified nested file/Outline rounded boundaries, heading-flash padding and no horizontal page overflow. These are browser size simulations, not a physical-iPhone full regression pass. A complete cross-platform/mobile regression pass has not been performed. This is a theme-only release: no new Calendar runtime or draggable Properties-resize feature is included. Saved setting IDs, defaults, and font sizes remain unchanged.

## Previous update: 0.1.3

Compressed the four bundled Nunito fonts from TTF to WOFF2, reducing theme.css from 776,889 to approximately 332,673 bytes (57% smaller). All four weights retain their glyph outlines, character maps, metrics and layout tables. Fonts remain embedded for offline use. Theme colors, layout and saved setting IDs are unchanged.

## Design credit

Built based on [Animal Island UI](https://guokaigdg.github.io/animal-island-ui/) by [guokaigdg](https://github.com/guokaigdg). Credit for the original UI design belongs to its creator; Tiffany Iong adapted it for Obsidian. See the [original project](https://github.com/guokaigdg/animal-island-ui) and [Skill page](https://guokaigdg.github.io/animal-island-ui/#/skill).

The [README visual guide](https://github.com/tiffanyiong/obsidian-animal-island#visual-style-guide) now shows all divider and background shapes, filename colors, app palettes, tables, navigation, panels, controls, tags, dark mode, and real date/datetime picker captures.

## Included

- Six app palettes plus custom colors; independent accents and frame colors.
- Four filename shapes, colorful ribbons, six backgrounds, and six dividers.
- Rounded striped tables with dashed row and column separators.
- Palette-matched code blocks, inline code, tags, and light/dark styling.
- Offline Nunito fonts, configurable navigation, tabs, Properties, and controls.
- 46 Style Settings controls, an English reference, and a full Traditional Chinese style guide.
- Optional Animal Island Calendar companion: compact dotted-paper date/datetime picker and runtime settings translation without modifying third-party files.

## Editable Markdown examples

Try the [English and Traditional Chinese example notes](https://github.com/tiffanyiong/obsidian-animal-island/tree/main/examples), or download `animal-island-examples.zip`. The README includes eight actual Obsidian Reading-view screenshots of these files, covering text, tasks, tables, code and dividers. Keep the ZIP folder structure for its image sample; property types need assigning once in a new vault.

## Downloads

Install `theme.css` and `manifest.json` in `.obsidian/themes/Animal Island Cozy/` and select the theme in Appearance. Style Settings is optional for customization. Install `animal-island-calendar.zip` separately for the custom picker and independent language selector. Full instructions are in the README.

The built-in default is cream and mint, a green layered ribbon, subtle grid paper, and pill tabs. Existing preferences are preserved.

## Verified and remaining testing

Clean-vault loading and language switching were exercised on macOS / Obsidian 1.14.5 with unmodified Style Settings 1.0.9. Calendar behavior tests cover staged changes, cancellation, conflict protection, time preservation, and mobile event interception. The fixed right sidebar toggle now shares the tab actions' vertical centerline.

This is an initial beta. Latest iOS picker suppression needs physical-device confirmation; Windows, Linux, popout windows, Obsidian 1.5.0, and a complete accessibility audit remain unverified. The calendar is a Properties picker, not an event scheduler. Generic Obsidian/plugin UI remains in its own language. Custom colors may need contrast adjustments.

MIT theme and companion; Nunito under SIL OFL 1.1. See included credits and license files.
