// import component
import DeliveryDetails from "@/components/organism/deliveryDetails"

export default function Home() {
  const data =[{ name: 'Cost of goods', price: 2000 }]
  return (
    <>
      <DeliveryDetails 
        total={2000}
        transaction={data}
      />
    </>
  )
}
