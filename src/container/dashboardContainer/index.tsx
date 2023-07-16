// import component
import DeliveryDetails from "@/components/organism/deliveryDetails"
import Summary from "@/components/molekul/summary"

export default function Home() {
  const data =[{ name: 'Cost of goods', price: 500000 },{ name: 'Dropshiping fee', price: 5900 }]
  return (
    <>
      <div className="mt-5 pb-5 md:flex flex-wrap">
        <DeliveryDetails/>
        <Summary 
          total={505900}
          transaction={data}
        />
      </div>
    </>
  )
}
