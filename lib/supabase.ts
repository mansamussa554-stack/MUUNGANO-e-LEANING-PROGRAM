import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hqdwqmelejrhepfwajrt.supabase.co";

const supabaseAnonKey =
"sb_publishable_oum-XY8c_I7_dTdT3m0tUw_foEf6bHY";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);