import styles from "./Layout.module.scss";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
