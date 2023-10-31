import banner from "../../assets/images/banner.svg";
import styled from "styled-components";

export const StyledMain = styled.main`
    box-sizing: border-box;

    min-height: calc(100vh - 36.1rem);
    margin: 0 auto;
    width: 90%;
    max-width: 160rem;

    @media (min-width: 700px) {
        min-height: calc(100vh - 22rem);
    }
`;
export const StyledBanner = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 10rem 10rem;
    margin: 0 auto;
    margin-bottom: 7rem;

    color: white;
    background: linear-gradient(to top, var(--grey-0), var(--grey-3)),
        url(${banner}) no-repeat top center;
    background-size: cover contain;
    background-blend-mode: multiply;

    h1 {
        margin-bottom: 15px;
    }

    @media (min-width: 700px) {
        padding: 20rem 20rem;
    }
`;
