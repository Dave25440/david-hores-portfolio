import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faGlobe,
    faChalkboardUser,
    faFilePdf,
    faTable
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Links.module.scss";

const icon = {
    faLinkedin,
    faGithub,
    faEnvelope,
    faGlobe,
    faChalkboardUser,
    faFilePdf,
    faTable
};

const Links = ({
    links = [
        {
            title: "David Horès",
            url: "https://www.linkedin.com/in/dhores/",
            icon: "faLinkedin"
        },
        {
            title: "Dave25440",
            url: "https://github.com/Dave25440",
            icon: "faGithub"
        },
        {
            title: "hores.d@gmail.com",
            url: "mailto:hores.d@gmail.com",
            icon: "faEnvelope"
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
