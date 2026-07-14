"use client";

import { use, useEffect, useState } from "react";
import { getQuizzes } from "../../../lib/quiz";
import { supabase } from "../../../lib/supabase";

type Quiz = {
  id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
};

type Props = {
  params: Promise<{
    lessonId: string;
  }>;
};

export default function StudentQuiz({ params }: Props) {
  const { lessonId } = use(params);

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    async function load() {
      const data = await getQuizzes(lessonId);
      setQuizzes(data);
    }

    load();
  }, [lessonId]);

  async function submitQuiz() {
    let score = 0;

    quizzes.forEach((quiz) => {
      if (answers[quiz.id] === quiz.correct_answer) {
        score++;
      }
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("progress").insert({
        user_id: user.id,
        lesson_id: lessonId,
        score,
        total_questions: quizzes.length,
        completed: true,
      });
    }

    alert(`Your Score: ${score}/${quizzes.length}`);
  }

  return (
    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">

        Lesson Quiz

      </h1>

      {quizzes.map((quiz) => (

        <div
          key={quiz.id}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >

          <h2 className="font-bold mb-6">

            {quiz.question}

          </h2>

          {["A", "B", "C", "D"].map((letter) => {

            const value =
              letter === "A"
                ? quiz.option_a
                : letter === "B"
                ? quiz.option_b
                : letter === "C"
                ? quiz.option_c
                : quiz.option_d;

            return (
              <label
                key={letter}
                className="block mb-3"
              >
                <input
                  type="radio"
                  name={quiz.id}
                  value={letter}
                  onChange={(e) =>
                    setAnswers({
                      ...answers,
                      [quiz.id]: e.target.value,
                    })
                  }
                />

                <span className="ml-2">

                  {value}

                </span>
              </label>
            );
          })}
        </div>
      ))}

      <button
        onClick={submitQuiz}
        className="bg-green-700 text-white px-8 py-3 rounded"
      >
        Submit Quiz
      </button>

    </div>
  );
}