import React from "react";
import carsListEmptyImage from "../images/empty.svg";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const WelcomeText = () => {
  return (
    <Container>
      <h2>¡Hola!</h2>
      <h3>Aún no tienes ningún auto añadido</h3>
      <h4>
        <Link to="/car/new">Añade uno</Link>
        <span role="img" aria-label="smile emoji">
          &#128523;
        </span>
        <span role="img" aria-label="red car emoji">
          &#128663;
        </span>
      </h4>
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={10} xl={8} lg={8} className="mx-3 my-3">
          <img
            src={carsListEmptyImage}
            className="img-fluid"
            alt="cars list empty"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeText;
