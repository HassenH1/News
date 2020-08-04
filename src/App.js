import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ContextProvider from "./component/Context/ContextProvider";
import { Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <ContextProvider>
          <Route exact path="/" component={Home} />
        </ContextProvider>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
