import styles from "./Links.module.scss";

const Links = () => {
    return (
        <ul className={styles.links}>
            <li>
                <a
                    href="https://www.linkedin.com/in/dhores/"
                    className={styles.links__link}
                >
                    linkedin.com/in/dhores
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/Dave25440"
                    className={styles.links__link}
                >
                    github.com/Dave25440
                </a>
            </li>
            <li>
                <a href="mailto:dhores@ik.me" className={styles.links__link}>
                    dhores@ik.me
                </a>
            </li>
        </ul>
    );
};

export default Links;
