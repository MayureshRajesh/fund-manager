const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
const testConnection = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    console.log('Supabase connection successful');
  } catch (error) {
    console.error('Supabase connection failed:', error.message);
  }
};
testConnection();

module.exports = supabase;