import styled from "styled-components";

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
export const CardTitle = styled.h3`
  color: #172b4d;
  padding: 10px 0;
`;

export const CardData = styled.div`
  margin-top: 20px;
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
