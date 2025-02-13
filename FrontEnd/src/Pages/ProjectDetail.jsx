import Nav from "../Components/Nav";
import Background from '../assets/bg-pages/BG-PROJECT-DETAIL.webp';
import { useParams } from "react-router-dom";
import ContainerDetailProject from "../Components/ComponentProject/ContainerDetailProject";
import projects from "@/Components/ComponentProject/DataProject.json"; // Import du JSON

const ProjectDetail = () => {
    let { id } = useParams();

    // Trouve le projet correspondant
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return <h2>Projet non trouvé</h2>;

    return (
        <div className='bg-linear-gradient'>
            <img className='bg-home' src={Background} alt="bg-home" />
            <Nav />
            <ContainerDetailProject
                steps={project.steps}  // Les étapes 
                validations={project.validations} // Les validations
                cover={project.image} // L'image de couverture
            />
        </div>
    );
};

export default ProjectDetail;
