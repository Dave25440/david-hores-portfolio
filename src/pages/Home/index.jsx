import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import projects from "../../data/projects.json";
import tools from "../../data/tools.json";
import Card from "../../components/Card";
import Skill from "../../components/Skill";

const mernTools = tools
    .filter((tool) => tool.mern)
    .sort((a, b) => a.mern - b.mern);

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

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
                <Card
                    {...projects[0]}
                    background="#8c686f"
                    title="Projet réalisé"
                    subtitle={
                        <>
                            {projects[0].title}
                            <br />
                            {projects[0].subtitle}
                        </>
                    }
                    tags={["Front-end", "React"]}
                />
            </div>
            <div className={styles.home__bottom}>
                <Card
                    background="#6f8c68"
                    title="Formation"
                    subtitle="Développeur Web OpenClassrooms"
                    tags={["Titre RNCP", "Niveau 5"]}
                />
                <Link
                    to="/david-hores-portfolio/competences"
                    className={styles.home__skill}
                >
                    <Skill
                        link
                        color="#ddd"
                        mern
                        title={
                            <>
                                <i style={{ color: mernTools[0].color }}>M</i>
                                <i style={{ color: mernTools[1].color }}>E</i>
                                <i style={{ color: mernTools[2].color }}>R</i>
                                <i style={{ color: mernTools[3].color }}>
                                    N
                                </i>{" "}
                                Stack
                            </>
                        }
                        tools={mernTools}
                        background="#fbfbfb"
                    />
                </Link>
            </div>
        </section>
    );
};

export default Home;
