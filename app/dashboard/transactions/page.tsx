"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Search,
  SlidersHorizontal,
  Eye,
  ChevronDown,
} from "lucide-react"

import { transactions } from "@/lib/mockData"

export default function TransactionsPage() {
  const [search, setSearch] = useState("")
  const [riskFilter, setRiskFilter] = useState("All")

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.id.toLowerCase().includes(search.toLowerCase()) ||
        transaction.userId.toLowerCase().includes(search.toLowerCase()) ||
        transaction.merchant.toLowerCase().includes(search.toLowerCase())

      const matchesRisk = riskFilter === "All" || transaction.riskLevel === riskFilter

      return matchesSearch && matchesRisk
    })
  }, [search, riskFilter])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Transactions</h1>

        <p className="mt-1 text-sm text-gray-400">
          Monitor and investigate transaction activity
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#0d1117] p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search transaction, user or merchant..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#080b10] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition focus:border-orange-500/50"
            />
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal size={18} className="text-gray-500" />

            <div className="relative">
              <select
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="appearance-none rounded-lg border border-white/10 bg-[#080b10] py-2.5 pl-4 pr-10 text-sm text-gray-300 outline-none focus:border-orange-500/50"
              >
                <option value="All">All Risk Levels</option>
                <option value="Low">Low Risk</option>
                <option value="Medium">Medium Risk</option>
                <option value="High">High Risk</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-250">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-gray-500">
                <th className="px-6 py-4">Transaction</th>
                <th className="px-6 py-4">Merchant</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Risk</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-white/5 transition hover:bg-white/2"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-white">{transaction.id}</p>
                      <p className="mt-1 text-xs text-gray-500">{transaction.userId}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-gray-200">{transaction.merchant}</p>
                      <p className="mt-1 text-xs text-gray-500">{transaction.category}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-white">
                    ₹{transaction.amount.toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-400">{transaction.location}</td>

                  <td className="px-6 py-4">
                    <RiskBadge level={transaction.riskLevel} score={transaction.riskScore} />
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={transaction.status} />
                  </td>

                  <td className="px-6 py-4">
                    <Link
                      href={`/dashboard/transactions/${transaction.id}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-300 transition hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-400"
                    >
                      <Eye size={15} />
                      Investigate
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm text-gray-400">No transactions found.</p>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Showing {filteredTransactions.length} of {transactions.length} transactions
      </p>
    </div>
  )
}

function RiskBadge({
  level,
  score,
}: {
  level: string
  score: number
}) {
  const styles = {
    Low: "border-green-500/20 bg-green-500/10 text-green-400",
    Medium: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
    High: "border-red-500/20 bg-red-500/10 text-red-400",
  }

  return (
    <div className="flex items-center gap-2">
      <span
        className={`rounded-md border px-2 py-1 text-xs ${
          styles[level as keyof typeof styles]
        }`}
      >
        {level}
      </span>

      <span className="text-xs text-gray-500">{score}</span>
    </div>
  )
}

function StatusBadge({
  status,
}: {
  status: string
}) {
  const styles = {
    Approved: "text-green-400",
    Review: "text-yellow-400",
    Blocked: "text-red-400",
  }

  return (
    <span
      className={`text-xs font-medium ${
        styles[status as keyof typeof styles]
<<<<<<< HEAD
      }`}
=======
>>>>>>> 6100d64 (feat: add fraud detection model)
    >
      ● {status}
    </span>
  )
}