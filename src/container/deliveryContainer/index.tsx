// import component
import DeliveryDetails from "@/components/organism/deliveryDetails"

export default function Home() {
  const data =[{ name: 'Cost of goods', price: 500000 },{ name: 'Dropshiping fee', price: 5900 }]
  return (
    <>
      <DeliveryDetails 
        total={505900}
        transaction={data}
      />
    </>
  )
}
