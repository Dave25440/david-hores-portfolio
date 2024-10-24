import styles from "./Card.module.scss";

const Card = ({ title, description }) => {
    return (
        <article className={styles.card}>
            <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.card__description}>{description}</p>
        </article>
    );
};

export default Card;
