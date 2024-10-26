import { useState } from "react";
import styles from "./About.module.scss";
import Links from "../Links";

const About = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <article className={styles.about}>
            <div
                className={`${styles.about__inner} ${
                    isFlipped && styles["about__inner--flipped"]
                }`}
            >
                <div className={styles.about__front}>
                    <button
                        className={styles.about__button}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        À propos &rarr;
                    </button>
                    <p className={styles.about__photo}>Photo</p>
                    <h2 className={styles.about__title}>
                        Je suis David,
                        <br />
                        Développeur Web
                    </h2>
                    <Links />
                </div>
                <div className={styles.about__back}>
                    <button
                        className={styles.about__button}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        &larr;
                    </button>
                    <h2 className={styles.about__title}>À propos</h2>
                    <p className={styles.about__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi sed luctus lacus. Etiam porta consequat nulla, vel
                        aliquet quam pulvinar sed. Proin justo massa, ultrices
                        in augue quis, viverra varius purus. Etiam non commodo
                        dolor. Aliquam hendrerit porttitor est vitae gravida.
                        Vestibulum urna libero, placerat a tellus eget, maximus
                        commodo quam. Morbi non justo odio. Suspendisse egestas
                        tincidunt libero, vitae maximus mauris vestibulum vitae.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default About;
