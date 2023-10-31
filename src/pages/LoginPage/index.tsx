import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LoginForm } from "../../components/Forms";
import { StyledLoginPage } from "./style";

const Login = () => {
    return (
        <StyledLoginPage>
            <Header />
            <main>
                <LoginForm />
            </main>
            <Footer />
        </StyledLoginPage>
    );
};

export default Login;
