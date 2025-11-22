import { useRef } from "react"
// 2) შექმენით input ველი და button. როცა  button დააჭერ, input-ის მნიშვნელობა console-ში დაიბეჭდოს.
// გამოიყენეთ useRef  input-ის წვდომისთვის


function Task2() {

    let input = useRef("");


    function handlebutton() {
        console.log(input.current)
    }


    function handleChange(event) {
        input.current = event.target.value

    }


    return (
        <>
            <div className="flex gap-3 ">
                <input
                    type="text"
                    onChange={handleChange}
                    ref={input}
                    className="py-2 px-1.5 border border-black rounded-md"
                />

                <button
                    className="border rounded-md p-2 hover:bg-gray-500 "
                    onClick={handlebutton}>
                    Console
                </button>
            </div>

        </>
    )
}

export default Task2