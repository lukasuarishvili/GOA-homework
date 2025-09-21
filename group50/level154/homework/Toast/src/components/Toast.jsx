import React from 'react'
import { useState } from 'react'

function Toast({ content, expiresIn, background }) {
    return (
        // ??? es ar mushaobs 
        setInterva l(
            (
                <>
                    <div className='w-full max-h-20 rounded-xl flex justify-center items-center py-4' style={{ backgroundColor: background }}>
                        <p>{content}</p>
                    </div>
                </>
            ),
            parseInt(expiresIn)
        )
    )
}

export default Toast


// 1) შექმენით Toast კომპონენტი.
// მას პროპსებად უნდა გადაეცეს content(ტექსტი/შიგთავსი), expiresIn(მილიწამებში) და background(ფერი Hex სისტემაში).
// --> მიღებული პროპსების გათვალისწინებით ეკრანზე უნდა გამოაჩინოთ Toast, რომელიც გარკვეული დროის შემდეგ თავად გაქრება
// P.S ეს კომპონენტი გააკეთეთ, შემდგომ დავალებებში დაგჭირდებათ