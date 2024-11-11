import { useEffect } from "react";
import styles from "./Career.module.scss";

const Career = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Parcours";
    }, []);

    return (
        <section className={styles.career}>
            <h2 className={styles.career__title}>Parcours</h2>
            <p className={styles.career__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed luctus lacus. Etiam porta consequat nulla, vel aliquet quam
                pulvinar sed. Proin justo massa, ultrices in augue quis, viverra
                varius purus. Etiam non commodo dolor. Aliquam hendrerit
                porttitor est vitae gravida. Vestibulum urna libero, placerat a
                tellus eget, maximus commodo quam. Morbi non justo odio.
                Suspendisse egestas tincidunt libero, vitae maximus mauris
                vestibulum vitae.
            </p>
        </section>
    );
};

export default Career;
