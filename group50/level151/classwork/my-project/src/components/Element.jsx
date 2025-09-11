import React from 'react'
import { useState } from 'react'


function element(props) {
    return (
        <div className='flex flex-col justify-center items-center w-52 h-86 border-4 rounded-2xl' >
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default element