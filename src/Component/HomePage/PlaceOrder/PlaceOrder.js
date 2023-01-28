import React, { useCallback, useContext, useEffect, useState } from 'react'
import "./PlaceOrder.css"
import Grid from '@mui/material/Grid';
import { Rating } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
import Product from '../../DisplayContent/RightSide/Product';
import { CartContext } from '../../CartContext';
const getSymbolFromCurrency = require('currency-symbol-map');

function PlaceOrder(props) {

  const {item,size,increment, decrement} = useContext(CartContext);
  const [productDetails,setProductDetails]=useState([]);
  let{id} = useParams();

  const addtoCart = function(){
    increment(productDetails);
    decrement();
  }
  useEffect(() =>{

    let list =[
      {
        id: 1234567891,
        name: "New Apple Ipnone 11",
        rating: "234324",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "45000",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
            "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
        about: [
            "6.2-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
            "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
            "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
            "Face ID for secure authentication",
        ],
    },
    {
      id: 1234567892,
      name: "New Apple iPnone 12",
      rating: "23424",
      review: "1000",
      emi: "2401",
      delivery: "Wednesday, Aug 18",
      price: "50000",
      status: "In stock",
      soldby: "Darshita Electronics",
      image:
      "https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129777",
      about: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
      ],
  },
  {
    id: 1234567893,
    name: "New Apple iPnone 12 pro",
    rating: "43235345",
    review: "1000",
    emi: "2401",
    delivery: "Wednesday, Aug 18",
    price: "60000",
    status: "In stock",
    soldby: "Darshita Electronics",
    image:
    "https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724",
    about: [
        "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
        "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
        "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
        "Face ID for secure authentication",
    ],
},
{
  id: 1234567894,
  name: "New Apple iPhone 10",
  rating: "324324",
  review: "1000",
  emi: "2401",
  delivery: "Wednesday, Aug 18",
  price: "90000",
  status: "In stock",
  soldby: "Darshita Electronics",
  image:
  "https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724",
  about: [
      "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
      "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
      "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
      "Face ID for secure authentication",
  ],
},
{
  id: 1234567895,
  name: "New Apple iPhone 10",
  rating: "23423454",
  review: "1000",
  emi: "2401",
  delivery: "Wednesday, Aug 18",
  price: "30000",
  status: "In Stock",
  soldby: "Darshita Electronics",
  image:
  "https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724",
  about: [
      "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
      "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
      "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
      "Face ID for secure authentication",
  ],
},
{
  id: 1234567896,
  name: "New Apple iPhone 111",
  rating: "12432435",
  review: "1000",
  emi: "2401",
  delivery: "Wednesday, Aug 18",
  price: "99999",
  status: "In stock",
  soldby: "Darshita Electronics",
  image:
  "https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724",
  about: [
      "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
      "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
      "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
      "Face ID for secure authentication",
  ],
},
{
  id: 1234567897,
  name: "New Apple iPhone 10",
  rating: "43676868",
  review: "1000",
  emi: "2401",
  delivery: "Wednesday, Aug 18",
  price: "40000",
  status: "In stock",
  soldby: "Darshita Electronics",
  image:
  "https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724",
  about: [
      "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
      "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
      "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
      "Face ID for secure authentication",
  ],
},

  { id:"1234567891", name:"Ipnone11",rating:"324325",price:"45000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833128162"},
  {id:"1234567892",name:"Ipnone12 ",rating:"23424",price:"50000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129777"},
  {id:"1234567893",name:"Ipnone12 pro",rating:"43235345",price:"60000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
  {id:"1234567894",name:"Ipnone13",rating:"324324",price:"90000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
  {id:"1234567895",name:"Ipnone mini",rating:"23423454",price:"30000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
  {id:"1234567896",name:"Ipnone13",rating:"12432435",price:"99999" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
  {id:"1234567897",name:"IpnoneXR",rating:"12342546",price:"40000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
  {id:"1234567898",name:"Ipnone11 pro max",rating:"43676868",price:"56000" ,image:"https://ik.imagekit.io/Amazon124/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672833129724"},
]
    let item = list.filter(item => {
      if(item.id==id) return item;
    })
    console.log(item);
    setProductDetails(item[0]);
  },[]);


  return (
    <div>
     <Grid container>
     <Grid item xs={5}>
      <img className='placeorder_image' src={productDetails.image}/>
     </Grid>
     <Grid item xs={4}>
      <div className='place_description'>
        <div style={{fontSize: "24px",lineHeight:"32px",fontWeight:"500"}}> {productDetails.name}</div>
        <div style={{display: "flex", marginTop: "2px"}}><Rating name='read-only' value="4" readOnly style={{fontSize: "20px"}}/>
        {productDetails.rating} ratings | {productDetails.review}+ answered questions
        </div>
        <hr></hr>
          <div className='textgap'>Price: <span className='pricetag'>{getSymbolFromCurrency('INR') }{productDetails.price}</span></div>
          <div className='textgap'>FREE delivery:<strong>{productDetails.delivery}</strong></div>
          <div className='textgap'>EMI starts at ₹2,812.No Cost EMI Available </div>
          <div style={{color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
        <div className='textgap'>Sold by <strong>{productDetails.soldby}</strong> and Fullfilled by Amazon. </div>
        </div>
        <div>
                            <div style={{fontSize:"24px", fontStyle:"bold", paddingTop:"11px"}} className="textgap">About this item</div>
                            <div style={{fontSize:"15px"}}>
                                <ul>
                                  {
                                    productDetails.about!=undefined ?
                                    productDetails.about.map ((item) => (
                                      <li>{item}</li>
                                    )) : <span></span>
                                  }
                                </ul>
                                {/*} <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                                <li>Face ID for secure authentication</li>
                                <li>A13 Bionic chip with third-generation Neural Engine</li>
                                <li>Fast-charge capable</li>*/}
                                
                            </div>
                        </div>
                    
     </Grid>
     <Grid item xs={3}>
   
        <Paper varient="outlined" className='placeorder_order2' >
          <div>
            <div className='placeorder_order1'>
          <div><strong>With Exchange</strong></div>
          <div className='placeorder_order11'>Up to ₹18,050.00 off</div>
          </div>
          <div ><strong>Without Exchange</strong></div>
          <div className='withoutchangeprice'><strong>₹1,35,490.00</strong></div>
          <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
          <div>
          <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
          <label><input type="checkbox" ></input>Apple 20W USB Adapter</label>
          </div>
            
            <button className='placeorder_btn addtocart' onClick={addtoCart}>Add to Cart</button>
            
            <Link to="/checkout">
            <button className='placeorder_btn buynow'>Buy Now</button>
            </Link>
            </div>
        </Paper>
     </Grid>
      </Grid>
    </div>
  );
}


export default PlaceOrder;

