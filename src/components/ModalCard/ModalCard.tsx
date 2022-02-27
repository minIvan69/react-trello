import React, { FunctionComponent, useEffect, useState } from "react";
import { EditComponent } from "..";
import {
  Container,
  StyledModalCard,
  StyledText,
  EditText,
  DeleteCard,
  CardAuthor,
  CardTitle,
  CardData,
  StyledImg,
  StyledImgDeleteComment,
  DeleteComment,
  CardHeader,
  CardComments,
  CommentAuthor,
  CommentsContainer,
} from "./styles";
import { IModalCardProps } from "./interfaces";
import AddComponent from "../AddComments/AddComments";

const ModalCard: FunctionComponent<IModalCardProps> = ({
  localCardId,
  comments,
  cards,
  columns,
  setId,
  getCardContent,
  getComments,
  changeDescription,
  changeTitle,
  deleteCard,
  deleteComment,
  changeComment,
  addComment,
}) => {
  const localCardsStorage = getCardContent(localCardId, cards);
  const [localComments, setLocalComments] = useState(
    getComments(localCardId, comments)
  );
  const [colTitle, setColTitle] = useState<string>("");
  const [commentId, setCommentId] = useState<number>(-1);
  const [inputValue, setInputValue] = useState("");
  const [textAreValue, setTextAreaValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);

  useEffect(() => {
    getColTitle();
  }, []);

  useEffect(() => {
    setLocalComments(getComments(localCardId, comments));
  }, [comments]);

  const onClose = () => {
    setId(undefined);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  const resetTextAreaValue = () => {
    setTextAreaValue("");
  };

  const getColTitle = () => {
    const id = localCardsStorage.map((item) => item.columnId)[0];
    const titleObj = columns.find((item) => item.columnId === id);
    if (titleObj !== undefined) {
      setColTitle(titleObj.title);
    }
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
    console.log("input", inputValue);
  };

  const onEditTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const onDeleteDescription = () => {
    changeDescription(localCardId, "");
  };

  const onAddData = () => {
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
    onClose();
  };

  return (
    <>
      {localCardsStorage.map(({ title, author, content }) => (
        <>
          <StyledModalCard>
            <CardHeader>
              CardId {localCardId}
              {isEdit ? (
                <EditComponent
                  onSubmitForm={onSubmitEditTitle}
                  onEditInput={onEditInput}
                  setIsEdit={setIsEdit}
                  inputValue={inputValue}
                />
              ) : (
                <CardTitle onClick={onClickTitle}>
                  <Container>{title}</Container>
                </CardTitle>
              )}
              <StyledImg
                src="img/cross.svg"
                //  onClick={onClose}
              />
            </CardHeader>
            <CardAuthor>{author}</CardAuthor>
            {/* <div>in column {colTitle}</div> */}
            {isEditDescription ? (
              <EditComponent
                onSubmitForm={onSubmitEditDescription}
                isTextArea={true}
                onEditTextArea={onEditTextArea}
                setIsEdit={setIsEditDescription}
                textAreaValue={textAreValue}
              />
            ) : content === "" ? (
              <EditText onClick={onAddData}> Add description </EditText>
            ) : (
              <>
                <CardData onClick={onClickDescription}>
                  <CardTitle>Description:</CardTitle>
                  <StyledText>{content}</StyledText>
                </CardData>
                <EditText onClick={onDeleteDescription}>
                  Remove description
                </EditText>
              </>
            )}
            <DeleteCard onClick={onDeleteCard}>Delete card</DeleteCard>
            <CardComments>
              <CardTitle>Comments:</CardTitle>
              {/* двойные тернарники убрать !!!!!!!! */}
              {localComments.map((item) => (
                <CommentsContainer>
                  <CardComments key={item.id}>
                    <CommentAuthor>{item.name}</CommentAuthor>
                    {isEditComment && item.id === commentId ? (
                      <EditComponent
                        onSubmitForm={onSubmitEditComment}
                        onEditInput={onEditInput}
                        inputValue={inputValue}
                        setIsEdit={setIsEditComment}
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
              <CardTitle>Add comment</CardTitle>
              <AddComponent
                onEditInput={onEditInput}
                onSubmitForm={onSubmitAddComment}
              />
            </CardComments>
          </StyledModalCard>
        </>
      ))}
    </>
  );
};

export default ModalCard;
