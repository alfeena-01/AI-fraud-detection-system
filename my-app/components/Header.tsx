"use client";
import{Bell, Search } from "lucide-react";

export default function Header() {
    return (
        <header className="flex  h-20 items-center justify-between border-b border-white/10 bg-[#080b10]/80 px-8 backdrop-blur-xl">

            <div>
                <p className="text-xs  text-gray-500">
                    Security/Overview
                </p>
                <h2 className="text-xl mt-1 font-semibold ">
                    Fraud Monitoring
                </h2>
            </div>
            <div className="flex items-center gap-4">

                <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 md:flex">
                <Search size={16} className="text-gray-500"/>

                </div>
            </div>
        </header>