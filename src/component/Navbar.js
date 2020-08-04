import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">News</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavbarComponent;
