import { Layout } from "@/components/Layout";
import { PrismCard } from "@/components/PrismCard";
import { SectionTitle } from "@/components/SectionTitle";

export default function About() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">About Project</h1>
          <p className="text-muted-foreground font-serif max-w-2xl mx-auto">PRISM BEAT Projectについて</p>
        </div>
      </div>

      <div className="container py-16 max-w-4xl mx-auto space-y-16">
        <section>
          <SectionTitle title="Concept" subtitle="AIと物語の融合" align="left" />
          <div className="prose prose-lg max-w-none font-serif leading-loose text-foreground/90">
            <p>
              「PRISM
              BEAT」は、AI技術によって生成された架空のアイドルたちが織りなす、新しい形のエンターテインメントプロジェクトです。
            </p>
            <p>
              彼女たちは歌を歌いません（現時点では）。その代わり、彼女たちの成長、葛藤、そして日常の些細な出来事が、テキストベースのストーリーとSNSログとしてリアルタイムに更新されていきます。
            </p>
            <p>
              まるで実在するアイドルの活動を追うように、あるいは連載小説を読むように。
              <br />
              デジタルな存在である彼女たちが、物語を通じて「心」を獲得していく過程を、どうぞ見守ってください。
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="AI Policy" subtitle="制作におけるAI活用について" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PrismCard className="p-6 bg-white" hoverEffect={false}>
              <h3 className="text-xl font-bold mb-4 text-primary">Visual Generation</h3>
              <p className="text-muted-foreground leading-relaxed">
                キャラクターデザイン、背景、挿絵などのビジュアル要素は、画像生成AIを活用して制作されています。一貫した世界観を保ちつつ、AIならではの幻想的な表現を追求しています。
              </p>
            </PrismCard>

            <PrismCard className="p-6 bg-white" hoverEffect={false}>
              <h3 className="text-xl font-bold mb-4 text-secondary">Story Co-creation</h3>
              <p className="text-muted-foreground leading-relaxed">
                ストーリーの大枠やキャラクター設定は人間がディレクションし、細部の描写やSNSの投稿文などはAIとの対話を通じて生成・推敲されています。
              </p>
            </PrismCard>
          </div>
        </section>

        <section className="bg-muted/30 p-8 rounded-2xl border border-border/50 text-center">
          <h3 className="text-xl font-bold mb-4">Join the Community</h3>
          <p className="text-muted-foreground mb-6">
            感想や応援メッセージは、ハッシュタグ #PrismBeat でSNSに投稿してください。
            <br />
            あなたの声が、彼女たちの物語を変えるかもしれません。
          </p>
        </section>
      </div>
    </Layout>
  );
}
