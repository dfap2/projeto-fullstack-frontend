import styled from "styled-components";

export const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: column;

    main {
        flex: 1;
        margin: 0 auto;
        width: 160rem;
        max-width: 90%;
    }

    @media (min-width: 700px) {
    }
`;

export const StyledMain = styled.main``;
