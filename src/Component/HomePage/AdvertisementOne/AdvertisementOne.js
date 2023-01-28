import { Link } from "react-router-dom";
import React from 'react'
import "./AdvertisementOne.css";

function AdvertisementOne(props){
  return (
    <div className='AdvertisementOne__main'>
      <div className='AdvertisementOne__header'>
        Up to 30% off | Apple store
      </div>
    <Link to="/display">

      <div className='AdvertisementOne__body'>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833128162"  height='260px' width='205 px' />

      </div>
      <div className='AdvertisementOne__footer'>
        See more
      </div>
    </Link>

    </div>


  );
}

export default AdvertisementOne
