import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "FraudAI",
  description: "AI-powered fraud detection and transaction monitoring platform.",
};

export default function RootLayout({ children }: Readonly<"/">) {
  return (
    <html
      lang="en"
      
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
