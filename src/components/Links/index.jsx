import styles from "./Links.module.scss";

const Links = ({
    links = [
        {
            title: "David Horès",
            url: "https://www.linkedin.com/in/dhores/",
            logo: "Logo"
        },
        {
            title: "Dave25440",
            url: "https://github.com/Dave25440",
            logo: "Logo"
        },
        { title: "dhores@ik.me", url: "mailto:dhores@ik.me", logo: "Logo" }
    ]
}) => {
    return (
        <ul className={styles.links}>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.url} className={styles.links__link}>
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Links;
