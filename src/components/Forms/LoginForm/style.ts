import styled from "styled-components";

export const StyledLoginForm = styled.div`
    box-sizing: border-box;

    width: 32rem;
    margin: 0 auto;
    margin-top: 5.2rem;
    padding: 4.4rem 2.8rem;

    background-color: white;
    border-radius: var(--radius-default);

    h2 {
        margin-bottom: 3.2rem;
    }

    .form-container {
        display: flex;
        flex-direction: column;

        gap: 2.1rem;

        .form-inputs {
            display: flex;
            flex-direction: column;

            gap: 2.4rem;
        }

        .form-footer {
            display: flex;
            flex-direction: column;

            gap: 2.4rem;

            text-align: center;

            span {
                color: var(--grey-2);
            }
        }
    }

    @media (min-width: 700px) {
        padding-inline: 4.8rem;
        width: 41.2rem;
    }
`;
