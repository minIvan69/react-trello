import React, { useState } from "react";
import { Header, Content, AppWrapper } from "./components";
import { useCookies } from "react-cookie";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  );
}

export default App;
