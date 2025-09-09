import React from 'react'

export default function Card({ title , url}) {
    return (
        <div className='flex flex-col  text-3xl font-semibold gap-3 items-center' >
            <h4>{title}</h4>
            <img src={url}  className='w-44 h-52 rounded-[5px]'/>
        </div>
    )
}
