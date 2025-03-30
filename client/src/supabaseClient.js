// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://bozscfwvpfjytgtjocar.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvenNjZnd2cGZqeXRndGpvY2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMzcwNzMsImV4cCI6MjA1ODgxMzA3M30.B-qw2bNqwpIYs3GFH7p1Sk42wZkQJvyc5wOYHvW01BM';

export const supabase = createClient(supabaseUrl, supabaseKey);