// src/supabaseClient.js 
import { createClient } from '@supabase/supabase-js'; 
 
const supabaseUrl = 'https://rmxtboiwofmkatinevgl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteHRib2l3b2Zta2F0aW5ldmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMjIzOTUsImV4cCI6MjA0NTg5ODM5NX0.Z8lSEmuoywPY3GuwV7ixgzxBMSA_8-fkizy6zBd9cJo'; 
const supabase = createClient(supabaseUrl, supabaseKey); 
 
export default supabase;