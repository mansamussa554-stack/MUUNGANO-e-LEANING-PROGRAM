import { supabase } from "./supabase";

export type Quiz = {
  id?: string;
  lesson_id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
};

export async function getQuizzes(lessonId: string) {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("lesson_id", lessonId)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data ?? [];
}

export async function addQuiz(quiz: Quiz) {
  const { error } = await supabase
    .from("quizzes")
    .insert([quiz]);

  if (error) throw error;
}