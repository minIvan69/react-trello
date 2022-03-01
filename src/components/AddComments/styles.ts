import styled from "styled-components";

export const EditContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px #000 solid;
  margin-top: 10px;
  background: #fff;
  font-weight: 600;
  font-size: 1.1em;
  transition: background-color 0.1s ease-in-out;
  transform: translateY(-5px);
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }
`;
export const DisabledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px #000 solid;
  margin-top: 10px;
  background: #fff;
  font-weight: 600;
  font-size: 1.1em;
  transition: background-color 0.1s ease-in-out;
  transform: translateY(-5px);
  margin-left: 5px;
  opacity: 0.5;
`;
