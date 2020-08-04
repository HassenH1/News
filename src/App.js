import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ContextProvider from "./component/Context/ContextProvider";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <ContextProvider>
          <Route exact path="/" component={Home} />
        </ContextProvider>
      </Switch>
    </>
  );
}

export default App;
