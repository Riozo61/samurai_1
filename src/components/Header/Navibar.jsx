import React, { useState } from "react";
import {
  Button,
  Container,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authReducer";

const Navibar = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
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
                <Button
                  onClick={props.logout}
                  variant="primary"
                  className="me-2"
                >
                  Log Out
                </Button>
              ) : (
                <Button onClick={handleShow} variant="primary" className="me-2">
                  Log In
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="fromBasicEmail">
            <FormLabel>Email Adress</FormLabel>
            <FormControl type="email" placeholder="Enter email" />
            <FormText className="text-muted">
              We'll never share your email with anyone else
            </FormText>
          </FormGroup>
          <FormGroup controlId="fromBasicPassword">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Enter email" />
          </FormGroup>
          <FormGroup controlId="fromBasicCheckbox">
            <FormCheck type="checkbox" label="Remember me" />
          </FormGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navibar;
