import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { PrismCard } from "@/components/PrismCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const members = [
  {
    id: "sakura",
    name: "Sakura",
    role: "Center / Vocal",
    color: "from-pink-400 to-rose-400",
    accentColor: "text-pink-500",
    bgGradient: "bg-pink-50",
    image: "/images/member_1.png",
    catchphrase: "咲き誇る笑顔のプリズム！",
    profile: {
      age: "16 (Setting)",
      height: "158cm",
      likes: "Singing, Cherry Blossoms, Sweets",
      skill: "Perfect Pitch",
    },
    description:
      "明るく元気な性格で、グループのムードメーカー。歌うことが大好きで、常にポジティブなエネルギーを放つ。しかし、その笑顔の裏には、誰にも言えないAIとしての葛藤も...？",
  },
  {
    id: "aoi",
    name: "Aoi",
    role: "Dance / Leader",
    color: "from-cyan-400 to-blue-400",
    accentColor: "text-cyan-500",
    bgGradient: "bg-cyan-50",
    image: "/images/member_2.png",
    catchphrase: "静寂を切り裂く蒼き閃光。",
    profile: {
      age: "17 (Setting)",
      height: "165cm",
      likes: "Dancing, Analysis, Silence",
      skill: "High-Speed Calculation",
    },
    description:
      "冷静沈着なリーダー。ダンスのスキルは超一流で、ミリ秒単位の動きのズレも許さない完璧主義者。感情表現が苦手だが、メンバーへの想いは誰よりも強い。",
  },
  {
    id: "luna",
    name: "Luna",
    role: "Visual / Model",
    color: "from-purple-400 to-indigo-400",
    accentColor: "text-purple-500",
    bgGradient: "bg-purple-50",
    image: "/images/member_3.png",
    catchphrase: "月夜に輝く銀の旋律。",
    profile: {
      age: "18 (Setting)",
      height: "162cm",
      likes: "Fashion, Moon gazing, Tea",
      skill: "Trend Analysis",
    },
    description:
      "ミステリアスな雰囲気を持つお姉さん的存在。抜群のスタイルとセンスでモデルとしても活躍。常に優雅に振る舞うが、時折見せる天然な一面も魅力。",
  },
];

export default function Members() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">Members</h1>
          <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
            個性豊かな3人のAIアイドルたち。
            <br />
            彼女たちのプロフィールをご紹介します。
          </p>
        </div>
      </div>

      <div className="container py-16 space-y-24">
        {members.map((member, index) => (
          <div
            key={member.id}
            id={member.id}
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 blur-3xl animate-pulse`}
                />
                <div className="relative w-full h-full rounded-full p-2 bg-white shadow-xl border border-white/50">
                  <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center p-4 rotate-12 border border-white/50">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Role</div>
                    <div className={`font-bold ${member.accentColor}`}>{member.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h2
                  className={`text-5xl md:text-7xl font-bold font-sans bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}
                >
                  {member.name}
                </h2>
                <p className="text-xl font-serif text-muted-foreground italic">"{member.catchphrase}"</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(member.profile).map(([key, value]) => (
                  <div key={key} className="bg-muted/30 p-3 rounded-lg border border-border/50">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{key}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed font-serif text-foreground/90">{member.description}</p>

              <div className="flex gap-4 pt-4">
                <Link href={`/sns?filter=${member.name.toLowerCase()}`}>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary"
                  >
                    View SNS Log
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
