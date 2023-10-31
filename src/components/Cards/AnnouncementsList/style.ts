import styled from "styled-components";

export const StyledAnnouncementList = styled.ul`
    display: flex;
    flex-flow: row nowrap;

    gap: 1.2rem;
    margin: 0 auto;

    overflow-x: hidden;

    @media (min-width: 1032px) {
        flex-wrap: wrap;
        width: 103.2rem;
        height: 38.8rem;

        gap: 4.8rem;
    }
`;
