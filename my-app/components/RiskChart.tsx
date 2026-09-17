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
                        <linearGradient id="transactionGradient" x1="0" y1="0"  x2="0" y2="1">
                            <stop offset="0%" stopOpacity={0.25}/>
                            <stop offset="100%" stopOpacity={0}/>
                        </linearGradient>
                        </defs>

                    <XAxis dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12}}
                    
                    />
                    <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12}}
                    />
                    <Tooltip contentStyle={{ backgroundColor: "#11161f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" ,color: "#fff"}} />
                    <Area type="monotone" dataKey="transactions" stroke="#ffffff" strokeWidth={2} fill="url(#transactionGradient)" />
                    <Area type="monotone" dataKey="fraud" stroke="#777" strokeWidth={2} fillOpacity={2} fill="transparent" />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
}