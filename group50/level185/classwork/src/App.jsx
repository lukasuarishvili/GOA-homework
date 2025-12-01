import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useCallback } from 'react'
import Shvili from './Shvili'


function App() {

  let [isState, setIsState] = useState(0);


  const punqsia = useCallback(() => {
    setIsState(prev => prev + 1)
  }
    , [])

  useEffect(() => {
    console.log("msobeli rend")
  }, )

  //  შექმენით კომპონენტი სადაც იქნება შვილი ელემენტი, შვილ ელემენტში იქნება ღილაკი რომელზე დაჭერისას გამოიძახება ის 
  //  ფუნქცია რომელსაც მიიღებს props ად, და გაზრდის state ს, თქვენი მიზანია გააკეთოთ ისე რომ მშობელი კომპონენტის რენდერმა 
  //  არგამოიწვიოს ზედმეტი შვილი ელემენტის რენდერი მაშინ როცა არარის საჭირო




  return (
    <>
    <button onClick={punqsia}>
      add
    </button>

      <h1>{isState}</h1>
      
      <Shvili onclick={punqsia} />
    </>
  )
}

export default App
