import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import projects from "../../data/projects.json";
import tools from "../../data/tools.json";
import Project from "../../components/Project";
import Skill from "../../components/Skill";

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

    const mernTools = tools
        .filter((tool) => tool.category.mern)
        .sort((a, b) => a.category.mern - b.category.mern);

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
                {projects.map(
                    (project) =>
                        project.order === 1 && (
                            <Project key={project.id} {...project} />
                        )
                )}
            </div>
            <div className={styles.home__bottom}>
                <Project
                    title="Formation"
                    subtitle={
                        <>
                            Développeur Web OpenClassrooms
                            <br />
                            Niveau 5
                        </>
                    }
                />
                <Link
                    to="/david-hores-portfolio/competences"
                    className={styles.home__skill}
                >
                    <Skill title="MERN Stack" tools={mernTools} />
                </Link>
            </div>
        </section>
    );
};

export default Home;
