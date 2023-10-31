import { StyledButton } from "./style";

export interface IButtonProps {
    text: string;
    $buttonSize: "default" | "medium";
    $buttonWidth: number | "auto" | "full";
    $buttonType: "outline-1" | "brand-1";
}

const Button = ({
    text,
    $buttonSize,
    $buttonWidth,
    $buttonType,
}: IButtonProps) => {
    return (
        <StyledButton
            $buttonType={$buttonType}
            $buttonWidth={$buttonWidth}
            $buttonSize={$buttonSize}
            typeof="submit"
        >
            {text}
        </StyledButton>
    );
};

export default Button;
