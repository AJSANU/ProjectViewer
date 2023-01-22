import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";
import "./styles.css";
import Header from "./Header";
import  Tabs  from "./tabs";

function App() {
  return (
    <div className="App">
      <Header/>
      <Tabs/>
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
