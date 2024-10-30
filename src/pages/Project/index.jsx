import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Project.module.scss";
import projects from "../../data/projects.json";
import About from "../../components/About";

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
            <div key={project.id} className={styles.project}>
                <About project {...project} />
                <section className={styles.project__section}>
                    <div className={styles.project__top}>
                        <div className={styles.project__introduction}>
                            <h2 className={styles.project__title}>
                                {project.logo}
                            </h2>
                            <p className={styles.project__text}>
                                {project.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.project__bottom}></div>
                </section>
            </div>
        )
    );
};

export default Project;
