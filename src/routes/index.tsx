import LandingPage from "../pages/Landing";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};
