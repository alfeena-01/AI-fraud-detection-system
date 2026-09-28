import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "FraudAI",
  description: "AI-powered fraud detection and transaction monitoring platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
      
    >
      <body >{children}</body>
    </html>
  );
}
