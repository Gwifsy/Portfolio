import { Link } from 'react-router-dom';
import { ReactComponent as ProjectTitle } from '@/assets/icon-button/project.svg';
import { ReactComponent as ContactTitle } from '@/assets/icon-button/contact.svg';
import { ReactComponent as CvTitle } from '@/assets/icon-button/cv.svg';
import { ReactComponent as Project } from '@/assets/icon-button/icon-project.svg';
import { ReactComponent as Contact } from '@/assets/icon-button/icon-contact.svg';
import { ReactComponent as Cv } from "@/assets/icon-button/icon-cv.svg";
import PropTypes from 'prop-types';
const ButtonPath = ({ className = "" }) => {
    return (
        <div className={`container-button-home ${className}`}>
            <Link to="/project" className='button-link-home' >
                <ProjectTitle className="button-project-title-margin" />
                <Project />
            </Link>
            <Link to="/contact" className='button-link-home'>
                <ContactTitle className="button-title-margin" />
                <Contact />
            </Link>
            <a className='button-link-home' href="/" target="_blank" rel="noopener noreferrer" alt="cv">
                <CvTitle className="button-title-margin" />
                <Cv />
            </a>
        </div>
    );
};
ButtonPath.propTypes = {
    className: PropTypes.string,
};

export default ButtonPath;

