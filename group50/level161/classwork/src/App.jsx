import React, { useState } from 'react'
import About from './components/About'
import Info from './components/Info'



function App() {
    let [main, setmain] = useState("about")

    function setState() { 
        switch (main) {
            case "about":
                return <About/>
                break;
            case "info":
                return <Info/>
                break;

        }
    }
    return (
        <>
            <header className='bg-gray-800 flex w-full flex-col h-screen gap-3.5 text-xl text-white font-bold  px-2 py-5' >
                <div className='w-full flex gap-3.5 items-center justify-center '>
                    <button onClick={() => { setmain("about") }}>About</button>
                    <button onClick={() => { setmain("info") }}>info</button>
                    {/* <button onClick={setmain("reviuse")}>reviuse</button>
                <button onClick={setmain("comments")}>comments</button> */}
                </div>


                <div>
                    <div></div>

                    {
                        setState()
                    }
                </div>
            </header>
        </>
    )
}

export default App