import { Link } from "react-router-dom";
import styles from "./Project.module.scss";

const Project = ({ id, title, description }) => {
    return (
        <Link
            to={`/david-hores-portfolio/realisations/${id}`}
            className={styles.project}
        >
            <article>
                <h3 className={styles.project__title}>{title}</h3>
                <p className={styles.project__description}>{description}</p>
            </article>
        </Link>
    );
};

export default Project;
