import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Checkout.css";
function CheckoutItems(props) {
 
  return (
    <div>
      <div style={{border: "1px solid #e7e7e7",width: "95%", display:"flex", height:"250px",margin:"25px" }}>
            <div style={{margin:"25px"}}>
                <img height="200px" src={props.definition.image}/>
            </div>
            <div style={{marginTop:"20px"}}>
                <div style={{fontSize:"20px"}} className='textgap'>{props.definition.name}</div>
                <div  style={{fontWeight:"bold"}}className='textgap'>{props.definition.price}</div>
                <div className='textgap'>{props.definition.status}</div>
                <Link to="/display">
                <button className='deleteBtn' >Remove</button>
                </Link>
            </div>
        </div> 
    </div>
  );
}


export default CheckoutItems

