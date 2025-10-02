import React from 'react'
import logo from '../assets/images/image.png'

function Header() {
    return (
        <div className='w-full  flex justify-center items-center py-6 bg-Header px-2'>
            <img src={logo} alt="Main logo" className='h-15' />
        </div>
    )
}

export default Header