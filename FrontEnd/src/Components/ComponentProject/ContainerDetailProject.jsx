import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CircleCheck } from '@/assets/icon-project/circle-check.svg';
import { ReactComponent as ArrowDown } from '@/assets/icon-project/arrow-down.svg';

const icons = {
    "circle-check": CircleCheck,
    "arrow-down": ArrowDown
};

const ContainerDetailProject = ({ title, cover, steps, validations }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleCollapse = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="container-detail-project">
            <div className="bg-detail-project">
                <img src={cover} alt={title} />
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
ContainerDetailProject.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired,
    validations: PropTypes.arrayOf(
        PropTypes.shape({
            validate: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })
    ).isRequired
};

export default ContainerDetailProject;
