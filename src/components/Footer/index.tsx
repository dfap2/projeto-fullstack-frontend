import logo from "../../assets/images/motorsShop.svg";
import upArrow from "../../assets/images/angleUp.svg";
import { StyledFooter } from "./style";

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <div className="footer-container">
                    <img src={logo} alt="logo" />
                    <span className="--body-2-400">
                        © 2022 - Todos os direitos reservados.
                    </span>
                    <button>
                        <img className="uparrow-img" src={upArrow} alt="" />
                    </button>
                </div>
            </StyledFooter>
        </>
    );
};

export default Footer;
