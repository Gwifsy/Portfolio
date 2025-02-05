import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as ChevronTop } from "../assets/chevron-top.svg";
import { ReactComponent as ChevronBottom } from "../assets/chevron-bottom.svg";
import { ReactComponent as Line } from "../assets/line-footer.svg";

const servicesLeft = [
    {
        title: "Intégration web",
        description:
            "Développement et intégration d'une maquette graphique pour la convertir en un projet web conforme.",
    },
    {
        title: "Développement",
        description:
            "Programmation spécifique pour améliorer, poursuivre ou convertir un projet déjà existant.",
    },
    {
        title: "Web Design",
        description:
            "Création de maquettes UX/UI modernes et adaptées aux besoins des utilisateurs.",
    },
];

const servicesRight = [
    {
        title: "SEO & Performance",
        description:
            "Optimisation du référencement et rapidité d'affichage des sites web.",
    },
    {
        title: "API & Backend",
        description:
            "Création et intégration d'API RESTful pour connecter vos applications.",
    },
    {
        title: "Maintenance & Support",
        description:
            "Mise à jour, correction et support technique pour vos projets web.",
    },
];

const FooterHome = () => {
    const [indexLeft, setIndexLeft] = useState(0);
    const [indexRight, setIndexRight] = useState(0);

    const nextServiceLeft = () => {
        setIndexLeft((prev) => (prev + 1) % servicesLeft.length);
    };

    const prevServiceLeft = () => {
        setIndexLeft((prev) => (prev === 0 ? servicesLeft.length - 1 : prev - 1));
    };

    const nextServiceRight = () => {
        setIndexRight((prev) => (prev + 1) % servicesRight.length);
    };

    const prevServiceRight = () => {
        setIndexRight((prev) => (prev === 0 ? servicesRight.length - 1 : prev - 1));
    };

    return (
        <footer className="footer-home">
            <h2 className="title-services">Services</h2>
            <section className="container-services">

                {/* Première colonne */}
                <div className="container-title-p">
                    <div className="service-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={indexLeft}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="title-h3-service">{servicesLeft[indexLeft].title}</h3>
                                <span className="span-service">{servicesLeft[indexLeft].description}</span>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                    <div className="container-chevron">
                        <ChevronTop className="chevron-top" onClick={prevServiceLeft} />
                        <p className="counter">{indexLeft + 1} / {servicesLeft.length}</p>
                        <ChevronBottom className="chevron-bottom" onClick={nextServiceLeft} />
                    </div>
                </div>

                <div>
                    <Line className="line-footer" />
                </div>

                {/* Deuxième colonne */}
                <div className="container-title-p">
                    <div className="service-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={indexRight}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="title-h3-service">{servicesRight[indexRight].title}</h3>
                                <span className="span-service">{servicesRight[indexRight].description}</span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="container-chevron">
                        <ChevronTop className="chevron-top" onClick={prevServiceRight} />
                        <p className="counter">{indexRight + 1} / {servicesRight.length}</p>
                        <ChevronBottom className="chevron-bottom" onClick={nextServiceRight} />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default FooterHome;
