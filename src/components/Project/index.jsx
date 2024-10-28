import { Link } from "react-router-dom";
import styles from "./Project.module.scss";

const Project = ({ id, title, subtitle }) => {
    return (
        <Link
            to={
                id
                    ? `/david-hores-portfolio/realisations/${id}`
                    : `/david-hores-portfolio/formation`
            }
            className={styles.project}
        >
            <article>
                <h3 className={styles.project__title}>{title}</h3>
                <p className={styles.project__subtitle}>{subtitle}</p>
            </article>
        </Link>
    );
};

export default Project;
