import { useEffect } from "react";
import styles from "./Projects.module.scss";
import projects from "../../data/projects.json";
import Card from "../../components/Card";

const Projects = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Réalisations";
    }, []);

    return (
        <section className={styles.projects}>
            {projects.slice(0, 6).map((project) => (
                <Card key={project.id} {...project} />
            ))}
        </section>
    );
};

export default Projects;
