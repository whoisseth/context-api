function CryptoData({data}) {
  return (
    <div className="">
      <div className="space-y-4">
        <div className='flex justify-between'>
          <h1 className="text-2xl font-bold">Symbol</h1>
          <h1 className="text-2xl font-bold pr-6">Last Price</h1>
        </div>
        <div className="max-h-52  overflow-y-scroll ">
          {data &&
            data.map((data, index) => (
              <div key={index} className='flex gap-2 items-center justify-between '>
                <p >{data.symbol}</p>
                <p className='pr-6'>{data.lastPrice}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CryptoData

