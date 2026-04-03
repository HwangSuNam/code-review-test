const stats = [
  { label: "활동 기간", value: "10년+" },
  { label: "팬 수", value: "100만+" },
  { label: "작품 수", value: "50+" },
  { label: "수상", value: "20+" },
];

const traits = [
  { emoji: "🎤", title: "뛰어난 실력", desc: "언제나 완벽한 퍼포먼스" },
  { emoji: "💖", title: "팬 사랑", desc: "팬들과의 소통을 최우선으로" },
  { emoji: "✨", title: "끊임없는 성장", desc: "매번 새로운 모습을 보여주는 도전 정신" },
  { emoji: "🌍", title: "글로벌 활동", desc: "전 세계를 무대로 활약" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          수남 <span className="text-accent-dark">소개</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          수남은 많은 팬들에게 사랑받는 아티스트입니다. 뛰어난 실력과 따뜻한 인성으로
          팬들의 마음을 사로잡고 있습니다.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card-bg rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-accent-dark mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Traits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait) => (
            <div
              key={trait.title}
              className="bg-card-bg rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{trait.emoji}</div>
              <h3 className="font-semibold text-lg mb-2">{trait.title}</h3>
              <p className="text-sm text-foreground/60">{trait.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
