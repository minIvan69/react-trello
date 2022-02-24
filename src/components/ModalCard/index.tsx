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
} from "./styles";
import { IModalCardProps } from "./interfaces";
import BackgroundModal from "../BackModal";
import AddComponent from "../AddComments";
import {
  ICard,
  ICollumnStorage,
  ICommentsData,
} from "../../interfaces/interfaces";
import { LOCALSTORAGE_KEYS } from "../../constants";
import { initialCollumnsState } from "../../data";
import Collumns from "../Collumns";

const getCardsData = (id: number, cards: ICard[]) => {
  return cards.filter((item) => item.id === id);
};

const getComments = (id: number, comments: ICommentsData[]) => {
  return comments.filter((item) => item.cardId === id);
};

const ModalCard: FunctionComponent<IModalCardProps> = ({
  cardId,
  // comments,
  cards,
  // columns,
  setId,
  authName,
  // getCardData,
  // getComments,
  // changeData,
  // changeTitle,
  // deleteCard,
  // deleteComment,
  // changeComment,
  // addComment,
}) => {
  const localCollumns = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEYS.columns) as string
  );
  const [collumns, setCollumns] = useState<ICollumnStorage[]>(
    localCollumns === null ? initialCollumnsState : localCollumns
  );
  localStorage.setItem(LOCALSTORAGE_KEYS.columns, JSON.stringify(collumns));
  const localCardsData = getCardsData(cardId, cards);
  const localComments = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEYS.comments) as string
  );
  const [comments, setComments] = useState<ICommentsData[]>(
    localComments === null ? [] : localComments
  );
  localStorage.setItem(
    LOCALSTORAGE_KEYS.comments,
    JSON.stringify(localComments)
  );

  // const [localComments, setLocalComments] = useState(
  //   getComments(cardId, comments)
  // );
  // const [colTitle, setColTitle] = useState<string>("");
  const [commentId, setCommentId] = useState<number>(-1);
  const [inputValue, setInputValue] = useState("");
  const [textAreValue, setTextAreaValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditData, setIsEditData] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);

  const changeTitleCard = (id: number, title: string) => {
    const newObjData = cards.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
    // setCards(newObjData);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObjData));

    const newObjCards = cards.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
    // setCards(newObjCards);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObjCards));
  };

  const changeCardStorage = (id: number, newData: string) => {
    const newObj = cards.map((item) => {
      if (item.id === id) {
        item.data = newData;
      }
      return item;
    });

    // setCards(newObj);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObj));
  };

  const changeComment = (id: number, newComment: string) => {
    const newObj = comments.map((item) => {
      if (item.id === id) {
        item.comment = newComment;
      }
      return item;
    });

    setComments(newObj);
    localStorage.setItem("comments", JSON.stringify(newObj));
  };

  const addComment = (cardId: number, comment: string) => {
    const newComment: ICommentsData = {
      id: new Date().getMilliseconds(),
      cardId: cardId,
      name: authName,
      comment: comment,
    };

    setComments((prevState) => [...prevState, newComment]);
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
  };

  // const changeTitle = (id: number, title: string) => {
  //   const newObj = cards.map((item) => {
  //     if (item.cardId === id) {
  //       item.title = title;
  //     }
  //     return item;
  //   });
  //   setCollumns(newObj);
  //   localStorage.setItem("cards", JSON.stringify(newObj));
  // };

  // useEffect(() => {
  //   getColTitle();
  // }, []);

  // useEffect(() => {
  //   setLocalComments(getComments(cardId, comments));
  // }, [comments]);

  const deleteComment = (id: number) => {
    const itemToDelete = comments.find((item) => item.id === id);
    const newObj = comments.filter((item) => item !== itemToDelete);

    setComments(newObj);
    localStorage.setItem("comments", JSON.stringify(newObj));
  };

  const onClose = () => {
    setId(undefined);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  const resetTextAreaValue = () => {
    setTextAreaValue("");
  };

  // const getColTitle = () => {
  //   const id = localCardsData.map((item) => item.columnId)[0];
  //   const titleObj = columns.find((item) => item.columnId === id);
  //   if (titleObj !== undefined) {
  //     setColTitle(titleObj.title);
  //   }
  // };

  const onClickTitle = () => {
    setIsEdit(true);
  };

  // const onClickData = () => {
  //   setIsEditData(true);
  // };

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

  // const onDeleteData = () => {
  //   changeData(cardId, "");
  // };

  const onAddData = () => {
    setIsEditData(true);
  };

  const onSubmitEditTitle = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeTitleCard(cardId, inputValue);
    setIsEdit(false);
    resetInputValue();
  };

  const onSubmitEditData = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeCardStorage(cardId, textAreValue);
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
  const deleteCard = (id: number) => {
    const itemToDelete = cards.find((item) => item.id === id);
    const newObj = cards.filter((item) => item !== itemToDelete);

    // setCards(newObj);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObj));
  };

  const onDeleteCard = () => {
    deleteCard(cardId);
    onClose();
  };

  return (
    <>
      {localCardsData.map(({ title, author, data }) => (
        <>
          <StyledModalCard>
            <CardHeader>
              CardId {cardId}
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
                <CardData
                // onClick={onClickData}
                >
                  <CardTitle>Description:</CardTitle>
                  <StyledText>{data}</StyledText>
                </CardData>
                <EditText
                //  onClick={onDeleteData}
                >
                  Remove description
                </EditText>
              </>
            )}
            <DeleteCard onClick={onDeleteCard}>Delete card</DeleteCard>
            <CardComments>
              <CardTitle>Comments:</CardTitle>

              {comments.map((item) => (
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
