import {createClient} from "@supabase/supabase-js";


const supabase = createClient(
    'https://cllswksqifbzetftaufx.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbHN3a3NxaWZiemV0ZnRhdWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MjA1OTksImV4cCI6MjA0OTA5NjU5OX0.GOj2ditYC--7-JfVKxyG0kbT4PrKntUEgObMlcCKwsM'
);

export default supabase;