import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    padding-block: 45px;
    width: 100vw;
    margin-top: auto;

    background-color: var(--grey-0);

    .footer-container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        max-width: 1600px;
        gap: 45px;

        color: white;

        img {
            align-self: center;

            width: 153.02px;
            height: 26.34px;
        }

        span {
            align-self: center;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;

            width: 53px;
            height: 50px;

            background-color: var(--grey-1);
            border-radius: var(--radius-default);

            .uparrow-img {
                width: 10px;
                height: 18px;
            }
        }
    }

    @media (min-width: 700px) {
        height: auto;

        .footer-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            padding-inline: 5.9rem;
            width: 100%;
        }
    }
`;
