import { Link } from '@mui/material';
import React from 'react'
import "./AdvertisementFour.css";

function AdvertisementFour(props){
  return (
    <div className='AdvertisementOne__main'>
      <div className='AdvertisementOne__header'>
        Up to 70% off | Electronics clearance store
      </div>
      <div className='AdvertisementOne__body1'>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672833116968"  className='ad_imgeFour' />
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672833116968"  className='ad_imgeFour' />


      </div>
      <div className='AdvertisementOne__body2'>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672833116968"  className='ad_imgeFour' />
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672833116968"  className='ad_imgeFour' />
      </div>
      <Link to="/display">
      <div className='AdvertisementOne__footer'>
        See more
      </div>
      </Link>
    </div>
  );
}

export default AdvertisementFour
