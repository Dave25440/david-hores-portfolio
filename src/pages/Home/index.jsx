import { useEffect } from "react";
import styles from "./Home.module.scss";
import About from "../../components/About";

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

    return (
        <>
            <About className={styles.about} />
            <section className={styles.home}>
                <h2 className={styles.home__title}>Répondre aux besoins</h2>
                <p className={styles.home__introduction}>
                    En tant que Développeur Web, je transforme vos idées en
                    solutions techniques afin de répondre à vos besoins et à
                    ceux de vos utilisateurs.
                </p>
            </section>
        </>
    );
};

export default Home;
