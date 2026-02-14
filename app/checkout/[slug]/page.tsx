import { getProduct, BKASH_NUMBER } from "@/lib/products"
import Link from "next/link"
import CheckoutForm from "./CheckoutForm"

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Product not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6">

        <h1 className="text-2xl font-bold mb-2">Checkout</h1>

        <p className="text-white/80">{product.title}</p>
        <p className="text-white/70 mb-4">
          Amount: <span className="font-semibold">{product.priceBdt}৳</span>
        </p>

        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-5">
          <p className="font-semibold">bKash Send Money</p>
          <p>Number: <span className="font-mono">{BKASH_NUMBER}</span></p>
          <p className="text-sm text-white/60 mt-1">
            টাকা পাঠিয়ে নিচের ফর্মে Transaction ID দিন।
          </p>
        </div>

        {/* Client Component Form */}
        <CheckoutForm productSlug={product.slug} />


        <div className="mt-4 text-sm">
          <Link href="/" className="underline">
            ← Back to home
          </Link>
        </div>

      </div>
    </div>
  )
}
