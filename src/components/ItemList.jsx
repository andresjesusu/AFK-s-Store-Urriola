import React from "react";
import Item from './Item';
import { Container, Row } from 'react-bootstrap';
import { productList } from "./ProductList";


const ItemList = ({items}) => {   
    return(
        <Container>
            <h1 className="bienvenidosH">Bienvenidos a AFK'S Store</h1>
            <h2 className="bienvenidosH">Juegos Switch</h2>
        <Row xs={1} md={5} className="g-4 mt-1">
        {productList.map((item) => {return (<div key={item.id}><Item  item={item}/></div>)})}    
            </Row>
        </Container>
    ) 
}

export default ItemList;