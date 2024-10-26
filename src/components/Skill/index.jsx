import styles from "./Skill.module.scss";
import Tool from "../Tool";

const Skill = ({ title, tools, listClass }) => {
    return (
        <article className={styles.skill}>
            <h3 className={styles.skill__title}>{title}</h3>
            <ul
                className={`${styles.skill__list} ${
                    listClass && styles[listClass]
                }`}
            >
                {tools.map((tool) => (
                    <Tool key={tool.id} title={tool.title} logo={tool.logo} />
                ))}
            </ul>
        </article>
    );
};

export default Skill;
