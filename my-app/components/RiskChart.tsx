"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data=[
    {day:"Mon", transactions: 3200, fraud: 82},
    {day:"Tue", transactions: 4100, fraud: 96},
    {day:"Wed", transactions: 3800, fraud: 71},
    {day:"Thu", transactions: 5200, fraud: 124},
    {day:"Fri", transactions: 4600, fraud: 103},
    {day:"Sat", transactions: 6100, fraud: 151},
    {day:"Sun", transactions: 5700, fraud: 129},
];

export default function RiskChart() {
    return (
        <div className="h-[330px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">

        </div>

