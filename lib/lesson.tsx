import { supabase } from "./supabase";

export async function getLessons(courseId: string) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", courseId)
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}