import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'

interface SalesChartProps {
    salesData: { day: string; sales: number }[]
}

const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
    const data = salesData.map(({ day, sales }) => ({ day, sales }))

    return (
        <div className="h-[500px] text-black bg-gray-900 p-6 rounded-lg">
            <ResponsiveContainer className="rounded-lg">
                <BarChart data={data} className="rounded-lg ">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" name="Vendas" fill="#FEC601" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SalesChart
