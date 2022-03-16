import React, { FunctionComponent, useEffect, useState } from "react";
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
import { ICommentsStorage } from "../../interfaces/interfaces";

const ModalCard: FunctionComponent<IModalCardProps> = ({
  localCardId,
  changeId,
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
  const [isEdit, setIsEdit] = useState(false);
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

  const onSubmitAddComment = (value: string) => {
    const newComment: ICommentsStorage = {
      id: new Date().getMilliseconds(),
      cardId: localCardId,
      name: author,
      comment: value,
    };
    dispatch(actions.comments.addComments({ newComment }));
  };

  const onDeleteComment = (id: number) => {
    dispatch(actions.comments.deleteComments(id));
  };

  const onDeleteCard = () => {
    onClose(false);
    dispatch(actions.cards.deleteCard(localCardId));
    changeId(undefined);
  };

  return (
    <>
      <StyledModalCard>
        <CardHeader>
          CardId {localCardId}
          {isEditTitle ? (
            <EditComponent
              onSubmitForm={onSubmitEditTitle}
              setIsEdit={setIsEdit}
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
          // <EditComponent
          //   onSubmitForm={onSubmitEditDescription}
          //   isTextArea={true}
          //   setIsEdit={setIsEditDescription}
          //   defaultText={content}
          // />
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
          <AddComponent onSubmitForm={onSubmitAddComment} />
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
