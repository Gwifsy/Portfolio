import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonPath from '@/Components/ButtonPath';
import { ReactComponent as TextH1 } from '@/assets/icon-project/project-title-h1.svg';
import { ReactComponent as TextH2 } from '@/assets/icon-project/project-title-h2.svg';
import { ReactComponent as Line } from '@/assets/icon-project/line-project.svg';
import { ReactComponent as Theme } from '@/assets/icon-project/theme-title-project.svg';
import { ReactComponent as IconButtonFisrt } from '@/assets/icon-project/icon-project-1.svg';
import { ReactComponent as IconButtonSecond } from '@/assets/icon-project/icon-project-2.svg';
import { ReactComponent as IconButtonThird } from '@/assets/icon-project/icon-project-3.svg';
import { ReactComponent as TitleButtonFirst } from '@/assets/icon-project/title-project-1.svg';
import { ReactComponent as TitleButtonSecond } from '@/assets/icon-project/title-project-2.svg';
import { ReactComponent as TitleButtonThird } from '@/assets/icon-project/title-project-3.svg';
import { ReactComponent as Linkedin } from '@/assets/icon-social/icon-linkedin.svg';
import { ReactComponent as Github } from '@/assets/icon-social/icon-github.svg';
import { ReactComponent as Twitter } from '@/assets/icon-social/icon-twitter.svg';
import { ReactComponent as Circle } from '@/assets/icon-project/circle-project-social.svg';
import { ReactComponent as TitleButtonWhiteFirst } from '@/assets/icon-project/title-project-4.svg';
import { ReactComponent as TitleButtonWhiteSecond } from '@/assets/icon-project/title-project-5.svg';
import { ReactComponent as TitleButtonWhiteThird } from '@/assets/icon-project/title-project-6.svg';
import { ReactComponent as RectangleProject } from '@/assets/icon-project/rectangle-project.svg';
import dataProject from '@/Components/ComponentProject/DataProject.json';
const projectsData = dataProject;

const CenterContainer = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [visibleProjects, setVisibleProjects] = useState(projectsData.slice(0, 4));
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef(null);
    const [activeProject, setActiveProject] = useState(null);

    const [projectsPerPage, setProjectsPerPage] = useState(window.innerWidth <= 900 ? 2 : 4);

    useEffect(() => {
        const handleResize = () => {
            setProjectsPerPage(window.innerWidth <= 900 ? 2 : 4);
            setVisibleProjects(filteredProjects.slice(0, window.innerWidth <= 900 ? 2 : 4));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [filteredProjects]);

    const handleToggle = (projectId) => {
        setActiveProject(activeProject === projectId ? null : projectId);
    };
    // Fonction pour mettre à jour les projets visibles en fonction du filtre
    const updateVisibleProjects = (newFilter) => {
        const newFilteredProjects = newFilter === 'all'
            ? projectsData
            : projectsData.filter(p => p.category.includes(newFilter)); // Vérifie si la catégorie est dans le tableau

        setFilteredProjects(newFilteredProjects);
        setVisibleProjects(newFilteredProjects.slice(0, projectsPerPage)); // Réinitialise les projets visibles
        setCurrentIndex(0); // Réinitialise l'index
    };

    const handleFilterClick = (category) => {
        console.log("Category clicked:", category); // Ajoute un log pour vérifier quelle catégorie est sélectionnée
        if (category !== selectedFilter) {
            setSelectedFilter(category);  // Mettre à jour le filtre sélectionné
            updateVisibleProjects(category);  // Mettre à jour les projets visibles selon le filtre
        }
    };

    const handleWheel = (e) => {
        if (filteredProjects.length <= projectsPerPage) return;
        if (e.deltaY > 0 && currentIndex + projectsPerPage < filteredProjects.length) {
            const nextIndex = currentIndex + projectsPerPage;
            setVisibleProjects(filteredProjects.slice(nextIndex, nextIndex + projectsPerPage));
            setCurrentIndex(nextIndex);
        } else if (e.deltaY < 0 && currentIndex - projectsPerPage >= 0) {
            const prevIndex = currentIndex - projectsPerPage;
            setVisibleProjects(filteredProjects.slice(prevIndex, prevIndex + projectsPerPage));
            setCurrentIndex(prevIndex);
        }
    };


    useEffect(() => {
        setVisibleProjects(filteredProjects.slice(0, projectsPerPage));
        setCurrentIndex(0);
    }, [projectsPerPage, filteredProjects]);
    return (
        <section className='container-project'>
            <div className="container-title-button-project">
                <TextH1 className="title-h1-project" />
                <TextH2 className="title-h2-project" />
                <ButtonPath className="button-path-project" />

            </div>
            <Theme className="theme-project" />
            <div className='container-button-theme-project'>
                <div className='line-project'>
                    <Line />
                </div>
                <div className='container-button-filter'>
                    <div className='button-purple-project' onClick={() => handleFilterClick('all')}>
                        <IconButtonFisrt className="button-icon-margin-project" />
                        <TitleButtonFirst className='button-title-margin-project' />
                    </div>
                    <div className='button-purple-project' onClick={() => handleFilterClick('Cas Clients')}>
                        <IconButtonSecond className="button-icon-margin-project" />
                        <TitleButtonSecond className='button-title-margin-project' />
                    </div>
                    <div className='button-purple-project' onClick={() => handleFilterClick('Projets perso')}>
                        <IconButtonThird className="button-icon-margin-project" />
                        <TitleButtonThird className='button-title-margin-project' />
                    </div>
                    <div className='button-white-project' onClick={() => handleFilterClick('Site vitrines')}>
                        <TitleButtonWhiteFirst className="title-button-white-project" />
                    </div>
                    <div className='button-white-project' onClick={() => handleFilterClick('Application web')}>
                        <TitleButtonWhiteSecond className="title-button-white-project" />
                    </div>
                    <div className='button-white-project' onClick={() => handleFilterClick('Landing page')}>
                        <TitleButtonWhiteThird className="title-button-white-project" />
                    </div>
                </div>

                <div className='content-project' ref={contentRef} onWheel={handleWheel}>
                    <div className="line vertical"></div>
                    <div className="line horizontal"></div>
                    <div className="project-grid">
                        {visibleProjects.map((project) => {
                            const isActive = activeProject === project.id;

                            return (
                                <div
                                    key={project.id}
                                    className={`project-item ${isActive ? "active" : ""}`}
                                    onClick={() => handleToggle(project.id)}
                                >
                                    <h2 className={isActive ? "hidden" : ""}>
                                        {project.title}
                                    </h2>
                                    <div className={`active-content-card ${isActive ? "visible" : ""}`}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <Link className='project-link' to={`/ProjectDetail/${project.id}`}>Voir plus</Link>
                                        <div className='skills-pics'>
                                            {project.skills?.map((skill, index) => (
                                                <div className="skill" key={index}>
                                                    <img className='skills-pic' src={skill} alt={`Skill ${index}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="scroll-down-container">
                        <div className="scroll-rectangle">
                            <div className="dot">↓</div>
                        </div>
                    </div>
                </div>
                <div className="rectangle-wrapper">
                    <RectangleProject />
                    <div className="container-icon-social-project">
                        <a className="icon-wrapper" href="/">
                            <Circle />
                            <Linkedin className="icon-center" />
                        </a>
                        <a className="icon-wrapper" href="/">
                            <Circle />
                            <Twitter className="icon-center" />
                        </a>
                        <a className="icon-wrapper" href="/">
                            <Circle />
                            <Github className="icon-center" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CenterContainer;