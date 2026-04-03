"use client";

import { useState, useEffect } from "react";

interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  emoji: string;
}

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: "10주년 기념 콘서트",
    date: "2026-06-15T18:00:00",
    description: "서울 올림픽공원 체조경기장에서 열리는 특별 콘서트",
    emoji: "\uD83C\uDFB6",
  },
  {
    id: 2,
    title: "팬미팅 in 부산",
    date: "2026-05-20T14:00:00",
    description: "부산 벡스코에서 열리는 팬미팅",
    emoji: "\uD83C\uDF89",
  },
  {
    id: 3,
    title: "신규 앨범 발매",
    date: "2026-07-01T00:00:00",
    description: "6번째 정규 앨범 '새로운 시작' 발매",
    emoji: "\uD83D\uDCBF",
  },
];

function getTimeLeft(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    passed: false,
  };
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.passed) {
    return <span className="text-accent-dark font-semibold">진행 완료</span>;
  }

  const units = [
    { value: timeLeft.days, label: "일" },
    { value: timeLeft.hours, label: "시" },
    { value: timeLeft.minutes, label: "분" },
    { value: timeLeft.seconds, label: "초" },
  ];

  return (
    <div className="flex gap-2">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center bg-foreground/5 rounded-lg px-2 py-1.5 min-w-[3rem]"
        >
          <span className="text-lg md:text-xl font-bold font-mono tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-xs text-foreground/40">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function EventCountdown() {
  const sortedEvents = [...upcomingEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section id="events" className="py-20 px-4 bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          다가오는 <span className="text-accent-dark">이벤트</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          수남의 다가오는 일정을 확인하세요
        </p>

        <div className="space-y-4">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card-bg rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-4xl">{event.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                  <p className="text-sm text-foreground/50 mb-1">
                    {new Date(event.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      weekday: "long",
                    })}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {event.description}
                  </p>
                </div>
                <CountdownTimer targetDate={event.date} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
