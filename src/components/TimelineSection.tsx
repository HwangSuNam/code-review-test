const timelineEvents = [
  {
    year: "2015",
    title: "데뷔",
    desc: "첫 번째 작품으로 데뷔하며 활동 시작",
  },
  {
    year: "2017",
    title: "첫 수상",
    desc: "신인상을 수상하며 실력을 인정받음",
  },
  {
    year: "2019",
    title: "대표작 탄생",
    desc: "대중의 큰 사랑을 받은 대표작 발표",
  },
  {
    year: "2021",
    title: "글로벌 진출",
    desc: "해외 활동을 시작하며 글로벌 팬덤 형성",
  },
  {
    year: "2023",
    title: "대상 수상",
    desc: "최고의 영예인 대상을 수상",
  },
  {
    year: "2025",
    title: "10주년",
    desc: "데뷔 10주년을 맞이하며 팬들과 함께 축하",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          수남의 <span className="anime-shimmer-text anime-underline">발자취</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          수남과 함께한 소중한 순간들
        </p>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />

          <div className="space-y-8">
            {timelineEvents.map((event, i) => (
              <div
                key={event.year}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-dark rounded-full -translate-x-1/2 mt-1 z-10 shadow anime-dot" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-accent-dark text-white text-sm font-bold rounded-full mb-2">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-foreground/60">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
