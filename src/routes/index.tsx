import Login from "../pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { AnnouncementPage, LandingPage, RegisterPage } from "../pages";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/announcement" element={<AnnouncementPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};
