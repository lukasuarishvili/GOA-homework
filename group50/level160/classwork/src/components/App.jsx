import { useState } from 'react'
import Info from './Info'
import Watch from './Watch'


function App() {
  let [watchColor, setWatchColor] = useState("black");
  return (
    <>
      <div className='w-full h-full flex lg:flex-row flex-col items-center justify-center gap-5 px-2 pb-2 mt-3'>
        <Watch color={watchColor} />
        <div className='flex flex-col gap-3'>


          <Info />
          <div className='flex flex-col gap-2.5 text-center lg:text-start items-center lg:items-start '>
            <h3 className='text-xl font-bold '>Select Color</h3>
            <div className='flex gap-1.5 flex-wrap items-center'>
              <button onClick={() => { setWatchColor("red") }} className='w-14 h-10 rounded bg-red-700 hover:bg-red-800'></button>
              <button onClick={() => { setWatchColor("blue") }} className='w-14 h-10 rounded bg-blue-700 hover:bg-blue-800' ></button>
              <button onClick={() => { setWatchColor("black") }} className='w-14 h-10 rounded bg-gray-700 hover:bg-gray-800'></button>
              <button onClick={() => { setWatchColor("pink") }} className='w-14 h-10 rounded bg-pink-700 hover:bg-pink-800'></button>
              <button onClick={() => { setWatchColor("skin") }} className='w-14 h-10 rounded bg-amber-200 hover:bg-amber-300 '></button>
            </div>
          </div>
          <div className='flex flex-col gap-4  items-center lg:items-start '>
            <h3 className='text-xl font-bold'>Fetures</h3>
            <div className='flex gap-3'>
              <button className='bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded'>Time</button>
              <button  className='bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded' >Heart Rate</button>
            </div>
            <button className='mt-2 bg-amber-500 hover:bg-amber-600 px-3.5 py-1.5 font-semibold rounded'>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
