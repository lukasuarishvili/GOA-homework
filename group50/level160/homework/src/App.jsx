import { useState } from 'react'
import cardBack from '../src/assets/images/bg-card-back.png'
import cardFront from '../src/assets/images/bg-card-front.png'



function App() {



  function handleChange(event) {

  }
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center gap-15'>
        <div className='flex flex-col gap-5 w-fit'>
          <img src={cardFront} alt="" className='pr-13' />
          <img src={cardBack} alt="Back of the card" className='pl-13' />
        </div>
        <div className='h-fit w-fit px-2'>
          <form className='flex flex-col w-96 gap-2' >

            <div className='flex flex-col w-full gap-2.5 '>
              <label className='text-black font-semibold' > Cardholder Name</label>
              <input
                type="text"
                placeholder='e.g. Jane Appleseed'
                className='w-full p-2 text-Gray400 border rounded'
                onChange={(Event => {
                  console.log(Event)
                })} />
            </div>


            <div className='flex flex-col w-full gap-2.5 '>
              <label className='text-black font-semibold ' >Card Number</label>
              <input
                type="text"
                placeholder='e.g. 1234 5678 9123 0000'
                className='w-full p-2  text-Gray400 border rounded '
                onChange={Event=>{
                  console.log(Event)
                }}
              />

            </div>
            <div className='w-full flex gap-4'>
              <div className='w-full flex flex-col gap-1.5'>
                <label className='text-black font-semibold' >Exp. Date (MM/YY)</label>
                <div className='flex gap-2 '>
                  <input type="text" placeholder='MM' className='p-2 w-full border rounded ' />
                  <input type="text" placeholder='YY' className='p-2 w-full border rounded ' />
                </div>

              </div>
              <div className=' w-full flex flex-col gap-1  '>
                <label className='text-black font-semibold' >CVC</label>
                <input type="text" placeholder='e.g. 123' className='p-2  border rounded w-full' />
              </div>
            </div>

            <button type="submit" className='w-full bg-Purple950 text-white rounded py-2 mt-4'> Confirm</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
