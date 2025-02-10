import BodyProject from "@/Components/ComponentProject/BodyProject";
import Nav from "@/Components/Nav";
import Background from '@/assets/bg-pages/BG-PROJECT.webp'

const Project = () => {
    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-home" />
            <Nav />
            <BodyProject />
        </div>
    );
}

export default Project