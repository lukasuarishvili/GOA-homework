import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Toast from './components/Toast.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toast content="hello world this is testing the components " background={"#37804a"}  expiresIn="5"/>
  </StrictMode>,
)
