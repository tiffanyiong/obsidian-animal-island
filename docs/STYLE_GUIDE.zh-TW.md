# Animal Island Notes 完整樣式指南

[返回 README](../README.md) · [English reference](SETTINGS.en.md)

所有控制項都在 **設定 → Style Settings → Animal Island Notes**。下列順序、範圍與預設值直接對照目前 theme.css；切換外觀通常立即生效。明暗模式請到 Obsidian「設定 → 外觀」切換。插件更新後若功能改變，請先查看 README 的相容限制。

## 常用搭配

| 想要的感覺 | 介面底色 | App 主色 | 背景 | 文件名稱 | 分頁 |
| --- | --- | --- | --- | --- | --- |
| 小島書桌 | 奶油米色 | 海島薄荷 | 奶油圓點 | 雙層紙片＋預設綠 | 圓角紙片 |
| 霧藍工作室 | 霧藍 | 海洋藍 | 方格紙，濃度 6–8% | 簡潔文字或藍色雙層 | 膠囊 |
| 薰衣草手帳 | 淡薰衣草 | 薰衣草紫 | 淡粉圓點，濃度 6–10% | 雙層紙片＋紫色 | 圓角紙片 |
| 森林筆記 | 鼠尾草綠 | 森林綠 | 純色 | 折角標籤＋綠色 | 底線 |
| 暖桃閱讀 | 沙杏色 | 蜜桃橘 | 純色或奶油圓點 | 雙層紙片＋暖桃粉 | 膠囊 |

這些是建議搭配，不是額外的一鍵預設選項。

## 全部設定

數值控制項以「預設值；可調範圍；步進」表示。自訂色有獨立的明／暗設定；字體輸入接受用逗號分隔的 fallback 清單。


### 1. 語言

語言選擇套用主題設定和下次打開的配套月曆，不改 Obsidian 本身的選單語言。獨立語言切換需要可選的 Animal Island Calendar 配套插件；它在執行時處理本主題標籤，不修改原版 Style Settings 檔案。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 顯示語言<br>`animal-language` | 跟隨 Obsidian、English、繁體中文、简体中文 | 跟隨 Obsidian |

### 2. 全域主色

先選底色，再選重點色；兩者獨立。自訂正文／側欄／卡片色只有介面底色選「自訂」時生效；自訂主框／內容框色只有分色選「分別自訂」時生效。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 介面底色<br>`animal-surface-palette` | 奶油米色、鼠尾草綠、玫瑰粉、淡薰衣草、霧藍、沙杏色、自訂底色 | 奶油米色 |
| 自訂正文底色<br>`animal-custom-paper` | 明／暗各自設定 | light `#f8f8f0` / dark `#28251f` |
| 自訂側欄與設定底色<br>`animal-custom-panel` | 明／暗各自設定 | light `#f0e8d8` / dark `#373126` |
| 自訂卡片與輸入框底色<br>`animal-custom-card` | 明／暗各自設定 | light `#f7f3df` / dark `#312d25` |
| 主框與內容框分色<br>`animal-frame-style` | 深主框＋淺內容、同色、分別自訂 | 深主框＋淺內容 |
| 自訂主框底色（頂部與左側工具列）<br>`animal-frame-color` | 明／暗各自設定 | light `#e4d9c5` / dark `#29251f` |
| 自訂內容框底色（檔案列表與目錄）<br>`animal-panel-color` | 明／暗各自設定 | light `#f4edde` / dark `#373126` |
| App 主色配色<br>`animal-accent-palette` | 海島薄荷、櫻花粉、薰衣草紫、海洋藍、蜜桃橘、森林綠、自訂 | 海島薄荷 |
| 自訂主色<br>`animal-custom-accent` | 明／暗各自設定 | light `#19c8b9` / dark `#42d5c6` |

### 3. 字體

介面、筆記、程式碼三套字體可各自設定；目前沒有獨立的中文／英文字體控制項。Nunito 已內嵌，中文用已安裝的 Noto Sans SC / PingFang 等 fallback。不要把未安裝的字體名稱當成下載功能。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 介面字體<br>`animal-font-interface` | 已安裝字體名稱或 fallback 清單 | `"Nunito", "Noto Sans SC", -apple-system, BlinkMacSystemFont, "PingFang TC", sans-serif` |
| 正文字體<br>`animal-font-body` | 已安裝字體名稱或 fallback 清單 | `"Nunito", "Noto Sans SC", -apple-system, BlinkMacSystemFont, "PingFang TC", sans-serif` |
| 程式碼字體<br>`animal-font-code` | 已安裝字體名稱或 fallback 清單 | `"SFMono-Regular", Consolas, "Liberation Mono", monospace` |

