import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { AnnouncementPage, LandingPage } from "../pages";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/announcement" element={<AnnouncementPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};
