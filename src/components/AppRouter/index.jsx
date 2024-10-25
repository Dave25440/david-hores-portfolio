import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import Career from "../../pages/Career";
import Error from "../Error";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/david-hores-portfolio" element={<Home />} />
                    <Route
                        path="/david-hores-portfolio/formation"
                        element={<Career />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
