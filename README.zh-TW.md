# Animal Island for Obsidian

低飽和配色、紙張背景、緞帶文件名，以及柔和圓角組成的 Obsidian 主題。靈感來自 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)，以原生 Obsidian CSS 重新實作，沒有載入 React 元件庫。

**目前狀態：0.1.0 初始測試版。** 目前已驗證 macOS / Obsidian 1.14.5；手機、其他桌面系統及最低宣告版本 1.5.0 尚未完成實測。

[完整樣式指南](docs/STYLE_GUIDE.zh-TW.md) · [English setting reference](docs/SETTINGS.en.md) · [發佈說明](RELEASE_NOTES.md)

## 外觀特色

- 六種整體底色：奶油、鼠尾草、玫瑰、薰衣草、霧藍、沙杏，另可自訂。
- App 重點色獨立選擇；外框與內容面板可分色。
- 四種文件名造型；13 種彩色標題加羊皮紙配色，正文 H1–H6 獨立設定。
- 紙張圓點、方格和彩糖碎背景，以及六種 Markdown 分隔線。
- 圓角表格、淡色斑馬紋、橫直虛線與整列 hover。
- 程式碼與標籤依 App 底色搭配專屬色盤，包含深色模式。
- 離線內嵌 Nunito；介面、正文和程式碼可各選字體。
- 可選的 Animal Island Calendar：圓點紙張背景、小尺寸月曆、日期時間選擇。

## 安裝主題

1. 將 `manifest.json`、`theme.css` 和授權文件放入：

   ```text
   <你的 vault>/.obsidian/themes/Animal Island/
   ```

2. 在 Obsidian 開啟 **設定 → 外觀 → 主題**，選擇 **Animal Island**。
3. 若主題未出現，重新啟動 Obsidian；明暗模式由「外觀 → 基礎配色」控制。
4. 從社群插件安裝並啟用 **Style Settings**，再到 **設定 → Style Settings → Animal Island** 調整外觀。

只安裝主題也能使用預設外觀；Style Settings 提供自訂選項。這是獨立主題，不需要同時啟用其他主題或另外疊加 CSS snippet。

**語言選擇：** 獨立語言切換、下拉選項翻譯與即時更新需要可選的 Animal Island Calendar 配套插件。它只在執行時處理本主題設定，不修改 Style Settings 檔案。

## 首次啟用的預設外觀

預設採用作者選定的「小島方格書桌」：奶油米色底、海島薄荷重點色、深主框＋淺內容、綠色雙層緞帶檔名、方格紙背景（9%、24px）、膠囊文件分頁、薄荷選取與薄荷曲線分隔線。表格為斑馬紋＋跟隨底色的表頭，程式碼跟隨明暗，標籤使用配套實色。

目錄列高預設 29px，一般對話框圓角 25px，語言跟隨 Obsidian。手機版會套用相同配色，但使用專屬的欄位和間距調整。

首次啟用主題即可看到預設配色、背景和分頁造型，不必先匯入設定；Style Settings 的各項重設也使用這組新預設。有既存偏好的使用者不會被強制覆蓋。

若想完整恢復這套設定，可在 Style Settings 使用 Import，匯入 [default-preset.json](default-preset.json)。匯入前先 Export 備份；這個檔案只包含 Animal Island 的設定，不包含作者其他主題偏好或 vault 資料。獨立語言功能需要可選配套插件。

## 五分鐘開始

1. **全域主色 → 介面底色**：先選整體底色。
2. **全域主色 → App 主色配色**：再選連結、選取和按鈕的重點色。
3. **字體**：設定介面、正文、程式碼的字體清單。
4. **背景**：選純色、圓點或方格；圖案濃度可先從 8–12% 開始。
5. **文件名稱**：選雙層緞帶及配色。只影響筆記最上方的檔名，不影響 `#` 正文標題。
6. 到 **表格、程式碼、標籤** 調整密度與造型；配色會依介面底色搭配。

右側的單項重設按鈕會恢復該控制項的預設值；Animal Island 標題的整組重設會清除整個主題的自訂設定。Style Settings 的 Export / Import 可備份與還原偏好。更換選項前建議先匯出自己喜歡的組合。

## 配套月曆

月曆是**另外安裝的插件**，不包含在主題 CSS 的執行功能中。

1. 將配套檔案 `manifest.json`、`main.js`、`styles.css` 與授權放入：

   ```text
   <你的 vault>/.obsidian/plugins/animal-island-calendar/
   ```

2. 重新啟動 Obsidian，在 **設定 → 社群插件** 啟用 **Animal Island Calendar**。
3. 點筆記 Properties 裡的日期或日期時間欄位。
4. 選日期後按「確定」才儲存；「清空」也需確認。「今天」先選今天；Escape 或關閉視窗會取消。

改日期時保留原有時間；日期時間欄位也可調整時間。停用插件後恢復系統日期面板。詳見[月曆操作](docs/STYLE_GUIDE.zh-TW.md#月曆操作與鍵盤)。

## 配色邏輯

| 控制項 | 影響 |
| --- | --- |
| 介面底色 | 正文、側欄、設定面板、卡片，以及程式碼與標籤的配套色盤 |
| App 主色配色 | 連結、選取、主要按鈕；也對程式碼和標籤加入細微染色 |
| 主框與內容框分色 | 頂部分頁、左側工具列與檔案列表／目錄面板之間的層次 |
| 文件名稱配色 | 獨立於 App 配色，只改裝飾標題 |
| 表頭／月曆配色 | 對應元件的局部色彩選擇 |

淡薰衣草的淺色自適應程式碼使用灰紫紙張，不再加入主色染色，避免偏藍。自訂底色使用自動混色，可能需要自行調整對比度。

## 文件與相容範圍

完整指南列出全部 **46 個控制項、87 個選單選項**，另有 17 個分類及兩個說明項。文件中的預設值來自主題設定 schema，並非開發者目前 vault 的個人選擇。

- [完整樣式指南與 Markdown 範例](docs/STYLE_GUIDE.zh-TW.md)
- [English reference: all controls and default values](docs/SETTINGS.en.md)
- [0.1.0 測試版發佈說明](RELEASE_NOTES.md)

目前的桌面驗證涵蓋閱讀／即時預覽表格、明暗模式、分頁紙片／膠囊區別、日期儲存／清空／取消、保留時間及插件重啟。這不是所有配色、平台或無障礙情境的完整認證。主題不會把筆記變成有拖曳事件的行事曆，也不會增加輪播、上傳或分頁等 React 元件功能。

## 開源與授權

主題使用 MIT License；內嵌 Nunito 使用 SIL Open Font License 1.1。散佈時保留 [LICENSE](LICENSE)、[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 和 [Nunito-OFL.txt](Nunito-OFL.txt)。

發佈時只打包主題及配套插件所需檔案，不要包含 vault 筆記、工作區設定、個人 Style Settings 偏好或其他第三方插件。

本專案與 Obsidian 官方無隸屬關係。
