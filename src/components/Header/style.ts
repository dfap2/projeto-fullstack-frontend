import styled from "styled-components";

export const StyledHeader = styled.header`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 8rem;
    width: 100vw;

    .header-container {
        display: flex;
        justify-content: space-between;
        max-width: 1600px;
        width: 100%;
    }

    .header-container > img {
        margin-left: 20px;
    }

    .desktop-buttons {
        display: none;
    }

    @media (min-width: 700px) {
        padding-inline: 59px;

        .header-container > img {
            margin-left: 0;
        }
    }
`;
