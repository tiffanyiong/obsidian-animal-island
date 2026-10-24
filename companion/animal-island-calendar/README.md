# Animal Island Calendar

Optional MIT-licensed companion plugin for the Animal Island Cozy Obsidian theme.
Install this folder in `.obsidian/plugins/animal-island-calendar`, restart Obsidian, and enable it under Community plugins. Disable it to restore the native picker. No network requests or external services.

Click a date property or press Enter / Alt+Down while it is focused. Choose a date, then Confirm (確定). Today (今天) selects today; Clear (清空) stages an empty date. Escape or closing the dialog cancels. Arrow keys move by day/week, PageUp/PageDown move by month, Home/End move within the week.

Values are saved through Obsidian's processFrontMatter API: dates use local YYYY-MM-DD, and datetime properties use YYYY-MM-DDTHH:mm[:ss]. Changing a date preserves its time. Third-party forms retain their existing controls. The adapter attaches to main and popout note windows; desktop Obsidian 1.14.5 has been exercised, while mobile and popout end-to-end testing remain pending. DOM changes in future Obsidian releases may require updating it.

The Language choice under Animal Island Cozy Style Settings is shared with this calendar; otherwise it follows Obsidian. The companion translates only Animal Island Cozy settings and option labels at runtime, using unmodified Style Settings 1.0.9. It does not patch third-party files. Future upstream internal changes may require an adapter update.

The design is inspired by animal-island-ui (MIT); implementation uses Obsidian's built-in icons and APIs. No React runtime is bundled.

Development: no build step. Run `node calendar.test.cjs` for date arithmetic checks.
