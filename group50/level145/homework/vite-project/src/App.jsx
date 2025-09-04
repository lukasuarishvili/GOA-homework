import { useState } from 'react'
import Footer from './components/Footer'
import Section1 from './components/Section1'
import Section2 from './components/section2'

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
