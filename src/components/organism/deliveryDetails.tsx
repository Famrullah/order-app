interface ITransaction {
  name: string
  price: number
}

interface IPropsSummary {
  total: number
  transaction: ITransaction[]
}

export default function DeliveryDetails({total,transaction}: IPropsSummary) {
  return (
    <div className="md:flex flex-wrap mt-5 pb-5">
      <div className="md:w-3/4 xs:w-full">
        <div className="lg:border-r border-1 lg:border-[#FF8A00] mr-4">
          <h3 className="text-[#FF8A00] text-4xl font-semibold">Delivery Details</h3> 
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium veniam, dolor dolores perspiciatis consequuntur atque amet numquam, adipisci magnam a fugiat odio non iste perferendis autem repudiandae? Dignissimos, consectetur.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptates possimus optio minus, libero eligendi commodi porro, dolor nulla iste reiciendis doloribus veritatis? Voluptatum maiores odit accusamus minus dolor exercitationem.
          </div>
        </div>
      </div>
      <div className="md:w-1/4 relative">
        <div className="">
          <h4 className="text-[#FF8A00] text-xl font-semibold">Summary</h4> 
        </div>
        <div className="lg:absolute bottom-0 left-0 right-0 md:relative">
          {transaction.map((item,idx)=>(
            <div className="flex justify-between" key={idx}>
              <p className="text-sm leading-5">{item.name}</p>
              <p className="text-sm font-semibold leading-5" >{item.price}</p>
            </div>
          ))}
          <button className="btn-primary"> Continue to Payment </button>
        </div>
      </div>
    </div>
  )
}
