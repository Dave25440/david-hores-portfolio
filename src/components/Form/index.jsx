import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.scss";

const Form = () => {
    const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_xnd8k86", "template_a9ces9j", formRef.current, {
                publicKey: "KRsndrC7I83Zt-VF1"
            })
            .then(
                (response) =>
                    console.log(
                        "Message envoyé",
                        response.status,
                        response.text
                    ),
                (error) => console.log("Échec de l'envoi", error.text)
            );
    };

    return (
        <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
            <label htmlFor="name">Nom</label>
            <input
                type="text"
                name="name"
                required
                className={styles.form__input}
            />
            <label htmlFor="email">E-mail</label>
            <input
                type="email"
                name="email"
                required
                className={styles.form__input}
            />
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                rows="7"
                required
                className={styles.form__textarea}
            />
            <input
                type="submit"
                value="Envoyer"
                className={styles.form__submit}
            />
        </form>
    );
};

export default Form;
