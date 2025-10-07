import { useState } from 'react'
import cardBack from '../src/assets/images/bg-card-back.png'
import cardFront from '../src/assets/images/bg-card-front.png'



function App() {
  let [formdata, setformdata]=useState({
    CardHolderName:"test name",
    CardNumber:" test num123123"   ,
    Cvc:"12/13"
  })


  function handleChange(event) {

  }
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center gap-15 px-2'>
        <div className='flex flex-col gap-5 w-fit'>
          <div className='relative max-h-fit  max-w-fit flex justify-center items-center'>
            <img src={cardFront} alt="" className='' />
            <div className='absolute flex flex-col'>
              <h2 className='text-white'>{formdata.CardNumber}</h2> 
              </div>
              <div className='w-full flex justify-between'>
                <p className='  text-white'>{formdata.CardHolderName}</p>
              </div>
            
           
            
          </div>
          
          <div>
             <img src={cardBack} alt="Back of the card" className='' />
          </div>
         
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
