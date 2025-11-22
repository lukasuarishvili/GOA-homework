import { useEffect, useRef } from "react"
// 1) შექმენით button და ტექსტი. როცა ღილაკს დააწვები, ტექსტის ფერი შეიცვალოს.
// გამოიყენეთ useRef - ი ტექსტის ელემენტზე წვდომისთვის.

function Task1() {

    let textColor = useRef("blue");


    function changeColor() {
        if (textColor.current.style.color == "blue") {
            textColor.current.style.color = "red"
        } else {
            textColor.current.style.color = "blue"
        }

    }



    return (

        <>

            <p
                ref={textColor}
                style={{ color: { textColor } }}
                className="text-4xl font-bold "> this is a usefull React hook
            </p >

            <button
                onClick={changeColor}
                className="text-xl font-semibold rounded-md border border-gray-600 p-2" >
                Change color
            </button>

        </>
    )

}

export default Task1