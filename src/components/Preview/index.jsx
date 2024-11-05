import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Preview.module.scss";

const getImage = (image) => {
    try {
        return require(`../../assets/${image}`);
    } catch (error) {
        console.error(error.message);
        return "null.jpg";
    }
};

const Preview = ({ picture, title, subtitle, background }) => {
    const previewRef = useRef(null);
    const dialogRef = useRef(null);
    const src = getImage(picture);

    useEffect(() => {
        const preview = previewRef.current;

        if (preview) {
            const previewAnimated = () => {
                preview.classList.add(styles["preview--animated"]);
                preview.removeEventListener("animationend", previewAnimated);
            };

            preview.addEventListener("animationend", previewAnimated);
        }
    }, []);

    const openModal = () => dialogRef.current && dialogRef.current.showModal();

    const closeModal = () => {
        const dialog = dialogRef.current;

        if (dialog) {
            const closingModal = () => {
                dialog.classList.remove(styles.preview__dialog__close);
                dialog.removeEventListener("animationend", closingModal);
                dialog.close();
            };

            dialog.classList.add(styles.preview__dialog__close);
            dialog.addEventListener("animationend", closingModal);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeModal();
        }
    };

    return (
        <>
            <figure
                aria-label={`Voir ${title} : ${subtitle}`}
                className={styles.preview}
                ref={previewRef}
                onClick={openModal}
            >
                <img
                    src={src}
                    alt={`${title} : ${subtitle}`}
                    className={styles.preview__img}
                />
            </figure>
            <dialog
                aria-label={`Aperçu de ${title} : ${subtitle}`}
                className={styles.preview__dialog}
                ref={dialogRef}
                onClick={closeModal}
                onKeyDown={handleKeyDown}
            >
                <button
                    aria-label="Fermer l'aperçu"
                    className={styles.preview__button}
                    style={{ backgroundColor: background }}
                    onClick={closeModal}
                >
                    <FontAwesomeIcon icon={faXmark} size="sm" />
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
