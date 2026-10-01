```tsx
"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import type { ReactNode } from "react"
import {
  ArrowLeft,
  ShieldAlert,
  Smartphone,
  MapPin,
  CreditCard,
  Clock,
  User,
  Store,
  AlertTriangle,
  CheckCircle2,
  Ban,
} from "lucide-react"

import { transactions } from "@/lib/mockData"

export default function TransactionInvestigationPage() {
  const params = useParams<{ id: string }>()

  const transactionId = params.id

  const transaction = transactions.find(
    (item) => item.id === transactionId
  )

  // If the transaction doesn't exist
  if (!transaction) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
            <AlertTriangle
              size={26}
              className="text-red-400"
            />
          </div>

          <h1 className="text-xl font-semibold text-white">
            Transaction Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The transaction you are looking for does not exist.
          </p>

          <Link
            href="/dashboard/transactions"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
          >
            <ArrowLeft size={16} />
            Back to Transactions
          </Link>

        </div>
      </div>
    )
  }

  const riskColor =
    transaction.riskLevel === "High"
      ? "text-red-400"
      : transaction.riskLevel === "Medium"
        ? "text-yellow-400"
        : "text-green-400"

  return (
    <div className="space-y-6">

      {/* Back Button */}
      <Link
        href="/dashboard/transactions"
        className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Transactions
      </Link>

      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex flex-wrap items-center gap-3">

            <h1 className="text-2xl font-semibold text-white">
              {transaction.id}
            </h1>

            <span
              className={`rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs ${riskColor}`}
            >
              {transaction.riskLevel} Risk
            </span>

          </div>

          <p className="mt-2 text-sm text-gray-500">
            Transaction investigation and risk analysis
          </p>

        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400 transition hover:bg-green-500/20"
          >
            <CheckCircle2 size={16} />
            Approve
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
          >
            <Ban size={16} />
            Block
          </button>

        </div>

      </div>

      {/* Risk Overview */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        {/* AI Risk Score */}
        <div className="rounded-xl border border-white/10 bg-[#0d1117] p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                AI Risk Score
              </p>

              <p
                className={`mt-2 text-4xl font-bold ${riskColor}`}
              >
                {transaction.riskScore}
              </p>

              <p className="mt-1 text-xs text-gray-600">
                out of 100
              </p>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
              <ShieldAlert
                size={26}
                className={riskColor}
              />
            </div>

          </div>

        </div>

        {/* Current Status */}
        <div className="rounded-xl border border-white/10 bg-[#0d1117] p-6">

          <p className="text-sm text-gray-500">
            Current Status
          </p>

          <p className="mt-2 text-2xl font-semibold text-white">
            {transaction.status}
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Automated decision from fraud engine
          </p>

        </div>

        {/* Amount */}
        <div className="rounded-xl border border-white/10 bg-[#0d1117] p-6">

          <p className="text-sm text-gray-500">
            Transaction Amount
          </p>

          <p className="mt-2 text-2xl font-semibold text-white">
            ₹{transaction.amount.toLocaleString("en-IN")}
          </p>

          <p className="mt-2 text-xs text-gray-500">
            {transaction.category}
          </p>

        </div>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Transaction Details */}
        <div className="rounded-xl border border-white/10 bg-[#0d1117] lg:col-span-2">

          <div className="border-b border-white/10 px-6 py-5">

            <h2 className="font-medium text-white">
              Transaction Details
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Information collected from the transaction
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">

            <DetailItem
              icon={<User size={17} />}
              label="User ID"
              value={transaction.userId}
            />

            <DetailItem
              icon={<Store size={17} />}
              label="Merchant"
              value={transaction.merchant}
            />

            <DetailItem
              icon={<CreditCard size={17} />}
              label="Payment Method"
              value={transaction.paymentMethod}
            />

            <DetailItem
              icon={<MapPin size={17} />}
              label="Location"
              value={transaction.location}
            />

            <DetailItem
              icon={<Smartphone size={17} />}
              label="Device"
              value={transaction.device}
            />

            <DetailItem
              icon={<Clock size={17} />}
              label="Timestamp"
              value={transaction.timestamp}
            />

          </div>

        </div>

        {/* Risk Factors */}
        <div className="rounded-xl border border-white/10 bg-[#0d1117]">

          <div className="border-b border-white/10 px-6 py-5">

            <div className="flex items-center gap-2">

              <AlertTriangle
                size={18}
                className="text-orange-400"
              />

              <h2 className="font-medium text-white">
                Risk Factors
              </h2>

            </div>

            <p className="mt-1 text-xs text-gray-500">
              Why the AI flagged this transaction
            </p>

          </div>

          <div className="space-y-3 p-6">

            {transaction.reason.map(
              (reason: string, index: number) => (
                <div
                  key={`${transaction.id}-reason-${index}`}
                  className="rounded-lg border border-red-500/10 bg-red-500/5 p-3"
                >
                  <p className="text-sm leading-5 text-gray-300">
                    {reason}
                  </p>
                </div>
              )
            )}

          </div>

        </div>

      </div>

      {/* AI Investigation Summary */}
      <div className="rounded-xl border border-orange-500/10 bg-[#0d1117] p-6">

        <div className="flex items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">

            <ShieldAlert
              size={20}
              className="text-orange-400"
            />

          </div>

          <div>

            <h2 className="font-medium text-white">
              AI Investigation Summary
            </h2>

            <p className="mt-2 max-w-4xl text-sm leading-6 text-gray-400">
              The fraud detection engine assigned this transaction a{" "}

              <span className={riskColor}>
                {transaction.riskScore}/100
              </span>

              {" "}risk score based on transaction behavior, user
              activity, device information, location, and spending
              patterns.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}


/* -------------------------------- */
/* Transaction Detail Component     */
/* -------------------------------- */

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 text-gray-500">
        {icon}
      </div>

      <div>

        <p className="text-xs text-gray-500">
          {label}
        </p>

        <p className="mt-1 text-sm text-gray-200">
          {value}
        </p>

      </div>

    </div>
  )
}
```
