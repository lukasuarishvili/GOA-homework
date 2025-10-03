import { useState } from 'react'
import cardBack from '../src/assets/images/bg-card-back.png'
import cardFront from '../src/assets/images/bg-card-front.png'

function App() {


  return (
    <>
      <div className='h-screen w-full flex justify-center items-center gap-15'>
        <div className='flex flex-col gap-5 w-fit'>
          <img src={cardFront} alt="" className='pr-13' />
          <img src={cardBack} alt="Back of the card" className='pl-13' />
        </div>
        <div className='h-fit w-fit px-2'>
          <form className='flex flex-col max-w-72' >

            <div className='flex flex-col w-full gap-2 '>
              <label className='text-black ' > Cardholder Name</label>
              <input type="text" placeholder='e.g. Jane Appleseed' className='w-full px-1.5 py-1.5 text-Gray400 ' />
            </div>


            <div className='flex flex-col w-full gap-2 '>
              <label className='text-black ' >Card Number</label>
              <input type="text" placeholder=' e.g. 1234 5678 9123 0000' className='w-full px-1.5 py-1.5 text-Gray400' />

            </div>
            <div className='w-full flex gap-3'>
              <div className='flex flex-col gap-1'>
                <label >Exp. Date (MM/YY)</label>
                <div className='flex gap-1 '>
                  <input type="text" placeholder='MM' className='p-1 ' />
                  <input type="text" placeholder='YY' />
                </div>

              </div>
              <div className='flex flex-col gap-1'>
                <label >CVC</label>
                <input type="text" placeholder='e.g. 123' className='' />
              </div>
            </div>

            <button type="submit"> Confirm</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
