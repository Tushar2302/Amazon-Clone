import React from 'react'
import "./RightSide.css"
import Rating from '@mui/material/Rating';
const getSymbolFromCurrency = require('currency-symbol-map')
function Product(props) {
  return (
    <div className='product'>
    <div className='product_img'>
    <div><img src={props.definition.image} height="280px" /></div>
    </div>
    <div className='product_name'>
        {props.definition.name}
    </div>
    <div className='product_rating'>
    <Rating name="read-only" value="4" style={{fontSize:'20px'}} readOnly />
        {props.definition.rating}
    </div>
    <div className='product_price'>
      <div className='pricing_symbol'>
      {getSymbolFromCurrency('INR') }
      </div>
      <div className='pricing_amnt'>
        {props.definition.price}

      </div>
    </div>
    <div className='belowProduct_text'>
      FREE Delivery by Amazon
    </div>
    </div>
  )
}

export default Product