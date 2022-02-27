import React, { useState } from "react";
import { Header, Content, AppWrapper } from "./components";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(["authName"]);
  const [authName, setAuthName] = useState(cookies.authName);

  return (
    <AppWrapper>
      <Header authName={authName} setAuthName={setAuthName} />
      <Content authName={authName} />
    </AppWrapper>
  );
}

export default App;
