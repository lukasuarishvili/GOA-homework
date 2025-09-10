import React from 'react'
import { useState } from 'react'

export default function CaseChanger() {
    let [word, checkWord] = useState("one does not simple learn REACT")

    function changeCase() {
        if (word === word.toUpperCase()) {
            checkWord(word.toLowerCase())
        } else {
            checkWord(word.toUpperCase())
        }
    }
    return (
        <div className='flex flex-col items-center p-2 border-4 gap-2.5'>
            <h1 className='font-semibold text-2xl'>{word}</h1>
            <button className=' py-2 px-3  bg-amber-400 rounded-2xl' type="button" onClick={changeCase}>chage case</button>
        </div>
    )
}
