import AnnouncementsList from "../../components/Cards/AnnouncementsList";
import CommentsList from "../../components/Cards/CommentsList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { StyledMain } from "./style";

const LandingPage = () => {
    return (
        <>
            <Header />
            <StyledMain>
                <AnnouncementsList />
                {/* <CommentsList />
                <CommentsList /> */}
            </StyledMain>
            <Footer />
        </>
    );
};

export default LandingPage;
