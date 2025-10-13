import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function Task5() {
    let [count, setCount] = useState(0);
    let [isActive, setactive] = useState(true);

    useEffect(
        (params) => {
            if (count > 10 && isActive === true) {
                console.log("High activity")
            } else if (count <= 10 && isActive === false) {
                console.log("Low activity")
            } else {
                console.log("Normal state")
            }
        },
        [count, isActive]
    )
    return (
        <div>
            <div className='text-black font-bold text-xl flex gap-3'>
                <h1>{count}</h1>
                <h1>{isActive ? "Active" : "Inactive"}</h1>

            </div>

            <div className='flex bold gap-3.5'>
                <button onClick={(() => { setCount(count + 1) })}>increment</button>
                <button onClick={(() => { setCount(count - 1) })}>decrement</button>
                <button onClick={() => setactive(!isActive)}>Toggle Active</button>

            </div>

        </div>
    )
}

export default Task5

// 5) შექმენით ორი state: count და isActive (boolean)
// ერთი ღილაკით გაზარდეთ count, მეორე ღილაკით შეცვალეთ isActive
// შექმენით useEffect, რომელიც რეაგირებს ორივე state-ზე
// თუ count > 10 და isActive === true -> console.log("High activity")
// თუ count <= 10 და isActive === false -> console.log("Low activity")
// სხვა შემთხვევაში -> console.log("Normal state")