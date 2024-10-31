import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__text}>
                © 2024 David Horès. Tous droits réservés
            </p>
        </footer>
    );
};

export default Footer;
