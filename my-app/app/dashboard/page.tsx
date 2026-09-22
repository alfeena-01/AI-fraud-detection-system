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
