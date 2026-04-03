const galleryItems = [
  { id: 1, title: "무대 위의 수남", color: "from-rose-400 to-pink-600" },
  { id: 2, title: "팬미팅 현장", color: "from-blue-400 to-indigo-600" },
  { id: 3, title: "비하인드 컷", color: "from-emerald-400 to-teal-600" },
  { id: 4, title: "화보 촬영", color: "from-amber-400 to-orange-600" },
  { id: 5, title: "콘서트 현장", color: "from-purple-400 to-violet-600" },
  { id: 6, title: "일상 모습", color: "from-cyan-400 to-blue-600" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          포토 <span className="text-accent-dark">갤러리</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          수남의 다양한 모습을 만나보세요
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Placeholder gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                  📷
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/40 text-sm mt-8">
          * 실제 이미지는 추후 추가 예정입니다
        </p>
      </div>
    </section>
  );
}
