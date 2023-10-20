import styled from "styled-components";

export const StyledAnnouncementCard = styled.div`
    box-sizing: border-box;

    width: 31.2rem;
    height: 36rem;

    .image-container {
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

        width: 31.2rem;
        height: 15.2rem;
        margin-bottom: 1.6rem;

        background-color: var(--grey-7);

        img {
            box-sizing: border-box;
            object-fit: none;
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 19.2rem;

        h3 {
            color: var(--grey-1);
        }

        .user-container {
            display: flex;
            align-items: center;

            gap: 0.8rem;

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
        }
        .description-footer {
            display: flex;
            justify-content: space-between;

            span {
                padding: 0.4rem 0.8rem;

                border-radius: var(--radius-default);
            }

            div {
                display: flex;

                gap: 0.8rem;

                .colored-footer {
                    color: var(--brand-1);
                    background-color: var(--brand-4);
                }
            }

            .price {
            }
        }
    }
`;
