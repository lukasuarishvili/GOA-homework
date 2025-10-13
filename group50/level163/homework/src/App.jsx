import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Homepage from './components/Homepage'

function App() {


  return (

    <BrowserRouter>
      <header className='w-full h-56 bg-black text-xl text-white font-bold flex justify-center items-center'>
        <nav className='flex gap-3 items-center'>
          <Link to="/about">About</Link>
          <Link to="/" >Home</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/About' element={<About />} ></Route>
        <Route path='/' element={<Homepage />}>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
