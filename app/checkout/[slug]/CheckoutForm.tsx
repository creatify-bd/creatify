"use client"

import { useState } from "react"

export default function CheckoutForm({ productSlug }: { productSlug: string }) {
  const [loading, setLoading] = useState(false)

  return (
    <form
      className="space-y-3"
      onSubmit={async (e) => {
        e.preventDefault()
        setLoading(true)

        const fd = new FormData(e.currentTarget)
        const payload = {
          email: String(fd.get("email") || ""),
          senderNumber: String(fd.get("senderNumber") || ""),
          trxId: String(fd.get("trxId") || ""),
          productSlug,
        }

        const res = await fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        setLoading(false)

        if (res.ok) {
          window.location.href = "/thanks"
        } else {
          const j = await res.json().catch(() => ({}))
          alert(j.error || "Something went wrong")
        }
      }}
    >
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full rounded-xl bg-black/40 border border-white/10 p-3"
      />

      <input
        name="senderNumber"
        type="text"
        placeholder="Sender bKash number (optional)"
        className="w-full rounded-xl bg-black/40 border border-white/10 p-3"
      />

      <input
        name="trxId"
        type="text"
        placeholder="bKash Transaction ID (TrxID)"
        required
        className="w-full rounded-xl bg-black/40 border border-white/10 p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-orange-500 hover:opacity-90 disabled:opacity-60 p-3 font-semibold"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
