import { StyledCommentCard } from "./style";

interface ICommentCard {
    id: string;
    key: string;
    name: string;
    createdAt: string;
}

const CommentCard = ({ name, key }: ICommentCard) => {
    return (
        <StyledCommentCard key={key}>
            <div className="user-container">
                <span className="user-initials">JL</span>
                <span className="body-2-500 user-name">Júlia Lima</span>
                <span className="user-date">há 3 dias</span>
            </div>
            <p className="body-2-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
        </StyledCommentCard>
    );
};

export default CommentCard;
