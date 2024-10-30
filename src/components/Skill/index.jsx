import styles from "./Skill.module.scss";
import Tool from "../Tool";

const Skill = ({ title, tools, column }) => {
    return (
        <article className={styles.skill}>
            <h3 className={styles.skill__title}>{title}</h3>
            <ul
                className={`${styles.skill__tools} ${
                    column && styles["skill__tools--column"]
                }`}
            >
                {tools.map((tool) => (
                    <Tool key={tool.id} {...tool} />
                ))}
            </ul>
        </article>
    );
};

export default Skill;
