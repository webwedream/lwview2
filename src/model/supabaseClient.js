import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mqovoofzvilbsrayqehm.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const AuthC = createClient(supabaseUrl, supabaseKey).auth;
export default {
  AuthC
};