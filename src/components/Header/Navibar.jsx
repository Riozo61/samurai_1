import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navibar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ms-2">Samurai social network</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/profile"}>Profile</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/users"}>Users</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/dialogs"}>Messages</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/news"}>News</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/music"}>Music</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/settings"}>Settings</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {props.isAuth ? (
              <Button onClick={props.logout} variant="primary" className="me-2">
                Log Out
              </Button>
            ) : (
              <Button variant="primary" className="me-2">
                Log In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navibar;
