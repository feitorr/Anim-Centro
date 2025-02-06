import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ssirlrxygndmwolfqkob.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzaXJscnh5Z25kbXdvbGZxa29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwOTExMDIsImV4cCI6MjA0OTY2NzEwMn0.WFM2nIK2wa6YavwJNWMo-i1Bm9znndCMEgM89qGaxzM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
