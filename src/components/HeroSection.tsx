export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-accent-dark animate-float animate-delay-400" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-accent animate-float animate-delay-200" />
      </div>

      <div className="relative z-10">
        {/* Profile image placeholder */}
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-6xl shadow-lg anime-bounce-in anime-pulse-ring">
          <span role="img" aria-label="수남" className="anime-star">&#x1F31F;</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 anime-bounce-in" style={{ animationDelay: "0.2s" }}>
          <span className="anime-shimmer-text">수남</span>을 응원합니다
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 anime-bounce-in" style={{ animationDelay: "0.4s" }}>
          수남의 모든 것을 한 곳에서. 팬들이 함께 만들어가는 공간입니다.
        </p>

        <a
          href="#about"
          className="inline-block px-8 py-3 bg-accent-dark text-white rounded-full font-medium hover:opacity-90 transition-opacity anime-bounce-in anime-wiggle"
          style={{ animationDelay: "0.6s" }}
        >
          더 알아보기
        </a>
      </div>
    </section>
  );
}
