import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Project.module.scss";
import projects from "../../data/projects.json";
import About from "../../components/About";
import Skill from "../../components/Skill";

const Project = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((project) => project.id === id);

    useEffect(() => {
        project
            ? (document.title = `David Horès, Développeur Web - ${project.title} : ${project.subtitle}`)
            : navigate("/david-hores-portfolio/erreur");
    }, [project, navigate]);

    return (
        project && (
            <section key={project.id} className={styles.project}>
                <About project {...project} />
                <div className={styles.project__left}>
                    <div className={styles.project__introduction}>
                        <h2 className={styles.project__title}>
                            {project.logo}
                        </h2>
                        <p className={styles.project__text}>
                            {project.description}
                        </p>
                    </div>
                    <Skill title="Compétences" skills={project.skills} />
                </div>
            </section>
        )
    );
};

export default Project;
