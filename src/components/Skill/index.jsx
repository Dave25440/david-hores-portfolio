import styles from "./Skill.module.scss";
import Tool from "../Tool";

const Skill = ({ title, tools }) => {
    return (
        <article className={styles.skill}>
            <h3 className={styles.skill__title}>{title}</h3>
            <ul className={styles.skill__list}>
                {tools.map((tool, index) => (
                    <Tool key={index} name={tool.name} logo={tool.logo} />
                ))}
            </ul>
        </article>
    );
};

export default Skill;
