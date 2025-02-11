import CenterContainerContact from '../Components/ComponentContact/CenterContainer';
import Background from '../assets/bg-pages/BG-CONTACT.webp'
import Nav from '../Components/Nav'

const Contact = () => {
    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-home" />
            <Nav />
            <CenterContainerContact />
        </div>
    );
}

export default Contact