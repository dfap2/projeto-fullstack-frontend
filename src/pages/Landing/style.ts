import styled from "styled-components";

export const StyledMain = styled.main`
    box-sizing: border-box;

    min-height: calc(100vh - 36.1rem);
    margin: 0;
    max-width: 160rem;

    @media (min-width: 700px) {
        min-height: calc(100vh - 22rem);
    }
`;
