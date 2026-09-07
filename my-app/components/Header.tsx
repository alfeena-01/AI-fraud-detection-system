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
                <input
                    placeholder="Search..."
                    className=" w-40 bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
                />
                <span className=" rounded bg-white/5 px-2 py-1 text-[10px] text-gray-500">
                    /
                </span>


                </div>
                <button className=" relative rounded-xl border border-white/10  p-3 text-gray-400 hover:bg-white/5 hover:text-white"    >

                </button>
            </div>
        </header>