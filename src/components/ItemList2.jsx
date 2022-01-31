import React from "react";
import Item2 from './ItemDetail';
import { Container, Row } from 'react-bootstrap';


const ItemList2 = ({items}) => {   
    return(
        <Container>
            <h2>Detalle de Producto</h2>
        <Row xs={1} md={1} className="g-4 mt-1">
           {items.map(item => { 
           return <Item2 key={item.name} item={item}/>})}      
            </Row>
        </Container>
    ) 
}

export default ItemList2;

