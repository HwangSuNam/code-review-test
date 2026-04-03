"use client";

import { useState } from "react";

interface Message {
  id: number;
  name: string;
  text: string;
  date: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: "별빛팬",
    text: "수남, 항상 응원해요! 무대 위에서 빛나는 모습이 너무 좋아요.",
    date: "2026-04-01",
  },
  {
    id: 2,
    name: "행복이",
    text: "덕분에 매일이 행복합니다. 앞으로도 함께 걸어가요!",
    date: "2026-03-28",
  },
  {
    id: 3,
    name: "영원한팬",
    text: "10주년 축하해요! 다음 10년도 함께할게요.",
    date: "2026-03-25",
  },
];

export default function FanMessageSection() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setText("");
  };

  return (
    <section id="fan-messages" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          팬 <span className="text-accent-dark">메시지</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          수남에게 응원의 메시지를 남겨주세요
        </p>

        {/* Message form */}
        <form
          onSubmit={handleSubmit}
          className="bg-card-bg rounded-2xl p-6 shadow-sm mb-10"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="닉네임"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-shrink-0 sm:w-40 px-4 py-2 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-accent-dark/50"
            />
            <input
              type="text"
              placeholder="응원 메시지를 입력하세요..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-accent-dark/50"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            메시지 남기기
          </button>
        </form>

        {/* Messages list */}
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-card-bg rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-accent-dark">
                  {msg.name}
                </span>
                <span className="text-xs text-foreground/40">{msg.date}</span>
              </div>
              <p className="text-foreground/80">{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
