import AnnouncementsList from "../../components/Cards/AnnouncementsList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { StyledBanner, StyledMain } from "./style";

const LandingPage = () => {
    return (
        <>
            <Header />
            <StyledBanner>
                <h1 className="heading-1-700">Motors Shop</h1>
                <span className="heading-2-600">
                    A melhor plataforma de anúncios de carros país
                </span>
            </StyledBanner>
            <StyledMain>
                <AnnouncementsList />
            </StyledMain>
            <Footer />
        </>
    );
};

export default LandingPage;
