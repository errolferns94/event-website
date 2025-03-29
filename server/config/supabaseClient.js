// server/config/supabaseClient.ts
const { createClient } = require('@supabase/supabase-js');


const supabaseUrl = process.env.SUPABASE_URL || 'https://bozscfwvpfjytgtjocar.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvenNjZnd2cGZqeXRndGpvY2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMzcwNzMsImV4cCI6MjA1ODgxMzA3M30.B-qw2bNqwpIYs3GFH7p1Sk42wZkQJvyc5wOYHvW01BM';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key must be provided');
}

// Initialize the client with TypeScript types
const supabase = createClient(supabaseUrl, supabaseKey);

// Test connection
(async () => {
  try {
    const { error } = await supabase
      .from('events')
      .select('*')
      .limit(1);
      
    if (error) throw error;
    console.log('✅ Supabase connected successfully');
  } catch (err) {
    console.error('❌ Supabase connection failed:', err.message);
    process.exit(1);
  }
})();

module.exports = supabase;