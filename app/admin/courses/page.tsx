"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../../components/layout/Sidebar";
import Topbar from "../../../components/layout/Topbar";
import { getCourses, addCourse } from "../../../lib/course";

type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  const saveCourse = async () => {
    if (!title || !description || !category) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await addCourse({
        title,
        description,
        category,
      });

      setTitle("");
      setDescription("");
      setCategory("");

      const data = await getCourses();
      setCourses(data || []);

      alert("Course added successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to add course.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-10">
          <h1 className="text-4xl font-bold mb-8">
            Course Management
          </h1>

          <div className="bg-white p-6 rounded-xl shadow mb-8">

            <input
              type="text"
              placeholder="Course Title"
              className="w-full border p-3 rounded mb-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Course Description"
              className="w-full border p-3 rounded mb-4"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="text"
              placeholder="Category"
              className="w-full border p-3 rounded mb-4"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <button
              onClick={saveCourse}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
            >
              Add Course
            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow p-6"
              >
                <h2 className="text-2xl font-bold mb-3">
                  {course.title}
                </h2>

                <p className="text-gray-700 mb-3">
                  {course.description}
                </p>

                <span className="text-green-700 font-semibold">
                  {course.category}
                </span>
              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  );
}