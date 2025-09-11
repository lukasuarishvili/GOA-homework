import React, { createElement } from 'react'
import { useState } from 'react'


function Accordion() {
    let [AcordState, AcordChange] = useState("-")
    function openAcord() {
        React.createElement("div", (className = "w-full h-40 flex items-center bg-amber-300"))
    }


    return (
        <div className='w-3xl h-80 bg-amber-200 rounded-2xl p-3'>
            <div className='w-full h-10 flex items-center bg-amber-300 px-2' >
                <h3 className=' flex gap-5  items-center'>
                    <button onClick={openAcord} className='font-bold text-2xl pb-1'>+</button>
                    An accordion is a type of menu that stacks items vertically and</h3>
            </div>

        </div>
    )
}

export default Accordion 