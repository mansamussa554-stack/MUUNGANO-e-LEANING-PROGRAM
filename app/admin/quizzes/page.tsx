"use client";

import { useState } from "react";
import { addQuiz } from "../../../lib/quiz";

export default function AdminQuizPage() {
  const [lessonId, setLessonId] = useState("");
  const [question, setQuestion] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [correct, setCorrect] = useState("");

  async function saveQuiz() {
    try {
      await addQuiz({
        lesson_id: lessonId,
        question,
        option_a: a,
        option_b: b,
        option_c: c,
        option_d: d,
        correct_answer: correct,
      });

      alert("Quiz saved successfully.");

      setLessonId("");
      setQuestion("");
      setA("");
      setB("");
      setC("");
      setD("");
      setCorrect("");
    } catch (err) {
      console.error(err);
      alert("Failed to save quiz.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Create Quiz
      </h1>

      <input
        className="border p-3 rounded w-full mb-4"
        placeholder="Lesson ID"
        value={lessonId}
        onChange={(e) => setLessonId(e.target.value)}
      />

      <textarea
        className="border p-3 rounded w-full mb-4"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        className="border p-3 rounded w-full mb-3"
        placeholder="Option A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        className="border p-3 rounded w-full mb-3"
        placeholder="Option B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <input
        className="border p-3 rounded w-full mb-3"
        placeholder="Option C"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />

      <input
        className="border p-3 rounded w-full mb-3"
        placeholder="Option D"
        value={d}
        onChange={(e) => setD(e.target.value)}
      />

      <input
        className="border p-3 rounded w-full mb-6"
        placeholder="Correct Answer (A/B/C/D)"
        value={correct}
        onChange={(e) => setCorrect(e.target.value)}
      />

      <button
        onClick={saveQuiz}
        className="bg-green-700 text-white px-6 py-3 rounded"
      >
        Save Quiz
      </button>
    </div>
  );
}