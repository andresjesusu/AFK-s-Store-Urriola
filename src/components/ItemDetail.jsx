import React from "react";
import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={12}>
                    <Card className="mb-10">
                        <Card.Header>
                            <nav className="header-navigation">
                            <Link to="/" className="btn btn-link">Volver atras</Link>

                            <Breadcrumb>
                                <Breadcrumb.Item>Switch</Breadcrumb.Item>
                                <Breadcrumb.Item>Juegos</Breadcrumb.Item>
                                <Breadcrumb.Item active>{item.name}</Breadcrumb.Item>
                            </Breadcrumb>
                            </nav>
                        </Card.Header>
                        <Card.Body className="store-body">
                            <Row>
                                <Col xs={7} className="product-info">
                                    <Col className="product-gallery">
                                        <Col className="product-gallery-thumbnails">
                                            <ol className="thumbnails-list list-unstyled">
                                            <Card.Img style={{width:"300px"}} variant="top" src={item.pictureUrl}/>                                            </ol>
                                        </Col>
                                        <Col xs={10} className="product-gallery-featured">
                                            {item.length > 0 ? <img src={item.pictureUrl[0].item.pictureUrl} alt="" /> : null}
                                        </Col>
                                    </Col>
                                    <Col classNa
                                    me="product-seller-recommended">
                                        <Row className="product-description mb-5" style={{textAlign: "left"}}>
                                            <h5 className="mt-3 mb-4">Características</h5>
                                            <ul>
                                                {item.detalles}
                                            </ul>
                                            <ul >
                                                {item.detalles2}
                                                
                                            </ul>
                                            <ul >
                                                {item.detalles3}
                                                
                                            </ul>
                                            <ul >
                                                {item.detalles4}
                                                
                                            </ul>
                                            <ul >
                                                {item.detalles5}
                                                
                                            </ul> <hr />
                                            <h2 className="mb-4">Descripción</h2>
                                            {item.descripcion}
                                        </Row>
                                    </Col>
                                </Col>
                                <Col className="product-payment-details">
                                    {/* <p className="last-sold text-muted"><small>{itemsQty} vendidos</small></p> */}
                                    <h4 className="product-title mb-2">{item.name}</h4>
                                    <h2 className="product-price display-4">$ {item.precio}</h2>
                                    <p className="text-success"><i className="fa fa-credit-card"></i> Hasta 12 cuotas sin tarjeta</p>
                                    <label for="quant">Cantidad</label>
                                    <div className="mb-3">
                                        <ItemCount precio={item.precio} stock={item.stock}/>                                    
                                        </div>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default ItemDetail;