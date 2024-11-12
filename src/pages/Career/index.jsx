import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./Career.module.scss";

const Career = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Parcours";
    }, []);

    return (
        <section className={styles.career}>
            <h2 className={styles.career__title}>Parcours</h2>
            <ul className={styles.career__list}>
                <li className={styles["career__list--title"]}>
                    <h3 className={styles.career__subtitle}>Expérience</h3>
                </li>
                <li>2018-2024</li>
                <li>
                    <strong>Journaliste Reporter d’Images</strong> - Mosaïk
                    Cristal, Bitche et Sarreguemines
                </li>
                <li>2012-2018</li>
                <li>
                    <strong>
                        Responsable du pôle magazine et divertissement
                    </strong>{" "}
                    - TV Cristal, Bitche
                </li>
                <li>2010-2012</li>
                <li>
                    <strong>Journaliste Reporter d’Images</strong> - TV Cristal,
                    Bitche
                </li>
            </ul>
            <ul className={styles.career__list}>
                <li className={styles["career__list--title"]}>
                    <h3
                        className={`${styles.career__subtitle} ${styles["career__subtitle--secondary"]}`}
                    >
                        Formation
                    </h3>
                </li>
                <li>2024</li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://openclassrooms.com/fr/paths/899-developpeur-web"
                        className={styles.career__link}
                    >
                        <strong>Développeur Web</strong>{" "}
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="xs"
                            fixedWidth
                        />
                    </a>{" "}
                    - OpenClassrooms, Paris (distanciel)
                    <br />
                    Certification professionnelle :{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.francecompetences.fr/recherche/rncp/38145/"
                        className={styles.career__link}
                    >
                        Développeur informatique{" "}
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="xs"
                            fixedWidth
                        />
                    </a>
                </li>
                <li>2018</li>
                <li>
                    <strong>
                        Comité d'Hygiène, de Sécurité et des Conditions de
                        Travail
                    </strong>{" "}
                    - Communauté de Communes du Pays de Bitche
                </li>
                <li>2013</li>
                <li>
                    <strong>Filmer avec un reflex numérique</strong> - Centre de
                    Formation et de Perfectionnement des Journalistes, Paris
                </li>
                <li>2008-2010</li>
                <li>
                    <strong>DUT Services et Réseaux de Communication</strong> -
                    IUT de Haguenau
                </li>
            </ul>
        </section>
    );
};

export default Career;
