import Background from '../assets/bg-pages/BG-HOME.webp'
import Nav from '../Components/Nav'
import BodyHome from '@/Components/ComponentHome/BodyHome'
import FooterHome from '@/Components/ComponentHome/FooterHome'

const Home = () => {
    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-home" />
            <Nav />
            <BodyHome />
            <FooterHome />
        </div>
    );
}

export default Home