import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Shackspear from '../assets/shackspear.jpg'

function section2() {
    return (
        <div className='flex flex-col justify-center gap-2 items-center text-center'>
            <h3 className='font-bold text-3xl'>after react</h3>
            <img className='w-96 h-86' src={Shackspear} alt="genius" />
        </div>
    );
};

export default section2;