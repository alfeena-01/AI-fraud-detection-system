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
        <div cla>

        </div>
    )
}