import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, totalCart } = useContext(CartContext);
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Card className="panel panel-info">
            <Card.Header>
              <Card.Title className="panel-title">
                <Row>
                  <Col xs={6}>
                    <h5>
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                      Finaliza tu Compra
                    </h5>
                  </Col>
                  <Col xs={6}></Col>
                </Row>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              {items.length >= 1 ? (
                items.map((item, index) => {
                  return (
                    <div key={index}>
                      <Row>
                      <Col xs={2}>
                              <Button style={{marginTop:"30px", height:"40px", marginLeft:"40px"}}
                                xs={2}
                                variant="primary"
                                variant="danger"
                                onClick={() => removeItem(item.id)}
                              >x
                              </Button>
                            </Col>
                        <Col xs={2}>
                          <img
                            style={{ height: "150px" }}
                            src={item.pictureUrl}
                          />
                        </Col>
                        <Col xs={4}>
                          <h4 className="product-name">
                            <strong>{item.title}</strong>
                          </h4>
                         
                            <small  style={{fontSize:"12px"}}>{item.detailss}</small>
                          
                        </Col>
                        <Col xs={4}>
                          <h4 className="product-name">
                            <strong>Detalles</strong>
                          </h4>
                         <h5>
                            <small  style={{fontSize:"12px"}}>{item.details2}</small>
                          </h5>
                          <h5>
                            <small  style={{fontSize:"12px"}}>{item.details3}</small>
                          </h5>
                          <h5>
                            <small  style={{fontSize:"12px"}}>{item.details4}</small>
                          </h5>
                          <h5>
                            <small  style={{fontSize:"12px"}}>{item.details5}</small>
                          </h5>
                        </Col>
                        <Col xs={6}>
                          <Row>
                            <Col xs={6} className="text-right">
                              <h6>
                                <strong>${item.price} x unidad</strong>
                              </h6>
                            </Col>
                            <Col xs={4}>
                              <input
                                type="text"
                                className="form-control input-sm"
                                value={item.qty}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <div className="">
                  <p>No hay items</p>
                  <Link to="/">
                    <Button>Continuar comprando</Button>
                  </Link>
                </div>
              )}
            </Card.Body>
            <Card.Footer>
              <Row className="text-center">
                <Col xs={9}>
                  <h4 className="text-right">
                    Total <strong>$ {totalCart}</strong>
                  </h4>
                </Col>
                <Col xs={3}>
                  <Button variant="success">Terminar compra</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Cart;