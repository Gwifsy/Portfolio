import Background from '@/assets/bg-pages/BG-ABOUT.webp';
import CenterContainerAbout from '@/Components/ComponentAbout/CenterContainer';
import Nav from '../Components/Nav';


const About = () => {
    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-about" />
            <Nav />
            <CenterContainerAbout />
        </div>
    );
};

export default About;
