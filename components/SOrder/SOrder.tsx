import React, { useState, useEffect } from 'react'
import { CiCircleAlert, CiCircleCheck } from 'react-icons/ci'
import { IoArrowUpCircleOutline } from 'react-icons/io5'

export const SOrder = () => {
    return (
        <div className="m-6 rounded-lg py-4 px-4 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-zinc-100 to-gray-200 h-full ">
            <div className="">
                <h1 className="py-2 px-4 text-white bg-gradient-to-tl from-gray-900 via-gray-900 to-black  m-4 rounded shadow-md text-center">
                    Ordem de Serviço
                </h1>
                <div className="p-6 bg-zinc-200 rounded-lg mb-4 ">
                    <div className="flex" id="header">
                        <ul className="grid gap-10 grid-cols-4" id="codigo">
                            <li className="mr-6" id="codigoUser">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                    Código:
                                </label>
                                <input
                                    className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                    type="number"
                                    id="CODUSU"
                                />
                            </li>

                            <li className="mr-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                    Motivo:{' '}
                                </label>
                                <input
                                    className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                    type="text"
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
                            <span></span>
                        </ul>
                        <div className="flex">
                            <button className="p-2 text-sm bg-sky-900 text-sky-200 rounded-lg cursor-pointer flex items-center truncate text-ellipsis mr-4">
                                <IoArrowUpCircleOutline className="mr-1" />
                                Fechar ordem
                            </button>
                            <span className="mr-3"></span>
                            <div className="p-2 text-sm bg-green-300 text-green-800 rounded-lg flex items-center truncate text-ellipsis">
                                <CiCircleAlert className="mr-1" />
                                Ordem aberta
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-zinc-200 rounded-lg ">
                    <h1 className="py-2 px-4 text-zinc-500 bg-gradient-to-tl from-zinc-300 via-zinc-300 to-zinc-300 rounded shadow-md mb-3 w-fit">
                        Informações do veículo
                    </h1>
                    <div className="flex flex-col items-center w-full bg-zinc-100 rounded-lg">
                        <div id="veiculo">
                            <div>
                                <ul
                                    className="p-6 flex flex-col justify-center w-full"
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

                                        <li className="mr-6">
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
                                        <li className="mr-3">
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
                                                Município:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Contato de serviço:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
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

                    <h1 className="py-2 px-4 text-zinc-500 bg-gradient-to-tl from-zinc-300 via-zinc-300 to-zinc-300 rounded shadow-md mb-3 mt-4 w-fit">
                        Dados do propietário
                    </h1>
                    <div className="flex flex-col items-center w-full bg-zinc-100 rounded-lg">
                        <div id="veiculo">
                            <div>
                                <ul
                                    className="p-6 flex flex-col justify-center w-full"
                                    id="codigo"
                                >
                                    <div className="grid grid-cols-5 gap-5">
                                        <li className="mr-6" id="codigoUser">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                CPF/CNPJ:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>
                                        <li className="mr-6" id="Data">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Nome do propietário:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                RG:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Loja">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Orgão:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>
                                        <li className="mr-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 border-l-[2px] ">
                                                Valor do recibo:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="sim"
                                            />
                                        </li>
                                    </div>
                                    <div className="grid grid-cols-5 gap-5 border-t-[1px] mt-3 pt-3 border-zinc-300">
                                        <li className="mr-6" id="codigoUser">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Cep:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Endereço:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                bairro:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Loja">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Município:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Data">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Uf:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h1 className="py-2 px-4 text-zinc-500 bg-gradient-to-tl from-zinc-300 via-zinc-300 to-zinc-300 rounded shadow-md mb-3 mt-4 w-fit">
                        Características do veículo
                    </h1>
                    <div className="flex flex-col items-center w-full bg-zinc-100 rounded-lg">
                        <div id="veiculo">
                            <div>
                                <ul
                                    className="p-6 flex flex-col justify-center w-full"
                                    id="codigo"
                                >
                                    <div className="grid grid-cols-5 gap-5">
                                        <li className="mr-6" id="codigoUser">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Tipo:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>
                                        <li className="mr-6" id="Data">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Modelo:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Espécie:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Loja">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Categoria:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>
                                        <li className="mr-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 border-l-[2px] ">
                                                Cor:
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="number"
                                                id="sim"
                                            />
                                        </li>
                                    </div>
                                    <div className="grid grid-cols-5 gap-5 border-t-[1px] mt-3 pt-3 border-zinc-300">
                                        <li className="mr-6" id="codigoUser">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Fabricação
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Carroceria:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="text"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Ano Fabricação:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="date"
                                                id="cod"
                                            />
                                        </li>

                                        <li className="mr-6" id="Loja">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                Ano Modelo:{' '}
                                            </label>
                                            <input
                                                className='className="py-3 px-1 border-[1px] border-zinc-300 rounded text-sm text-zinc-500'
                                                type="date"
                                                id="cod"
                                            />
                                        </li>

                                        <div className="p-2 text-sm bg-red-300 text-red-800 rounded-lg flex items-center truncate text-ellipsis w-fit">
                                            <CiCircleAlert className="mr-1" />
                                            Situação irregular
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
