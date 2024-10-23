import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/david-hores-portfolio">David Horès</Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/david-hores-portfolio/realisations">
                            Réalisations
                        </Link>
                    </li>
                    <li>
                        <Link to="/david-hores-portfolio/competences">
                            Compétences
                        </Link>
                    </li>
                    <li>
                        <Link to="/david-hores-portfolio/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
