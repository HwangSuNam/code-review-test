"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: number;
}

const questions: Question[] = [
  {
    question: "수남의 데뷔 연도는?",
    options: ["2013년", "2014년", "2015년", "2016년"],
    answer: 2,
  },
  {
    question: "수남의 첫 번째 앨범 이름은?",
    options: ["성장", "첫 번째 이야기", "빛과 그림자", "GLOBAL"],
    answer: 1,
  },
  {
    question: "수남이 대상을 수상한 연도는?",
    options: ["2021년", "2022년", "2023년", "2024년"],
    answer: 2,
  },
  {
    question: "수남의 글로벌 진출 시기는?",
    options: ["2019년", "2020년", "2021년", "2022년"],
    answer: 2,
  },
  {
    question: "2025년 수남의 중요한 이정표는?",
    options: ["첫 콘서트", "해외 투어", "10주년", "은퇴 선언"],
    answer: 2,
  },
];

export default function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === questions[currentQ].answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswered(false);
  };

  const getResultMessage = () => {
    const ratio = score / questions.length;
    if (ratio === 1) return "완벽해요! 진정한 수남 팬이시네요! \uD83C\uDF1F";
    if (ratio >= 0.6) return "대단해요! 수남에 대해 잘 알고 계시네요! \uD83D\uDC4F";
    return "아쉬워요! 수남에 대해 더 알아보세요! \uD83D\uDCAA";
  };

  if (finished) {
    return (
      <section id="quiz" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            퀴즈 <span className="text-accent-dark">결과</span>
          </h2>
          <div className="bg-card-bg rounded-2xl p-8 shadow-sm">
            <p className="text-6xl mb-4">
              {score === questions.length
                ? "\uD83C\uDFC6"
                : score >= 3
                ? "\uD83C\uDF89"
                : "\uD83D\uDE0A"}
            </p>
            <p className="text-2xl font-bold mb-2">
              {score} / {questions.length}
            </p>
            <p className="text-foreground/60 mb-6">{getResultMessage()}</p>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              다시 도전하기
            </button>
          </div>
        </div>
      </section>
    );
  }

  const q = questions[currentQ];

  return (
    <section id="quiz" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          팬 <span className="text-accent-dark">퀴즈</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          수남에 대해 얼마나 알고 있나요?
        </p>

        <div className="bg-card-bg rounded-2xl p-6 md:p-8 shadow-sm">
          {/* Progress */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-foreground/50">
              {currentQ + 1} / {questions.length}
            </span>
            <div className="flex-1 mx-4 h-2 bg-foreground/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent-dark rounded-full transition-all duration-500"
                style={{
                  width: `${((currentQ + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-sm text-accent-dark font-semibold">
              {score}점
            </span>
          </div>

          {/* Question */}
          <h3 className="text-lg md:text-xl font-semibold mb-6">
            {q.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {q.options.map((option, i) => {
              let style = "border-foreground/10 hover:border-accent-dark/50";
              if (answered) {
                if (i === q.answer) {
                  style = "border-green-500 bg-green-500/10";
                } else if (i === selected && i !== q.answer) {
                  style = "border-red-500 bg-red-500/10";
                } else {
                  style = "border-foreground/10 opacity-50";
                }
              } else if (i === selected) {
                style = "border-accent-dark bg-accent-dark/10";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 ${style}`}
                >
                  <span className="text-sm font-medium">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Next button */}
          {answered && (
            <button
              onClick={handleNext}
              className="w-full px-6 py-3 bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {currentQ < questions.length - 1 ? "다음 문제" : "결과 보기"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
