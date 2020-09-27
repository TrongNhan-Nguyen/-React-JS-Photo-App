import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";
function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.facebook.com/trong.nhan.75/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photo App
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              activeClassName="header__link--active"
              to="/photos"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
