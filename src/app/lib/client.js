import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rulfbaiiwrzomqxwdrsg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bGZiYWlpd3J6b21xeHdkcnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMTgxODgsImV4cCI6MjA1NDU5NDE4OH0.N_Mg_h-OISLY_St-Mudh4JlplizyOaDYhPda7tUOQwg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
