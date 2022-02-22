import React, { FunctionComponent, useEffect, useState } from "react";
import { ICommentsData } from "../../interfaces/interfaces";
import { ICardProps } from "./interfaces";
import { ContentCard, Comments, CommentsCount } from "./styles";

const Card: FunctionComponent<ICardProps> = ({
  title,
  id,
  setCardId,
  getComments,
  comments,
}) => {
  const [localComments, setLocalComments] = useState<ICommentsData[]>(
    getComments(id, comments)
  );

  useEffect(() => {
    setLocalComments(getComments(id, comments));
  }, [comments]);

  const onCardClick = () => {
    setCardId(id);
  };

  return (
    <ContentCard onClick={onCardClick}>
      {title}
      {localComments.length > 0 ? (
        <Comments>
          <img src={"img/comment.svg"} />
          <CommentsCount>{localComments.length}</CommentsCount>
        </Comments>
      ) : null}
    </ContentCard>
  );
};

export default Card;
