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
description: Animal Island Notes 中文使用示範。可直接操作上方日期、時間、標籤與較長文字欄位。
---

> [!tip] 歡迎來到你的小島書桌
> 這是一篇真正的 Markdown 筆記。打開 **設定 → Style Settings → Animal Island Notes**，調整後回來看效果。固定的分隔線和背景圖鑑，建議使用「閱讀模式」查看。
> 最上方文件名的緞帶，與下面正文 H1–H6 標題是分開設定的。主題改變外觀，保留 Markdown 原本的行為。

**快速跳轉：** [[Animal Island Example - 中文#表格|表格]] · [[Animal Island Example - 中文#程式碼與標籤|程式碼]] · [[Animal Island Example - 中文#分隔線圖鑑|分隔線]] · [[Animal Island Example - 中文#背景圖鑑|背景]]

# 給想法一個柔和的家

午後的海風吹過小島，桌上放著溫熱的茶與一本還沒寫完的筆記。這裡可以放 **重要的發現**、*輕輕的提醒*、==值得記住的一句話==、~~已經放下的舊計畫~~，以及行內程式碼 `LocalDate.now()`。

中文與 English 放在同一段，方便比較混合文字的字體、間距和換行。介面、正文、程式碼可以各選字體；Nunito 已內嵌，其餘自選字體需要先安裝到裝置上。

## 今天的小小計畫

- [x] 泡一杯茶
- [ ] 寫下一句有用的話
- [ ] 讀一段喜歡的文字
- [ ] 散步，帶一個新想法回來

1. 先挑整體介面底色。
2. 再選獨立的 App 重點色。
3. 試試文件名緞帶與紙張背景。

### 再小一點的想法

正文標題可以選簡潔、底線或側邊標記。打開右側 Outline，觀察標題層級與目錄選取樣式。

#### 一個安靜的細節

##### 一個很小的提醒

###### 最後一點補充

---

## 表格

把游標放到某一列，會看到整列的 hover 配色。到 **表格 → 斑馬紋／乾淨** 切換，再比較跟隨底色或薄荷表頭，以及儲存格間距。橫列和直欄都有淡虛線。

| 島民 | 今天的小計畫 | 心情 |
| --- | --- | --- |
| Mochi | 讀完一個章節 | 好奇 |
| Pudding | 種下一個新想法 | 期待 |
| Cream | 分享一則有用的筆記 | 連結 |
| Yuki | 慢慢散步 | 平靜 |

### 長文字與對齊

| 項目 | 說明 | 數量 |
| :--- | :--- | ---: |
| REST | 使用 `/users/1` 與 `/users/1/posts` 等資源路徑。 | 12 |
| GraphQL | 使用 `/graphql`，只查詢目前需要的欄位。 | 8 |
| 中英混合 | 這一列刻意放入較長的中文與 English text，觀察窄螢幕下的換行、欄寬，以及內容是否保持在表格圓角之內。 | 100 |

## 程式碼與標籤

切換奶油、鼠尾草、玫瑰、薰衣草、霧藍和沙杏底色，觀察 code 與 tag 的配套色盤。程式碼可以跟隨明暗模式，也可以固定使用深色底。

```java
import java.time.LocalDate;

public class IslandNote {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        // 每天收集一件小小的發現。
        System.out.println("Hello, Animal Island Notes! " + today);
    }
}
```

```json
{
  "island": "小小的發現",
  "paper": "grid",
  "ribbon": "green",
  "oneSmallStep": true
}
```

#animal-island #little-moments #cozy-notes

到 **標籤 → 實色／描邊／淡底** 比較造型。行內程式碼 `git status` 與 `LocalDate.now()` 也會使用配套色盤。

---

## 提示框與引用

> [!note] 放一點有用的細節
> 試試提示框的卡片、側邊色條和虛線樣式。

> [!success] 一個小小的完成
> 今天又向前走了一小步。

> [!warning] 輕輕提醒
> 匯入預設配置之前，可以先 Export 備份自己喜歡的搭配。

> [!danger] 值得注意的問題
> 這個例子用來觀察錯誤提示在目前底色上的對比。

> [!question]- 需要時，再多看一點
> 點箭頭即可展開這個折疊提示框。
>
> - 一個補充細節
> - 下一個可以做的小步驟

> 不用著急，好事情會在小步驟裡慢慢長大。
>
> 切換卡片與簡潔引用樣式，也看看第二段的排版。

## 分隔線圖鑑

以下六種固定 HTML 範例可在閱讀模式一起比較，使用本主題的分隔線樣式。最後一條一般 Markdown `---` 則跟隨全域設定；原始碼模式會顯示 HTML，其他主題下的外觀可能不同。

### 薄荷圓點

<hr class="animal-divider-dots" style="--animal-divider-image: radial-gradient(circle, var(--animal-primary) 2px, transparent 2.5px); --animal-divider-tile: 18px 6px; --animal-divider-height: 12px;">

### 細實線

<hr class="animal-divider-thin">

### 大地虛線

<hr class="animal-divider-dashed">

### 細密虛線

<hr class="animal-divider-hairline">

### 金色波浪

<hr class="animal-divider-wave">

### 薄荷曲線

<hr class="animal-divider-squiggle">

### 全域分隔線預覽

下面是一般 Markdown 分隔線。修改 **分隔線 → 分隔線樣式**，就會跟著變化：

---

## 背景圖鑑

真正的筆記背景要到 **背景** 設定選擇；以下是閱讀模式的固定比較樣本。可以調整圖案濃度與間距，觀察淡淡的紋理和較明顯的效果。

<div class="animal-background-sample" style="--animal-paper-pattern: none;">純色紙張</div>

<div class="animal-background-sample animal-bg-cream-dots">奶油圓點</div>

<div class="animal-background-sample animal-bg-mint-dots">薄荷圓點</div>

<div class="animal-background-sample animal-bg-pink-dots">粉色圓點</div>

<div class="animal-background-sample animal-bg-grid">方格紙</div>

<div class="animal-background-sample animal-bg-sprinkles">彩糖碎</div>

## 圖片圓角

調整 **圖片與待辦 → 圖片圓角**，比較方角與柔和圓角的效果。

![Animal Island Notes 背景樣式](../docs/images/backgrounds.png)

## 月曆：日期與時間

需要另外啟用 **Animal Island Calendar** 配套插件。上方都是示範日期，可以自由嘗試。

| 屬性 | Obsidian 欄位類型 | 可以試的操作 |
| --- | --- | --- |
| `island-date` | 日期 | 打開圓點紙張月曆，選一天，再按確定。 |
| `island-time` | 日期與時間 | 改日期或時間；單改日期會保留原時間。 |
| `island-empty-date` | 日期 | 從空白開始選，也可試清空後再按確定。 |

把這份筆記放進其他 vault 時，先點屬性的類型圖示，把三個欄位設成表中的類型。欄位類型是 vault 設定，不會隨 Markdown 檔案一起攜帶。

「今天」先選今天，「確定」才儲存；關閉或 Escape 會取消。「清空」也需要按確定。這是 Properties 日期選擇器，不是事件排程日曆。

## 快速樣式巡禮

| 設定分類 | 在哪裡體驗 |
| --- | --- |
| 語言 | 跟隨 Obsidian、English、繁體中文、简体中文；獨立切換需要配套插件。 |
| App 配色 | 更換介面底色、重點色與主框／內容框分色。 |
| 字體與閱讀 | 更換正文字體、閱讀寬度、字級和行距。 |
| 文件名稱 | 雙層緞帶、緞帶、折角、簡潔文字，搭配全部標題色盤。 |
| 目錄與分頁 | 多開一篇筆記，比較紙片、膠囊、底線，再打開 Outline。 |
| 屬性 | 卡片、虛線、平面；調整列高和卡片寬度。 |
| 控制與浮層 | 開設定、hover 圖示看氣泡，試主要按鈕深度、控制項形狀與視窗圓角。 |
| 圖片與待辦 | 調整圖片圓角與勾選框形狀，勾選上方待辦。 |
| 動態 | 開筆記或對話框時比較柔和動態與關閉；會尊重系統減少動態偏好。 |

筆記內容展示的是正文；App 按鈕、分頁、hover 氣泡和對話框，需要在實際介面操作，不會由 Markdown 額外建立獨立版本。

## 原始 UI 致謝

這個 Obsidian 主題是依照 **[Animal Island UI](https://guokaigdg.github.io/animal-island-ui/)** 建立的，原作者為 **[guokaigdg](https://github.com/guokaigdg)**。原始 UI 設計應歸功於原作者；Tiffany Iong 將它改寫為 Obsidian 主題。

[原始專案](https://github.com/guokaigdg/animal-island-ui) · [原版 Skill](https://guokaigdg.github.io/animal-island-ui/#/skill) · [主題與圖片指南](https://github.com/tiffanyiong/obsidian-animal-island)

另一份範例：[[Animal Island Example - English]]
