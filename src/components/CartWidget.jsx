import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';



const CartWidget = () => {


    return (
    <Button variant="dark" id='pay' className='App' style={{fontSize:"1em", color: 'white', marginLeft:"200px"}}>
      <FontAwesomeIcon icon={faCartArrowDown}/>                 ✚
     
      </Button>
    );
}

export default CartWidget;
