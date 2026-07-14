"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCourses } from "../../lib/course";

type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export default function CoursesPage() {

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {

    async function load() {

      const data = await getCourses();

      setCourses((data ?? []) as Course[]);

    }

    load();

  }, []);

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Available Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {courses.map((course) => (

          <Link
            href={`/lessons/${course.id}`}
            key={course.id}
          >

            <div className="bg-white rounded-xl shadow p-6 hover:shadow-2xl transition cursor-pointer">

              <h2 className="text-2xl font-bold">
                {course.title}
              </h2>

              <p className="mt-3">
                {course.description}
              </p>

              <p className="text-green-700 mt-3">
                {course.category}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>

  );
}