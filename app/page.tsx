import Image from 'next/image'
import { Header } from '@/components/Header/Header'
import CashFlow from './CashFlow'

export default function Home() {
    return (
        <main>
            <Header />
            <CashFlow />
        </main>
    )
}
