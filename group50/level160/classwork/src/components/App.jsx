import { useState } from 'react'
import Info from './Info'
import Watch from './Watch'


function App() {
  let [watchColor, setWatchColor] = useState("black");
  return (
    <>
      <div className='w-full h-full flex items-center justify-center gap-5'>
        <Watch color={watchColor} />
        <div className='flex flex-col gap-3'>


          <Info />
          <div className='flex flex-col gap-2.5'>
            <h3 className='text-xl font-bold '>Select Color</h3>
            <div className='flex gap-1.5'>
              <button onClick={() => { setWatchColor("red") }} className='w-14 h-10 rounded bg-red-700'>red</button>
              <button onClick={() => { setWatchColor("blue") }} className='w-14 h-10 rounded bg-blue-700' >blue</button>
              <button onClick={() => { setWatchColor("black") }} className='w-14 h-10 rounded bg-gray-700'>black</button>
              <button onClick={() => { setWatchColor("pink") }} className='w-14 h-10 rounded bg-pink-700'>pink</button>
              <button onClick={() => { setWatchColor("skin") }} className='w-14 h-10 rounded bg-amber-200 '>skin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
