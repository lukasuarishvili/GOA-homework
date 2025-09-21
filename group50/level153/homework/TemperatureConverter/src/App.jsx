import { useState } from 'react'


function App() {

  let [temp, settemp] = useState(0);

  let [temptype, settemptype] = useState("Celsius To Fahrenheit")

  function renderTemp(event) {
    event.preventDefault()
    let tempNum = parseInt(event.target.temp.value)
    if (temptype == "Celsius To Fahrenheit") {
      settemp((tempNum * 9 / 5) + 32)
    } else {
      settemp((tempNum - 32) * 5 / 9)
    }
  }


  return (
    <>
      <form className='flex flex-col ' onSubmit={renderTemp}>
        <input type="number" name='temp' />
        <buttton onClick={() => { settemptype("Fahrenheit To Celsius") }} className='border-1 p-1'> Fahrenheit To Celsius</buttton>
        <buttton onClick={() => { settemptype("Celsius To Fahrenheit") }} className='border-1 p-1'>Celsius To Fahrenheit</buttton>

        <p>You Have Selected: {temptype}</p>

        <button type="submit">convert</button>
      </form>
      <h1>{temp}</h1>
    </>
  )
}

export default App


// 5) შექმენით TemperatureConverter კომპონენტი
// შექმენით: 
// -ერთი input ტეგი (type=number)
// -ორი ღილაკი ტექსტებით -> '1. Celsius To Fahrenheit' და '2. Fahrenheit To Celsius' 
// -p ტეგი სადაც ეწერება -> 'You Have Selected: 1` ან `You Have Selected: 2`
// -submit ღილაკი
// --> მომხმარებელმა უნდა შემოიყვანოს რიცხვი, ამოირჩიოს გარდაქმნის ტიპი და დააწვეს submit
// --> თქვენ უნდა გამოინგარიშოთ და დაარენდეროთ შედეგი