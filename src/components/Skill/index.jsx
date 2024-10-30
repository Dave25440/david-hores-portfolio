import styles from "./Skill.module.scss";
import Tool from "../Tool";

const Skill = ({ title, tools, column, skills }) => {
    return (
        <article className={styles.skill}>
            <h3 className={styles.skill__title}>{title}</h3>
            {tools ? (
                <ul
                    className={`${styles.skill__tools} ${
                        column && styles["skill__tools--column"]
                    }`}
                >
                    {tools.map((tool) => (
                        <Tool key={tool.id} {...tool} />
                    ))}
                </ul>
            ) : (
                <ul className={styles.skill__skills}>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            )}
        </article>
    );
};

export default Skill;
