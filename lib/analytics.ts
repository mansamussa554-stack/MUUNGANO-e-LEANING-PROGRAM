import { supabase } from "./supabase";

export async function getAnalytics() {
  const [
    studentsResult,
    coursesResult,
    lessonsResult,
    certificatesResult,
  ] = await Promise.all([
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "student"),

    supabase
      .from("courses")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("lessons")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("certificates")
      .select("*", { count: "exact", head: true }),
  ]);

  return {
    students: studentsResult.count ?? 0,
    courses: coursesResult.count ?? 0,
    lessons: lessonsResult.count ?? 0,
    certificates: certificatesResult.count ?? 0,
  };
}