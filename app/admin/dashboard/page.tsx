"use client";

import { useEffect, useState } from "react";
import { getAnalytics } from "../../../lib/analytics";

type Analytics = {
  students: number;
  courses: number;
  lessons: number;
  certificates: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Analytics>({
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
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} text-white rounded-xl shadow-xl p-8`}
          >
            <h2 className="text-lg font-semibold">
              {card.title}
            </h2>

            <p className="text-5xl font-bold mt-5">
              {card.value}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}