import { createClient } from '@supabase/supabase-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Drizzle client for type-safe queries and migrations
const connectionString = process.env.DATABASE_URL!
// Supabase Postgres requires TLS in most environments
const client = postgres(connectionString, { ssl: 'require' })
export const db = drizzle(client, { schema })

// Supabase client for Auth, Storage, Realtime
export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)
