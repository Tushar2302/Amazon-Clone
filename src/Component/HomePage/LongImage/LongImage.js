import React from 'react'
import "./LongImage.css";

function LongImage(props){
  return (
    <div className='LongImage__main'>
      <div className='LongImage__header'>
        Today's Deals
      </div>
      <div className='LongImage__body'>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/long1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673438329708"   className='todaydeal' />
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/long2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673438329984"   className='todaydeal'/>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/long4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673438330048"  className='todaydeal'/>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/long3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673438330265"  className='todaydeal'/>
        <img src="https://ik.imagekit.io/Amazon124/amazon-image/long5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673438887485"  className='todaydeal'/>

      </div>

    </div>
  );
}

export default LongImage
