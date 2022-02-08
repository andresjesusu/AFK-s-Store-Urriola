import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { CartContext, CartProvider } from '../context/CartContext';
import { useContext, useEffect } from "react";



const CartWidget = () => {
  const {items} = useContext(CartContext);
  useEffect(() => {
    console.log(items);
  }, [items]);

    return (
    <Button variant="dark" id='pay' className='App' 
    style={{fontSize:"1em", color: 'white', 
    marginLeft:"200px"}}>
      <FontAwesomeIcon icon={faCartArrowDown}/>                 ✚
      <p>{items.length}</p>
      </Button>
      
    );
}

export default CartWidget;
