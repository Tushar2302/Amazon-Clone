import { Link } from '@mui/material';
import React, { Component } from 'react'
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import Advertthree from '../Advert_three'
import LongImage from './LongImage/LongImage';

import "./MainPage.css";
import AdvertisementTwo from '../AdvertisementTwo';

class  MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {  }
    }

    render() {
        return ( 
            <div  className='mainpage' >
                <div style={{paddingTop: "250px" , display : "flex",flexWrap: "wrap"}}>
                    
                <AdvertisementOne />
                <AdvertisementFour/>
                <AdvertisementTwo/>
                <Advertthree/>
                <LongImage/>

                <AdvertisementOne />
                <AdvertisementFour/>
                <AdvertisementFour/>
                <AdvertisementOne/>
                
                </div>
            </div>
         );

    }
}

export default MainPage;