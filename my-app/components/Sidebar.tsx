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
        <aside className="fixed left-0 top-0 z-50 flex flex-col w-64 border-r border-white/10 bg-[#0b0f15]   h-screen ">
{/*logo*/}

<div className="flex items-center gap-3 px-6 h-20 border-b border-white/10">
<div className="flex h-10 w-10 items-center justify-center rounded-xl">

</div>

</div>


            </aside>



    )

}
