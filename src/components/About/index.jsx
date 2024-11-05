import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.scss";
import Tags from "../Tags";
import Links from "../Links";
import photo from "../../assets/david_hores.webp";

const About = ({
    background,
    project,
    title = "Je suis David, Développeur Web",
    subtitle,
    tags,
    links,
    color,
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
                <div
                    className={styles.about__front}
                    style={{ backgroundColor: background }}
                >
                    {project ? (
                        <div className={styles["about__top--project"]}>
                            <button
                                className={styles.about__button}
                                style={{ color: background }}
                                onClick={flipCard}
                            >
                                À propos
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    size="xs"
                                    className={styles.about__icon}
                                />
                            </button>
                            <div>
                                <h2 className={styles["about__title--project"]}>
                                    {title}
                                </h2>
                                <h3 className={styles.about__subtitle}>
                                    {subtitle}
                                </h3>
                            </div>
                            <Tags tags={tags} background={background} />
                        </div>
                    ) : (
                        <>
                            <div className={styles.about__top}>
                                <button
                                    className={styles.about__button}
                                    onClick={flipCard}
                                >
                                    À propos
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        size="xs"
                                        className={styles.about__icon}
                                    />
                                </button>
                                <img
                                    src={photo}
                                    alt="David Horès"
                                    className={styles.about__photo}
                                />
                            </div>
                            <h2 className={styles.about__title}>{title}</h2>
                        </>
                    )}
                    <Links links={links} />
                </div>
                <div
                    className={styles.about__back}
                    style={{ background: color }}
                >
                    <button
                        className={`${styles.about__button} ${styles["about__button--back"]}`}
                        style={{ color: color }}
                        onClick={flipCard}
                    >
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="xs"
                            rotation={180}
                        />
                    </button>
                    <section className={styles.about__section}>
                        <h2 className={styles.about__title}>
                            {project ? "Enjeux" : "À propos"}
                        </h2>
                        <p className={styles.about__text}>{summary}</p>
                    </section>
                </div>
            </div>
        </article>
    );
};

export default About;
