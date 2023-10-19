import React from "react";
import { slide as Menu } from "react-burger-menu";
import { StyledMenuWrapper } from "./style";

class BurgerButton extends React.Component {
    showSettings(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
    }

    render() {
        return (
            <StyledMenuWrapper>
                <Menu></Menu>
            </StyledMenuWrapper>
        );
    }
}

export default BurgerButton;
