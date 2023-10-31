import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LoginForm } from "../../components/Forms";
import { StyledPageContainer } from "./style";

const Login = () => {
    return (
        <>
            <StyledPageContainer>
                <Header />
                <main>
                    <LoginForm />
                </main>
                <Footer />
            </StyledPageContainer>
        </>
    );
};

export default Login;
