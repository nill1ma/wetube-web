import React from "react";
import FloatMenu from "./components/FloatMenu";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <FloatMenu />
    </BrowserRouter>
  );
}

export default App;
