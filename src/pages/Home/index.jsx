import { useEffect } from "react";
import About from "../../components/About";

const Home = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web";
    }, []);

    return (
        <>
            <About />
        </>
    );
};

export default Home;
