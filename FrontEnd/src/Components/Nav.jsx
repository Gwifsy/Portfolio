import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Djory } from '../assets/nav-title/djory.svg';
import { ReactComponent as Home } from '../assets/nav-title/home.svg';
import { ReactComponent as About } from '../assets/nav-title/about.svg';
import { ReactComponent as Skills } from '../assets/nav-title/skills.svg';
import { ReactComponent as Project } from '../assets/nav-title/project.svg';
import { ReactComponent as Contact } from '../assets/nav-title/contact.svg';
import { ReactComponent as Cv } from "../assets/nav-title/cv-title.svg";
import Lottie from "lottie-react";
import animationData from "@/assets/icon-project/astronaut.json";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className='header-home'>
            <nav className='navbar'>
                <Link to="/" className='nav-logo'><div><Lottie className='lottie-astronaut' animationData={animationData} /></div><Djory /></Link>
                <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <Link to="/" className='nav-link'><Home /></Link>
                    <Link to="/about" className='nav-link'><About /></Link>
                    <Link to="/skills" className='nav-link'><Skills /></Link>
                    <Link to="/project" className='nav-link nav-none'><Project /></Link>
                    <Link to="/contact" className='nav-link nav-none'><Contact /></Link>
                    <a className='nav-link nav-none' href="/" target="_blank" rel="noopener noreferrer"><Cv /></a>
                </div>

            </nav>
        </header>
    )
}

export default Nav