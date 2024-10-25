import { useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "../Header";
import About from "../About";
import Footer from "../Footer";

const Layout = ({ children }) => {
    const location = useLocation();
    const paths = [
        "/david-hores-portfolio",
        "/david-hores-portfolio/realisations",
        "/david-hores-portfolio/competences",
        "/david-hores-portfolio/contact",
        "/david-hores-portfolio/formation"
    ];

    const currentPath = location.pathname.replace(/\/$/, "");
    const isMatch = paths.includes(currentPath);

    return (
        <>
            <Header />
            <main className={isMatch && styles.main}>
                {isMatch && <About />}
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