### 4. 背景 · Background

圖案套用筆記正文的閱讀及即時預覽背景，不是整個 App 的牆紙。濃度設為 0% 可保留選擇但隱藏圖案。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 筆記背景圖案<br>`animal-background-style` | 純色羊皮紙、奶油圓點、薄荷圓點、淡粉圓點、方格紙、彩糖碎 | 方格紙 |
| 背景圖案濃度<br>`animal-bg-strength` | 0–30%; step 1 | 9% |
| 背景圖案間距<br>`animal-bg-spacing` | 18–48px; step 2 | 24px |

### 5. 文件名稱

只裝飾最上方文件名稱（inline title）。雙層紙片目前實際呈現有左右緞帶尾巴及深色摺角的立體標題；緞帶為切角帶狀，折角標籤有角落摺片，簡潔文字沒有背景裝飾。需開啟 Obsidian 顯示文件名稱功能。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 標題造型<br>`animal-title-style` | 雙層紙片、緞帶、折角標籤、簡潔文字 | 雙層紙片 |
| 標題配色<br>`animal-title-color` | 預設綠、粉色、紫色、藍色、黃色、橙色、青色、綠色、紅色、青檸、黃綠、棕色、暖桃粉、羊皮紙 | 預設綠 |
| 標題字級<br>`animal-title-size` | 20–36px; step 1 | 26px |

### 6. 正文標題與閱讀

對應 Markdown 的 H1–H6。純文字保留清楚層級；底線在標題下加線；側邊色條在左側加重點。正文寬度也受 Obsidian「可讀行長」及視窗寬度影響。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 正文標題造型<br>`animal-heading-style` | 純文字、底線、側邊色條 | 純文字 |
| 正文寬度<br>`animal-reading-width` | 560–1040px; step 20 | 760px |
| 正文行距<br>`animal-body-leading` | 1.4–2; step 0.05 | 1.72 |

### 7. 目錄與分頁

目錄控制項也會影響檔案樹。紙片用小圓角，膠囊兩端完整圓弧，底線為直角選中底色加重點線；分頁造型只套中間文件分頁，不套左右側欄圖示。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 目錄列高度<br>`animal-nav-height` | 26–40px; step 1 | 29px |
| 目錄字級<br>`animal-nav-font` | 11–17px; step 1 | 13px |
| 目錄選取造型<br>`animal-nav-selection` | 柔和底色、薄荷底色、描邊 | 薄荷底色 |
| 分頁造型<br>`animal-tab-style` | 圓角紙片、膠囊、底線 | 膠囊 |

### 8. 屬性 · 卡片與表單

Properties 是筆記 frontmatter 的欄位面板。寬度設定上限仍受可用空間限制；較窄視窗會縮小。日期圖示保留文字間距，標籤採用配套 tag 色盤。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 屬性卡片造型<br>`animal-properties-style` | 羊皮紙卡片、虛線卡片、平面列表 | 羊皮紙卡片 |
| 屬性區塊寬度<br>`animal-properties-width` | 360–900px; step 20 | 640px |
| 屬性列高度<br>`animal-property-height` | 28–40px; step 1 | 30px |

### 9. 表格 · Table

表格使用圓角外形，無實線外框，欄與列之間都有單層細虛線。斑馬紋交錯顯示淡色列，hover 整列使用 App 重點色淡底。「奶油（原版）」實際跟隨卡片／底色；在藍或紫底色下不會固定奶油黃。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 表格列樣式<br>`animal-table-style` | 斑馬紋、純色 | 斑馬紋 |
| 表頭配色<br>`animal-table-header` | 薄荷、奶油（原版） | 奶油（原版） |
| 表格上下留白<br>`animal-table-padding` | 4–14px; step 1 | 12px |

### 10. 提示與引用 · Card

使用 Obsidian 原生 callout 語法，info / tip / success / warning / failure 等保留各自狀態色；引用使用 `>`。可收合功能由 Obsidian 原生 callout 提供。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 提示區塊造型<br>`animal-callout-style` | 圓角卡片、側邊色條、虛線 | 圓角卡片 |
| 引用造型<br>`animal-quote-style` | 淡色底、純色條 | 淡色底 |

### 11. 程式碼 · CodeBlock

