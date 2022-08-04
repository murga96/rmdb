import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Header />
    <Home />
  </div>
);

export default App;
