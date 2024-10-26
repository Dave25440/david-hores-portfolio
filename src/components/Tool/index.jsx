import styles from "./Tool.module.scss";

const Tool = ({ title, logo }) => {
    return (
        <li className={styles.tool}>
            <p className={styles.tool__logo}>{logo}</p>
            {title}
        </li>
    );
};

export default Tool;
