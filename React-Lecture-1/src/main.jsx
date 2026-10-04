import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pizza from './pizza.jsx'
createRoot(document.getElementById('root')).render(
    <Pizza/>
)
