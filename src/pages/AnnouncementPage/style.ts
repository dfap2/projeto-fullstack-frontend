import styled from "styled-components";

export const StyledMain = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 160rem;
    max-width: 90%;

    .main-content-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        gap: 1.6rem;
        max-width: 75rem;

        .cover-image {
            box-sizing: border-box;

            padding: 10rem 15rem;

            border-radius: var(--radius-default);
            background-color: white;
        }

        .announcement-title-container {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            padding: 3.6rem 4.4rem;

            border-radius: var(--radius-default);
            background-color: white;
        }

        .announcement-description {
            display: flex;
            flex-direction: column;
            gap: 3.2rem;

            padding: 3.6rem 4.4rem;

            border-radius: var(--radius-default);
            background-color: white;
        }

        .new-comment-container {
            display: flex;
            flex-direction: column;
            gap: 3.2rem;

            padding: 3.6rem 4.4rem;

            border-radius: var(--radius-default);
            background-color: white;

            .comment-user {
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
                    font-family: "Inter";
                    font-weight: 500;
                    color: white;
                    border-radius: 15rem;
                    background-color: blue;
                }

                .user-name {
                    align-self: center;
                }
            }
        }
    }

    aside {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        gap: 3.2rem;
        max-width: 44rem;

        .photos-container {
            box-sizing: border-box;
            background-color: white;
            display: flex;
            flex-direction: column;

            width: 44rem;
            padding: 3.6rem 4.4rem;
            gap: 3.2rem;

            border-radius: var(--radius-default);
            background-color: white;

            .photos {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                justify-content: center;

                row-gap: 3.2rem;

                img {
                    width: 10.8rem;
                    height: 10.8rem;

                    background-color: var(--grey-8);
                    border-radius: var(--radius-default);
                }
            }
        }

        .announcement-owner {
            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 3.6rem 4.4rem;
            gap: 3.2rem;

            background-color: white;
            border-radius: var(--radius-default);

            .user-initials {
                display: flex;
                align-items: center;
                justify-content: center;

                width: 10.4rem;
                height: 10.4rem;

                border-radius: 150px;
                background-color: var(--brand-1);
                color: white;
                font-family: "Inter";
                font-size: 3.6rem;
            }
        }
    }

    @media (width: 700px) {
    }
`;

export const StyledAnnouncementPage = styled.div`
    background-color: var(--grey-8);
`;
