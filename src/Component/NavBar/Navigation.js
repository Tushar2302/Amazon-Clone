import { Link } from "react-router-dom";
import React, { Component } from 'react'
import { CartContext } from '../CartContext';
import typewriter, { Typewriter } from "react-simple-typewriter"
import "./NavBar.css"
class  NavBar extends Component {
    static contextType = CartContext;

    constructor(props){
        super(props);
        this.state = {  }
    }
    render() {
        let {item,size,increment} = this.context;
        return ( 
            <div>
                <div className='navbar__component' >
                <div className='navbar__logo__locator'>
                    <Link to="/">
                    <div className='navbar__logo'></div>
                    </Link>
                    <div className='navbar__logo__text'>.in</div>
                </div>
                <div className='navbar__locator'>
                    <div className='navbar__locatorImage'></div>
                    <div className='Navbar__location'>Mumbai</div>
                </div>
                <div className="navbar__searchcomponent">
                    <div>
                        <select className='nav__dropdown'>
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Amazon shopping</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar__searchbox" />
                    </div>
                    <div className='navbar__searchboxdiv'>
                        <div className='navbar__searchicon'></div>
                    </div>
                </div>
                <div className='navbar_text navbar__signin'>
                    <div style={{fontSize:"14px"}}>Hello,Sign In</div>
                    <div style={{fontWeight:"bold"}}>Account & List</div>
                    </div>
                <div className='navbar_text navbar__returns'>
                    <div style={{fontSize:"14px"}}>Returns</div> 
                    <div style={{fontWeight:"bold"}}>& Orders</div>
                    </div>
                   <Link to="/checkout">
                <div className='navbar_text navbar__cart' >
                    <div src='' className='cart__image'/>
                    <div className='cart__item'>{size}</div>
                    <div className='navbar_test_cart'>Cart</div>
                </div>
                </Link> 
                </div>
                <div className='navbar__footer'>
                    <div className='navbar__footer_text'>Amazon miniTV</div>
                    <div className='navbar__footer_text'>Best Sellers</div>
                    <div className='navbar__footer_text'>Mobiles</div>
                    
                    <div className='navbar__footer_text'>Today's Deals</div>
                    <div className='navbar__footer_text'>Customer Service</div>
                    <div className='navbar__footer_text'>Electronics</div>
                    <div className='navbar__footer_text'>Prime</div>
                    <div className='navbar__footer_text'>Fashion</div>
                    <div src='' className='amazon_image'>
                        <img src="https://ik.imagekit.io/Amazon124/amazon-image/gaming-swm._CB430661085_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672833087746"/>
                    </div>
                </div>
                <div className='status_project'>
                <Typewriter
                loop
                cursor
                cursorStyle
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                words={[' Hello There! Im currently working on this project ']}
                />
            </div>
            </div>

         );

    }
}

export default NavBar;