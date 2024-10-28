import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ id, title, subtitle }) => {
    return (
        <Link
            to={
                id
                    ? `/david-hores-portfolio/realisations/${id}`
                    : `/david-hores-portfolio/formation`
            }
            className={styles.card}
        >
            <article>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__subtitle}>{subtitle}</p>
            </article>
        </Link>
    );
};

export default Card;
