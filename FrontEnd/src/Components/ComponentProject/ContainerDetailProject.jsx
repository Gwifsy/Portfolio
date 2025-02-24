import { useState } from 'react';
import { ReactComponent as CircleCheck } from '@/assets/icon-project/circle-check.svg';
import { ReactComponent as ArrowDown } from '@/assets/icon-project/arrow-down.svg';
import IconSocial from '@/assets/icon-social/logo-github.webp';  // Importation correcte de l'image PNG

const icons = {
    "circle-check": CircleCheck,
    "arrow-down": ArrowDown,
    "icon-social": IconSocial  // Utilisation de l'image dans l'objet des icônes
};

const ContainerDetailProject = ({ title, cover, steps, validations, textCover }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleCollapse = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="container-detail-project">
            <div className="bg-detail-project">
                <img className='bg-cover' src={cover} alt={title} />
                <div className="overlay">
                    {textCover && (
                        <>
                            <h1 className="context-title">{textCover.find(item => item.title)?.title}</h1>
                            {textCover
                                .filter(item => item.p)
                                .map((item, index) => (
                                    <p key={index} className="context-container">{item.p}</p>
                                ))
                            }
                            {textCover.find(item => item.githubLink) && (
                                <div className="social-icon-container">
                                    <a href={textCover.find(item => item.githubLink)?.githubLink} target="_blank" rel="noopener noreferrer">
                                        {/* Affichage de l'image GitHub */}
                                        <img src={IconSocial} alt="GitHub" className="social-icon" id='tt' />
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className='container-pratical-acquired'>
                <div className="container-pratical-project">
                    <h1 className="title-pratical-project">Pratique</h1>
                    <div className="container-pratical">
                        {steps.map((step, index) => {
                            const ArrowIcon = icons["arrow-down"];
                            const isOpen = openIndexes.includes(index);

                            return (
                                <div
                                    className={`collapse-container ${isOpen ? 'open' : ''}`}
                                    key={index}
                                    onClick={() => toggleCollapse(index)}
                                >
                                    <div className='title-collapse-pratical'>
                                        <h3>{step.title}</h3>
                                        {ArrowIcon && <ArrowIcon className={isOpen ? 'rotate-180' : ''} />}
                                    </div>
                                    <div
                                        className="description-collapse"
                                        style={{
                                            maxHeight: isOpen ? '500px' : '0px',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.3s ease-in-out'
                                        }}
                                    >
                                        <div
                                            className='padding-description'
                                            style={{
                                                padding: isOpen ? '10px' : '0px',
                                                transition: 'padding 0.3s ease-in-out'
                                            }}
                                        >
                                            {step.description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="container-acquired">
                    <h1 className="title-Acquis-project">Acquis</h1>
                    {validations.map((val, index) => {
                        const IconComponent = icons[val.icon];

                        return (
                            <p key={index}>
                                {val.validate}
                                {IconComponent && <IconComponent />}
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContainerDetailProject;
