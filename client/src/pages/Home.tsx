import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { PrismCard } from "@/components/PrismCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getAllStories, StoryData } from "@/lib/markdown";
import { ArrowRight, Play, Heart, MessageCircle, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const [stories, setStories] = useState<StoryData[]>([]);
  const [loadingStories, setLoadingStories] = useState(true);

  useEffect(() => {
    getAllStories()
      .then((data) => setStories(data))
      .finally(() => setLoadingStories(false));
  }, []);

  const latestStory = stories[0];
  const recentStories = stories.slice(1, 3);
  const episodeTarget = 10;
  const progressPercent = latestStory ? Math.min((latestStory.id / episodeTarget) * 100, 100) : 0;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_main.png"
            alt="Prism Beat Key Visual"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 flex justify-center px-4">
          <div className="relative w-full max-w-5xl mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-white/40 to-secondary/20 blur-3xl opacity-80" />
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-2xl shadow-primary/10 hero-glass">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-primary/5 to-secondary/5" />
              <div className="relative flex flex-col items-center text-center space-y-6 px-6 py-12 md:px-14">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/90 border border-primary/20 text-primary text-sm font-medium mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 hero-pill">
                  ✨ Season 1 Now Streaming
                </div>

                <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-foreground drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    PRISM BEAT
                  </span>
                </h1>

                <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  AIがプロデュースする、
                  <br className="md:hidden" />
                  物語を持ったアイドル事務所。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                  <Link href="/story/1">
                    <Button
                      size="lg"
                      className="rounded-full px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                    >
                      <Play className="mr-2 h-5 w-5 fill-current" /> Start Story
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 text-lg bg-white/85 border-primary/30 text-primary hover:bg-white/90 hero-ghost-button"
                    >
                      About Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Glass Shards Decoration */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rotate-12 blur-xl opacity-60 animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-gradient-to-bl from-secondary/20 to-transparent -rotate-12 blur-xl opacity-60 animate-pulse delay-700" />
      </section>

      {/* Current Season Status */}
      <section className="py-12 bg-muted/30 border-y border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Season {latestStory?.season ?? 1}
                </span>
                <span className="text-sm text-muted-foreground">{latestStory?.date ?? "Coming Soon"}</span>
              </div>
              <h3 className="text-2xl font-bold font-sans">
                {latestStory ? `Episode ${latestStory.id}: ${latestStory.title}` : "The Beginning of Resonance"}
              </h3>
              <p className="text-muted-foreground font-serif text-sm md:text-base">
                {latestStory
                  ? latestStory.summary
                  : "デビューライブに向けて合宿中の3人。それぞれの想いが交錯し、新たなハーモニーが生まれようとしている..."}
              </p>
            </div>

            <div className="w-full md:w-1/3 space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>
                  Episode {latestStory?.id ?? 0} / {episodeTarget}
                </span>
                <span className="text-primary">{Math.round(progressPercent)}% Complete</span>
              </div>
              <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="text-right">
                <Link
                  href="/story"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center justify-end gap-1"
                >
                  View Timeline <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-20 container">
        <SectionTitle title="Latest Episode" subtitle="彼女たちの物語は、リアルタイムで紡がれていく。" />

        {loadingStories ? (
          <div className="text-center py-12 text-muted-foreground">最新のストーリーを読み込み中です...</div>
        ) : latestStory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <PrismCard className="group cursor-pointer overflow-hidden aspect-video" hoverEffect={true}>
              <img
                src={latestStory.image}
                alt={latestStory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                {latestStory.isNew && (
                  <span className="inline-block px-2 py-1 rounded bg-primary/80 backdrop-blur-sm text-xs font-bold mb-2">
                    New Episode
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-1">
                  Ep.{latestStory.id} "{latestStory.title}"
                </h3>
                <p className="text-white/80 text-sm line-clamp-2">{latestStory.summary}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-white/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {latestStory.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {latestStory.duration}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </PrismCard>

            <div className="space-y-6">
              <div className="space-y-4">
                {recentStories.length > 0 ? (
                  recentStories.map((episode) => (
                    <Link key={episode.id} href={`/story/${episode.id}`}>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group">
                        <div className="w-24 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={episode.image}
                            alt={episode.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1 flex items-center gap-2">
                            <span>Episode {episode.id}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {episode.date}
                            </span>
                          </div>
                          <h4 className="font-bold group-hover:text-primary transition-colors">{episode.title}</h4>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 rounded-xl bg-white border border-border/50 text-muted-foreground text-sm">
                    他のエピソードはまだ準備中です。
                  </div>
                )}
              </div>

              <Link href="/story">
                <Button variant="ghost" className="group text-muted-foreground hover:text-primary">
                  All Episodes <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            ストーリーがまだありません。公開をお待ちください。
          </div>
        )}
      </section>

      {/* Members */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -left-20 top-40 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-40 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <SectionTitle title="Members" subtitle="個性豊かな3人のAIアイドルたち。" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Sakura",
                color: "from-pink-400 to-rose-400",
                role: "Center / Vocal",
                image: "/images/member_1.png",
              },
              {
                id: 2,
                name: "Aoi",
                color: "from-cyan-400 to-blue-400",
                role: "Dance / Leader",
                image: "/images/member_2.png",
              },
              {
                id: 3,
                name: "Luna",
                color: "from-purple-400 to-indigo-400",
                role: "Visual / Model",
                image: "/images/member_3.png",
              },
            ].map((member) => (
              <PrismCard
                key={member.id}
                className="group text-center p-6 bg-white/50 backdrop-blur-sm border-white/60"
                hoverEffect={true}
              >
                <div className="relative mx-auto mb-6 w-48 h-48 rounded-full p-1 bg-gradient-to-br from-white to-muted shadow-inner">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md`}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold font-sans mb-1">{member.name}</h3>
                <p
                  className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}
                >
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm font-serif mb-6 line-clamp-2">
                  明るく元気な性格で、グループのムードメーカー。歌うことが大好きで、常にポジティブなエネルギーを放つ。
                </p>
                <Link href={`/members#${member.name.toLowerCase()}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary"
                  >
                    View Profile
                  </Button>
                </Link>
              </PrismCard>
            ))}
          </div>
        </div>
      </section>

      {/* SNS Log Digest */}
      <section className="py-20 container">
        <SectionTitle title="SNS Log" subtitle="彼女たちの日常を覗き見る。" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <PrismCard key={i} className="p-5 bg-white" hoverEffect={true}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <img src={`/images/member_${i}.png`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Member Name</div>
                  <div className="text-xs text-muted-foreground">@member_id • 2h ago</div>
                </div>
              </div>
              <p className="text-sm text-foreground/80 mb-4 font-sans leading-relaxed">
                今日のレッスン終わったよ！💦 足がパンパンだけど、新しい振り付けすごくカッコいいから楽しみにしててね！✨
                #PrismBeat #Lesson
              </p>
              <div className="flex items-center gap-4 text-muted-foreground text-xs">
                <div className="flex items-center gap-1 hover:text-pink-500 transition-colors cursor-pointer">
                  <Heart className="w-4 h-4" /> 1.2k
                </div>
                <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                  <MessageCircle className="w-4 h-4" /> 86
                </div>
              </div>
            </PrismCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/sns">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/5"
            >
              View All SNS Logs
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
