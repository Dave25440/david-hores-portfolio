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
    ]
}) => {
    return (
        <ul className={styles.links}>
            {links.map((link, index) => (
                <li key={index}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.url}
                        className={styles.links__link}
                    >
                        <FontAwesomeIcon
                            icon={icon[link.icon]}
                            size="xl"
                            fixedWidth
                            className={styles.links__icon}
                        />
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Links;
