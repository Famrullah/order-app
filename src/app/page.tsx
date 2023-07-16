'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// import component
import Header from "@/components/molekul/header"
import DashboardContainer from '@/container/dashboardContainer'

export default function Home() {
  const router:any = useRouter()
  useEffect(()=>{
  },[router.isReady])
  const data =[{ name: 'Cost of goods', price: 2000 }]
  return (
    <>
      <main className="bg-white px-4 my-24 mx-auto max-w-[80%]">
        <Header/>
        <DashboardContainer/>
      </main>
    </>
  )
}
