import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        document.title =
            "David Horès, Développeur Web - Oups! La page que vous demandez n'existe pas.";
    }, []);

    return (
        <section>
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </section>
    );
};

export default Error;
