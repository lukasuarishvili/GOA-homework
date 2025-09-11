import { useState } from 'react'



function App() {

  let [counter, setcounter] = useState(0);


  function increment() {
    // counter+=1 ეს ცუდია? რატომ?

    setcounter(counter+1)
  };

  function decrement() {
    setcounter(counter-2)
  };
  function Reset() {

    setcounter(0)
  };



  return (
    <div className='flex flex-col justify-center items-center gap-3 border-4 p-3 bg-blue-800 border-blue-950 rounded-2xl'>
      <h1 className=' font-semibold text-xl  flex gap-1'>Count:<span className={counter > 0 ? "text-green-600" : counter < 0 ? "text-red-600" : "text-black"} >{counter}</span></h1>
      <div className='flex gap-3.5 '>
        <button className='px-2 py-1.5 border-0 bg-red-400 hover:bg-red-500 rounded-2xl' onClick={decrement}>decrese</button>
        <button className='px-2 py-1.5 border-0 bg-gray-400 hover:bg-gray-500 rounded-2xl' onClick={Reset}>Resset</button>
        <button className='px-2 py-1.5 border-0 bg-green-400 hover:bg-green-500 rounded-2xl' onClick={increment}>increse</button>
      </div>


    </div>
  )
}

export default App
