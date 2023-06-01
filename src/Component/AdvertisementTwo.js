import { Link } from "react-router-dom";
import React from 'react'
import "./AdvertisementTwo.css";

function AdvertisementTwo(props){
  return (
    <div className='AdvertisementTwo__main'>
      <div className='AdvertisementTwo__header'>
      Bluetooth Calling Smartwatch starts at...
      </div>
    <Link to="/display" style={{textDecoration:"none",color:"#1976d2"}}>

      <div className='AdvertisementTwo__body'>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/watch_amazon.jpg?updatedAt=1685594582943"  height='260px' width='205 px' />

      </div>
      <div className='AdvertisementTwo__footer'>
        See more
      </div>
    </Link>

    </div>


  );
}

export default AdvertisementTwo
