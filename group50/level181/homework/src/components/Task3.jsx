import React, { useRef } from 'react'


// 3) შექმენით ტექსტი და button. ღილაკზე დაჭერისას ტექსტი გაჩნდეს და გაქრეს. გამოიყენეთ useRef
function Task3() {
    let visable = useRef()


    function handleClick() {
        
        console.log(visable.current)
        if (visable.current.style.display == "none") {
            visable.current.style.display = "block"
        } else {
            visable.current.style.display = "none"
        }
    }


    return (
        <>
            {
                visable.current ?
                    <p ref={visable} className="text-4xl font-bold ">გაჩნდა გაქრა ტექსტი</p>
                    :
                    <p></p>
            }

            <button
                className="text-xl font-semibold rounded-md border border-gray-600 p-2"
                onClick={handleClick}
            >
                {
                    visable.current.style.display == "none" ? "გააჩინე" : "გააქრე"
                }
            </button>


        </>
    )
}

export default Task3