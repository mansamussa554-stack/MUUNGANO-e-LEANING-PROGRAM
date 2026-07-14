import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}

export async function addCourse(course: {
  title: string;
  description: string;
  category: string;
}) {
  const { error } = await supabase
    .from("courses")
    .insert([course]);

  if (error) throw error;
}

export async function deleteCourse(id: string) {
  const { error } = await supabase
    .from("courses")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateCourse(
  id: string,
  course: {
    title: string;
    description: string;
    category: string;
  }
) {
  const { error } = await supabase
    .from("courses")
    .update(course)
    .eq("id", id);

  if (error) throw error;
}