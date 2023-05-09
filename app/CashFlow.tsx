import React from 'react'
import {
    BsFillArrowUpCircleFill,
    BsFillArrowDownCircleFill,
    BsCurrencyDollar
} from 'react-icons/bs'

const CashFlow = () => {
    return (
        <div className="bg-zinc-200 ml-6 mr-6 mt-3 p-6 rounded-lg max-w-full">
            <div className="flex flex-col md:flex md:justify-between md:flex-row p-1 ">
                <div className="text-white bg-zinc-700 pr-6 pl-6 pb-10 pt-6 m-6 rounded-md shadow-lg flex flex-col items-center jus">
                    <div className=" w-auto pr-8 pl-8 flex justify-between">
                        <h1 className="mr-[100px]">Entradas</h1>
                        <div className="flex items-center text-zinc-100">
                            <BsFillArrowUpCircleFill size={20} />
                        </div>
                    </div>
                    <span className="border-b-[1px] border-zinc-400 w-full p-2"></span>
                    <h1 className="flex justify-center pt-6 font-extrabold text-2xl">
                        R$ 0.00
                    </h1>
                </div>

                <div className="text-white bg-zinc-700 pr-6 pl-6 pb-10 pt-6 m-6 rounded-md shadow-lg flex flex-col items-center jus">
                    <div className=" w-auto pr-8 pl-8 flex justify-between">
                        <h1 className="mr-[100px]">Saídas</h1>
                        <div className="flex items-center text-zinc-100">
                            <BsFillArrowDownCircleFill size={20} />
                        </div>
                    </div>
                    <span className="border-b-[1px] border-zinc-400 w-full p-2"></span>
                    <h1 className="flex justify-center pt-6 font-extrabold text-2xl">
                        R$ 0.00
                    </h1>
                </div>

                <div className="text-white bg-zinc-700 pr-6 pl-6 pb-10 pt-6 m-6 rounded-md shadow-lg flex flex-col items-center">
                    <div className=" w-auto pr-8 pl-8 flex justify-between">
                        <h1 className="mr-[100px]">Total</h1>
                        <div className="flex items-center text-zinc-100">
                            <BsCurrencyDollar size={20} />
                        </div>
                    </div>
                    <span className="border-b-[1px] border-zinc-400 w-full p-2"></span>
                    <h1 className="flex justify-center pt-6 font-extrabold text-2xl">
                        R$ 0.00
                    </h1>
                </div>
            </div>
            <div className="">
                <div className="flex-1 w-auto bg-zinc-100 p-6 rounded-lg shadow-sm">
                    <form className="w-1/2">
                        <div className="flex flex-col">
                            <label>Descrição</label>
                            <input
                                type="text"
                                className="rounded text-zinc-400 w-1/2"
                            />
                        </div>
                    </form>
                    <form className="w-1/2">
                        <div className="flex flex-col">
                            <label>Valor</label>
                            <input
                                type="number"
                                className="rounded text-zinc-400 w-1/2"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CashFlow
