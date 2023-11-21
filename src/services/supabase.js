import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ltdpnuhkrwasclhedliq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0ZHBudWhrcndhc2NsaGVkbGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMzc1MjYsImV4cCI6MjAxMzkxMzUyNn0.CwynnmD6_UaH2YB7-2YKeJp8NYA_dkxVjjqDvzEcWQc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
