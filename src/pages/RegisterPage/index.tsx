import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { RegisterForm } from "../../components/Forms";
import { StyledRegisterPage } from "./style";

const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <Header />
            <main>
                <RegisterForm />
            </main>
            <Footer />
        </StyledRegisterPage>
    );
};

export default RegisterPage;
