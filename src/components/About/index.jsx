import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.scss";
import Tags from "../Tags";
import Links from "../Links";
import photo from "../../assets/david_hores.webp";

const About = ({
    className,
    color,
    project,
    title = (
        <>
            Je suis David,
            <br />
            Développeur Web
        </>
    ),
    subtitle,
    tags,
    links,
    back,
    details = [
        "Titulaire d’un DUT Services et Réseaux de Communication, je me passionne pour les nouvelles technologies depuis mon adolescence. Lycéen, je crée déjà mes premiers sites web. Diplômé en 2010, je saisis l'opportunité de rentrer dans la vie active en travaillant comme Journaliste Reporter d'Images pour la télévision locale TV Cristal.",
        "Ce métier n'étant pas une vocation, j'entame les démarches d'une reconversion professionnelle en 2023 afin de renouer avec ma passion initiale : le développement web. Une reconversion concrétisée l'année suivante avec OpenClassrooms."
    ]
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => setIsFlipped((prev) => !prev);

    return (
        <article className={`${styles.about} ${className}`}>
            <div
                className={`${styles.about__inner} ${
                    isFlipped && styles["about__inner--flipped"]
                }`}
            >
                <div
                    className={styles.about__front}
                    style={{ backgroundColor: color }}
                >
                    {project ? (
                        <div className={styles["about__top--project"]}>
                            <button
                                className={styles.about__button}
                                style={{ color: color }}
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
                            <Tags about tags={tags} color={color} />
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
                                    width="200"
                                    height="200"
                                    loading="lazy"
                                    className={styles.about__photo}
                                />
                            </div>
                            <h2 className={styles.about__title}>{title}</h2>
                        </>
                    )}
                    <Links links={links} color={color} />
                </div>
                <div
                    className={styles.about__back}
                    style={{ background: back }}
                >
                    <button
                        className={`${styles.about__button} ${styles["about__button--back"]}`}
                        style={{ color: back }}
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
                            {project ? "Enjeux" : "Retour aux sources"}
                        </h2>
                        <ul className={styles.about__list}>
                            {details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </article>
    );
};

export default About;
