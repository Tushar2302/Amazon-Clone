import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'
import "./RightSide.css"


function RightSide(props) {

  const [listOfProduct,setListOfProducts] =useState([]);

  useEffect(() =>{

    let list =[
      { id:"1234567891", name:"Ipnone11",rating:"324325",price:"45000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833128162"},
      {id:"1234567892",name:"Ipnone12 ",rating:"23424",price:"50000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129777"},
      {id:"1234567893",name:"Ipnone12 pro",rating:"43235345",price:"60000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
      {id:"1234567894",name:"Ipnone13",rating:"324324",price:"90000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
      {id:"1234567895",name:"Ipnone mini",rating:"23423454",price:"30000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
      {id:"1234567896",name:"Ipnone13",rating:"12432435",price:"99999" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
      {id:"1234567897",name:"IpnoneXR",rating:"12342546",price:"40000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
      {id:"1234567898",name:"Ipnone11 pro max",rating:"43676868",price:"56000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
    ]

    setListOfProducts(list);
  },[]);
  return (
    <div className='RightSide_main'>
      {/*<Product rating="23,444" price="40,555" name="iPhone 11" image="https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
  <Product/> */}
  {
    listOfProduct.map((item) =>(
      <Link to={"/order/"+item.id} >
      <Product definition={item} />
        </Link>
    ))
  }
    
    </div>
  );
}

export default RightSide

