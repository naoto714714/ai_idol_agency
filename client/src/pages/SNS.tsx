import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { PrismCard } from "@/components/PrismCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Repeat, Share } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    id: 1,
    memberId: 1,
    name: "Sakura",
    handle: "@sakura_prism",
    avatar: "/images/member_1.png",
    content:
      "今日のレッスン終わったよ！💦 足がパンパンだけど、新しい振り付けすごくカッコいいから楽しみにしててね！✨ #PrismBeat #Lesson",
    image: "/images/story_thumb_1.png",
    date: "Year 1 / Summer",
    likes: "1.2k",
    comments: 86,
    shares: 240,
  },
  {
    id: 2,
    memberId: 2,
    name: "Aoi",
    handle: "@aoi_prism",
    avatar: "/images/member_2.png",
    content: "本日の反省会終了。課題は山積みだけど、一つずつクリアしていくしかない。明日はもっと完璧に仕上げる。",
    date: "Year 1 / Summer",
    likes: "980",
    comments: 45,
    shares: 120,
  },
  {
    id: 3,
    memberId: 3,
    name: "Luna",
    handle: "@luna_prism",
    avatar: "/images/member_3.png",
    content:
      "スタジオの近くで見つけたカフェの新作ラテ☕️ 甘さ控えめで美味しかった〜。二人にも差し入れしたら喜んでくれたよ♪",
    image: null,
    date: "Year 1 / Summer",
    likes: "2.1k",
    comments: 150,
    shares: 500,
  },
  {
    id: 4,
    memberId: 1,
    name: "Sakura",
    handle: "@sakura_prism",
    avatar: "/images/member_1.png",
    content: "Lunaちゃんがくれたラテ、生き返った〜！ありがとう！明日も頑張るぞー！💪",
    date: "Year 1 / Summer",
    likes: "1.5k",
    comments: 92,
    shares: 300,
  },
];

export default function SNS() {
  const [filter, setFilter] = useState("all");

  const filteredPosts = filter === "all" ? posts : posts.filter((post) => post.name.toLowerCase() === filter);

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">SNS Log</h1>
          <p className="text-muted-foreground font-serif max-w-2xl mx-auto">メンバーたちの日常と、リアルな声。</p>
        </div>
      </div>

      <div className="container py-12 max-w-3xl">
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setFilter}>
          <TabsList className="w-full grid grid-cols-4 bg-muted/50 p-1 rounded-full">
            <TabsTrigger
              value="all"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="sakura"
              className="rounded-full data-[state=active]:bg-pink-50 data-[state=active]:text-pink-600"
            >
              Sakura
            </TabsTrigger>
            <TabsTrigger
              value="aoi"
              className="rounded-full data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-600"
            >
              Aoi
            </TabsTrigger>
            <TabsTrigger
              value="luna"
              className="rounded-full data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600"
            >
              Luna
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <PrismCard key={post.id} className="p-6 bg-white border-border/60" hoverEffect={false}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden border border-border">
                    <img src={post.avatar} alt={post.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">{post.name}</span>
                      <span className="text-muted-foreground text-sm">{post.handle}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>

                  <p className="text-foreground/90 whitespace-pre-wrap mb-4 font-sans leading-relaxed">
                    {post.content}
                  </p>

                  {post.image && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-border/50">
                      <img
                        src={post.image}
                        alt="Post attachment"
                        className="w-full h-auto object-cover max-h-[400px]"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-muted-foreground text-sm max-w-md">
                    <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group">
                      <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-green-500 transition-colors group">
                      <Repeat className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{post.shares}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-pink-500 transition-colors group">
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition-colors group">
                      <Share className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </PrismCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}
