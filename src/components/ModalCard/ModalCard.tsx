import React, { FunctionComponent, useState } from "react";
import crossImg from "../../assets/cross.svg";
import {
  EditComponent,
  AddComponent,
  EditDescription,
  DescriptionFormEdit,
} from "..";
import {
  Container,
  StyledModalCard,
  StyledText,
  DeleteCard,
  CardAuthor,
  CardTitle,
  StyledImg,
  StyledImgDeleteComment,
  CardHeader,
  CardComments,
  CommentAuthor,
  CommentsContainer,
} from "./styles";
import { IModalCardProps } from "./interfaces";
import { actions, selectors } from "../../redux/ducks";
import { useDispatch, useSelector } from "react-redux";

const ModalCard: FunctionComponent<IModalCardProps> = ({
  localCardId,
  onClose,
}) => {
  const dispatch = useDispatch();

  const { title, content } = useSelector(
    selectors.cards.getCardsById(localCardId)
  );

  const author = useSelector(selectors.authorNames.getAuthorName);
  const localComments = useSelector(
    selectors.comments.getCommentsById(localCardId)
  );
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [commentId, setCommentId] = useState<number>(-1);
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);

  const onClickTitle = () => {
    setIsEditTitle(true);
  };

  const onClickDescription = () => {
    setIsEditDescription(true);
  };

  const onClickComment = (id: number) => {
    setIsEditComment(true);
    setCommentId(id);
  };

  const onDeleteDescription = () => {
    dispatch(
      actions.cards.changeDescription({ cardId: localCardId, newDesc: "" })
    );
  };

  const onAddDescription = () => {
    setIsEditDescription(true);
  };

  const onSubmitEditTitle = (value: string) => {
    dispatch(
      actions.cards.changeTitle({ cardId: localCardId, newTitle: value })
    );

    setIsEditTitle(false);
  };

  const onSubmitEditDescription = (value: string) => {
    dispatch(
      actions.cards.changeDescription({
        cardId: localCardId,
        newDesc: value,
      })
    );
    setIsEditDescription(false);
  };

  const onSubmitEditComment = (item: string) => {
    setIsEditComment(false);
    dispatch(
      actions.comments.changeComments({
        commnetsId: commentId,
        newComment: item,
      })
    );
  };

  const onDeleteComment = (id: number) => {
    dispatch(actions.comments.deleteComments(id));
  };

  const onDeleteCard = () => {
    onClose(false);
    dispatch(actions.cards.deleteCard(localCardId));
    dispatch(actions.localCards.getCardClickId(-1));
  };

  return (
    <>
      <StyledModalCard>
        <CardHeader>
          CardId {localCardId}
          {isEditTitle ? (
            <EditComponent
              onSubmitForm={onSubmitEditTitle}
              setIsEdit={setIsEditTitle}
              defaultText={title}
            />
          ) : (
            <CardTitle onClick={onClickTitle}>
              <Container>{title}</Container>
            </CardTitle>
          )}
          <StyledImg src={crossImg} onClick={() => onClose(false)} />
        </CardHeader>
        <CardAuthor>{author}</CardAuthor>
        {isEditDescription ? (
          <DescriptionFormEdit
            onSubmitForm={onSubmitEditDescription}
            setIsEdit={setIsEditDescription}
            defaultText={content}
            changeCancel={onDeleteDescription}
          />
        ) : (
          <EditDescription
            onAddDescription={onAddDescription}
            onClickDescription={onClickDescription}
            onDeleteDescription={onDeleteDescription}
            content={content}
          />
        )}
        <DeleteCard onClick={onDeleteCard}>Delete card</DeleteCard>
        <CardComments>
          <CardTitle>Add comment</CardTitle>
          <AddComponent
          // onSubmitForm={onSubmitAddComment}
          />
          <CardTitle>Comments:</CardTitle>
          {localComments.map((item, key) => (
            <CommentsContainer key={`${key}_${author}`}>
              <CardComments>
                <CommentAuthor>{item.name}</CommentAuthor>
                {isEditComment && item.id === commentId ? (
                  <EditComponent
                    onSubmitForm={onSubmitEditComment}
                    setIsEdit={setIsEditComment}
                    defaultText={item.comment}
                  />
                ) : (
                  <StyledText onClick={() => onClickComment(item.id)}>
                    {item.comment}
                  </StyledText>
                )}
              </CardComments>
              <StyledImgDeleteComment
                src={crossImg}
                onClick={() => onDeleteComment(item.id)}
              />
            </CommentsContainer>
          ))}
        </CardComments>
      </StyledModalCard>
    </>
  );
};

export default ModalCard;
