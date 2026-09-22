"use client";

import {
  Activity,
  AlertTriangle,
  CircleDollarSign,
  ShieldAlert,
} from "lucide-react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import RiskChart from "@/components/RiskChart";
import TransactionTable from "@/components/TransactionTable";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#080b10] text-white">
      
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <Header />

        <div className="p-8">
            {/* Page heading */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Wednesday, September 2, 2026
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Security Overview
              </h1>
               <p className="mt-2 max-w-xl text-sm text-gray-500">
                Monitor transactions, detect suspicious activity,
                and investigate AI-generated fraud alerts.
              </p>
            </div>
             <div className="hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2 text-xs text-green-400 md:flex">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              AI Engine Online
            </div>
          </div>
          {/* Statistics */}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            
            <StatCard
              title="Total Transactions"
              value="24,582"
              change="+12.4%"
              description="Compared with last week"
              icon={Activity}
            />
