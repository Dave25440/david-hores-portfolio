import { useEffect } from "react";
import styles from "./Skills.module.scss";
import tools from "../../data/tools.json";
import Skill from "../../components/Skill";

const Skills = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Compétences";
    }, []);

    const sortedTools = tools.sort(
        (a, b) => a.category.order - b.category.order || a.order - b.order
    );
    const categories = Array.from(
        new Set(sortedTools.map((tool) => tool.category.title))
    );
    const categoryTools = (category) =>
        sortedTools
            .filter((tool) => tool.category.title === category)
            .slice(0, 4);

    return (
        <section className={styles.skills}>
            <div className={styles.skills__left}>
                {categories.slice(0, 2).map((category, index) => (
                    <Skill
                        key={index}
                        title={category}
                        tools={categoryTools(category)}
                    />
                ))}
            </div>
            {categories.slice(2, 3).map((category, index) => (
                <Skill
                    key={index}
                    title={category}
                    tools={categoryTools(category)}
                    listClass="skill__list--column"
                />
            ))}
        </section>
    );
};

export default Skills;
