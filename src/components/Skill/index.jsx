import styles from "./Skill.module.scss";

const Skill = ({ title, tools }) => {
    return (
        <article className={styles.skill}>
            <h3 className={styles.skill__title}>{title}</h3>
            <ul className={styles.skill__list}>
                {tools.map((tool, index) => (
                    <li key={index} className={styles.skill__name}>
                        <p className={styles.skill__logo}>{tool.logo}</p>
                        {tool.name}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Skill;
