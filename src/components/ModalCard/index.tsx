import React, { FunctionComponent, useEffect, useState } from "react";
import EditComponent from "../EditComponent";
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
} from "../ModalCard/styles";
import { IModalCardProps } from "./interfaces";
import BackgroundModal from "../BackModal";
import AddComponent from "../AddComments";

const ModalCard: FunctionComponent<IModalCardProps> = ({
  cardId,
  comments,
  cards,
  columns,
  setId,
  getCardData,
  getComments,
  changeData,
  changeTitle,
  deleteCard,
  deleteComment,
  changeComment,
  addComment,
}) => {
  const localCardsData = getCardData(cardId, cards);
  const [localComments, setLocalComments] = useState(
    getComments(cardId, comments)
  );
  const [colTitle, setColTitle] = useState<string>("");
  const [commentId, setCommentId] = useState<number>(-1);
  const [inputValue, setInputValue] = useState("");
  const [textAreValue, setTextAreaValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditData, setIsEditData] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);

  useEffect(() => {
    getColTitle();
  }, []);

  useEffect(() => {
    setLocalComments(getComments(cardId, comments));
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
    const id = localCardsData.map((item) => item.columnId)[0];
    const titleObj = columns.find((item) => item.columnId === id);
    if (titleObj !== undefined) {
      setColTitle(titleObj.title);
    }
  };

  const onClickTitle = () => {
    setIsEdit(true);
  };

  const onClickData = () => {
    setIsEditData(true);
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

  const onDeleteData = () => {
    changeData(cardId, "");
  };

  const onAddData = () => {
    setIsEditData(true);
  };

  const onSubmitEditTitle = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeTitle(cardId, inputValue);
    setIsEdit(false);
    resetInputValue();
  };

  const onSubmitEditData = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeData(cardId, textAreValue);
    setIsEditData(false);
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
    addComment(cardId, inputValue);
    setIsEditComment(false);
    resetInputValue();
  };

  const onDeleteComment = (id: number) => {
    deleteComment(id);
  };

  const onDeleteCard = () => {
    deleteCard(cardId);
    onClose();
  };

  return (
    <>
      {localCardsData.map(({ title, author, data }) => (
        <BackgroundModal>
          <StyledModalCard>
            <CardHeader>
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
              <StyledImg src="img/cross.svg" onClick={onClose} />
            </CardHeader>
            <CardAuthor>{author}</CardAuthor>
            <div>in column {colTitle}</div>
            {isEditData ? (
              <EditComponent
                onSubmitForm={onSubmitEditData}
                isTextArea={true}
                onEditTextArea={onEditTextArea}
                setIsEdit={setIsEditData}
                textAreaValue={textAreValue}
              />
            ) : data === "" ? (
              <EditText onClick={onAddData}> Add description </EditText>
            ) : (
              <>
                <CardData onClick={onClickData}>
                  <CardTitle>Description:</CardTitle>
                  <StyledText>{data}</StyledText>
                </CardData>
                <EditText onClick={onDeleteData}>Remove description</EditText>
              </>
            )}
            <DeleteCard onClick={onDeleteCard}>Delete card</DeleteCard>
            <CardComments>
              <CardTitle>Comments:</CardTitle>

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
        </BackgroundModal>
      ))}
    </>
  );
};

export default ModalCard;
