import React, {useContext} from 'react'
import "./Checkout.css"
import Grid from '@mui/material/Grid';
import CheckoutItems from './CheckoutItems';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
function Checkout(props) {
  const {item,size,increment} = useContext(CartContext);
  const CartValue =function(){
    let price=0;
    for(let i=0;i<item.length;i++){
      price+=parseInt(item[i].price);
    }
    return price;
  }
  return (
    <div className='checkout_body'>
      <Grid container>
        <Grid item={10}>
            <div className='checkout_container'>
                <div style={{fontSize: "30px", fontWeight: "500", padding:"20px 0px 0px 20px "}}>Shopping Cart</div>
                
                <div>
                  {
                      item.length >0 ?
                      item.map( (value) => (
                          <CheckoutItems definition={value} />
                      ))
                      : <div style={{height: "100vh", margin: "30px" }}> Please buy something</div>
                  }

                </div>
            </div>
        </Grid>
        <Grid item={2}>
            <div style={{width:"280px", height:"200px",marginTop:"30px",padding:"5px", backgroundColor:'white'}}>
                <div style={{fontSize:"26px", marginLeft:"10px"}}>Subtotal ({size} items): <strong>{CartValue()}</strong></div>
                <div style={{ paddingTop:"18px",marginLeft:"10px"}}>
                  <Link to='/payment'>
                    <button className='placeorder_button' >Proceed to Buy</button>
                    </Link>
                </div>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout

