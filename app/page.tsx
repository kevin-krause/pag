'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header/Header'
import Form from '@/components/Form/Form'

export default function Home() {
    return (
        <main>
            <Header />
            <Form />
        </main>
    )
}
