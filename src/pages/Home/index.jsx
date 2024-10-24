import { useEffect } from "react";
import styles from "./Home.module.scss";
import About from "../../components/About";
import Project from "../../components/Project";
import Education from "../../components/Education";

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

    return (
        <>
            <About />
            <section className={styles.home}>
                <div className={styles.home__top}>
                    <div className={styles.home__introduction}>
                        <h2 className={styles.home__title}>
                            Répondre aux besoins
                        </h2>
                        <p className={styles.home__text}>
                            En tant que Développeur Web, je transforme vos idées
                            en solutions techniques afin de répondre à vos
                            besoins et à ceux de vos utilisateurs.
                        </p>
                    </div>
                    <Project
                        id="p5-kasa"
                        title="Kasa"
                        description="Location d'appartements entre particuliers"
                    />
                </div>
                <div className={styles.home__bottom}>
                    <Education />
                </div>
            </section>
        </>
    );
};

export default Home;
