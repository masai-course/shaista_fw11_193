import React, { Component } from "react";
import Carousel from "react-elastic-carousel"
import "./banner.css"

export default class Banner extends Component {
    
    state ={
        items:[
          {id:1,url:"http://graphicgoogle.com/wp-content/uploads/2017/10/Facebook-New-Fashion-Sale-Banner.jpg"},
          {id:2,url:"https://www.mylloyd.com/media/offers/OFFER_Tc_page_banner_2_updated.jpg"},
           {id:3,url:"http://palet.ir/wp-content/uploads/2020/04/1429.jpg"},
          {id:4,url:"https://bannersigns.s3.amazonaws.com/BANR_NBUSIN133_S2.jpg"},
        ]
      }
    
      render(){
        const {items} =this.state;
        const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1 },
      { width: 768, itemsToShow: 1 },
      { width: 1024, itemsToShow: 1 },
    ]; 
      return(
            <div className="total">
            <Carousel breakPoints={breakPoints}>
            {items.map(item => <div key={item.id} className="div divq" > <img src={item.url} alt="imss"/> </div>)}
            </Carousel>

  
     
       
            </div>
    
      )
      }
    

}

//export {Banner}