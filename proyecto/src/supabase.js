// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://okhazvbolzauvqbxeufh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9raGF6dmJvbHphdXZxYnhldWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDkxMTgsImV4cCI6MjA3ODAyNTExOH0.IA3O2ISdDn5jl-NtasbnLk6tQWYHJg8mCKFZ69jJIVo';
export const supabase = createClient(supabaseUrl, supabaseKey);