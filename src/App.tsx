import React, { useState } from "react";
import { Header, Content, AppWrapper } from "./components";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(["authName"]);
  const [authName, setAuthName] = useState(cookies.authName);
  return (
    <AppWrapper>
      <Header />
      <Content authName={authName} />
    </AppWrapper>
  );
}

export default App;
