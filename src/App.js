import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ContextProvider from "./component/Context/ContextProvider";
import { Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Technology from "./component/Technology";
import Politics from "./component/Politics";
import Sports from "./component/Sports";
import Entertainment from "./component/Entertainment";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <ContextProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/politics" component={Politics} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/entertainment" component={Entertainment} />
        </ContextProvider>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