程式碼區塊與行內 code 跟隨 App 底色。跟隨明暗會配合 Obsidian light/dark；深色程式碼只把 code 強制轉深，不改整個 App。保留語法高亮、捲動與原生複製功能。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 程式碼區塊配色<br>`animal-code-style` | 跟隨明暗、深色程式碼 | 跟隨明暗 |
| 程式碼字級<br>`animal-code-font` | 11–18px; step 1 | 13px |

### 12. 標籤 · Tag 與 Badge

正文 hashtag、編輯器標籤及 Properties 標籤 chip 共用配套色盤。配套實色較明顯，描邊保留透明背景，淡底更輕。目前淡底選項顯示名可能仍為「薄荷淡底」，實際已跟隨 App 底色。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 標籤造型<br>`animal-tag-style` | 配套實色、描邊、薄荷淡底 | 配套實色 |

### 13. 控制項 · Input 與 Button

設定表單、輸入框和按鈕的共用造型。立體效果主要用在主操作按鈕；工具列及側欄圖示採用較安靜的背景效果。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 控制項圓角<br>`animal-control-style` | 膠囊、小圓角 | 膠囊 |
| 主按鈕立體效果<br>`animal-button-depth` | 遊戲按鈕、平面 | 遊戲按鈕 |

### 14. 分隔線 · Divider

使用一般 Markdown 水平分隔線即可生效。在即時預覽編輯分隔線時，Obsidian 可能暫時顯示原始 `---`。手寫 HTML 或外掛自訂分隔線不一定受這個控制項影響。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 分隔線造型<br>`animal-divider-style` | 點線、細線、虛線、細密虛線、黃色波浪、薄荷曲線 | 薄荷曲線 |

### 15. 月曆外掛 · DatePicker

需啟用 Animal Island Calendar。日期格是紙張上的無框選擇區；圓形數字標記與外側選取區分開，圓角設定只改外側選取區。這些選項不會改系統原生日期面板。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 月曆日期格圓角<br>`animal-calendar-radius` | 12–18px; step 1 | 12px |
| 月曆選取配色<br>`animal-calendar-color` | 薄荷、大地棕 | 薄荷 |

### 16. 對話框與選單

對話框圓角套用一般 Obsidian 對話框，不改配套月曆的專屬外形。關閉動態用來減少主題過場；不是停止其他插件所有動畫的保證。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 對話框圓角<br>`animal-overlay-radius` | 12–40px; step 1 | 25px |
| 動態效果<br>`animal-motion-style` | 柔和動態、關閉 | 柔和動態 |

### 17. 圖片與待辦

圖片圓角 0 為直角；待辦造型只改 checkbox 外形，不影響筆記裡的完成狀態。

| 選項 | 樣式／可調值 | 預設 |
| --- | --- | --- |
| 圖片圓角<br>`animal-image-radius` | 0–40px; step 2 | 24px |
| 核取方塊造型<br>`animal-task-shape` | 圓角方形、圓形 | 圓角方形 |

## 程式碼與標籤配套色

| 介面底色 | code 底色感覺 | tag 搭配 |
| --- | --- | --- |
| 奶油米色 | 暖米紙張 | 蜂蜜黃 |
| 鼠尾草綠 | 淡葉綠 | 嫩葉綠 |
| 玫瑰粉 | 淡玫瑰紙 | 莓果粉 |
| 淡薰衣草 | 近表格的淡灰紫 | 淡紫 |
| 霧藍 | 低飽和、很淺的灰霧藍 | 淡灰藍 |
| 沙杏色 | 暖沙紙 | 焦糖杏 |
| 自訂底色 | 由自訂卡片色自動混色 | 由卡片色與主色混合 |

語法高亮分開設定 keyword、function、string 等色彩，並非全部改成單色。深色／強制深色 code 使用較深的對應底色。預設色盤做過部分文字對比檢查，自訂色無法預先保證可讀性。

## 可貼進筆記的範例

### 文件名稱、標題與 Properties

檔名直接改筆記名稱；不要為了緞帶再加一個 H1。以下 frontmatter 會出現在 Properties，若日期欄位不是日期類型，可在 Obsidian 的欄位類型選擇「日期」或「日期與時間」。

````markdown
---
created: 2026-10-23
date: 2026-10-23T14:35:00
tags:
  - animal-island
  - style-test
---

# 正文大標題

## 子標題

