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
    }


export default function Sidebar() {
    const pathname = usePathname();