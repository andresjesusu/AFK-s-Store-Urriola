import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({ precio, stock}) => {

  const [itemsQty, setItemsQty] = useState(0);
  
  const total = itemsQty * precio;

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
      
      {/* <div style={{ marginTop:30, marginBottom: 5, marginTop: 5, color: 'black', fontSize: '1rem', lineHeight:"22px"}}>
        {name} <br/> <span style={{fontSize: "1.5rem"}}>Precio: {precio}</span> <br/> <span style={{fontSize: "1.5rem"}}>Stock: {stock}<br/>Total:{total}</span>
      </div> */}
      <div style={{marginBottom: 10}}>
        <Button onClick={ () => removeFromStock(itemsQty - 1) } variant={"danger"}>-</Button>
        
        <span style={{margin: 10, fontSize: "1.5rem", marginTop:"30px" }}>{itemsQty}</span>

        <Button onClick={ () => stockReal(itemsQty + 1 ) } variant={"success"}>+</Button>
      </div>
      <div>
                <small style={{ color: "#a1a1a1", marginBottom:"20px" }}>{stock} Disponibles</small>
            </div>    
    </div>
  );
}

export default ItemCount;
