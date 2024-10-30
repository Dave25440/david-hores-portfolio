import { useRef } from "react";
import styles from "./Preview.module.scss";

const getImage = (image) => {
    try {
        return require(`../../assets/${image}`);
    } catch (error) {
        console.error(error.message);
        return "null.jpg";
    }
};

const Preview = ({ picture, title, subtitle }) => {
    const dialogRef = useRef(null);
    const openModal = () => dialogRef.current && dialogRef.current.showModal();
    const closeModal = () => dialogRef.current && dialogRef.current.close();

    const src = getImage(picture);

    return (
        <>
            <button
                aria-label={`Voir ${title} : ${subtitle}`}
                className={styles.preview}
                onClick={openModal}
            >
                <img
                    src={src}
                    alt={`${title} : ${subtitle}`}
                    className={styles.preview__img}
                />
            </button>
            <dialog
                aria-label={`Aperçu de ${title} : ${subtitle}`}
                className={styles.preview__dialog}
                ref={dialogRef}
                onClick={closeModal}
            >
                <button
                    aria-label="Fermer l'aperçu"
                    className={styles.preview__button}
                    onClick={closeModal}
                >
                    X
                </button>
                <img
                    src={src}
                    alt={`${title} : ${subtitle}`}
                    className={styles.preview__img}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            </dialog>
        </>
    );
};

export default Preview;
