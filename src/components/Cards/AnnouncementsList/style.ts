import styled from "styled-components";

export const StyledAnnouncementList = styled.ul`
    display: flex;
    flex-flow: row wrap;

    gap: 1.2rem;

    @media (min-width: 1032px) {
        width: 103.2rem;
        height: 38.8rem;
        border: 2px solid red;
    }
`;
