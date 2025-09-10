import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Task6 from './components/Task6.jsx'
import CaseChanger from './components/CaseChanger.jsx'
import Like from './components/Like.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task6/>
    <CaseChanger/>
    <Like/>
  </StrictMode>,
)
