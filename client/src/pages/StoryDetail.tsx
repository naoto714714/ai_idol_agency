import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { getStory, StoryData } from "@/lib/markdown";
import { ArrowLeft, ArrowRight, Calendar, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";

export default function StoryDetail() {
  const [, params] = useRoute("/story/:id");
  const id = params?.id || "1";
  const [story, setStory] = useState<StoryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    // In a real app, we would map ID to filename more robustly
    getStory(`ep${id}.md`)
      .then((data) => {
        setStory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Loading story...</div>
        </div>
      </Layout>
    );
  }

  if (!story) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <div className="text-xl font-bold">Story not found</div>
          <Link href="/story">
            <Button>Back to Archive</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Story Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container max-w-4xl mx-auto">
            <Link href="/story">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Archive
              </Button>
            </Link>

            <div className="flex items-center gap-3 text-white/80 text-sm font-medium mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white">
                Episode {story.id}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {story.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-sans">{story.title}</h1>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <article className="container max-w-3xl mx-auto py-16 px-6 md:px-0">
        <div
          className="prose prose-lg prose-slate md:prose-xl font-serif leading-loose text-foreground/90 [&>p:first-of-type]:first-letter:text-5xl [&>p:first-of-type]:first-letter:font-bold [&>p:first-of-type]:first-letter:text-primary [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:float-left"
          dangerouslySetInnerHTML={{ __html: story.htmlContent }}
        />

        {/* Story Footer */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>
          <div className="flex gap-4">
            <Link href={`/story/${Number(id) - 1}`}>
              <Button variant="ghost" disabled={Number(id) <= 1}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            </Link>
            <Link href={`/story/${Number(id) + 1}`}>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Next Episode <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related SNS */}
      <section className="bg-muted/30 py-16">
        <div className="container max-w-4xl mx-auto">
          <SectionTitle title="Related SNS Logs" subtitle="このエピソードの裏側で。" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <img src="/images/member_2.png" alt="Aoi" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Aoi</div>
                  <div className="text-xs text-muted-foreground">Year 1 / Summer</div>
                </div>
              </div>
              <p className="text-sm mb-4">
                言い過ぎちゃったかな...。でも、妥協したくない。私たちならもっと上に行けるはずだから。 #PrismBeat
                #Rehearsal
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <img src="/images/member_1.png" alt="Sakura" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Sakura</div>
                  <div className="text-xs text-muted-foreground">Year 1 / Summer</div>
                </div>
              </div>
              <p className="text-sm mb-4">
                Lunaちゃんがくれたドリンク、すごく美味しかった！🥤 明日も頑張ろう。雨降って地固まる、だよね！🌈
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/sns">
              <Button variant="outline" className="rounded-full">
                View All SNS Logs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
