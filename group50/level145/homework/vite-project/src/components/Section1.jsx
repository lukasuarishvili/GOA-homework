import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dumman from '../assets/dumMan.jpg'

function section1() {
    return (
        <div className='flex flex-col justify-center gap-2 items-center text-center'>
            <h3 className='font-bold text-3xl'>before react</h3>
            <img className='w-96 h-86' src={Dumman} alt="dum" />
        </div>
    );
};

export default section1;