import React, { useState } from "react";
import Content from "./components/Content/index";
import Header from "./components/Header";
import AppWrapper from "./components/AppWrapper";
import ModalCard from "./components/ModalCard";
import { useCookies } from "react-cookie";

const [cookies] = useCookies(["authName"]);
const [authName, setAuthName] = useState(cookies.authName);

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content authName={authName} />
      <ModalCard author="Nika" collumnName="Название карточки" />
    </AppWrapper>
  );
}

export default App;
