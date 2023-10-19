import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 80px;

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
