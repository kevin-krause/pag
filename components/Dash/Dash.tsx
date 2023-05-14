import React from 'react'
import { SalesDash } from '../SalesDash/SalesDash'

export const Dash = () => {
    return (
        <main>
            <div className="flex w-full">
                <div className="w-full bg-zinc-200 m-6 p-6 flex flex-col rounded-lg">
                    <SalesDash />
                </div>

                <div className="w-full bg-zinc-200 m-6 p-6 flex flex-col rounded-lg">
                    kevin
                </div>
            </div>
        </main>
    )
}
