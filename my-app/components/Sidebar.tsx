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
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
    <ShieldCheck size={23} />

</div>
<div>
    <h1 className="text-lg font-bold tracking-tight">
        Fraud <span className="text-white/50">AI</span>

    </h1>
    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Security Intelligence </p>
</div>

</div>

{/*navigation*/}

<nav className="flex-1 space-y-1 px-3 py-6">
    <p className=" mb-3 px-3 text-[10px] font-semibold text-gray-600 uppercase tracking-[0.2em]">
Monitoring
    </p>

    {navigation.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return(
            <Link
            key={item.name}
            href={item.href}
            className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                active ? "bg-white text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
            >        
            <Icon size={18}  />             
            <span >{item.name}</span>
            </Link>
        );
    })}

    <p className="mt-8 mb-3 px-3 text-[10px] font-semibold text-gray-600 uppercase tracking-[0.2em] ">
        System 
    </p>
            
            <Link
            href="/settings"
            className= " flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white "
            
            >        
            <Settings size={18}  />             
            Settings
            </Link>
</nav>

{/*Bottom*/}
<div className="p-4 border-t border-white/10">
    <div className="mb-3  rounded-xl p-3  hover:bg-white/5"    >
        <p className="text-xs text-gray-500">System Status</p>

        <div className="mt-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"/>
                <span>
                    AI monitoring active

                </span>

           

        </div>
    </div>
</div>

            </aside>



    )

}
