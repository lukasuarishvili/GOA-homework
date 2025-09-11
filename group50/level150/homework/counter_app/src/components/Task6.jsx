import React from 'react'
import { useState } from 'react'

function Task6() {

    let [NUM, chageNum] = useState(1)

    function double() {
        chageNum(NUM *= 2)
    }
    return (

        <div className='flex flex-col w-40 gap-3 h-40 border-4  justify-center items-center bg-green-700 border-green-950 rounded-2xl'>
            <h4 className='font-semibold text-xl '>number:{NUM}</h4>
            <button onClick={double} className='px-2 py-1.5 border-0 bg-yellow-400 hover:bg-yellow-500 rounded-2xl font-semibold ' >double</button>
        </div>


    )
}

export default Task6