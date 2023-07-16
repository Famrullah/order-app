'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// import component
import Header from "@/components/molekul/header"
import DeliveryContainers from '@/container/deliveryContainer'

export default function Home() {
  const router:any = useRouter()
  useEffect(()=>{
  },[router.isReady])
  const data =[{ name: 'Cost of goods', price: 2000 }]
  return (
    <>
      <main className="mx-5 bg-white px-4 my-24">
        <Header/>
        <DeliveryContainers/>
      </main>
    </>
  )
}
