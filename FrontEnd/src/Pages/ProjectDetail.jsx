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
                title={project.title}
                cover={project.image}
                steps={project.steps}
                validations={project.validations}
                textCover={project.textCover}  // <-- Vérifie bien que ce prop est passé !
            />
        </div>
    );
};

export default ProjectDetail;
