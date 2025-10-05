import React, { useState } from 'react'
import watchBlack from '../assets/images/watvh-black.png'
import watchBlue from '../assets/images/watchBlue.png'
import watchRed from '../assets/images/watchRed.png'
import watchSkin from '../assets/images/watchSkin.png'
import watchPink from '../assets/images/watchPink.png'

function Watch({ color }) {
    const images = {
        black: watchBlack,
        blue: watchBlue,
        red: watchRed,
        skin: watchSkin,
        pink: watchPink,
    };
    let [time, setime]= useState( Date().slice(15, 25));
    setInterval(() => {
        setime( Date().slice(15, 25))
    }, 1000);
    return (
        <div className='flex justify-center items-center relative' >
            <p className='absolute text-white font-semibold'>{time}</p>
            <img
                src={images[color]}
                alt={`${color} watch`}
                className="w-64 h-auto"



            />
        </div >



    )
}

export default Watch