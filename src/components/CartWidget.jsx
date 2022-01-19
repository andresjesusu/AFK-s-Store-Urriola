import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faCartPlus} from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    return (
    <div className='App' style={{fontSize:"1em", color: 'white'}}>
      <FontAwesomeIcon icon={faCartArrowDown}/>
      </div>
    );
}

export default CartWidget;
