import { useEffect } from "react";
import styles from "./Home.module.scss";
import About from "../../components/About";
import Card from "../../components/Card";

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

    return (
        <>
            <About />
            <section className={styles.home}>
                <div>
                    <h2 className={styles.home__title}>Répondre aux besoins</h2>
                    <p className={styles.home__introduction}>
                        En tant que Développeur Web, je transforme vos idées en
                        solutions techniques afin de répondre à vos besoins et à
                        ceux de vos utilisateurs.
                    </p>
                </div>
                <Card
                    title="Formation"
                    description="Développeur Web OpenClassrooms (Niveau 5)"
                />
            </section>
        </>
    );
};

export default Home;
