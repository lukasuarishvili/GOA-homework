import React from 'react'
import { useState } from 'react'
function Task6() {
    let [NUM, chageNum] = useState(1)

    function double() {
        chageNum(NUM *=2)
    }
    return (

        <div className='flex flex-col w-40 gap-3 h-40 border-4  justify-center items-center'>
            <h4>number:{NUM}</h4>
            <button onClick={double} className='p-2 bg-amber-400 rounded-2xl' >double</button>
        </div>


    )
}

export default Task6