import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase" 

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  const supabase = getSupabaseAdmin()

  // ✅ "never" typing bypass (important)
  const { error } = await (supabase as any)
    .from("orders")
    .update({ status: "APPROVED" })
    .eq("id", id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
