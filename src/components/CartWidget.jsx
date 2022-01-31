import React from "react";
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';



const CartWidget = () => {


    return (
    <Button id='pay' className='App' style={{fontSize:"1em", color: 'white'}}>
      <FontAwesomeIcon icon={faCartArrowDown}/>                 ✚
     
      </Button>
    );
}

export default CartWidget;
