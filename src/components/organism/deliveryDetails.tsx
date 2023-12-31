import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function DeliveryDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const watchValue = watch(['exampleRequired'])

  return (
    <div className="md:w-3/4 xs:w-full">
      <div className="lg:border-r border-1 lg:border-[#FF8A00] md:border-r md:border-[#FF8A00] mr-4 min-h-[400px]">
        <h3 className="text-[#FF8A00] text-2xl md:text-4xl font-semibold">Delivery Details</h3> 
          {watchValue}
        <div className="py-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-x-4 mt-2 w-full md:pr-5">
              <input {...register("exampleRequired", { required: true })} className={`${errors.exampleRequired ? 'outline-stone-600':''} border border-[#ccc] mt-2 p-4 w-full md:w-[60%] rounded`} placeholder="Email"/>
              <input {...register("exampleRequired", { required: true })} className={`${errors.exampleRequired ? 'outline-stone-600':''} border border-[#ccc] mt-2 p-4 w-full md:w-[40%] rounded`} placeholder="Dropshipper Name"/>
            </div>
            <div className="md:flex gap-x-4 mt-2 w-full md:pr-5">
              <input {...register("exampleRequired", { required: true })} className={`${errors.exampleRequired ? 'outline-stone-600':''} border border-[#ccc] mt-2 p-4 w-full md:w-[60%] rounded`} placeholder="Phone Number"/>
              <input {...register("exampleRequired", { required: true })} className={`${errors.exampleRequired ? 'outline-stone-600':''} border border-[#ccc] mt-2 p-4 w-full md:w-[40%] rounded`} placeholder="Dropshipper Phone Number"/>
            </div>
            <div className="flex gap-x-4 mt-2 w-full md:pr-5">
              <textarea {...register("exampleRequired", { required: true })} className={`${errors.exampleRequired ? 'outline-stone-600':''} border border-[#ccc] mt-2 w-full p-4 md:w-[59%] rounded`} placeholder="Delivery Address" rows={4} cols={50}/>
            </div>
            
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            {/* <input type="submit" /> */}
          </form>

        </div>
      </div>
    </div>
  )
}
