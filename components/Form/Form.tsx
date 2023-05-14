import React, { useState } from 'react'

type Record = {
    id: number
    input: number
    output: number
}

const Form: React.FC = () => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState('')
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
            input: parseFloat(inputValue),
            output: parseFloat(outputValue)
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

    return (
        <div className="m-6 rounded-lg p-6 bg-zinc-200 h-screen">
            <div className="bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-lg p-6">
                <input
                    className="p-2 rounded-sm"
                    placeholder="Entradas"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <span className="pr-6"></span>
                <input
                    className="p-2 rounded-sm"
                    placeholder="Saídas"
                    type="text"
                    value={outputValue}
                    onChange={handleOutputChange}
                />
                <span className="pr-6"></span>
                <button
                    className="p-2 text-sm bg-gradient-to-r from-emerald-600 to-emerald-800  text-white rounded-lg cursor-pointer"
                    onClick={handleAddRecord}
                >
                    Adicionar Registro
                </button>
            </div>

            <ul className="p-4 align-middle">
                {records.map(record => (
                    <li
                        className=" p-3 flex border-b-2 border-zinc-300 mb-1"
                        key={record.id}
                    >
                        <p className="text-green-500 mr-6">
                            Entrada: {formatCurrency(record.input)}
                        </p>
                        <p className="text-red-500">
                            Saída: {formatCurrency(record.output)}
                        </p>

                        <button
                            className="ml-6 p-1 bg-zinc-300 rounded-sm text-sm"
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
