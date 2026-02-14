export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <h1 className="text-2xl font-bold">Thanks! ✅</h1>
        <p className="text-white/70 mt-2">
          আপনার তথ্য আমরা পেয়েছি। আমরা bKash payment verify করে email এ download link পাঠাবো।
        </p>
        <p className="text-white/50 mt-4 text-sm">
          (Note: এটি এখনো auto verify না—আগামী স্টেপে admin approve system বসাবো)
        </p>
      </div>
    </div>
  )
}
