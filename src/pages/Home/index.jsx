import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Project from "../../components/Project";
import Degree from "../../components/Degree";
import Skill from "../../components/Skill";

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

    const tools = [
        { name: "MongoDB", logo: "Logo" },
        { name: "Express", logo: "Logo" },
        { name: "React", logo: "Logo" },
        { name: "Node.js", logo: "Logo" }
    ];

    return (
        <section className={styles.home}>
            <div className={styles.home__top}>
                <div className={styles.home__introduction}>
                    <h2 className={styles.home__title}>Répondre aux besoins</h2>
                    <p className={styles.home__text}>
                        En tant que Développeur Web, je transforme vos idées en
                        solutions techniques afin de répondre à vos besoins et à
                        ceux de vos utilisateurs.
                    </p>
                </div>
                <Project
                    id="p5-kasa"
                    title="Kasa"
                    subtitle="Location d'appartements entre particuliers"
                />
            </div>
            <div className={styles.home__bottom}>
                <Degree />
                <Link
                    to="/david-hores-portfolio/competences"
                    className={styles.home__skill}
                >
                    <Skill title="MERN Stack" tools={tools} />
                </Link>
            </div>
        </section>
    );
};

export default Home;
