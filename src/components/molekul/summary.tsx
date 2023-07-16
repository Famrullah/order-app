// import component
interface ITransaction {
  name: string
  price: number
}

interface IPropsSummary {
  total: number
  transaction: ITransaction[]
}

export default function Summary({total,transaction}: IPropsSummary) {
  return (
    <>
      <div className="md:w-1/4 relative">
        <div className="">
          <h4 className="text-[#FF8A00] text-xl font-semibold">Summary</h4> 
        </div>
        <div className="lg:absolute bottom-0 left-0 right-0 md:absolute sm:relative">
          {transaction.map((item,idx)=>(
            <div className="flex justify-between font-light" key={idx}>
              <p className="text-sm leading-5">{item.name}</p>
              <p className="text-sm font-semibold leading-5" >{item.price}</p>
            </div>
          ))}
          <div className="flex justify-between font-bold text-xl text-[#FF8A00] mt-2">
            <p className="">Total</p>
            <p>{total}</p>
          </div>
          <button className="btn-primary mt-2"> Continue to Payment </button>
        </div>
      </div>
    </>
  )
}
