import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ItemCount from './ItemCount';



const Item = ({ item }) => {    
    return (
    <div>
        <Card style={{ width: '250px', color:"white",backgroundColor:"grey" }} key={item.name}>
  <Card.Img style={{marginTop:"10px", paddingRight:"10px", paddingLeft:"10px"}} variant="top" src={item.pictureUrl}/>
  <Card.Body>
    <Card.Title style={{fontSize:"25px"}}>{item.name}</Card.Title>
    <Card.Text style={{fontSize:"12px"}}>{item.descripcion}
    </Card.Text>
    {/* <Button variant="secondary">Ver en la Pagina</Button> */}
    <ItemCount precio={item.precio} stock={item.stock}/>  
    </Card.Body>
</Card>
</div>
    )
}

export default Item;