---
type: animal-island-example
island-date: 2026-10-23
island-time: 2026-10-23T14:30:00
island-empty-date:
status: exploring
tags:
  - animal-island
  - little-moments
source: https://guokaigdg.github.io/animal-island-ui/
description: A working Markdown playground for Animal Island Notes. Try the date, time, tags and long text properties above.
---

> [!tip] Welcome to your little island
> This is a real Markdown note. Open **Settings → Style Settings → Animal Island Notes**, change a setting, and return here to see it in action. Reading view is best for the fixed divider and background samples.
> The decorated filename above is separate from the body headings below. The theme changes appearance; it does not replace normal Markdown behavior.

**Jump to:** [[Animal Island Example - English#Tables|Tables]] · [[Animal Island Example - English#Code and tags|Code and tags]] · [[Animal Island Example - English#Divider collection|Dividers]] · [[Animal Island Example - English#Background collection|Backgrounds]]

# A softer place to think

An island morning begins with warm tea, a quiet page, and one small idea. There is room for both **important thoughts** and *gentle reminders*, for ==bright discoveries==, ~~old plans~~, and a little inline code: `LocalDate.now()`.

This English sentence and 這一句中文 help compare mixed-language spacing. Font lists for the interface, body and code can be changed independently; Nunito is bundled, while other chosen fonts need to be installed on your device.

## Little plans for today

- [x] Make a cup of tea
- [ ] Write one useful sentence
- [ ] Read something wonderful
- [ ] Take a walk and return with a new idea

1. Choose an app background palette.
2. Choose an independent accent color.
3. Try a filename ribbon and paper pattern.

### A smaller idea

Body heading styles can be Simple, Underline, or Side marker. Open Outline to compare the heading hierarchy and navigation selection.

#### A quiet detail

##### A tiny reminder

###### One last little thought

---

## Tables

Hover any body row to see its full-row highlight. Try **Tables → Striped / Clean**, then change the header palette and cell padding. Faint dashed lines separate both rows and columns.

| Islander | A little plan | Mood |
| --- | --- | --- |
| Mochi | Read one chapter | Curious |
| Pudding | Plant a new idea | Hopeful |
| Cream | Share a useful note | Connected |
| Yuki | Take a quiet walk | Calm |

### Long text and alignment

| Item | Notes | Count |
| :--- | :--- | ---: |
| REST | Use `/users/1` and `/users/1/posts` as resource paths. | 12 |
| GraphQL | Use `/graphql` and request only the fields you need. | 8 |
| Mixed text | A deliberately longer sentence with 中文與 English text checks wrapping, readable column widths, and rounded table edges on a narrow screen. | 100 |

## Code and tags

Switch among Cream, Sage, Rose, Lavender, Mist blue, and Sand to compare the coordinated code and tag palettes. Code can follow the current light/dark mode or use a dark surface.

```java
import java.time.LocalDate;

public class IslandNote {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        // Collect one little discovery each day.
        System.out.println("Hello, Animal Island Notes! " + today);
    }
}
```

```json
{
  "island": "Little wonders",
  "paper": "grid",
  "ribbon": "green",
  "oneSmallStep": true
}
```

#animal-island #little-moments #cozy-notes

Try **Tags → Filled / Outline / Soft**. The inline snippets `git status` and `LocalDate.now()` share the coordinated code palette.

---

## Callouts and quotes

> [!note] A place for useful details
> Try Card, Side accent, or Dashed in the callout settings.

> [!success] A small win
> You made a little progress today.

> [!warning] A gentle reminder
> Export your Style Settings preferences before importing a preset.

> [!danger] A problem worth noticing
> This sample shows how an error callout looks on your selected palette.

> [!question]- A little more, when you need it
> Click the arrow to expand this folded callout.
>
> - One extra detail
> - One useful next step

> There is no hurry. Good things grow in small steps.
>
> Try the Card and Plain quote styles, and compare this second paragraph.

## Divider collection

These six fixed HTML examples can be compared together in Reading view. They use this theme's divider styling; the ordinary Markdown `---` after them follows the global Divider setting. Source view shows the HTML, and other themes may display these samples differently.

### Mint dots

<hr class="animal-divider-dots" style="--animal-divider-image: radial-gradient(circle, var(--animal-primary) 2px, transparent 2.5px); --animal-divider-tile: 18px 6px; --animal-divider-height: 12px;">

### Fine solid

<hr class="animal-divider-thin">

### Earth dashes

<hr class="animal-divider-dashed">

### Hairline dashes

<hr class="animal-divider-hairline">

### Golden wave

<hr class="animal-divider-wave">

### Mint squiggle

<hr class="animal-divider-squiggle">

### Your global divider

This next separator is ordinary Markdown. Change **Divider → Divider style** and watch it change:

---

## Background collection

Choose the actual note background under **Background**. These fixed swatches are for comparison in Reading view. Adjust pattern strength and spacing to compare subtle and visible textures.

<div class="animal-background-sample" style="--animal-paper-pattern: none;">Plain paper</div>

<div class="animal-background-sample animal-bg-cream-dots">Cream dots</div>

<div class="animal-background-sample animal-bg-mint-dots">Mint dots</div>

<div class="animal-background-sample animal-bg-pink-dots">Pink dots</div>

<div class="animal-background-sample animal-bg-grid">Grid paper</div>

<div class="animal-background-sample animal-bg-sprinkles">Little sprinkles</div>

## Image corners

Change **Images and tasks → Image corner radius** to compare square and rounded image edges.

![Animal Island Notes background styles](../docs/images/backgrounds.png)

## Calendar: date and time

The optional **Animal Island Calendar** companion must be enabled. These are sample values, so feel free to try changing them.

| Property | Obsidian property type | What to try |
| --- | --- | --- |
| `island-date` | Date | Open the dotted-paper calendar, choose a day, then Confirm. |
| `island-time` | Date & time | Change the day or the time. Changing the day preserves the time. |
| `island-empty-date` | Date | Start with an empty value, or stage Clear and then Confirm. |

When importing this note into another vault, click each property's type icon and assign the types above once. Property-type definitions belong to a vault and are not carried inside a Markdown file.

**Today** selects today; **Confirm** saves; Escape or closing cancels. **Clear** stages an empty value and also needs Confirm. This picker edits Properties; it is not an event calendar.

## A quick style tour

| Settings group | Try it here |
| --- | --- |
| Language | English / 繁體中文 / 简体中文; independent switching needs the optional companion. |
| App colors | Change the surface, accent, and frame/panel colors. |
| Fonts and reading | Change body font, reading width, font size and line height. |
| Filename title | Layer / Ribbon / Tab / Plain; try the full filename color collection. |
| Navigation and tabs | Open a second note, compare Paper / Pill / Underline, then open Outline. |
| Properties | Card / Dashed / Flat; adjust row height and card width. |
| Controls and overlays | Open Settings, hover icons for tooltips, and compare button depth, control shape and dialog corners. |
| Images and tasks | Change image radius and checkbox shape; tick a task above. |
| Motion | Compare Soft / Off while opening notes or dialogs; reduced-motion preferences are respected. |

Note-level text shows note content. App controls, document tabs, hover tooltips and dialogs must be tried in the actual interface; Markdown does not create independent versions of them.

## Design credit

This Obsidian theme was built based on **[Animal Island UI](https://guokaigdg.github.io/animal-island-ui/)** by **[guokaigdg](https://github.com/guokaigdg)**. Credit for the original UI design belongs to its creator. Tiffany Iong adapted it for Obsidian.

[Original source](https://github.com/guokaigdg/animal-island-ui) · [Original Skill](https://guokaigdg.github.io/animal-island-ui/#/skill) · [Theme and illustrated guide](https://github.com/tiffanyiong/obsidian-animal-island)

Open the other example: [[Animal Island Example - 中文]]
