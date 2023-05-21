import React from 'react'
import Link from 'next/link'
import { DiJsBadge } from 'react-icons/di'

export const Header = () => {
    return (
        <div className="max-w-full p-6 flex items-center ml-6 mr-6 mt-3 bg-gradient-to-tl from-gray-900 via-gray-900 to-black rounded-lg text-zinc-100 justify-between">
            <a className="mr-6" href={'/'}>
                <img
                    className="w-[100px] h-[18,75x]"
                    src=".\favicon.ico"
                    alt="logo"
                />
            </a>

            <div>
                <a className="mr-6" href={'/'}>
                    Dashboard
                </a>

                <a className="mr-6" href="/CashFlow">
                    Entradas e Saídas
                </a>

                <a className="mr-6" href={'/ServiceOrder'}>
                    Ordem de Serviço
                </a>
            </div>
        </div>
    )
}