這是正文，含 **粗體**、*斜體*、==螢光標記==、[外部連結](https://obsidian.md) 與 [[內部筆記]]。
````

### 表格

```markdown
| 項目 | 說明 | 狀態 |
| --- | --- | --- |
| REST | 使用資源路徑 | 完成 |
| GraphQL | 指定需要的欄位 | 進行中 |
```

切換到閱讀或即時預覽後才看得到完整造型；純原始碼模式保留 Markdown 文字。

### 程式碼、行內程式碼與標籤

````markdown
```java
public class IslandNote {
    public static void main(String[] args) {
        System.out.println("Hello, Animal Island Notes!");
    }
}
```

行內程式碼：`LocalDate.now()`

#animal-island #reading
````

程式碼 fence 後的語言名稱決定語法高亮。Properties 裡的 tags 與正文 hashtag 都會使用配套標籤樣式。

### 提示、引用、待辦與分隔線

```markdown
> [!tip] 今天的一小步
> 把大問題拆成可以完成的小事。

> [!note]- 可收合的筆記
> 點標題旁的箭頭展開。

> 一段普通引用。

- [ ] 還沒完成
- [x] 已完成

---

分隔線下方的內容。
```

分隔線前後保留空白行，避免 `---` 被解析成前一行的標題底線。

## 月曆操作與鍵盤

安裝方式見 README。點日期欄位，或欄位聚焦時按 Enter / Alt+↓ 開啟。月曆呈現奶油色外層、淡圓點紙張、月份標籤及薄荷色圓形日期標記；目前預設寬度上限 350px，日期列高 34px，不提供尺寸滑桿。

| 操作 | 效果 |
| --- | --- |
| 點日期 | 暫選日期，尚未儲存 |
| 上／下個月箭頭 | 切換月份 |
| 今天 | 暫選今天，再按確定儲存 |
| 清空 | 暫時清空，再按確定儲存 |
| 確定 | 寫入目前筆記的該欄位 |
| Escape／關閉 | 取消未確認的變更 |
| 日期按鈕聚焦時 ← → | 按天移動焦點 |
| 日期按鈕聚焦時 ↑ ↓ | 按週移動焦點 |
| PageUp / PageDown | 移動焦點到上／下個月 |
| Home / End | 移到該週的首／尾日 |
| Enter / Space | 啟用聚焦的日期按鈕，之後仍須確定 |

日期時間欄位會額外顯示時間輸入；更換日期保留原時間，支援保留原本秒數。不會因點別的日期就立即更改筆記。若檔案已被其他地方修改，會提示重新打開，避免覆蓋新的日期。

月曆為單一屬性的日期選擇器，不包含參考網站的整月事件、新增行程或拖曳排程功能。語言共用主題 Language 選擇（需要配套插件），否則跟隨 Obsidian。

## 疑難排解

| 情況 | 檢查方式 |
| --- | --- |
| No style settings found | 確認啟用 Animal Island Notes 與 Style Settings，再重新啟用插件或切換主題後重試；先 Export 保存偏好，不要刪設定檔 |
| 切換語言仍部分英文 | 獨立語言功能需要啟用 Animal Island Calendar；Default / Import / Export / Results 等插件自帶文字也未全部翻譯 |
| 月曆仍是系統面板 | 確認 Animal Island Calendar 已啟用，且是筆記 Properties 的日期／日期時間欄位；第三方表單不接管 |
| 字體沒有改 | 自訂字體必須已安裝，檢查拼寫及 fallback；只有 Nunito 內嵌，中文與其他字體不會自動下載 |
| 標題沒有緞帶 | 確認顯示文件名稱，且調整的是文件名稱而非正文標題；簡潔文字選項本來就沒有緞帶 |
| 正文寬度沒有改 | 檢查可讀行長設定、分割視窗可用寬度及外掛／snippet 覆蓋 |
| 自訂底色沒反應 | 先把介面底色切到「自訂底色」；分色用另一個「分別自訂」選項 |
| 看不到 table/code 背景 | 在閱讀或即時預覽模式確認；檢查其他 CSS snippet 是否覆蓋主題 |
| 分頁變化沒有套側欄圖示 | 這是預期行為，分頁造型只控制文件分頁 |

## 驗證限制

目前主要驗證 macOS / Obsidian 1.14.5 的桌面操作。手機、其他桌面系統、popout 視窗、所有選項組合、最低版本及完整無障礙測試未完成。已完成原版 Style Settings 1.0.9 的乾淨 vault 載入和即時語言切換驗證；配套插件不修改第三方檔案。最新 iOS 系統日曆攔截仍待實機確認。
