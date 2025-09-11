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
        <div className='flex flex-col items-center justify-center p-3 border-4 gap-2.5'>
            <h1 className='font-semibold text-2xl'>{word}</h1>
            <button className='px-2 py-1.5 border-0 bg-yellow-400 hover:bg-yellow-500 rounded-2xl' type="button" onClick={changeCase}>chage case</button>
        </div>
    )
}
