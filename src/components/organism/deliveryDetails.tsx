import { useForm, SubmitHandler } from "react-hook-form"

interface ITransaction {
  name: string
  price: number
}

interface IPropsSummary {
  total: number
  transaction: ITransaction[]
}

type Inputs = {
  example: string
  exampleRequired: string
}

export default function DeliveryDetails({total,transaction}: IPropsSummary) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const watchValue = watch(['example','exampleRequired'])

  return (
    <div className="md:flex flex-wrap mt-5 pb-5">
      <div className="md:w-3/4 xs:w-full">
        <div className="lg:border-r border-1 lg:border-[#FF8A00] mr-4 min-h-[400px]">
          <h3 className="text-[#FF8A00] text-4xl font-semibold">Delivery Details</h3> 
          <div className="py-5">
            <div>
              {watchValue}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue="test" {...register("example")} className=""/>
              <input {...register("exampleRequired", { required: true })} className={`${errors.exampleRequired ? 'outline-stone-600':''}`}/>
              {/* errors will return when field validation fails  */}
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
              <input type="submit" />
            </form>
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
    </div>
  )
}
