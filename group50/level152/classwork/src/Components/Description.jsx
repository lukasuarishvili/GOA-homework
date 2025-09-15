import React from 'react'
import { useState } from 'react'

// 5) შექმენით Description კომპონენტი.
// შექმენით form ერთი textarea და submit ღილაკით, ასევე p ტეგი
// --> p ტეგში თავიდან უნდა ეწეროს No Description
// --> როცა მომხმარებელი ჩაწერს ტექსტს და დაასაბმითებს ამ p ტეგის მნიშვნელობა უნდა გახდეს `Your Description: {desc}`

function Description() {
    let [Description, setDescription] = useState("")


    function addDescription(event) {
        event.preventDefault();
        setDescription(event.target.elements.description.value)

        event.target.elements.description.value = "";
    }
    function resetDescription() {
        setDescription("")
    }

    return (
        <div className=" p-5 flex flex-col gap-2">
            <form onSubmit={addDescription} className='flex flex-col gap-2'>
                <textarea name="description" className='w-fit border p-2 rounded '>
                </textarea>
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded w-fit">submit Description</button>
            </form>
            <button onClick={resetDescription} className=" bg-gray-500 text-white px-3 py-1 rounded w-fit">Clear</button>
            <p className="">{Description}</p>

        </div>
    )
}

export default Description