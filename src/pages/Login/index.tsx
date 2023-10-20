import AnnouncementList from "../../components/Cards/AnnouncementsList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { StyledMain } from "./style";

const Login = () => {
    return (
        <>
            <Header />
            <StyledMain>
                <AnnouncementList />
            </StyledMain>
            <Footer />
        </>
    );
};

export default Login;
