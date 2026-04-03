"use client";

import { useState } from "react";

interface Album {
  id: number;
  title: string;
  year: number;
  tracks: string[];
  color: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "첫 번째 이야기",
    year: 2015,
    tracks: ["시작의 노래", "너에게로", "빛나는 순간", "함께 걷는 길"],
    color: "from-rose-400 to-pink-500",
  },
  {
    id: 2,
    title: "성장",
    year: 2017,
    tracks: ["더 높이", "꿈을 향해", "멈추지 않을게", "우리의 계절"],
    color: "from-violet-400 to-purple-500",
  },
  {
    id: 3,
    title: "빛과 그림자",
    year: 2019,
    tracks: ["별이 빛나는 밤", "그림자 속에서", "새벽을 깨우며", "영원의 약속"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 4,
    title: "GLOBAL",
    year: 2021,
    tracks: ["Beyond Borders", "하나된 세상", "Shine Together", "무한한 가능성"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 5,
    title: "10년의 기록",
    year: 2025,
    tracks: ["감사의 편지", "다시 만난 세계", "앞으로의 날들", "팬에게 보내는 노래"],
    color: "from-amber-400 to-orange-500",
  },
];

export default function MusicSection() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album>(albums[0]);

  return (
    <section id="music" className="py-20 px-4 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          디스코<span className="text-accent-dark">그래피</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          수남의 음악 여정을 함께 들어보세요
        </p>

        {/* Album cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {albums.map((album) => (
            <button
              key={album.id}
              onClick={() => setSelectedAlbum(album)}
              className={`group relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${
                selectedAlbum.id === album.id
                  ? "ring-3 ring-accent-dark scale-105 shadow-lg"
                  : "hover:scale-105 hover:shadow-md"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${album.color}`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                <span className="text-3xl mb-2">
                  {"\uD83C\uDFB5"}
                </span>
                <span className="text-xs font-bold text-center leading-tight">
                  {album.title}
                </span>
                <span className="text-xs opacity-80 mt-1">{album.year}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected album detail */}
        <div className="bg-card-bg rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            <div
              className={`w-full md:w-48 h-48 rounded-xl bg-gradient-to-br ${selectedAlbum.color} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-6xl">{"\uD83C\uDFB6"}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">{selectedAlbum.title}</h3>
              <p className="text-foreground/50 text-sm mb-4">
                {selectedAlbum.year}년 발매
              </p>
              <div className="space-y-2">
                {selectedAlbum.tracks.map((track, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-foreground/5 transition-colors group cursor-default"
                  >
                    <span className="text-xs text-foreground/30 w-5 text-right">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-sm">{track}</span>
                    <span className="text-foreground/20 group-hover:text-accent-dark transition-colors">
                      {"\u266A"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
