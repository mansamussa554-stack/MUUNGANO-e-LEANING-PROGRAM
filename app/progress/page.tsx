"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Progress = {
  id: string;
  score: number;
  total_questions: number;
  completed: boolean;
};

export default function ProgressPage() {
  const [progress, setProgress] = useState<Progress[]>([]);

  useEffect(() => {
    async function loadProgress() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("progress")
        .select("*")
        .eq("user_id", user.id);

      if (!error && data) {
        setProgress(data as Progress[]);
      }
    }

    loadProgress();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        My Learning Progress
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {progress.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">
              Quiz Result
            </h2>

            <p>
              Score: {item.score} / {item.total_questions}
            </p>

            <p className="mt-2">
              Status:
              <span
                className={
                  item.completed
                    ? "text-green-700 font-bold"
                    : "text-red-700 font-bold"
                }
              >
                {item.completed ? " Completed" : " Not Completed"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}