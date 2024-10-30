import { useState } from "react";
import styles from "./About.module.scss";
import Links from "../Links";

const About = ({
    project,
    title = "Je suis David, Développeur Web",
    subtitle,
    links,
    summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed luctus lacus. Etiam porta consequat nulla, vel aliquet quam pulvinar sed. Proin justo massa, ultrices in augue quis, viverra varius purus. Etiam non commodo dolor. Aliquam hendrerit porttitor est vitae gravida. Vestibulum urna libero, placerat a tellus eget, maximus commodo quam. Morbi non justo odio. Suspendisse egestas tincidunt libero, vitae maximus mauris vestibulum vitae."
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => setIsFlipped((prev) => !prev);

    return (
        <article className={styles.about}>
            <div
                className={`${styles.about__inner} ${
                    isFlipped && styles["about__inner--flipped"]
                }`}
            >
                <div className={styles.about__front}>
                    <button className={styles.about__button} onClick={flipCard}>
                        À propos &rarr;
                    </button>
                    {!project && <p className={styles.about__photo}>Photo</p>}
                    <h2 className={styles.about__title}>{title}</h2>
                    {subtitle && (
                        <h3 className={styles.about__subtitle}>{subtitle}</h3>
                    )}
                    <Links links={links} />
                </div>
                <div className={styles.about__back}>
                    <button className={styles.about__button} onClick={flipCard}>
                        &larr;
                    </button>
                    <h2 className={styles.about__title}>
                        {project ? "Enjeux" : "À propos"}
                    </h2>
                    <p className={styles.about__text}>{summary}</p>
                </div>
            </div>
        </article>
    );
};

export default About;
