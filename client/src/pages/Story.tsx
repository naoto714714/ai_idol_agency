import { Layout } from "@/components/Layout";
import { PrismCard } from "@/components/PrismCard";
import { Button } from "@/components/ui/button";
import { getAllStories, StoryData } from "@/lib/markdown";
import { Calendar, Clock, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Story() {
  const [episodes, setEpisodes] = useState<StoryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllStories().then((data) => {
      setEpisodes(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">Story Archive</h1>
          <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
            AIと共に歩む、彼女たちの軌跡。
            <br />
            喜びも葛藤も、すべてがここに記録されています。
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold font-sans flex items-center gap-2">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Season 1
          </h2>
          <div className="text-sm text-muted-foreground">Total {episodes.length} Episodes</div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground">Loading stories...</div>
        ) : (
          <div className="space-y-8">
            {episodes.map((episode) => (
              <PrismCard key={episode.id} className="group overflow-hidden bg-white" hoverEffect={true}>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    {episode.isNew && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                        NEW
                      </div>
                    )}
                  </div>

                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {episode.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {episode.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      <span className="text-muted-foreground/50 mr-3">#{episode.id}</span>
                      {episode.title}
                    </h3>

                    <p className="text-muted-foreground font-serif leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                      {episode.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                      <Link href={`/story/${episode.id}`}>
                        <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 group-hover:translate-x-1 transition-all">
                          Read Episode <Play className="ml-2 w-4 h-4 fill-current" />
                        </Button>
                      </Link>

                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                            <img src={`/images/member_${i}.png`} alt="Member" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </PrismCard>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
