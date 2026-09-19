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