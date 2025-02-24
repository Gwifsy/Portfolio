import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

const ScrollHandler = () => {
    const location = useLocation();

    // Vérifie si l'URL correspond à "/ProjectDetail/:id"
    const isProjectDetailPage = matchPath("/ProjectDetail/:id", location.pathname);

    useEffect(() => {
        if (isProjectDetailPage) {
            document.body.style.overflowY = "auto";  // Active le scroll vertical
            document.body.style.overflowX = "hidden"; // Désactive le scroll horizontal
        } else {
            document.body.style.overflow = "hidden"; // Désactive tout le scroll ailleurs
        }

        return () => {
            document.body.style.overflow = "auto"; // Réinitialise en quittant la page
        };
    }, [isProjectDetailPage]);

    return null;
};

export default ScrollHandler;
