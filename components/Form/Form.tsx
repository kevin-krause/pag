'use client'
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [expense, setExpense] = useState(false)

    const handleSave = () => {
        if (!desc || !amount) {
            alert('Please enter description and amount')
            return
        } else if (parseFloat(amount) < 1) {
            alert('Amount should be greater than 0')
            return
        }
    }

    return (
        <div className="">
            <div className="flex-1 w-full bg-zinc-100 p-6  mt-6 rounded-lg shadow-sm">
                <div className="flex justify-between">
                    <form className="">
                        <div className="flex flex-col">
                            <label>Descrição</label>
                            <input
                                type="text"
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                                className="rounded accent-blackaccent-black text-zinc-400 w-2/4 border border-zinc-200/100 hover:border-zinc-800/100 transition-colors delay-15"
                            />
                        </div>
                    </form>

                    <form className="">
                        <div className="flex flex-col">
                            <label>Valor</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                                className="rounded accent-black text-zinc-400 w-1/2 border border-zinc-200/100 hover:border-zinc-800/100 transition-colors delay-15"
                            />
                        </div>
                    </form>
                    <div className="flex items-center border border-zinc-300 rounded-md p-6">
                        <input
                            type="radio"
                            id="rIncome"
                            defaultChecked
                            name="group1"
                            onChange={e => setExpense(!expense)}
                        />
                        <div className="pl-4">Entrada</div>
                        <span className="pr-7"></span>
                        <input
                            type="radio"
                            id="rIncome"
                            defaultChecked
                            name="group1"
                            onChange={e => setExpense(!expense)}
                        />
                        <div className="pl-4">Saída</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
