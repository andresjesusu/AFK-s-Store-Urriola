import {Link} from 'react-router-dom';
import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Item = ({ item }) => {  
    const navigate = useNavigate()
    const {id, title,price} = item


const goToProduct = () => {
        navigate(`/product/${id}`)
}

      
    return (
    <div>
        <Card border="secondary" style={{ width: '250px', color:"white",backgroundColor:"" }} key={item.id}>
        <Link to={`/product/${id}`}><Card.Img style={{marginTop:"10px", paddingRight:"10px", paddingLeft:"10px"}} variant="top" src={item.pictureUrl}/></Link>
  <Card.Body>
  <Card.Title style={{fontSize:"20px", color:"black"}}>{item.title}</Card.Title>
  <Button variant="danger" onClick={() => goToProduct()}>Ver detalles</Button>

    </Card.Body>
</Card>
</div>
    )
}

export default Item;
