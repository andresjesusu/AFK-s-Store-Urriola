import {useState} from 'react';
import { Button } from 'react-bootstrap';




function ItemCount() {
  const [itemsQty, setItemsQty] = useState(0);
  return (
    
    <div>
      
    
      <h2>Mi contador de Carrito</h2>
      <div style={{marginBottom: 10}}>
        <Button onClick={ () => setItemsQty(itemsQty - 1) } variant={"secondary"}>-</Button>
        
        <span style={{margin: 50, fontSize: "1.5rem" }}>{itemsQty}</span>

        <Button onClick={ () => setItemsQty(itemsQty + 1 ) } variant={"primary"}>+</Button>
      </div>
      <Button variant="secondary" size="lg">Añadir al Carrito</Button>        
    </div>
  );
}

export default ItemCount;
