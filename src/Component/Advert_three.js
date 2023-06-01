
import { Link } from "react-router-dom";
import React from 'react'
import "./AdvertisementTwo";

function Advert_three(props){
  return (
    <div className='AdvertisementTwo__main'>
      <div className='AdvertisementTwo__header'>
        Up to 30% off | Apple store
      </div>
    <Link to="/display" style={{textDecoration:"none",color:"#1976d2"}}>

      <div className='AdvertisementTwo__body'>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129777"  height='260px' width='205 px' />

      </div>
      <div className='AdvertisementTwo__footer'>
        See more
      </div>
    </Link>

    </div>


  );
}

export default Advert_three
