import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>
                <Link
                    to="/david-hores-portfolio"
                    className={styles.header__title}
                >
                    David Horès
                </Link>
            </h1>
            <nav>
                <ul className={styles.header__list}>
                    <li>
                        <Link
                            to="/david-hores-portfolio/realisations"
                            className={styles.header__link}
                        >
                            Réalisations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/david-hores-portfolio/competences"
                            className={styles.header__link}
                        >
                            Compétences
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/david-hores-portfolio/contact"
                            className={styles.header__link}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
