import React from 'react'
import SalesChart from './SalesChart'

export const SalesDash = () => {
    const salesData = [
        { day: 'Segunda', sales: 100 },
        { day: 'Terça', sales: 200 },
        { day: 'Quarta', sales: 150 },
        { day: 'Quinta', sales: 300 },
        { day: 'Sexta', sales: 250 },
        { day: 'Sábado', sales: 180 },
        { day: 'Domingo', sales: 120 }
    ]

    return (
        <div >
            <h1 className="p-4 mb-4 bg-zinc-800 rounded-lg text-sky-300 w-auto font-semibold">
                Sales Dashboard
            </h1>
            <div className="h-full w-full">
                <SalesChart salesData={salesData} />
            </div>
        </div>
    )
}
