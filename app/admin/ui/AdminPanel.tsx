"use client"

import { useEffect, useState } from "react"

type Order = {
  id: string
  email: string
  product_title: string
  amount_bdt: number
  trx_id: string
  sender_number: string
  status: string
}

export default function AdminPanel() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  async function loadOrders() {
    try {
      const res = await fetch("/api/admin/orders")
      const json = await res.json()

      // ⚠️ গুরুত্বপূর্ণ fix
      setOrders(json.data || [])
    } catch (err) {
      console.error("Failed to load orders")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadOrders()
  }, [])

  async function approve(id: string) {
    await fetch(`/api/admin/orders/${id}/approve`, { method: "POST" })
    await loadOrders() // reload না দিয়ে fresh data আনবো
  }

  async function reject(id: string) {
    await fetch(`/api/admin/orders/${id}/reject`, { method: "POST" })
    await loadOrders()
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th>Email</th>
            <th>Product</th>
            <th>Amount</th>
            <th>TRX</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-t text-center">
              <td>{order.email}</td>
              <td>{order.product_title}</td>
              <td>{order.amount_bdt}</td>
              <td>{order.trx_id}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-white ${
                    order.status === "APPROVED"
                      ? "bg-green-600"
                      : order.status === "REJECTED"
                      ? "bg-red-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="space-x-2">
                {order.status === "PENDING" && (
                  <>
                    <button
                      onClick={() => approve(order.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => reject(order.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
