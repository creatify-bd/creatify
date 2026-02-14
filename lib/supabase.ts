import { createClient } from "@supabase/supabase-js"

let _client: ReturnType<typeof createClient> | null = null

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local (restart dev server after editing)."
    )
  }

  if (!_client) {
    _client = createClient(url, key, { auth: { persistSession: false } })
  }

  return _client
}
