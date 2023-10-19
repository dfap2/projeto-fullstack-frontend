import BurgerButton from "./BurgerMenu";
import logo from "../../assets/images/motorsShopHeader.svg";
import { StyledHeader } from "./style";

const Header = () => {
    return (
        <StyledHeader>
            <div className="header-container">
                <img src={logo} alt="Header Logo" />
                <div className="desktop-buttons">
                    <button className="login-button">Fazer Login</button>
                    <button className="register-button">Cadastrar</button>
                </div>
                {/* <BurgerButton /> */}
            </div>
        </StyledHeader>
    );
};

export default Header;
