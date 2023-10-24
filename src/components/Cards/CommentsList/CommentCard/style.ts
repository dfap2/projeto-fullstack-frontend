import styled from "styled-components";

export const StyledCommentCard = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 21.2rem;

    .user-container {
        display: flex;

        gap: 0.8rem;
        margin-bottom: 1.2rem;

        .user-initials {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 3.2rem;
            height: 3.2rem;

            font-size: 1.4rem;
            font-weight: 500;
            color: white;
            border-radius: 15rem;
            background-color: blue;
        }

        .user-name {
            align-self: center;
        }

        .user-date {
            align-self: center;

            font-size: 1.2rem;
            font-weight: 400;
            font-family: "Inter";
            color: var(--grey-3);
        }
    }

    p {
        color: var(--grey-2);
    }

    @media (min-width: 700px) {
        height: 11.6rem;

        width: auto;
        min-width: 28.3rem;
    }
`;
