import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";
import Career from "../../pages/Career";
import Error from "../Error";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/david-hores-portfolio" element={<Home />} />
                    <Route
                        path="/david-hores-portfolio/realisations"
                        element={<Projects />}
                    />
                    <Route
                        path="/david-hores-portfolio/competences"
                        element={<Skills />}
                    />
                    <Route
                        path="/david-hores-portfolio/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/david-hores-portfolio/realisations/:id"
                        element={<Project />}
                    />
                    <Route
                        path="/david-hores-portfolio/parcours"
                        element={<Career />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
