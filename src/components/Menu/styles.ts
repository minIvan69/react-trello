import styled from "styled-components";

export const StyledUserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 3.5em;
  top: 5px;
  padding: 10px;
  min-width: 300px;
  width: auto;
  height: 45px;
  background-color: #fff;
  border: 2px #000 solid;
  border-radius: 10px;
  box-shadow: 8px 6px 25px -4px rgba(34, 60, 80, 0.2);
`;

export const HiddenUserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 3.5em;
  top: 5px;
  padding: 10px;
  position: fixed;
  z-index: 9999;
  min-width: 300px;
  width: auto;
  height: 6%;
  background-color: #fff;
  border: 2px #000 solid;
  border-radius: 10px;
  box-shadow: 8px 6px 25px -4px rgba(34, 60, 80, 0.2);
  font-size: 1.2em;
  opacity: 0;
`;
