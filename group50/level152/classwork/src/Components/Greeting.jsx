import React from 'react'
import { useState } from 'react'

function Greeting() {
    let [name, setname] = useState("")


    return (
        <div className='flex flex-col w-fit bg-amber-700 border-2 rounded-sm px-2 py-2.5'>
            <form >
                <input  className='bg-amber-300 border-2' type="text" name='name' onChange={(Event) => {
                    setname(Event.target.value)
                }} />

            </form>
            <h2>
                Hello:{name}
            </h2>
        </div>
    )
}

export default Greeting