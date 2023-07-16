'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// import component
import Header from "@/components/molekul/header"
import DeliveryContainers from '@/container/deliveryContainer'

export default function Home() {
  const router:any = useRouter()
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams)
  //   router.replace({
  //     query: { ...router.query, key: 'delivery' },
  //  });
    // router.push(router)
  },[router.isReady])
  const data =[{ name: 'Cost of goods', price: 2000 }]
  return (
    <>
      <main className="w-10/12 bg-white mx-auto px-4 my-24">
        <Header/>
        <DeliveryContainers/>
      </main>
    </>
  )
}
