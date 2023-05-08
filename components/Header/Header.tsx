import React from 'react'

export const Header = () => {
    return (
        <div className="max-w-full p-6 flex ml-6 mr-6 mt-3 bg-zinc-800 rounded-lg text-zinc-100">
            <a className="mr-6" href={'/'}>
                Menu
            </a>
            <a href={'/CashFlow'}>Cash Flow</a>
        </div>
    )
}
