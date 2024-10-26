import { useEffect } from "react";
import styles from "./Projects.module.scss";
import projects from "../../data/projects.json";
import Project from "../../components/Project";

const Projects = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Réalisations";
    }, []);

    return (
        <section className={styles.projects}>
            {projects
                .sort((a, b) => a.order - b.order)
                .slice(0, 6)
                .map((project) => (
                    <Project key={project.id} {...project} />
                ))}
        </section>
    );
};

export default Projects;
