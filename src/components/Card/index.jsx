import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import Tags from "../Tags";

const Card = ({ id, background, title, subtitle, tags }) => {
    return (
        <Link
            to={
                id
                    ? `/david-hores-portfolio/realisations/${id}`
                    : `/david-hores-portfolio/formation`
            }
            className={styles.card}
            style={{ backgroundColor: background }}
        >
            <article>
                <h3
                    className={styles.card__title}
                    style={{ color: background }}
                >
                    {title}
                </h3>
                <p className={styles.card__subtitle}>{subtitle}</p>
            </article>
            <Tags tags={tags} background={background} />
        </Link>
    );
};

export default Card;
