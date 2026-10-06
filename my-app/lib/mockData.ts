export type Transaction = {
  id: string
  userId: string
  amount: number
  merchant: string
  category: string
  paymentMethod: string
  location: string
  device: string
  timestamp: string
  riskScore: number
  status: "Approved" | "Review" | "Blocked"
  riskLevel: "Low" | "Medium" | "High"
  reason: string[]
}

export const transactions: Transaction[] = [
  {
    id: "TXN-1001",
    userId: "USR-2041",
    amount: 2499,
    merchant: "Amazon",
    category: "Shopping",
    paymentMethod: "Credit Card",
    location: "Kochi, India",
    device: "Chrome / Windows",
    timestamp: "2026-09-22 18:42",
    riskScore: 87,
    status: "Blocked",
    riskLevel: "High",
    reason: [
      "Transaction amount is significantly higher than user's average",
      "New device detected",
      "Multiple transactions within a short period",
    ],
  },
  {
    id: "TXN-1002",
    userId: "USR-1092",
    amount: 420.5,
    merchant: "Swiggy",
    category: "Food",
    paymentMethod: "UPI",
    location: "Malappuram, India",
    device: "Chrome / Android",
    timestamp: "2026-09-22 18:20",
    riskScore: 21,
    status: "Approved",
    riskLevel: "Low",
    reason: ["Transaction matches normal user behavior"],
  },
  {
    id: "TXN-1003",
    userId: "USR-3345",
    amount: 12500,
    merchant: "Flipkart",
    category: "Shopping",
    paymentMethod: "Debit Card",
    location: "Bengaluru, India",
    device: "Safari / iPhone",
    timestamp: "2026-09-22 17:55",
    riskScore: 72,
    status: "Review",
    riskLevel: "High",
    reason: [
      "Unusual transaction amount",
      "New location detected",
      "Recent failed payment attempts",
    ],
  },
  {
    id: "TXN-1004",
    userId: "USR-5562",
    amount: 850,
    merchant: "Netflix",
    category: "Entertainment",
    paymentMethod: "Credit Card",
    location: "Kozhikode, India",
    device: "Chrome / Windows",
    timestamp: "2026-09-22 17:32",
    riskScore: 14,
    status: "Approved",
    riskLevel: "Low",
    reason: ["Normal recurring payment"],
  },
  {
    id: "TXN-1005",
    userId: "USR-7832",
    amount: 48900,
    merchant: "Apple Store",
    category: "Electronics",
    paymentMethod: "Credit Card",
    location: "Dubai, UAE",
    device: "Chrome / Linux",
    timestamp: "2026-09-22 16:48",
    riskScore: 94,
    status: "Blocked",
    riskLevel: "High",
    reason: [
      "Very high transaction amount",
      "International transaction",
      "Unrecognized device",
      "Location differs significantly from previous activity",
    ],
  },
  {
    id: "TXN-1006",
    userId: "USR-4432",
    amount: 1200,
    merchant: "Myntra",
    category: "Fashion",
    paymentMethod: "UPI",
    location: "Kottakkal, India",
    device: "Chrome / Android",
    timestamp: "2026-09-22 16:25",
    riskScore: 35,
    status: "Approved",
    riskLevel: "Medium",
    reason: ["Slightly unusual spending pattern"],
  },
  {
    id: "TXN-1007",
    userId: "USR-8812",
    amount: 7900,
    merchant: "Booking.com",
    category: "Travel",
    paymentMethod: "Debit Card",
    location: "Mumbai, India",
    device: "Safari / iPhone",
    timestamp: "2026-09-22 15:59",
    riskScore: 64,
    status: "Review",
    riskLevel: "Medium",
    reason: [
      "New location detected",
      "Higher than usual transaction amount",
    ],
  },
  {
    id: "TXN-1008",
    userId: "USR-2911",
    amount: 320,
    merchant: "Spotify",
    category: "Entertainment",
    paymentMethod: "UPI",
    location: "Tirur, India",
    device: "Chrome / Android",
    timestamp: "2026-09-22 15:14",
    riskScore: 41,
    status: "Review",
    riskLevel: "Medium",
    reason: [
      "Recurring subscription payment",
      "Slightly above average monthly spend",
    ],
  },
]
