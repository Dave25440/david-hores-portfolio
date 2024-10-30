import { useEffect } from "react";
import styles from "./Contact.module.scss";
import Form from "../../components/Form";

const Contact = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Prendre contact";
    }, []);

    return (
        <section className={styles.contact}>
            <h2 className={styles.contact__title}>Prendre contact</h2>
            <Form />
        </section>
    );
};

export default Contact;
