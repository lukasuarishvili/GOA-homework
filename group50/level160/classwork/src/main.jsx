import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App>
    </App>
  </StrictMode>,
)
