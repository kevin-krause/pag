import React from 'react'
import Link from 'next/link'
import { DiJsBadge } from 'react-icons/di'

export const Header = () => {
    return (
        <div className="max-w-full p-6 flex items-center ml-6 mr-6 mt-3 bg-gradient-to-tl from-gray-900 via-gray-900 to-black rounded-lg text-zinc-100">
            <a className="mr-6" href={'/'}>
                <DiJsBadge className="w-[30px] h-[30px] text-sky-300" />
            </a>

            <a className="mr-6" href={'/'}>
                Menu
            </a>

            <a href="/CashFlow">Cash Flow</a>
        </div>
    )
}
