import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import commentImg from "../../assets/comment.svg";
import { selectors } from "../../redux/ducks";
import { ICardProps } from "./interfaces";
import { Content, Comments, CommentsCount, CommentsImg } from "./styles";

const Card: FunctionComponent<ICardProps> = ({ title, id }) => {
  const localComments = useSelector(selectors.comments.getCommentsById(id));

  return (
    <Content>
      {title}
      {localComments.length > 0 ? (
        <Comments>
          <CommentsImg src={commentImg} />
          <CommentsCount>{localComments.length}</CommentsCount>
        </Comments>
      ) : null}
    </Content>
  );
};

export default Card;
