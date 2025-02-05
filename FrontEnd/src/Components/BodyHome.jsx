import { Link } from "react-router-dom";
import { ReactComponent as Linkedin } from '../assets/icon-social/icon-linkedin.svg';
import { ReactComponent as Github } from '../assets/icon-social/icon-github.svg';
import { ReactComponent as Twitter } from '../assets/icon-social/icon-twitter.svg';
import { ReactComponent as TextH1 } from '../assets/text-h1-home.svg';
import { ReactComponent as TextH2 } from '../assets/text-H2-home.svg';
import { ReactComponent as ProjectTitle } from '../assets/icon-button/project.svg';
import { ReactComponent as ContactTitle } from '../assets/icon-button/contact.svg';
import { ReactComponent as CvTitle } from '../assets/icon-button/cv.svg';
import { ReactComponent as Project } from '../assets/icon-button/icon-project.svg';
import { ReactComponent as Contact } from '../assets/icon-button/icon-contact.svg';
import { ReactComponent as Cv } from "../assets/icon-button/icon-cv.svg";
const BodyHome = () => {
    return (
        <section className='container-title-button-social-home'>
            <div className="container-social">
                <a className="icon-social" href="/"><Linkedin /></a>
                <a className="icon-social" href="/"><Twitter className='icon-twitter' /></a>
                <a className="icon-social" href="/"><Github /></a>
            </div>
            <div className="container-title-button-home">
                <TextH1 className="text-h1-home" />
                <TextH2 className="text-h2-home" />
                <div className="container-button-home">
                    <Link to="/project" className='button-link-home' alt="project"><ProjectTitle className="button-project-title-margin" /><Project /></Link>
                    <Link to="/contact" className='button-link-home' alt="contact"><ContactTitle className="button-title-margin" /><Contact /></Link>
                    <a className='button-link-home' href="/" target="_blank" rel="noopener noreferrer" alt="cv"><CvTitle className="button-title-margin" /><Cv /></a>
                </div>
            </div>
        </section>
    );
}

export default BodyHome