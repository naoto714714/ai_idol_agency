# AIアイドル事務所「PRISM BEAT」公式サイト プロジェクトドキュメント

## プロジェクト概要

AIアイドル事務所「PRISM BEAT」の公式サイト構築プロジェクトです。
ストーリー（事務所ログ）とSNSテキストをメインコンテンツとし、小説のような読み物体験を提供することを目的としています。

## デザインコンセプト

**Prism Narrative (プリズム・ナラティブ)**

- **テーマ**: Neo-Editorial / Soft Futurism
- **特徴**: ホワイトベースにパステルカラー（ピンク・シアン）の光彩をあしらい、清潔感と近未来感を表現。
- **タイポグラフィ**: 本文には明朝体（Shippori Mincho）、UIには丸ゴシック体（Zen Maru Gothic）を使用し、可読性と親しみやすさを両立。

## ディレクトリ構成解説

プロジェクトの主要なファイル構成は以下の通りです。

```
/home/ubuntu/ai_idol_agency
├── client/                  # フロントエンドのソースコード
│   ├── public/              # 静的ファイル（画像など）
│   │   └── images/          # サイトで使用する画像アセット
│   └── src/
│       ├── components/      # 再利用可能なUIコンポーネント
│       │   ├── Layout.tsx   # ヘッダー・フッターを含む共通レイアウト
│       │   ├── PrismCard.tsx # プリズム効果を持つカードコンポーネント
│       │   ├── SectionTitle.tsx # デザインされたセクション見出し
│       │   └── ui/          # shadcn/ui ベースの基本コンポーネント群
│       ├── pages/           # 各ページのメインコンポーネント
│       │   ├── Home.tsx     # TOPページ
│       │   ├── Story.tsx    # ストーリー一覧ページ
│       │   ├── StoryDetail.tsx # ストーリー詳細（本文）ページ
│       │   ├── SNS.tsx      # SNSログ（タイムライン）ページ
│       │   ├── Members.tsx  # メンバー紹介ページ
│       │   ├── About.tsx    # プロジェクト概要ページ
│       │   └── Archive.tsx  # アーカイブページ（将来拡張用）
│       ├── index.css        # グローバルスタイル（Tailwind CSS設定含む）
│       └── App.tsx          # ルーティング設定
├── docs/                    # プロジェクトドキュメント
│   ├── ideas.md             # デザインブレインストーミングの記録
│   └── README.md            # 本ファイル
└── package.json             # 依存パッケージ管理
```

## 主要機能の実装ポイント

### 1. ストーリー機能 (`pages/Story.tsx`, `pages/StoryDetail.tsx`)

- エピソードの一覧表示と詳細表示を実装。
- 詳細ページでは、縦書きや明朝体を活用した「読み物」としてのレイアウトを意識。
- 前後のエピソードへのナビゲーションや、関連するSNSログへの導線を配置。

### 2. SNSログ機能 (`pages/SNS.tsx`)

- メンバーごとのフィルタリング機能を備えたタイムライン表示。
- 「いいね」や「コメント」などのリアクション数を表示し、リアルなSNSの雰囲気を再現。
- 画像付き投稿にも対応。

### 3. メンバー紹介 (`pages/Members.tsx`)

- 各メンバーのプロフィール、立ち絵、担当カラーを美しく表示。
- 関連するSNSログへのリンクを設置し、キャラクターの深掘りを促進。

### 4. デザインシステム (`index.css`, `components/PrismCard.tsx`)

- Tailwind CSSのカスタムテーマ機能を使用し、プロジェクト固有のカラーパレット（`oklch`形式）を定義。
- `PrismCard`コンポーネントにより、ホバー時の光彩エフェクトやグラスモーフィズムを統一的に適用。

## 今後の拡張性

- **Archiveページ**: 将来的にシーズンが増えた際に、過去のコンテンツを格納する場所として設計済み。
- **コンポーネント設計**: 共通パーツ（カード、見出し、ボタン）はコンポーネント化されており、新規ページの追加が容易。

## ストーリーの追加方法

ストーリーはMarkdownファイルとして管理されており、以下の手順で簡単に追加できます。

1. `client/public/content/stories/` ディレクトリに新しいMarkdownファイル（例: `ep4.md`）を作成します。
2. ファイルの先頭に以下のFront Matter（メタデータ）を記述します。

```markdown
---
id: 4
title: "エピソードタイトル"
season: 1
date: "Year 1 / Autumn"
duration: "15 min read"
image: "/images/story_thumb_1.png"
summary: "ストーリーのあらすじをここに記述します。"
isNew: true
---
```

3. Front Matterの下に、ストーリーの本文をMarkdown形式で記述します。
4. `client/src/lib/markdown.ts` の `knownFiles` 配列に新しいファイル名を追加します（開発環境の場合）。

```typescript
// client/src/lib/markdown.ts
const knownFiles = ["ep1.md", "ep2.md", "ep3.md", "ep4.md"]; // 追加
```

これで、自動的にストーリー一覧ページと詳細ページに反映されます。
