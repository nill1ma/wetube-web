import React from "react";
import FloatMenu from "./components/FloatMenu";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home";


function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
      <FloatMenu />
    </>
  );
}

export default App;
