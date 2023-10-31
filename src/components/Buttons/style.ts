import styled, { css } from "styled-components";
import { IButtonProps } from ".";

interface IStyledButtonProps extends Omit<IButtonProps, "text"> {}

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

    ${({ $buttonType }) => {
        switch ($buttonType) {
            case "outline-1":
                return css`
                    color: var(--grey-0);

                    background-color: white;
                    border: 0.15rem solid var(--grey-0);
                    &:hover {
                        color: white;

                        background-color: var(--grey-0);
                    }
                `;
            case "brand-1":
                return css`
                    color: white;

                    background-color: var(--brand-1);
                    border: none;
                    &:hover {
                        background-color: var(--brand-2);
                    }
                `;
        }
    }}

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
