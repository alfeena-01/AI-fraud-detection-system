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