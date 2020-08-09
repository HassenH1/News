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
import ContentPage from "./component/ContentPage";
import SearchResult from "./component/SearchResult";
// const Entertainment = lazy(() => import("./component/Entertainment"));

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/politics" component={Politics} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/entertainment" component={Entertainment} />
          <Route exact path="/searchResult?" component={SearchResult} />
          <Route exact path="/:title" component={ContentPage} />
        </Switch>
      </ContextProvider>

      <Footer />
    </>
  );
}

export default App;
