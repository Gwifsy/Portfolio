import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Background from '../assets/bg-pages/BG-ABOUT.webp';
import Nav from '../Components/Nav';
import { ReactComponent as Cv } from "../assets/icon-button/icon-cv.svg";
import { ReactComponent as Project } from '../assets/icon-button/icon-project.svg';
import { ReactComponent as Contact } from '../assets/icon-button/icon-contact.svg';
import { ReactComponent as Github } from '../assets/icon-social/icon-github-about.svg';
import { ReactComponent as Linkedin } from '../assets/icon-social/icon-linkedin-about.svg';
import { ReactComponent as Twitter } from '../assets/icon-social/icon-twitter-about.svg';
import { ReactComponent as ChevronLeft } from '../assets/icon-about/chevron-left-about.svg';
import { ReactComponent as ChevronRight } from '../assets/icon-about/chevron-right-about.svg';
import { ReactComponent as AboutTitleMiddle } from '../assets/nav-title/about.svg';
import { ReactComponent as SkillsTitleMiddle } from '../assets/nav-title/skills.svg';
import T from "../assets/bg-pages/BG-ABOUT.webp";

const About = () => {
    const [activeCategory, setActiveCategory] = useState('about');
    const [currentIndex, setCurrentIndex] = useState(0);

    const aboutItems = [
        'Présentation personnelle',
        'Parcours académique',
        'Expériences professionnelles'
    ];

    const skillsItems = [
        'React',
        'JavaScript',
        'Redux',
        'CSS',
        'Node.js'
    ];

    const items = activeCategory === 'about' ? aboutItems : skillsItems;

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-about" />
            <Nav />
            <section className='container-about'>
                <div className='container-button-top'>
                    <Link to="/project" className='' alt="project"><Project /></Link>
                    <Link to="/contact" className='' alt="contact"><Contact /></Link>
                    <a className='gg' href="/" target="_blank" rel="noopener noreferrer" alt="cv"><Cv /></a>
                </div>
                <div className='container-content-about'>
                    <button onClick={prevSlide} className='chevron-left-about'>
                        <ChevronLeft />
                    </button>
                    <div className='container-block-middle-about'>
                        <img className='bg-container-middle' src={T} alt="" />
                        <div className='button-skills-about-h3'>
                            <button onClick={() => setActiveCategory('about')} className={`circle-about-button circle-style-left ${activeCategory === 'about' ? 'active' : ''}`}>
                                <AboutTitleMiddle className="svg-title-button" />
                            </button>
                            <button onClick={() => setActiveCategory('skills')} className={`circle-about-button circle-style-right ${activeCategory === 'skills' ? 'active' : ''}`}>
                                <SkillsTitleMiddle className="svg-title-button" />
                            </button>
                        </div>
                        <motion.div
                            className='carousel-item'
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>{items[currentIndex]}</h2>
                        </motion.div>
                    </div>
                    <button onClick={nextSlide} className='chevron-right-about'>
                        <ChevronRight />
                    </button>
                </div>
                <div className='container-button-bottom'>
                    <Linkedin />
                    <Twitter />
                    <Github />
                </div>
            </section>
        </div>
    );
};

export default About;
