import Background from '../assets/bg-pages/BG-HOME.webp'
import Nav from '../Components/Nav'
import CenterContainerHome from '@/Components/ComponentHome/CenterContainer'
import FooterHome from '@/Components/ComponentHome/FooterHome'

const Home = () => {
    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-home" />
            <Nav />
            <CenterContainerHome />
            <FooterHome />
        </div>
    );
}

export default Home