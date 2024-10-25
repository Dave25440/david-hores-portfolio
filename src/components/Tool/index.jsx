import styles from "./Tool.module.scss";

const Tool = ({ name, logo }) => {
    return (
        <li className={styles.tool}>
            <p className={styles.tool__logo}>{logo}</p>
            {name}
        </li>
    );
};

export default Tool;
