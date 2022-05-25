import styled from "styled-components";

export const StyledButton = styled.button`
  word-break: normal;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px #000 solid;
  margin-top: 10px;
  margin-left: 10px;
  background: #fff;
  font-weight: 600;
  font-size: 1.1em;
  transition: background-color 0.1s ease-in-out;
  transform: translateY(-5px);

  &:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }
`;
