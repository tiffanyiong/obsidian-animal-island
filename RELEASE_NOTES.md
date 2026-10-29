# Animal Island Cozy 0.1.10

## Automatic palette matching

- Add **Match interface palette** to App accent palette and Filename title → Title palette. Rose pairs with pink, Lavender with purple, Sage with green, Mist blue with blue, and Sand with peach.
- Cream keeps its original green filename ribbon and island-mint app accent. Custom surfaces fall back to this pairing; manual and custom accent choices remain available.
- Primary button depth now follows the chosen app accent instead of retaining a fixed teal shadow.
- Remove the circular backing behind macOS Settings dropdown arrows, preserving native arrows.
- Update English and Traditional Chinese README and the default preset. Callout colors, opacity, borders and Markdown/plugin highlight controls remain unchanged.

**Upgrading:** existing saved accent and title colors are preserved. Select **Match interface palette** in both settings to opt into automatic matching.

## Validation

Passed 28 light/dark × surface × automatic/manual CSS cases. Verified native Obsidian 1.14.5 settings options, live Rose → Sage changes updating the main window, dark Sage and Cream’s original green ribbon. Verified unchanged body/callout colors and transparent dropdown backing. Targeted desktop testing; no mobile/cross-platform pass.

## 本次更新

- App accent palette 與 Filename title → Title palette 新增 **跟隨介面色盤**：Rose 配粉紅、Lavender 配紫、Sage 配綠、Mist blue 配藍、Sand 配蜜桃。
- Cream 保留原本綠色文件名緞帶及海島薄荷重點色；自訂底色使用此預設，也可手動指定緞帶或自訂重點色。
- 主要按鈕的立體陰影會跟隨 App Accent，不再固定為舊青綠色。
- 移除 macOS 設定下拉箭頭後的圓形底色，保留原生箭頭。
- 更新中英文 README 與預設配置；提示框配色、透明度、外框及 Markdown／插件螢光標記設定維持不變。

**舊版升級：**已儲存的重點色與標題選色會保留；請將上述兩項都改為 **跟隨介面色盤**，啟用自動配對。

已通過 28 組淺／深色、底色與自動／手動覆寫 CSS 檢查，並在原生 Obsidian 1.14.5 驗證選項、Rose → Sage 即時同步、深色 Sage、Cream 預設綠，以及正文／提示框不變、下拉圓底透明。屬桌面針對性測試，未做手機／跨平台完整驗證。

---

# Animal Island Cozy 0.1.9

## Sea-island callouts

- Refresh all built-in callouts with the approved sea-island palette: sea-salt Note, bay-blue Info, island-teal Tip/Hint/Important, sea-glass Abstract, soft-green Success, butter-yellow Warning, coral Danger/Failure/Bug, sand Quote and Lime Example.
- Give Question its own milk-tea brown; Help/FAQ retain sand apricot. Light mode uses darker title/icon ink; dark mode keeps brighter accents. Body text and native icons are preserved.
- Fix missing Example and other built-in colors caused by Obsidian color-token format differences.
- Preserve all settings and defaults: 1px border, 10% background opacity, user overrides and quote controls.
- Refresh English and Traditional Chinese README callout galleries, including all types, styles and foldable Questions. Add editable Markdown examples.

## Validation

Checked native Obsidian Reading View, Live Preview, dark mode and Question expansion. Verified computed light/dark colors for 16 displayed types/aliases, matching title/icon colors, unchanged body colors, settings metadata and default preset. Regenerated eight CSS gallery screenshots. Targeted desktop checks only; no mobile/cross-platform pass.

## 本次更新

- 全部內建提示框整理為海島配色：Note 海鹽藍、Info 海灣藍、Tip／Hint／Important 海島藍綠、Abstract 青綠、Success 柔綠、Warning 奶油黃、Danger／Failure／Bug 珊瑚紅、Quote 沙褐、Example 青檸。
- Question 單獨採用奶茶棕，Help／FAQ 保留沙灘杏。淺色模式使用較深標題與圖示，深色模式保留明亮配色；正文和原生圖示維持原樣。
- 修復 Obsidian 色彩變數格式差異造成的 Example 等內建類型顏色缺失。
- 所有設定、預設外框 1px、背景不透明度 10%、使用者自訂值與引用設定保持不變。
- 重做中英文 README 的提示框配色、樣式與折疊問題圖鑑，新增可編輯 Markdown 示例。
- 已檢查原生閱讀／即時預覽、深色模式及 Question 展開；核對 16 個展示類型／別名的淺深色計算結果、標題圖示一致、正文與設定未變，重做八張 CSS 圖鑑。屬桌面針對性驗證，未做手機／跨平台完整測試。

---

# Animal Island Cozy 0.1.8

## Callout defaults

- Set the default callout border width to **1px** and background opacity to **0.1 (10%)**.
- Apply matching defaults in Style Settings, CSS fallbacks and the importable default preset. Side accent retains twice the selected border width.
- Update English and Traditional Chinese documentation. Existing saved overrides are preserved: reset these two controls to use the new defaults, or set both to 0 for no border/background.
- Callout colors, quote settings and Calendar are unchanged.

## Validation

Verified the setting defaults, preset values, CSS fallbacks and release packaging. No new visual rendering or cross-platform regression test was performed for this defaults-only update.

## 本次更新

