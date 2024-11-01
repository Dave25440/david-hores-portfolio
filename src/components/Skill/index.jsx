import styles from "./Skill.module.scss";
import Tool from "../Tool";

const Skill = ({ link, color, title, tools, column, skills }) => {
    return (
        <article
            className={`${styles.skill} ${link && styles["skill--link"]}`}
            style={{ backgroundColor: color }}
        >
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
