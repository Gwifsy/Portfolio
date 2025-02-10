import Background from '@/assets/bg-pages/BG-ABOUT.webp';
import BodyAbout from '@/Components/ComponentAbout/BodyAbout';
import Nav from '../Components/Nav';


const About = () => {
    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-about" />
            <Nav />
            <BodyAbout />
        </div>
    );
};

export default About;
