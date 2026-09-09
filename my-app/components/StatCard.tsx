import {LucideIcon} from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    description: string;
    icon: LucideIcon;
    danger: boolean;
}

export default function StatCard({title, value, change, description, icon: Icon, danger=false}: StatCardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0d1118] p-5 transition hover:border-white/20">
            <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <Icon size={19} className="text-gray-300"/>

                </div>
                <span className={`rounded-full px-2 py-1 text-[11px] ${
                    danger ? "bg-red-500/10 text-red-400" : "bg-green-500/0 text-green-400"
                }`}
                >
                    {change}

                </span>
                </div>
                <p className="mt-5 text-sm text-gray-500">
                    {title}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                    {value}
                </h3>
                <p>
                    {description}
                </p>


        </div>
    )
}