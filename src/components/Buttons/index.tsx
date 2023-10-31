import { StyledButton } from "./style";

interface IButton {
    text: string;
    type: string;
    size: "default" | "medium";
    buttonColor: string;
    buttonFontColor: string;
    buttonWidth: number | "auto" | "full";
}

const Button = ({
    text,
    type,
    size,
    buttonColor,
    buttonFontColor,
    buttonWidth,
}: IButton) => {
    return (
        <StyledButton
            $buttonColor={buttonColor}
            $buttonFontColor={buttonFontColor}
            $buttonWidth={buttonWidth}
            $buttonSize={size}
            typeof={type}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
