import { supabase } from "./supabase";

export async function getCertificate(userId: string) {
  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) return null;

  return data;
}

export async function createCertificate(
  userId: string,
  fullName: string,
  courseTitle: string
) {
  const { error } = await supabase
    .from("certificates")
    .insert([
      {
        user_id: userId,
        full_name: fullName,
        course_title: courseTitle,
      },
    ]);

  if (error) throw error;
}