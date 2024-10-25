import { Link } from "react-router-dom";
import styles from "./Degree.module.scss";

const Degree = () => {
    return (
        <Link to="/david-hores-portfolio/formation" className={styles.degree}>
            <article>
                <h3 className={styles.degree__title}>Formation</h3>
                <p className={styles.degree__description}>
                    Développeur Web OpenClassrooms
                    <br />
                    Niveau 5
                </p>
            </article>
        </Link>
    );
};

export default Degree;
