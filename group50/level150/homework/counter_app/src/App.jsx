import { useState } from 'react'



function App() {
  let [counter, setcounter] = useState(0);


  [ /*მიმდინარე state-ის მნიშვნელობას*/ , /*ფუნქციას state-ის შესაცვლელად*/]
  
  console.log(counter)

  function increment() {
    counter++
    setcounter(counter)
  };


  return (
    <>
      <h1>Count:{counter}</h1>
      <button onClick={increment}>incresee</button>
    </>
  )
}

export default App
