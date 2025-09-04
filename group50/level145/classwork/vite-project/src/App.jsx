import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Section1 from './Section1'
import Section2 from './section2'

function App() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center  gap-5 bg-gray-400'>
      <Header />
      <div className='w-full flex flex-row justify-center items-center gap-8 py-3'>
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </div>

  )
}
export default App
