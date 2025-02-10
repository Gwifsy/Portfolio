import { Link } from 'react-router-dom';
import { ReactComponent as Djory } from '../assets/nav-title/djory.svg';
import { ReactComponent as Home } from '../assets/nav-title/home.svg';
import { ReactComponent as About } from '../assets/nav-title/about.svg';
import { ReactComponent as Skills } from '../assets/nav-title/skills.svg';
import Lottie from "lottie-react";
import animationData from "@/assets/icon-project/astronaut.json";
const Nav = () => {
    return (
        <header className='header-home'>
            <nav className='navbar'>
                <Link to="/" className='nav-logo'><div><Lottie className='lottie-astronaut' animationData={animationData} /></div><Djory /></Link>
                <div className='nav-links'>
                    <Link to="/" className='nav-link' alt="home"> <Home /></Link>
                    <Link to="/about" className='nav-link' alt="about"><About /></Link>
                    <Link to="/skills" className='nav-link' alt="skills"><Skills /></Link>
                    <Link to="/project" className='nav-link nav-none' alt="project">Project</Link>
                    <Link to="/contact" className='nav-link nav-none' alt="contact">Contact</Link>
                    <a className='nav-link nav-none' href="/" target="_blank" rel="noopener noreferrer" alt="cv">Cv</a>
                </div>
            </nav>
        </header>
    )
}

export default Nav