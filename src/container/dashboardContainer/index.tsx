// import component
import DeliveryDetails from "@/components/organism/deliveryDetails"
import Summary from "@/components/molekul/summary"

export default function DashboardContainer() {
  const data =[{ name: 'Cost of goods', price: 500000 },{ name: 'Dropshiping fee', price: 5900 }]
  return (
    <>
      <div className="md:flex flex-wrap mt-5 pb-5">
        <DeliveryDetails/>
        <Summary 
          total={505900}
          transaction={data}
        />
      </div>
    </>
  )
}
