import styles from "./Skill.module.scss";
import Tool from "../Tool";

const Skill = ({
    link,
    color,
    mern,
    title,
    tools,
    column,
    background,
    skills
}) => {
    return (
        <article
            className={`${styles.skill} ${link && styles["skill--link"]}`}
            style={{ backgroundColor: color }}
        >
            <h3
                className={`${styles.skill__title} ${
                    mern && styles["skill__title--mern"]
                }`}
            >
                {title}
            </h3>
            {tools ? (
                <ul
                    className={`${styles.skill__tools} ${
                        column && styles["skill__tools--column"]
                    }`}
                    style={{ backgroundColor: background }}
                >
                    {tools.map((tool) => (
                        <Tool
                            key={tool.id}
                            {...tool}
                            column={column}
                            color={mern ? tool.color : color}
                        />
                    ))}
                </ul>
            ) : (
                <ul
                    className={styles.skill__skills}
                    style={{ backgroundColor: background }}
                >
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            )}
        </article>
    );
};

export default Skill;
