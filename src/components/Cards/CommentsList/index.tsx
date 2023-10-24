import CommentCard from "./CommentCard";
import { StyledCommentsList } from "./style";

const CommentsList = () => {
    return (
        <StyledCommentsList>
            <h2 className="heading-6-600">Comentários</h2>
            <CommentCard id="" createdAt="" name="" key={crypto.randomUUID()} />
            <CommentCard id="" createdAt="" name="" key={crypto.randomUUID()} />
            <CommentCard id="" createdAt="" name="" key={crypto.randomUUID()} />
        </StyledCommentsList>
    );
};

export default CommentsList;
