import React, { useState, useEffect } from 'react'
import { CiCircleAlert, CiCircleCheck } from 'react-icons/ci'
import { IoArrowUpCircleOutline } from 'react-icons/io5'

export const SOrder = () => {
    return (
        <div className="m-6 rounded-lg py-4 px-4 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-zinc-100 to-gray-200 h-full ">
            <div>
                <h1 className="py-2 px-4 text-white bg-gradient-to-tl from-gray-900 via-gray-900 to-black  m-4 rounded shadow-md text-center">
                    Ordem de Serviço
                </h1>
                <div
                    className="p-6 bg-zinc-200 rounded-lg mb-4 flex justify-center"
                    id="header"
                >
                    <ul className="flex" id="codigo">
                        <li className="mr-6" id="codigoUser">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                Código do cliente:
                            </label>
                            <input
                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                type="number"
                                id="cod"
                            />
                        </li>
                        <li className="mr-6" id="Data">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                Data:{' '}
                            </label>
                            <input
                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                type="date"
                                id="cod"
                            />
                        </li>
                        <span className="border-r-[1px] rounded border-zinc-400 mr-6"></span>
                        <li className="mr-6" id="Motivo">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                Motivo do Emplacamento:{' '}
                            </label>
                            <input
                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                type="text"
                                id="cod"
                            />
                        </li>
                        <li className="mr-6" id="Loja">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                Loja:{' '}
                            </label>
                            <input
                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                type="text"
                                id="cod"
                            />
                        </li>
                        <span className="border-r-[1px] rounded border-zinc-400 mr-6"></span>
                        <div className="flex">
                            <button className="p-2 text-sm bg-sky-900 text-sky-200 rounded-lg cursor-pointer flex items-center truncate text-ellipsis">
                                <IoArrowUpCircleOutline className="mr-1" />
                                Adicionar registro
                            </button>
                            <span className="mr-3"></span>
                            <div className="p-2 text-sm bg-green-300 text-green-800 rounded-lg flex items-center truncate text-ellipsis">
                                <CiCircleAlert className="mr-1" />
                                Status: Ordem aberta
                            </div>
                        </div>
                    </ul>
                </div>

                <div className="p-6 bg-zinc-200 rounded-lg ">
                    <h1 className="py-2 px-4 text-zinc-500 bg-gradient-to-tl from-zinc-300 via-zinc-300 to-zinc-300 rounded shadow-md mb-3 w-fit">
                        Informações do veículo
                    </h1>
                    <div className="flex flex-col items-center w-full bg-zinc-100 rounded-lg">
                        <div id="veiculo">
                            <div>
                                <ul
                                    className="mb-4  p-6 flex flex-col justify-center w-full"
                                    id="codigo"
                                >
                                    <div className="grid grid-cols-5 gap-5">
                                        <li className="mr-6" id="codigoUser">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Placa:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>
                                        <li className="mr-6" id="Data">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Chassi:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Motivo">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Renavam:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Loja">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Nro. Motor:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>
                                        <li className="mr-3" id="Motivo">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 border-l-[2px] ">
                                                Renach:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="radio"
                                                id="sim"
                                            />{' '}
                                            Sim
                                            <input
                                                className='ml-5 className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="radio"
                                                id="nao"
                                            />{' '}
                                            Não
                                        </li>
                                    </div>
                                    <div className="grid grid-cols-5 gap-5 border-t-[1px] mt-3 pt-3 border-zinc-300">
                                        <li className="mr-6" id="codigoUser">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Município de emplacamento:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Motivo">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Contato de serviço:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Motivo">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Nro. Crv:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Loja">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Loja:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Data">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Data de aquisição:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="date"
                                                id="cod"
                                            />
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="proprietario">Dados do proprietário</div>
                    <div id="restricoes">Restrições a venda</div>
                </div>
            </div>
        </div>
    )
}
