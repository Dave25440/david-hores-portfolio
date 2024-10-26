import { useEffect } from "react";
import styles from "./Skills.module.scss";
import Skill from "../../components/Skill";

const Skills = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Compétences";
    }, []);

    const tools = [
        {
            id: "t1-chatgpt",
            title: "ChatGPT",
            category: {
                title: "Outils",
                order: 3
            },
            logo: "Logo",
            order: 12
        },
        {
            id: "t2-git-github",
            title: "Git et GitHub",
            category: {
                title: "Outils",
                order: 3
            },
            logo: "Logo",
            order: 9
        },
        {
            id: "t3-figma",
            title: "Figma",
            category: {
                title: "Outils",
                order: 3
            },
            logo: "Logo",
            order: 11
        },
        {
            id: "t4-html-css",
            title: "HTML et CSS",
            category: {
                title: "Front-end",
                order: 1
            },
            logo: "Logo",
            order: 4
        },
        {
            id: "t5-javascript",
            title: "JavaScript",
            category: {
                title: "Front-end",
                order: 1
            },
            logo: "Logo",
            order: 3
        },
        {
            id: "t6-nodejs",
            title: "Node.js",
            category: {
                title: "Back-end",
                order: 2,
                mern: true
            },
            logo: "Logo",
            order: 5
        },
        {
            id: "t7-nosql",
            title: "NoSQL",
            category: {
                title: "Back-end",
                order: 2
            },
            logo: "Logo",
            order: 7
        },
        {
            id: "t8-react",
            title: "React",
            category: {
                title: "Front-end",
                order: 1
            },
            logo: "Logo",
            order: 1
        },
        {
            id: "t9-sass",
            title: "Sass",
            category: {
                title: "Front-end",
                order: 1
            },
            logo: "Logo",
            order: 2
        },
        {
            id: "t10-express",
            title: "Express",
            category: {
                title: "Back-end",
                order: 2,
                mern: true
            },
            logo: "Logo",
            order: 6
        },
        {
            id: "t11-mongodb",
            title: "MongoDB",
            category: {
                title: "Back-end",
                order: 2,
                mern: true
            },
            logo: "Logo",
            order: 8
        },
        {
            id: "t12-scrum",
            title: "Scrum",
            category: {
                title: "Outils",
                order: 3
            },
            logo: "Logo",
            order: 10
        }
    ];

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
