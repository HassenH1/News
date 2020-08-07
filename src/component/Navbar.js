import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <img
          src="https://www.pinclipart.com/picdir/big/454-4545041_newspaper-png-icon-news-paper-logo-icon-clipart.png"
          width="70"
          height="65"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/technology">Technology</Nav.Link>
        <Nav.Link href="/politics">Politics</Nav.Link>
        <Nav.Link href="/sports">Sports</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavbarComponent;
