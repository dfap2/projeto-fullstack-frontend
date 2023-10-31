import styled, { css } from "styled-components";

export interface IStyledButtonProps {
    $buttonSize: "default" | "medium";
    $buttonColor: string;
    $buttonFontColor: string;
    $buttonWidth: "auto" | number | "full";
}

export const StyledButtonCSS = css<IStyledButtonProps>`
    box-sizing: border-box;

    font-family: "Inter";
    font-weight: 600;
    text-align: center;

    border: none;
    border-radius: var(--radius-default);

    ${({ $buttonWidth }) => {
        switch ($buttonWidth) {
            case "auto":
                return css``;
            case "full":
                return css`
                    width: 100%;
                `;
            default:
                return css`
                    width: ${$buttonWidth}rem;
                `;
        }
    }};

    ${({ $buttonColor }) => {
        return css`
            background-color: var(${$buttonColor});
        `;
    }};

    ${({ $buttonFontColor }) => {
        return css`
            color: var(${$buttonFontColor});
        `;
    }};

    ${({ $buttonSize }) => {
        switch ($buttonSize) {
            case "default":
                return css`
                    padding: 1.2rem;
                    height: 4.8rem;

                    font-size: 1.6rem;
                `;
            case "medium":
                return css`
                    padding: 1.2rem 2.8rem;
                    height: 3.8rem;

                    font-size: 1.4rem;
                `;
        }
    }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
    ${StyledButtonCSS}
`;
