import { useEffect } from "react";
import styles from "./Error.module.scss";

const Error = () => {
    useEffect(() => {
        document.title =
            "David Horès, Développeur Web - Oups! La page que vous demandez n'existe pas.";
    }, []);

    return (
        <section className={styles.error}>
            <h2 className={styles.error__title}>404</h2>
            <p className={styles.error__text}>
                Oups! La page que vous demandez n'existe pas.
            </p>
        </section>
    );
};

export default Error;
