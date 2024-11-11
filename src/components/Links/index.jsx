import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faGlobe,
    faChalkboardUser,
    faFilePdf,
    faTableList
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Links.module.scss";
import qwentaSpecs from "../../assets/openclassrooms_projet_qwenta_specifications_techniques.pdf";
import qwentaPresentation from "../../assets/openclassrooms_projet_qwenta_presentation.pdf";

const url = {
    qwentaSpecs,
    qwentaPresentation
};

const icon = {
    linkedin: faLinkedin,
    github: faGithub,
    mail: faEnvelope,
    ghPages: faGlobe,
    canva: faChalkboardUser,
    pdf: faFilePdf,
    notion: faTableList
};

const Links = ({
    links = [
        {
            title: "David Horès",
            url: "https://www.linkedin.com/in/dhores/",
            icon: "linkedin"
        },
        {
            title: "Dave25440",
            url: "https://github.com/Dave25440",
            icon: "github"
        },
        {
            title: "hores.d@gmail.com",
            url: "mailto:hores.d@gmail.com",
            icon: "mail"
        }
    ],
    color
}) => {
    return (
        <ul className={styles.links}>
            {links.map((link, index) => (
                <li key={index}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={url[link.url] || link.url}
                        className={styles.links__link}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = color)
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                        <FontAwesomeIcon
                            icon={icon[link.icon]}
                            size="xl"
                            fixedWidth
                            className={styles.links__icon}
                            style={{ color: color }}
                        />
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Links;
