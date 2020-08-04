import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Context from "./component/Context";

function App() {
  return (
    <div>
      <Navbar />
      <Context.Consumer>
        <Home />
      </Context.Consumer>
    </div>
  );
}

export default App;
