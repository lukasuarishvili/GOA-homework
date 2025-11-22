import { useEffect, useRef, useState } from 'react'


// components
import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'

function App() {


  return (
    <main>

      <div className='w-full flex items-center justify-center flex-col text-center gap-3 py-3 '>
        <Task1 />
      </div>

      <div className='w-full flex items-center justify-center flex-col text-center gap-3 py-3 '>
        <Task2 />
      </div>

      <div className=' w-full flex items-center justify-center flex-col text-center gap-3 py-3 '>
        <Task3 />
      </div>
    </main>
  )
}

export default App
