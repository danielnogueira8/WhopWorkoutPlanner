-- Test query to check if read_at column exists and works
-- Run this in your Supabase SQL editor to test

-- Check if the column exists
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'inbox_messages' 
AND table_schema = 'public';

-- Test a simple query with read_at
SELECT id, sender_user_id, content, created_at, read_at
FROM inbox_messages 
WHERE experience_id = 'your_experience_id_here'
LIMIT 5;

-- Test the unread count query
SELECT 
  conversation_user_id,
  COUNT(CASE WHEN read_at IS NULL AND sender_user_id != 'your_user_id_here' THEN 1 END) as unread_count
FROM inbox_messages 
WHERE experience_id = 'your_experience_id_here'
GROUP BY conversation_user_id;
