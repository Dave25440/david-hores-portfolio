import { Link } from "react-router-dom";
import styles from "./Education.module.scss";

const Education = () => {
    return (
        <Link
            to="/david-hores-portfolio/formation"
            className={styles.education}
        >
            <article>
                <h3 className={styles.education__title}>Formation</h3>
                <p className={styles.education__description}>
                    Développeur Web OpenClassrooms
                    <br />
                    Niveau 5
                </p>
            </article>
        </Link>
    );
};

export default Education;
