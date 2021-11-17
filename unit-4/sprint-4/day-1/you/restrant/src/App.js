import './App.css';
import React from 'react';
import data from "./db.json"
import {RestaurantDetails} from "./components/RestaurantDetail"
export default class  App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      filterRating:0,
      paymentMethod:"all",
      sortMethod:null
      // show restaurant greater than 0;
    }
  }
  handleRating=(rating)=>{
    this.setState({
      filterRating:rating
    });

  }

  handlePayment = payment =>{
    this.setState({
      paymentMethod:payment
    })
  }

  handleSort=(order)=>{
    this.setState({
      sortMethod:order
    })
  }
  render() {
    const {filterRating,sortMethod } = this.state
    return (
      <div className="App">
        <div>Hello to the app of restaurant</div>
        <h1>Details</h1>
        <div id="rating_btns">Rating
          <button onClick={()=>this.handleRating(4)} >4</button>
          <button onClick={()=>this.handleRating(3)}>3</button>
          <button onClick={()=>this.handleRating(2)}>2</button>
          <button onClick={()=>this.handleRating(1)}>1</button>
          <button onClick={()=>this.handleRating(0)}>All</button>
        </div>
        <div>Payment Methods
          {/* <button onClick={()=>this.handlePayment("cash")}>Cash Only</button>
          <button onClick={()=>this.handlePayment("card")}>Card Only</button>
          <button onClick={()=>this.handlePayment("All")}>Card and Cash</button> */}
          {["all","card","cash"].map(method => (
            <button onClick={()=>this.handlePayment(method)}>{method}</button>
          ))}
        </div>
        <div>Cost
         {["asc","desc"].map(order =>(
           <button onClick={()=>this.handleSort(order)}>{order}</button>
         ))}
        </div>
        {
            data.products
            .filter(item=>item.rating>filterRating)
            .sort((a,b)=>{
              if(sortMethod === null)
              {
                return 0
              }
              if(sortMethod === "asc")
              {
                return a.price - b.price
              }
              if(sortMethod === "desc")
              {
                return b.price - a.price
              }
            })
            .map(items => (
                //console.log(items.id),
                <RestaurantDetails name={items.food_name} price={items.price} description={items.description} image={items.img_src} rating={items.rating} id={items.id} veg={items.veg_NonVeg} tags={items.tags} review={items.reviews} votes={items.votes} delivered={items.delivery} Accept={items.Accept}/>
              ))
        }
      </div>
    );
  }
}

/* 
boughtTime: "296"
category: {$oid: '6152fd65091db0b8e304fd06'}
createdAt: {$date: '2021-09-28T11:39:22.154Z'}
description: "Amazing wraps and savings! What else can you ask for? Choose any two from our unique Signature Veg Wraps with delicious fillings & sauces all wrapped in a flaky paratha."
food_name: "2 Signature Veg Wraps at 289"
img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruvk4S2Snt1pnnZyVCoVaspjOnixXmjBl1_uOmE4tawnAlWVYdKGoqA60u-zoOUC-cNk&usqp=CAU"
price: 250
rating: 4.5
tags: (4) ['veg', 'snack', 'ct_amz_Meals', 'ct_amz_Combo']
updatedAt: {$date: '2021-09-28T11:39:22.154Z'}
veg_NonVeg: "veg"
_id: 1
*/