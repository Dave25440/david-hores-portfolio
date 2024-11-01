import styles from "./Tags.module.scss";

const Tags = ({ tags, background }) => {
    return (
        <ul className={styles.tags}>
            {tags.map((tag, index) => (
                <li
                    key={index}
                    className={styles.tags__tag}
                    style={{ color: background }}
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default Tags;
