import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PathRoute from './PathRoute.jsx'
import './Style/index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PathRoute />
    </StrictMode>,
)
