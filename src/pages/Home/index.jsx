import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

    return (
        <>
            <section>
                <h2>Développeur Web</h2>
            </section>
        </>
    );
};

export default Home;
