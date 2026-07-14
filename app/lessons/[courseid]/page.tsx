"use client";

import { use, useEffect, useState } from "react";
import { getLessons } from "../../../lib/lesson";
import VideoPlayer from "../../../components/VideoPlayer";
import PDFViewer from "../../../components/PDFViewer";

type Lesson = {
  id: string;
  title: string;
  content: string | null;
  video_url: string | null;
  pdf_url: string | null;
};

type Props = {
  params: Promise<{
    courseId: string;
  }>;
};

export default function LessonPage({ params }: Props) {
  const { courseId } = use(params);

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLessons() {
      try {
        const data = await getLessons(courseId);
        setLessons(data ?? []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadLessons();
  }, [courseId]);

  if (loading) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Loading lessons...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Course Lessons
      </h1>

      {lessons.length === 0 ? (
        <div className="bg-yellow-100 p-6 rounded-lg">
          No lessons found for this course.
        </div>
      ) : (
        lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white shadow-lg rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">
              {lesson.title}
            </h2>

            <p className="mb-6 whitespace-pre-line">
              {lesson.content}
            </p>

            {lesson.video_url && (
              <VideoPlayer url={lesson.video_url} />
            )}

            {lesson.pdf_url && (
              <div className="mt-8">
                <PDFViewer url={lesson.pdf_url} />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}