import React, { useState, useEffect } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { IoArrowUpCircleOutline } from 'react-icons/io5'

type Record = {
    id: number
    input: number
    output: number
}

const Form: React.FC = () => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState('')
    const [totalValue, setTotalValue] = useState('')
    const [records, setRecords] = useState<Record[]>([])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleOutputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutputValue(event.target.value)
    }

    const handleAddRecord = () => {
        const newRecord: Record = {
            id: Date.now(),
            input: isNaN(parseFloat(inputValue)) ? 0 : parseFloat(inputValue),
            output: isNaN(parseFloat(outputValue)) ? 0 : parseFloat(outputValue)
        }

        setRecords([...records, newRecord])
        setInputValue('')
        setOutputValue('')
    }

    const handleDeleteRecord = (id: number) => {
        const updatedRecords = records.filter(record => record.id !== id)
        setRecords(updatedRecords)
    }

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    const calculateTotal = () => {
        return records.reduce((total, record) => {
            return total + (record.input - record.output)
        }, 0)
    }

    useEffect(() => {
        const totalElement = document.getElementById('total')
        if (totalElement) {
            totalElement.textContent = formatCurrency(calculateTotal())
        }
    }, [records])

    return (
        <div className="m-6 rounded-lg p-6 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-zinc-100 to-gray-200 h-full ">
            <div className="bg-gradient-to-tl from-gray-900 via-gray-900 to-black rounded-lg p-6 flex items-center justify-between ">
                <div className="flex items-center">
                    <AiOutlinePlusCircle className="w-[30px] h-[30px] pr-2 text-green-400" />
                    <input
                        className="p-2 rounded-lg text-sm"
                        placeholder="Entradas"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <span className="pr-6"></span>
                    <AiOutlineMinusCircle className="w-[30px] h-[30px] pr-2 text-red-400" />
                    <input
                        className="p-2 rounded-lg text-sm"
                        placeholder="Saídas"
                        type="text"
                        value={outputValue}
                        onChange={handleOutputChange}
                    />
                    <span className="pr-6"></span>
                    <button
                        className="p-2 text-sm bg-sky-900 text-sky-200 rounded-lg cursor-pointer flex items-center truncate text-ellipsis"
                        onClick={handleAddRecord}
                    >
                        <IoArrowUpCircleOutline className="mr-1" />
                        Adicionar Registro
                    </button>
                </div>

                <p
                    id="total"
                    className="p-2 bg-sky-900 text-sky-200 rounded-lg text-sm truncate text-ellipsis overflow-hidden w-auto max-w-[150px]"
                ></p>
            </div>

            <ul className="p-4 align-middle">
                {records.map(record => (
                    <li
                        className="text-sm p-3 grid grid-cols-5 gap-[40px] border-b-[1px] border-zinc-200 mb-1 items-center"
                        key={record.id}
                    >
                        <p className="text-green-700 border-[1px] border-green-300  bg-green-200 p-2 rounded truncate overflow-hidden">
                            Entrada: {formatCurrency(record.input)}
                        </p>

                        <p className="text-red-600  bg-red-200 p-2 border-[1px] border-red-300 truncate overflow-hidden rounded">
                            Saída: {formatCurrency(record.output)}
                        </p>

                        <p className="text-zinc-600 truncate overflow-hidden bg-zinc-300 p-2 border-[1px] border-zinc-400 rounded">
                            Total:{' '}
                            {formatCurrency(record.input - record.output)}
                        </p>

                        <p className="text-zinc-600 truncate overflow-hidden bg-zinc-300 p-2 border-[1px] border-zinc-400  rounded ">
                            Data
                        </p>
                        <div className="relative ">
                            <button
                                className="md:ml-[130px] max-w-[75px] p-1 bg-red-500 text-red-200 rounded-sm text-sm truncate"
                                onClick={() => handleDeleteRecord(record.id)}
                            >
                                Apagar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Form
