import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ id, title, description }) => {
    return (
        <Link
            to={`/david-hores-portfolio/realisations/${id}`}
            className={styles.card}
        >
            <article>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description}</p>
            </article>
        </Link>
    );
};

export default Card;
