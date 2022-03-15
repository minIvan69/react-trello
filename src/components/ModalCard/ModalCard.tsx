import React, { FunctionComponent, useEffect, useState } from "react";
import crossImg from "../../assets/cross.svg";
import { EditComponent, AddComponent, EditDescription } from "..";
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
  // comments,
  // cards,
  // columns,
  // getCardContent,
  // getComments,
  // changeDescription,
  // changeTitle,
  // deleteCard,
  // deleteComment,
  // changeComment,
  // addComment,
  onClose,
}) => {
  const localCardsContent = useSelector(
    selectors.cards.getCardsById(localCardId)
  );
  const author = useSelector(selectors.authorNames.getAuthorName);
  const localComments = useSelector(
    selectors.comments.getCommentsById(localCardId)
  );

  const { title, content } = localCardsContent;

  const [colTitle, setColTitle] = useState<string>("");
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [commentId, setCommentId] = useState<number>(-1);
  const [inputValue, setInputValue] = useState("");
  const [textAreValue, setTextAreaValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getColTitle();
  // }, []);

  // useEffect(() => {
  //   setLocalComments(getComments(localCardId, comments));
  // }, [comments]);

  const resetInputValue = () => {
    setInputValue("");
  };

  const resetTextAreaValue = () => {
    setTextAreaValue("");
  };

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

  const onEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onEditTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const onDeleteDescription = () => {
    // changeDescription(localCardId, "");
  };

  const onAddDescription = () => {
    setIsEditDescription(true);
  };

  const onSubmitEditTitle = (value: string) => {
    // event.preventDefault();
    // changeTitle(localCardId, inputValue);
    // setIsEdit(false);
    // resetInputValue();
    //
    dispatch(
      actions.cards.changeTitle({ cardId: localCardId, newTitle: value })
    );

    // setIsEdit(false);
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
    // changeComment(commentId, inputValue);
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
    // deleteComment(id);
  };

  const onDeleteCard = () => {
    // deleteCard(localCardId);
    // onClose(false);
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
          <EditComponent
            onSubmitForm={onSubmitEditDescription}
            isTextArea={true}
            setIsEdit={setIsEditDescription}
            defaultText={content}
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
            onEditInput={onEditInput}
            onSubmitForm={onSubmitAddComment}
            inputValue={inputValue}
          />
          <CardTitle>Comments:</CardTitle>
          {localComments.map((item, key) => (
            <CommentsContainer key={`${key}_${author}`}>
              <CardComments>
                <CommentAuthor>{item.name}</CommentAuthor>
                {isEditComment && item.id === commentId ? (
                  <EditComponent
                    onSubmitForm={onSubmitEditComment}
                    // inputValue={inputValue}
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
      {/* } */}
    </>
  );
};

export default ModalCard;
