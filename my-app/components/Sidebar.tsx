"use client";

import {
    LayoutDashboard,
    CreditCard,
    ShieldAlert,
    BarChart3,
    BrainCircuit,
    Settings,
    LogOut,
    ShieldCheck,
} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";


const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Transactions",
        href: "/transactions",
        icon: CreditCard,
    },
    {
        name: "Alerts",
        href: "/alerts",
        icon: ShieldAlert,
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: BarChart3,
    },
    {
        name: "AI Model",
        href: "/model",
        icon: BrainCircuit,
    },
    
];


export default function Sidebar() {
    const pathname = usePathname();


    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            </aside>



    )

}
