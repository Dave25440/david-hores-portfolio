import { useEffect } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Contact";
    }, []);

    return (
        <section className={styles.contact}>
            <h2 className={styles.contact__title}>Contact</h2>
        </section>
    );
};

export default Contact;
