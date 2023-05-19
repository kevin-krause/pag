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
        <div>
            <h1 className="p-4 mb-4 bg-gradient-to-tl from-gray-900 via-gray-900 to-black rounded-lg text-white w-auto ">
                Sales Dashboard
            </h1>
            <div className="h-full w-full">
                <SalesChart salesData={salesData} />
            </div>
        </div>
    )
}
