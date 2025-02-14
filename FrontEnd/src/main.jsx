import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PathRoute from './PathRoute.jsx'
import './Style/index.css'
import './Style/ComponentHome/CenterContainer.css'
import './Style/ComponentHome/FooterHome.css'
import './style/ComponentAbout/CenterContainer.css'
import './Style/ComponentContact/CenterContainer.css'
import './Style/ComponentProject/CenterContainer.css'
import './Style/ComponentProject/ContainerDetailProject.css'
import './Style/Nav.css'
import './Style/ButtonPath.css'
import './Style/IconSocial.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PathRoute />
    </StrictMode>,
)
