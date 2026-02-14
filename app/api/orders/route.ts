import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase"
import { getProduct } from "@/lib/products"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { email, trxId, senderNumber, productSlug } = body

    if (!productSlug) {
      return NextResponse.json(
        { error: "Missing productSlug" },
        { status: 400 }
      )
    }

    const product = getProduct(productSlug)

    if (!product) {
      return NextResponse.json(
        { error: "Invalid product" },
        { status: 400 }
      )
    }

    if (!email?.trim() || !trxId?.trim()) {
      return NextResponse.json(
        { error: "Email & TrxID required" },
        { status: 400 }
      )
    }

    const supabase = getSupabaseAdmin()

    const payload = {
      email: email.trim(),
      product_slug: product.slug,
      product_title: product.title,
      amount_bdt: product.priceBdt,
      trx_id: trxId.trim(),
      sender_number: senderNumber?.trim() || null,
      status: "PENDING",
    }

    const { error } = await (supabase as any)
      .from("orders")
      .insert([payload])

    if (error) {
      console.error("Supabase Insert Error:", error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("API ERROR:", err)
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    )
  }
}
