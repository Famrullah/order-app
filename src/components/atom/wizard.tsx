export default function Wizard() {
  return (
    <div className="flex">
      <div className="flex">
        <div>
          <span className="py-2 px-4 mr-4 bg-[#ff8a00] text-white rounded-full">1</span>
          <span className="mr-6">Delivery</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div className="flex">
        <div>
          <span className="py-2 px-4 mr-4 bg-[#ff8a00] text-white rounded-full">2</span>
          <span className="mr-6">Payment</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div className="flex">
        <div>
          <span className="py-2 px-4 mr-4 bg-[#ff8a00] text-white rounded-full">3</span>
          <span className="mr-6">Finish</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  )
}
