import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { gazardCount2 } from './Calke'


function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)


  const ragaca = useMemo(() =>{ return () => { gazardCount2(count2), setCount2(prev => prev + 1) } }, [count2]);


  function gazardeCount1() {
    console.log("izrdeba count 1")
    setCount1((prev) => prev + 1)
  }

  return (
    <>
      <div className=''>
        <h2>counter1 : {count1}</h2>
        <button onClick={gazardeCount1}>Count1++</button>

      </div>

      <div>
        <h2>counter2 :  {count2} </h2>
        <button onClick={ragaca}>Count2++</button>
      </div>
    </>
  )
}

export default App
