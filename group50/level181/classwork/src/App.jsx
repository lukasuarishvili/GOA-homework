import { useRef, useEffect } from 'react'

import './App.css'

function App() {
  let count = useRef(0);
  let p = useRef()

  useEffect(() => {
    console.log(count.current.textContent)
  })

  return (
    <>
      <p ref={p} >{count.current}</p>

      <button onClick={() => {
        count.current = Number(count.current) + 1
        p.current.textContent = count.current;
      }}
      >+</button>

    </>
  )
}
export default App
// level 181:
// 1) შექმენით ინფუთი რომელშიც ინფორმაციის შეტანის დროს ეგ ინფორმაცია გამოჩნდება სხვა პარაგრაფში,
//   პლიუს ერთი ქაუნთერიც გააკეთეთ გვერძე, ორივეში გამოიყენეთ useRef