import CenterContainerProject from "@/Components/ComponentProject/CenterContainer";
import Nav from "@/Components/Nav";
import Background from '@/assets/bg-pages/BG-CONTACT.webp'

const Project = () => {
    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-home" />
            <Nav />
            <CenterContainerProject />
        </div>
    );
}

export default Project