- 提示框外框預設改為 **1px**，背景不透明度預設改為 **0.1（10%）**。
- 同步更新 Style Settings、CSS 預設值、可匯入的預設配置與中英文說明。側邊色條維持設定外框寬度的兩倍。
- 已儲存的自訂設定會保留；重設這兩項即可使用新預設，兩項都設為 0 可維持無框、無背景。
- 提示框配色、引用設定與日曆插件維持不變。
- 已核對設定、預設配置、CSS 預設值及發布檔案；本次未重新進行畫面渲染或跨平台回歸測試。

---

# Animal Island Cozy 0.1.7

## CSS maintenance

- Remove two redundant text-decoration resets on filenames and tags; use Obsidian’s tag decoration variables to preserve normal and hover styling.
- No intended changes to appearance, colors, layout, settings or defaults. Calendar is unchanged.
- Targets two reported Community warnings (32 → 30 expected). The final count depends on the Community rescan.

## Validation

Compared 24 light/dark combinations covering four filename styles and three tag styles, including tag hover and editor hashtags, using the installed Obsidian CSS. Stable before/after screenshots had zero differing pixels in both modes. This is a targeted visual check, not a complete cross-platform regression pass.

## 本次更新

- 移除檔案名稱與標籤的兩項重複文字裝飾重設，改用 Obsidian 標籤變數保留一般及滑鼠懸停樣式。
- 外觀、配色、排版、設定及預設值維持原樣；日曆插件未變更。
- 針對兩項 Community 警告進行清理，預期由 32 降至 30；實際數量以重新掃描為準。
- 比較 24 組淺色／深色、檔案名稱及標籤組合，包含懸停與編輯器標籤；穩定截圖的像素差異皆為 0。非完整跨平台回歸測試。

---

# Animal Island Cozy 0.1.6

## Highlights and customization

- Add Text highlight with all 14 ribbon colors, independently selected for Markdown `==highlight==` in Reading view and Live Preview. Add a 0–6px corner-radius slider; default 6px retains the existing shape.
- Keep Language first and sort the other Style Settings groups alphabetically. New settings include English, Traditional Chinese and Simplified Chinese labels.
- Distinguish Rounded and Circle checkboxes and center their check marks. Add adjustable checkbox border width, default 2px.

## Callouts and quotes

- Preserve the original native callout color strategy, with yellow Warning distinct from orange Question. Titles and icons follow their type color; body text keeps its normal styling. Remove icon background badges.
- Default callouts have no background or border. Add background opacity (0–1, default 0) and border width (0–4px, default 0); retain Card, Dashed and Side accent. Side accent uses twice the selected border width.
- Replace the Quote Background/No background dropdown with Quote background opacity (0–1, default 0.14). Add all 14 ribbon colors for quotes, independent of filename colors. Opacity 0 removes the background and keeps the side line.

## Alignment and maintenance

- Align Properties link values, keep its disclosure arrow visible without hovering, and give desktop Reading/Live Preview Properties the same outer inset.
- Correct over-tall Live Preview heading side markers and tighten number/bullet text spacing in Reading view and Live Preview; preserve checkbox positioning.
- Replace two text-decoration shorthands and remove an unnecessary filename clipping reset. Decorative ribbon clipping remains; this is not a claim to eliminate all Community review warnings.

## Documentation and cover

- Refresh both English and Traditional Chinese READMEs with a concise linked overview, paired bilingual examples, checkbox syntax, all callout colors/styles, collapsible Question examples and highlight color sheets.
- Replace the cover with an actual Obsidian screenshot of **Welcome to Animal Island Cozy**, including a clean demo file explorer, expanded Properties and current callout appearance. Include its editable Markdown note in the examples ZIP.
- Keep the README's general dark-theme overview; detailed dark comparison images are retained for local QA.

## Updating and validation

Existing preferences for unchanged setting IDs are retained. The old Quote Background/No background setting is replaced: users who previously chose No background should set **Quote background opacity to 0**. Border opacity defaults apply when no saved override is present.

Reviewed locally in Obsidian 1.14.5 using dedicated demo/QA vaults, with Reading/Live Preview checks and rendered light/dark CSS galleries. Checked setting-schema IDs, ranges, palette options, image files, README links and release packaging. This is not a full cross-platform or physical-device regression pass. The Calendar companion is unchanged.

## 本次更新

- 新增文字螢光標記的 14 色選擇與 0–6px 圓角；預設黃色、6px，閱讀與編輯模式皆適用。
- Language 固定第一，其餘設定群組按英文字母排序；新設定附中英文標籤。
- 修正圓角／圓形 checkbox 的區別與勾號置中，可調外框粗細，預設 2px。
- 保留舊版 callout 配色，只有 Warning 使用黃色、Question 保留橙色；標題與圖示有色，移除圖示圓底，正文維持原樣。
- Callout 預設無背景、無框；新增背景不透明度與外框粗細，保留卡片、虛線與側邊色條。
- 引用的有／無背景改為不透明度滑桿，預設 0.14；0 為無背景。引用可獨立選擇 14 種緞帶配色。
- 修正 Properties 連結與外側對齊，箭頭保持可見；改善編輯模式標題側線高度及兩種模式的數字／圓點清單間距。
- 更新中英文 README、完整配色／樣式圖、Question 折疊示例與新版首圖，新增可編輯的 Welcome to Animal Island Cozy 示範筆記。
- 原本選擇引用「無背景」的使用者，更新後請將引用背景不透明度設為 0；其他未更名的設定保留。日曆插件沒有更新。

Design based on [Animal Island UI](https://guokaigdg.github.io/animal-island-ui/) by [guokaigdg](https://github.com/guokaigdg), adapted by Tiffany Iong.

---

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
