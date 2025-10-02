import { useState } from 'react'
// import Info from './Info'
import Watch from './Watch'


function App() {
  [watchColor, setWatchColor] = useState("blue");
  return (
    <>
      <div className='w-full h-full flex items-center justify-center gap-5'>
        <Watch color={watchColor} />
        {/* <Info />*/}

        <button onClick={setWatchColor("Red")}></button>
      </div>
    </>
  )
}

export default App
