import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Card,
  Row,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
const Car = ({ car, deleteCar }) => {
  const { modelo, marca, color, patente, id } = car;

  return (
    <Container className="my-3">
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={12} md={8} lg={8}>
          <Card key={id} border="info" className="my-2 card-auto">
            <Card.Body className="text-justify">
              <Card.Title>Modelo: {modelo}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush text-justify">
              <ListGroupItem>Marca: {marca}</ListGroupItem>
              <ListGroupItem>Patente: {patente}</ListGroupItem>
              <ListGroupItem>Color: {color}</ListGroupItem>
            </ListGroup>
            <Row className="ml-auto mx-1">
              <Button
                variant="danger"
                className="ml-auto mx-2 mb-2 btn btn-delete"
                onClick={() => {
                  deleteCar(id);
                }}
              >
                Eliminar
              </Button>{" "}
              <Link
                to={{
                  pathname: "/car/new",
                  id: id,
                }}
              >
                <Button
                  variant="warning"
                  className="ml-auto mx-2 mb-2 btn-editar btn"
                >
                  Editar
                </Button>{" "}
              </Link>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Car;
