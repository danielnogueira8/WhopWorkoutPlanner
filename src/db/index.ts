import { createClient } from '@supabase/supabase-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { env } from '~/env'

// Drizzle client for type-safe queries and migrations
const connectionString = env.DATABASE_URL
// Use 'prefer' SSL mode for better Vercel compatibility
const client = postgres(connectionString, { 
  ssl: 'prefer',
  max: 1,
  idle_timeout: 20,
  connect_timeout: 10
})
export const db = drizzle(client, { schema })

// Supabase client for Auth, Storage, Realtime
export const supabase = createClient(
	env.NEXT_PUBLIC_SUPABASE_URL,
	env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)
