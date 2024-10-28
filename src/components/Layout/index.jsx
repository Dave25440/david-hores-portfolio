import { useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "../Header";
import About from "../About";
import Footer from "../Footer";

const paths = [
    "/david-hores-portfolio",
    "/david-hores-portfolio/realisations",
    "/david-hores-portfolio/competences",
    "/david-hores-portfolio/contact",
    "/david-hores-portfolio/formation"
];

const pathMatch = (pathname) => paths.includes(pathname.replace(/\/$/, ""));

const Layout = ({ children }) => {
    const location = useLocation();
    const isMatch = pathMatch(location.pathname);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${isMatch && styles.main__grid}`}>
                {isMatch && <About />}
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
