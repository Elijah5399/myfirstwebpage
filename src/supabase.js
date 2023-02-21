import { createClient } from "@supabase/supabase-js";

const supabaseUrl = { REDACTED };
const supabaseKey = { REDACTED };
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
