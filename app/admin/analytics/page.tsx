"use client";

import { useEffect, useState } from "react";
import { getAnalytics } from "@/lib/analytics";

type Stats = {
  students: number;
  courses: number;
  lessons: number;
  certificates: number;
};

export default function AnalyticsPage() {
  const [stats, setStats] = useState<Stats>({
    students: 0,
    courses: 0,
    lessons: 0,
    certificates: 0,
  });

  useEffect(() => {
    async function load() {
      const data = await getAnalytics();
      setStats(data);
    }

    load();
  }, []);

  const cards = [
    {
      title: "Students",
      value: stats.students,
      color: "bg-blue-600",
    },
    {
      title: "Courses",
      value: stats.courses,
      color: "bg-green-600",
    },
    {
      title: "Lessons",
      value: stats.lessons,
      color: "bg-yellow-500",
    },
    {
      title: "Certificates",
      value: stats.certificates,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} rounded-xl p-8 text-white shadow-xl`}
          >
            <p className="text-lg">
              {card.title}
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {card.value}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
}