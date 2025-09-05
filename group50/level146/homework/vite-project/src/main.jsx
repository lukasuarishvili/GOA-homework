import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Greet from './Greeting.jsx'
import ShowProduct from './Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Greet name="luka" />
    <Greet name="nika" />
    <Greet name="arzen" />
    <ShowProduct name="mouse" description="it a good mouse" />



  </StrictMode>,
)
