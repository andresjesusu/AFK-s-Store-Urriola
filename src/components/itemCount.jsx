import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';



const Product = ({ name, precio, stock}) => {


  const [itemsQty, setItemsQty] = useState(0);

  const stockReal = (qty) => {
    if (qty <= stock){
      setItemsQty(qty)
    }
  }
  
  const removeFromStock = (qty) => {
    if (qty >=0) {
      setItemsQty(qty)
    }
  }
  
  return (
    
    <div>
      
      <div style={{ marginTop:30, marginBottom: 5, color: '#e1e1e1', fontSize: '3rem', lineHeight:"22px"}}>
        {name} <br/> <span style={{fontSize: "1.5rem"}}>Precio: {precio}</span> <br/> <span style={{fontSize: "1.5rem"}}>Stock: {stock}</span>
      </div>
      <div style={{marginBottom: 10}}>
        <Button onClick={ () => removeFromStock(itemsQty - 1) } variant={"secondary"}>-</Button>
        
        <span style={{margin: 50, fontSize: "1.5rem" }}>{itemsQty}</span>

        <Button onClick={ () => stockReal(itemsQty + 1 ) } variant={"primary"}>+</Button>
      </div>
      <Button variant="secondary" size="lg">Añadir al Carrito</Button>        
    </div>
  );
}

export default Product;
