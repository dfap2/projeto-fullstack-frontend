import styled, { css } from "styled-components";

export interface IInputPropsCSS {
    $inputSize: "default" | "text";
}

export const StyledFieldset = styled.div<IInputPropsCSS>`
    input {
        box-sizing: border-box;

        padding-inline: 1.6rem;
        width: 100%;
        margin-top: 0.8rem;

        border-radius: var(--radius-default);
        border: 1px solid var(--grey-7);

        &:hover {
            background-color: var(--grey-8);
        }

        &:focus {
            outline: var(--brand-2);
        }

        ${({ $inputSize }) => {
            switch ($inputSize) {
                case "default":
                    return css`
                        height: 4.8rem;
                    `;

                case "text":
                    return css`
                        height: 10.5rem;

                        text-align: start;

                        padding-block: 1rem;
                    `;
            }
        }}
    }
`;
