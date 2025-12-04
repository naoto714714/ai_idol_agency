import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { PrismCard } from "@/components/PrismCard";
import { Lock } from "lucide-react";

export default function Archive() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">Archive</h1>
          <p className="text-muted-foreground font-serif max-w-2xl mx-auto">過去のシーズン記録</p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60">
          <PrismCard
            className="p-8 bg-muted border-dashed border-2 border-border flex flex-col items-center justify-center min-h-[300px]"
            hoverEffect={false}
          >
            <Lock className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold text-muted-foreground">Season 2</h3>
            <p className="text-sm text-muted-foreground mt-2">Coming Soon</p>
          </PrismCard>

          <PrismCard
            className="p-8 bg-muted border-dashed border-2 border-border flex flex-col items-center justify-center min-h-[300px]"
            hoverEffect={false}
          >
            <Lock className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold text-muted-foreground">Season 3</h3>
            <p className="text-sm text-muted-foreground mt-2">Locked</p>
          </PrismCard>

          <PrismCard
            className="p-8 bg-muted border-dashed border-2 border-border flex flex-col items-center justify-center min-h-[300px]"
            hoverEffect={false}
          >
            <Lock className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold text-muted-foreground">Side Stories</h3>
            <p className="text-sm text-muted-foreground mt-2">Locked</p>
          </PrismCard>
        </div>

        <div className="text-center mt-12 text-muted-foreground font-serif">
          <p>物語が進むにつれて、新たなアーカイブが解放されます。</p>
        </div>
      </div>
    </Layout>
  );
}
