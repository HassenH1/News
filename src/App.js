import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ContextProvider from "./component/Context/ContextProvider";

function App() {
  return (
    <div>
      <Navbar />
      <ContextProvider>
        <Home />
      </ContextProvider>
    </div>
  );
}

export default App;
