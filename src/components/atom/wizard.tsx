export default function Wizard() {
  return (
    <div className="flex overflow-x-scroll p-2">
      <div className="flex">
        <div className="relative">
          <span className="py-2 px-4 mr-4 bg-[#ff8a00] text-white rounded-full">1</span>
          <span className="mr-6 text-[#ff8a00] font-semibold">Delivery</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#ff8a00] mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div className="flex">
        <div>
          <span className="py-2 px-4 mr-4 bg-[#FFE4B8] text-[#ff8a00] rounded-full">2</span>
          <span className="mr-6 text-[#ff8a00] font-semibold">Payment</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#ff8a00] mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div className="flex">
        <div>
          <span className="py-2 px-4 mr-4 bg-[#FFE4B8] text-[#ff8a00] rounded-full">3</span>
          <span className="mr-6 text-[#ff8a00] font-semibold">Finish</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#ff8a00] mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  )
}
