import styles from "./Tags.module.scss";

const Tags = ({ about, tags, color }) => {
    return (
        <ul className={`${styles.tags} ${about && styles["tags--about"]}`}>
            {tags.map((tag, index) => (
                <li
                    key={index}
                    className={styles.tags__tag}
                    style={{ color: color }}
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default Tags;
