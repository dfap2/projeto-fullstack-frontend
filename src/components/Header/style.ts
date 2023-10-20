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
        max-width: 160rem;
        width: 100%;
    }

    .header-container > img {
        margin-left: 2rem;
    }

    .desktop-buttons {
        display: none;
    }

    @media (min-width: 70rem) {
        padding-inline: 5.9rem;

        .header-container > img {
            margin-left: 0;
        }
    }
`;
