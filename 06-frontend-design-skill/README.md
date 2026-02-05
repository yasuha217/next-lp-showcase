# 06 frontend-design skill 使用

## フロー

```
B → C → C-2（コンポーネント抽出）→ D → frontend-design skill
```

### 詳細フロー図

```
[ワイヤーフレーム]          [参考LP（買取大吉）]
       |                          |
       v                          v
    Step B                     Step C
  (構造抽出)               (デザイン辞書抽出)
       |                          |
       |                       Step C-2
       |                  (コンポーネント抽出)
       |                          |
       v                          v
   B出力.yaml                 C出力.yaml
       |                          |
       +------------+-------------+
                    v
                 Step D
            (統合YAML生成)
                    |
                    v
              D出力.yaml
                    |
                    v
         /frontend-design skill
         (Claude Code 直接実装)
                    |
                    v
            NEXT_LP_v2.html
```

## 各ステップの役割

| Step | 入力 | 出力 | 役割 |
|------|------|------|------|
| B | ワイヤーフレーム | B出力.yaml | セクション構造・コンテンツ抽出 |
| C | 参考LPスクショ+HTML/CSS | C出力.yaml (design) | デザイン辞書（colors, typography, backgrounds） |
| C-2 | 参考LPスクショ+HTML/CSS | C出力.yaml (components) | UIコンポーネント（html_template + specs） |
| D | B出力 + C出力 | D出力.yaml | 統合LP仕様書 |
| frontend-design | D出力.yaml | index.html | HTML + CSS 直接生成 |

## Step C-2 で抽出したコンポーネント例

- `section_heading` - セクション見出し（ネイビー + 赤下線）
- `feature_card_bordered` - 枠線付きカード
- `number_label` - 番号付きラベル（01, 02, 03...）
- `cta_button_primary` - オレンジグラデーションCTA
- `marker_highlight` - 黄色マーカー強調
- `badge_medal` - メダルバッジ（No.1等）
- `testimonial_card` - お客様の声カード
- `sticky_footer` - スティッキーCTAフッター

## 特徴

- **Lovable/Bolt 不要**: Claude Code の `/frontend-design` skill で直接 HTML 生成
- **コンポーネント精度向上**: Step C-2 により、参考LPのUIパーツを詳細に抽出
- **文言固定**: YAMLのコピーがそのまま反映（Lovableのような文言変更なし）
