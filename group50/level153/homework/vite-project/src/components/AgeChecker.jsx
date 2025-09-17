import React from 'react'
import { useState } from 'react'
function AgeChecker() {

    // 1) შექმენით AgeChecker კომპონენტი
    // მომხმარებელს მოთხოვეთ თავისი ასაკი, onSubmit ზე:
    // --> თუ არასრულწლოვანია გამოჩნდეს Toast(ვინც არ იცის დასერჩეთ Toast Ui) ის მსგავსი ელემენტი წითელი Background და ტექსტით - 'You Are Not Allowed`
    // --> თუ სრულწლოვანია გამოჩნდეს Toast ის მსგავსი ელემენტი მწვანე Background და ტექსტით - `You Are Allowed`
    // ასევე დაამატეთ reset ღილაკი, რათა მომხმარებელმა შეძლოს თავისი ასაკის ხელახლა შემოყვანა

    const [age, setage] = useState(0)

    function checkage(event) {
        event.preventDefault()
        const inputage = event.target.elements.age.value

        if (inputage > 18) {
            ToastGreen(inputage);
        } else {
            ToastRed(inputage);
        }

    }

    function ToastRed(age) {
        setage(0)
        const toast = document.getElementById("toast");

        toast.innerHTML = `<h1 class='text-red-600'>we dont  allowe  age:${age} old </h1>`
    }

    function ToastGreen(age) {
        setage(age)
        const toast = document.getElementById("toast");

        toast.innerHTML = `<h1 class='text-green-600'>yor're good age:${age}</h1>`
    }

    return (
        <div>
            <form onSubmit={checkage}>
                <input type="number" name='age' />
                <button type="submit">submit</button>

            </form>
            <h1>{age}</h1>
            <div id='toast'>

            </div>
        </div>

    )
}

export default AgeChecker