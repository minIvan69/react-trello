import React, { FunctionComponent, useEffect, useState } from "react";
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

const ModalCard: FunctionComponent<IModalCardProps> = ({
  localCardId,
  comments,
  cards,
  columns,
  getCardContent,
  getComments,
  changeDescription,
  changeTitle,
  deleteCard,
  deleteComment,
  changeComment,
  addComment,
  onClose,
}) => {
  const localCardsStorage = getCardContent(localCardId, cards);
  const [localComments, setLocalComments] = useState(
    getComments(localCardId, comments)
  );
  const [colTitle, setColTitle] = useState<string>("");
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [commentId, setCommentId] = useState<number>(-1);
  const [inputValue, setInputValue] = useState("");
  const [textAreValue, setTextAreaValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [isEditComment, setIsEditComment] = useState(false);

  const getColTitle = () => {
    const id = localCardsStorage.map((item) => item.columnId)[0];
    const titleObj = columns.find((item) => item.columnId === id);
    if (titleObj !== undefined) {
      setColTitle(titleObj.title);
    }
  };

  useEffect(() => {
    getColTitle();
  }, []);

  useEffect(() => {
    setLocalComments(getComments(localCardId, comments));
  }, [comments]);

  const resetInputValue = () => {
    setInputValue("");
  };

  const resetTextAreaValue = () => {
    setTextAreaValue("");
  };

  const onClickTitle = () => {
    setIsEdit(true);
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
    changeDescription(localCardId, "");
  };

  const onAddDescription = () => {
    setIsEditDescription(true);
  };

  const onSubmitEditTitle = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeTitle(localCardId, inputValue);
    setIsEdit(false);
    resetInputValue();
  };

  const onSubmitEditDescription = (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    changeDescription(localCardId, textAreValue);
    setIsEditDescription(false);
    resetTextAreaValue();
  };

  const onSubmitEditComment = (event: React.ChangeEvent<HTMLFormElement>) => {
    changeComment(commentId, inputValue);
    setIsEditComment(false);
    resetInputValue();
  };

  const onSubmitAddComment = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.target.reset();
    addComment(localCardId, inputValue);
    setIsEditComment(false);
    resetInputValue();
  };

  const onDeleteComment = (id: number) => {
    deleteComment(id);
  };

  const onDeleteCard = () => {
    deleteCard(localCardId);
    onClose(false);
  };

  return (
    <>
      {localCardsStorage.map(({ title, author, content }, key) => (
        <>
          <StyledModalCard key={`${key}_${author}`}>
            <CardHeader>
              CardId {localCardId}
              {isEdit ? (
                <EditComponent
                  onSubmitForm={onSubmitEditTitle}
                  onEditInput={onEditInput}
                  setIsEdit={setIsEdit}
                  inputValue={inputValue}
                  defaultText={title}
                />
              ) : (
                <CardTitle onClick={onClickTitle}>
                  <Container>{title}</Container>
                </CardTitle>
              )}
              <StyledImg src="img/cross.svg" onClick={() => onClose(false)} />
            </CardHeader>
            <CardAuthor>{author}</CardAuthor>
            {isEditDescription ? (
              <EditComponent
                onSubmitForm={onSubmitEditDescription}
                isTextArea={true}
                onEditTextArea={onEditTextArea}
                setIsEdit={setIsEditDescription}
                textAreaValue={textAreValue}
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
                        onEditInput={onEditInput}
                        inputValue={inputValue}
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
                    src={"img/cross.svg"}
                    onClick={() => onDeleteComment(item.id)}
                  />
                </CommentsContainer>
              ))}
            </CardComments>
          </StyledModalCard>
        </>
      ))}
    </>
  );
};

export default ModalCard;
