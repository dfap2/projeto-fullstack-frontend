import CommentCard from "./CommentCard";
import { StyledCommentsList } from "./style";

const CommentsList = () => {
    return (
        <StyledCommentsList>
            <CommentCard
                id=""
                createdAt=""
                imageUrl=""
                name=""
                key={crypto.randomUUID()}
            />
            <CommentCard
                id=""
                createdAt=""
                imageUrl=""
                name=""
                key={crypto.randomUUID()}
            />
            <CommentCard
                id=""
                createdAt=""
                imageUrl=""
                name=""
                key={crypto.randomUUID()}
            />
        </StyledCommentsList>
    );
};

export default CommentsList;
