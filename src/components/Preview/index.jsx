import styles from "./Preview.module.scss";

const getImage = (image) => {
    try {
        return require(`../../assets/${image}`);
    } catch {
        return "null.jpg";
    }
};

const Preview = ({ picture, title, subtitle }) => {
    const src = getImage(picture);

    return (
        <figure className={styles.preview}>
            <img
                src={src}
                alt={`${title} : ${subtitle}`}
                className={styles.preview__img}
            />
        </figure>
    );
};

export default Preview;
