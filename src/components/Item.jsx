import {Link} from 'react-router-dom';
import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Item = ({ item }) => {  
    const navigate = useNavigate()

const goToProduct = () => {
    navigate(`/itemD/`)
}

      
    return (
    <div>
        <Card border="secondary" style={{ width: '200px', color:"white",backgroundColor:"grey" }} key={item.name}>
        <Link to={"/itemD"}><a href="#"></a><Card.Img style={{marginTop:"10px", paddingRight:"10px", paddingLeft:"10px"}} variant="top" src={item.pictureUrl}/></Link>
  <Card.Body>
  <Card.Title style={{fontSize:"20px", color:"black"}}>{item.name}</Card.Title>
  <Button variant="secondary" onClick={() => goToProduct()}>Ver detalles</Button>

    </Card.Body>
</Card>
</div>
    )
}

export default Item;

{/* <Card.Text style={{fontSize:"12px"}}>{item.descripcion}
</Card.Text>
{/* <Button variant="secondary">Ver en la Pagina</Button> */}
{/* <ItemCount precio={item.precio} stock={item.stock}/> */}