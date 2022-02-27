import { FunctionComponent, useEffect, useState } from "react";
import { ICommentsStorage } from "../../interfaces/interfaces";
import { ICardProps } from "./interfaces";
import { Content, Comments, CommentsCount } from "./styles";

const Card: FunctionComponent<ICardProps> = ({
  title,
  id,
  getComments,
  comments,
}) => {
  const [localComments, setLocalComments] = useState<ICommentsStorage[]>(
    getComments(id, comments)
  );

  useEffect(() => {
    setLocalComments(getComments(id, comments));
  }, [comments]);

  return (
    <Content>
      {title}
      {localComments.length > 0 ? (
        <Comments>
          <img src={"img/comment.svg"} />
          <CommentsCount>{localComments.length}</CommentsCount>
        </Comments>
      ) : null}
    </Content>
  );
};

export default Card;
