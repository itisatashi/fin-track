import { createClient } from "@supabase/supabase-js";

// TODO: Replace with your Supabase project credentials
const supabaseUrl = "https://idmotjcjbznagnbfrptr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkbW90amNqYnpuYWduYmZycHRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMDc3NzQsImV4cCI6MjA4NTU4Mzc3NH0.LXbGJLGecQjNGwLjW9mmUBtZvlpDkqE4LzzPyY3nDvQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
