const transactions = [
    {
        id: "TXN-92831",
        user: "U-1028",
        amount: "₹85,000",
        location: "Germany",
        risk: 94,
        status: "Blocked",
    },
    {
    id: "TXN-92830",
    user: "U-4491",
    amount: "₹42,500",
    location: "Russia",
    risk: 87,
    status: "Review",
  },
  {
    id: "TXN-92829",
    user: "U-7321",
    amount: "₹18,900",
    location: "India",
    risk: 72,
    status: "Review",
  },
  {
    id: "TXN-92828",
    user: "U-1902",
    amount: "₹2,400",
    location: "India",
    risk: 18,
    status: "Approved",
  },
];

export default function TransactionTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-gray-600">
            <th className="px-4 py-4 font-medium">Transaction</th>
            <th className="px-4 py-4 font-medium">User</th>
            <th className="px-4 py-4 font-medium">Amount</th>
            <th className="px-4 py-4 font-medium">Location</th>
            <th className="px-4 py-4 font-medium">Risk</th>
            <th className="px-4 py-4 font-medium">Status</th>
          </tr>
        </thead>
          <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b border-white/5 transition hover:bg-white/[0.02]"
            >
             <td className="px-4 py-4">
                <p className="text-sm font-medium">
                  {transaction.id}
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Today
                </p>
              </td>
               <td className="px-4 py-4 text-sm text-gray-400">
                {transaction.user}
              </td>
              <td className="px-4 py-4 text-sm font-medium">
                {transaction.amount}
              </td>

              <td className="px-4 py-4 text-sm text-gray-400">
                {transaction.location}
              </td>
               <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-white"
                      style={{
                        width: `${transaction.risk}%`,
                      }}
                    />
                  </div>

                  <span className="text-xs font-medium">
                    {transaction.risk}%
                  </span>
                </div>
              </td>
               <td className="px-4 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    transaction.status === "Blocked"
                      ? "bg-red-500/10 text-red-400"
                      : transaction.status === "Review"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-green-500/10 text-green-400"
                  }`}
                ></span>
