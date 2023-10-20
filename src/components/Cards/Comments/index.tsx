import { StyledCommentCard } from "./style";

interface ICommentCard {
    id: string;
    imageUrl: string;
    name: string;
    createdAt: string;
}

const CommentCard = ({ id, imageUrl, name, createdAt }: ICommentCard) => {
    return (
        <StyledCommentCard>
            <div className="user-container">
                <img src={imageUrl} alt="User profile picture" />
                <span>{name}</span>
                <span>há ${} dias</span>
            </div>
            <p></p>
        </StyledCommentCard>
    );
};

export default CommentCard;
