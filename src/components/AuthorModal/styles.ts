import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: auto;
  height: fit-content;
  padding: 50px;
  border-radius: 10px;
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

  &:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-weight: 800;
}
`;

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  background: #ffffff99;
  margin-left: 7px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
export const DisabledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px #000 solid;
  margin-top: 10px;
  background: #b9b9b9;
  color: #757575;
  font-weight: 600;
  font-size: 1.1em;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
