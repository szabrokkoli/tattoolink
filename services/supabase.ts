import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mrfkybmvykcccnudwbgm.supabase.co';
const supabaseKey = 'sb_publishable_L6S27DCTp1FBAaW8PfhcVQ_-sBhkEl4';

export const supabase = createClient(supabaseUrl, supabaseKey);