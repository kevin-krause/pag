import React, { useState, useEffect } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

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
        <div className="m-6 rounded-lg p-6 bg-zinc-200 h-screen">
            <div className="bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center">
                    <AiOutlinePlusCircle className="w-[30px] h-[30px] pr-2 text-green-400" />
                    <input
                        className="p-2 rounded-sm"
                        placeholder="Entradas"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <span className="pr-6"></span>
                    <AiOutlineMinusCircle className="w-[30px] h-[30px] pr-2 text-red-400" />
                    <input
                        className="p-2 rounded-sm"
                        placeholder="Saídas"
                        type="text"
                        value={outputValue}
                        onChange={handleOutputChange}
                    />
                    <span className="pr-6"></span>
                    <button
                        className="p-2 text-sm bg-sky-300  text-black rounded-lg cursor-pointer"
                        onClick={handleAddRecord}
                    >
                        Adicionar Registro
                    </button>
                </div>

                <p id="total" className="p-3 bg-sky-300 rounded-lg text-sm"></p>
            </div>

            <ul className="p-4 align-middle">
                {records.map(record => (
                    <li
                        className="text-left p-3 flex justify-between border-b-2 border-zinc-300 mb-1"
                        key={record.id}
                    >
                        <p className="text-green-500 mr-6">
                            Entrada: {formatCurrency(record.input)}
                        </p>
                        <p className="text-red-500">
                            Saída: {formatCurrency(record.output)}
                        </p>
                        <p className="text-zinc-500">
                            Total:{' '}
                            {formatCurrency(record.input - record.output)}
                        </p>

                        <button
                            className="ml-6 p-2 bg-red-500 text-red-200 rounded-sm text-sm"
                            onClick={() => handleDeleteRecord(record.id)}
                        >
                            Apagar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Form
