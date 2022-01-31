import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ name, precio, stock}) => {

  const [itemsQty, setItemsQty] = useState(0);
  
  const total = itemsQty * precio;


  const addCart = ({precio}) => { 
    let total = itemsQty * precio;
  
    console.log(total)

    
  }

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
      
      <div style={{ marginTop:30, marginBottom: 5, marginTop: 5, color: 'black', fontSize: '1rem', lineHeight:"22px"}}>
        {name} <br/> <span style={{fontSize: "1.5rem"}}>Precio: {precio}</span> <br/> <span style={{fontSize: "1.5rem"}}>Stock: {stock}<br/>Total:{total}</span>
      </div>
      <div style={{marginBottom: 10}}>
        <Button onClick={ () => removeFromStock(itemsQty - 1) } variant={"danger"}>-</Button>
        
        <span style={{margin: 50, fontSize: "1.5rem" }}>{itemsQty}</span>

        <Button onClick={ () => stockReal(itemsQty + 1 ) } variant={"success"}>+</Button>
      </div>
      <Button onClick={ () => addCart(itemsQty * precio)} variant="primary" size="lg">Añadir al Carrito <FontAwesomeIcon icon={faCartArrowDown}/></Button>        
    </div>
  );
}

export default ItemCount;
