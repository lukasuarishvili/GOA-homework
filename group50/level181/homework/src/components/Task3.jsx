import React, { useRef } from 'react'


// 3) შექმენით ტექსტი და button. ღილაკზე დაჭერისას ტექსტი გაჩნდეს და გაქრეს. გამოიყენეთ useRef
function Task3() {
    let visable = useRef(true)

    function handleClick() {
        console.log(visable.current)
        if (visable.current) {
            visable.current = false
        } else {
            visable.current = true
        }
    }


    return (
        <>
            {
                visable.current ?
                    <p className="text-4xl font-bold ">გაჩნდა გაქრა ტექსტი</p>
                    :
                    <p></p>
            }

            <button
                className="text-xl font-semibold rounded-md border border-gray-600 p-2"
                onClick={handleClick}
            >
                {
                    visable.current ? "გააქრე" : "გააჩინე" 
                }
            </button>


        </>
    )
}

export default Task3