import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
