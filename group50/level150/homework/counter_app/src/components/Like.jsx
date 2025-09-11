import React from 'react'
import { useState } from 'react'
import likeblack from '../assets/icons8-filled-heart-96.png'
import likered from '../assets/icons8-filled-heart-96 (1).png'


function Like() {

    let [likestate, likeChange] = useState(likeblack)



    function chageLikeColor() {

        if (likestate === likeblack) {
            makeRed()
        } else {
            makeBlack()
        }
    }

    function makeBlack() {
        likeChange(likeblack)
    }

    function makeRed() {
        likeChange(likered)
    }


    return (
        <div className='flex flex-col w-40 gap-3 h-40 border-4  justify-center items-center bg-amber-400 border-amber-600 rounded-2xl'>
            <img className='w-22 h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="" />
            <button onClick={chageLikeColor} className='h-7 w-7'><img src={likestate} alt="" /></button>
        </div>
    )
}

export default Like