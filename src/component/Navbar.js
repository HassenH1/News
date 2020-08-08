import React, { useState, useContext } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import Context from "./Context/Context";
import { useHistory } from "react-router-dom";

function NavbarComponent() {
  let history = useHistory();
  const { search, searchResult } = useContext(Context);
  const [searching, setSearching] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSearching(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    if (!searching) {
      setError("Cannot Submit an Empty field");
      return;
    } else {
      search(searching);
      history.push(`/searchResult`, searchResult);
    }
  };

  return (
    <Navbar bg="light" variant="light" className="sticky-top">
      {console.log(searching, ",-----the value?")}
      <Navbar.Brand href="/">
        <img
          src="https://www.pinclipart.com/picdir/big/454-4545041_newspaper-png-icon-news-paper-logo-icon-clipart.png"
          width="55"
          height="55"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/technology">Technology</Nav.Link>
        <Nav.Link href="/politics">Politics</Nav.Link>
        <Nav.Link href="/sports">Sports</Nav.Link>
        <Nav.Link href="/entertainment">Entertainment</Nav.Link>
      </Nav>
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searching}
          onChange={handleChange}
        />
        <Button variant="outline-primary" type="submit" value="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default NavbarComponent;
