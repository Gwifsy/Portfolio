import { useState, useRef, useEffect } from 'react';
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

const projectsData = [
    { id: 1, image: 'image1.jpg', title: 'Project  1', description: 'Description of project 1', category: 'Cas Clients' },
    { id: 2, image: 'image11.jpg', title: 'Project   2', description: 'Description of project 11', category: 'Cas Clients' },
    { id: 3, image: 'image6.jpg', title: 'Project  3', description: 'Description of project 6', category: 'Cas Clients' },
    { id: 5, image: 'image7.jpg', title: 'Project  5', description: 'Description of project 7', category: 'Projets perso' },
    { id: 6, image: 'image3.jpg', title: 'Project  6', description: 'Description of project 3', category: 'Site vitrines' },
    { id: 7, image: 'image4.jpg', title: 'Project  7', description: 'Description of project 4', category: 'Application Web' },
    { id: 8, image: 'image5.jpg', title: 'Project  8', description: 'Description of project 5', category: 'Landing page' },
    { id: 9, image: 'image12.jpg', title: 'Project   9', description: 'Description of project 12', category: 'Projets perso' },
    { id: 10, image: 'image8.jpg', title: 'Project 10', description: 'Description of project 8', category: 'Site vitrines' },
    { id: 11, image: 'image9.jpg', title: 'Project 11', description: 'Description of project 9', category: 'Application Web' },
    { id: 12, image: 'image10.jpg', title: 'Project  12', description: 'Description of project 10', category: 'Landing page' },
    { id: 13, image: 'image1.jpg', title: 'Project 13', description: 'Description of project 1', category: 'Cas Clients' },
    { id: 14, image: 'image11.jpg', title: 'Project  14', description: 'Description of project 11', category: 'Cas Clients' },
    { id: 15, image: 'image6.jpg', title: 'Project 15', description: 'Description of project 6', category: 'Cas Clients' },

];

const BodyProject = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [visibleProjects, setVisibleProjects] = useState(projectsData.slice(0, 4));
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef(null);


    // Fonction pour mettre à jour les projets visibles en fonction du filtre
    const updateVisibleProjects = (newFilter) => {
        const newFilteredProjects = newFilter === 'all' ? projectsData : projectsData.filter(p => p.category === newFilter);
        setFilteredProjects(newFilteredProjects);
        setVisibleProjects(newFilteredProjects.slice(0, 4)); // Réinitialiser les projets visibles après le filtre
        setCurrentIndex(0); // Réinitialiser l'index pour revenir au début
    };


    const handleFilterClick = (category) => {
        console.log("Category clicked:", category); // Ajoute un log pour vérifier quelle catégorie est sélectionnée
        if (category !== selectedFilter) {
            setSelectedFilter(category);  // Mettre à jour le filtre sélectionné
            updateVisibleProjects(category);  // Mettre à jour les projets visibles selon le filtre
        }
    };

    const handleWheel = (e) => {
        console.log("Wheel event:", e.deltaY); // Log de l'événement de scroll
        // Désactiver le scroll si moins de 4 projets sont visibles
        if (filteredProjects.length <= 4) {
            console.log("Not enough projects for scrolling."); // Log si pas assez de projets
            return; // Ne rien faire si moins de 4 projets sont filtrés
        }
        // Défilement vers le bas
        if (e.deltaY > 0 && currentIndex + 4 < filteredProjects.length) {
            const nextIndex = currentIndex + 4;
            setVisibleProjects(filteredProjects.slice(nextIndex, nextIndex + 4));
            setCurrentIndex(nextIndex);
            console.log("Scrolled down to index:", nextIndex); // Log si on descend dans les projets
        }
        // Défilement vers le haut
        else if (e.deltaY < 0 && currentIndex - 4 >= 0) {
            const prevIndex = currentIndex - 4;
            setVisibleProjects(filteredProjects.slice(prevIndex, prevIndex + 4));
            setCurrentIndex(prevIndex);
            console.log("Scrolled up to index:", prevIndex); // Log si on monte dans les projets
        }
    };

    useEffect(() => {
        setCurrentIndex(0); // Réinitialiser l'index chaque fois qu'un nouveau filtre est appliqué
        console.log("Filter applied. Current index reset."); // Log après le réinitialisation de l'index
    }, [selectedFilter]);

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
                    <div className='button-white-project' onClick={() => handleFilterClick('Application Web')}>
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
                        {visibleProjects.map((project) => (
                            <div key={project.id} className="project-item">
                                <img src={project.image} alt={project.title} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
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

export default BodyProject;