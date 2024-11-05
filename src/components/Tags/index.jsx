import styles from "./Tags.module.scss";

const Tags = ({ tags, color }) => {
    return (
        <ul className={styles.tags}>
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
