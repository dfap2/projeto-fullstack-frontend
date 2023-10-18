import logo from "../../assets/images/motorsShop.svg";
import { StyledFooter } from "./style";

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <img src={logo} alt="logo" />
                <span>© 2022 - Todos os direitos reservados.</span>
            </StyledFooter>
        </>
    );
};

export default Footer;
