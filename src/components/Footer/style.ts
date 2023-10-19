import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-sizing: border-box;

    bottom: 0;
    padding-block: 45px;

    width: 100vw;
    min-height: 140px;

    background-color: var(--grey-0);

    .footer-container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        max-width: 1600px;
        gap: 45px;

        color: white;
    }

    .footer-container > img {
        align-self: center;

        width: 153.02px;
        height: 26.34px;
    }

    .footer-container > span {
        align-self: center;
    }

    .footer-container > button {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;

        width: 53px;
        height: 50px;

        background-color: var(--grey-1);
        border-radius: var(--radius-default);
    }

    .uparrow-img {
        width: 10px;
        height: 18px;
    }

    @media (min-width: 700px) {
        .footer-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            padding-inline: 59px;
            width: 100%;
        }
    }
`;
