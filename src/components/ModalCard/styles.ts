import styled from "styled-components";

export const StyledModalCard = styled.div`
  position: absolute;
  z-index: 99999;
  min-height: 800px;
  height: 100%;
  width: 100%;
  background-color: #f4f5f7;
  padding: 20px;
  opacity: 1;
  border-radius: 4px;
`;

export const StyledText = styled.div`
  padding: 10px;
  font-size: 1.1em;
  text-align: justify;
  background-color: #fff;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  border: 1px #b2b5bb solid;
  color: #3e3e41;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const EditText = styled.div`
  color: #172b4d;
  margin-top: 10px;
  text-decoration: underline;
  width: fit-content;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const DeleteCard = EditText;

export const CardTitle = styled.h3`
  color: #172b4d;
  padding: 10px 0;
`;

export const CardData = styled.div`
  margin-top: 20px;
`;

export const StyledImg = styled.img`
  &:hover {
    cursor: pointer;
  }
  height: 20px;
`;

export const StyledImgDeleteComment = styled.img`
  &:hover {
    cursor: pointer;
  }
  height: 20px;
  margin-left: 10px;
  transform: translateY(9px);
`;

export const DeleteComment = styled.div``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardComments = styled.div`
  width: 100%;
`;

export const CommentAuthor = styled.div`
  margin-bottom: 3px;
  font-size: 1.05em;
  font-weight: 600;
`;

export const CardAuthor = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  width: 200px;
  height: 200px;
`;

export const CommentsContainer = styled.div`
  &:first-child {
    margin-top: 0;
  }
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
