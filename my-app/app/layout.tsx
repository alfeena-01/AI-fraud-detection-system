import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "FraudAI",
  description: "AI-powered fraud detection and transaction monitoring platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
